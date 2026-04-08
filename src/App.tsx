import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { QuizDashboard } from "./components/QuizDashboard";
import { QuizInterface } from "./components/QuizInterface";
import { QuizResults } from "./components/QuizResults";
import { Leaderboard } from "./components/Leaderboard";
import { QuizHistory } from "./components/QuizHistory";

import { getQuizById } from "./data/quizzes";
import { storageManager, initializeDemoUser } from "./utils/storage";

type AppState = "landing" | "dashboard" | "quiz" | "results" | "leaderboard" | "history";

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>("landing");
  const [currentQuiz, setCurrentQuiz] = useState<string | null>(null);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    answers: number[];
    timeSpent: number;
  } | null>(null);

  const handleGetStarted = () => {
    setCurrentState("dashboard");
  };

  const handleStartQuiz = (quizId: string) => {
    setCurrentQuiz(quizId);
    setCurrentState("quiz");
  };

  const handleQuizComplete = (score: number, answers: number[]) => {
    const timeSpent = 420; // 7 minutes for demo
    setQuizResults({
      score,
      answers,
      timeSpent
    });

    // Save quiz result to storage
    const userProfile = initializeDemoUser();
    const quizData = getCurrentQuizData();
    if (userProfile && quizData) {
      const result = {
        id: `result-${Date.now()}`,
        userId: userProfile.id,
        quizId: currentQuiz!,
        score,
        totalQuestions: quizData.questions.length,
        percentage: Math.round((score / quizData.questions.length) * 100),
        timeSpent,
        answers,
        completedAt: new Date().toISOString(),
        difficulty: quizData.difficulty,
        category: quizData.category
      };
      storageManager.saveQuizResult(result);
    }

    setCurrentState("results");
  };

  const handleRetakeCurrentQuiz = () => {
    setQuizResults(null);
    setCurrentState("quiz");
  };

  const handleBackToDashboard = () => {
    setCurrentQuiz(null);
    setQuizResults(null);
    setCurrentState("dashboard");
  };

  const handleViewHistory = () => {
    setCurrentState("history");
  };

  const handleViewLeaderboard = () => {
    setCurrentState("leaderboard");
  };

  const handleRetakeQuiz = (quizId: string) => {
    setCurrentQuiz(quizId);
    setQuizResults(null);
    setCurrentState("quiz");
  };

  const getCurrentQuizData = () => {
    if (!currentQuiz) return null;
    return getQuizById(currentQuiz);
  };

  // Render appropriate component based on current state
  switch (currentState) {
    case "landing":
      return <LandingPage onGetStarted={handleGetStarted} />;
    
    case "dashboard":
      return (
        <QuizDashboard 
          onStartQuiz={handleStartQuiz}
          onViewHistory={handleViewHistory}
          onViewLeaderboard={handleViewLeaderboard}
        />
      );
    
    case "quiz":
      const quizData = getCurrentQuizData();
      if (!quizData) {
        return <div>Quiz not found</div>;
      }
      return (
        <QuizInterface
          quizTitle={quizData.title}
          questions={quizData.questions}
          onComplete={handleQuizComplete}
          onExit={handleBackToDashboard}
        />
      );
    
    case "results":
      const resultsQuizData = getCurrentQuizData();
      if (!resultsQuizData || !quizResults) {
        return <div>Results not found</div>;
      }
      return (
        <QuizResults
          quizTitle={resultsQuizData.title}
          questions={resultsQuizData.questions}
          userAnswers={quizResults.answers}
          score={quizResults.score}
          timeSpent={quizResults.timeSpent}
          onRetake={handleRetakeCurrentQuiz}
          onBackToDashboard={handleBackToDashboard}
          onTryAnother={handleBackToDashboard}
        />
      );
    
    case "leaderboard":
      return <Leaderboard onBack={handleBackToDashboard} />;
    
    case "history":
      return (
        <QuizHistory 
          onBack={handleBackToDashboard}
          onRetakeQuiz={handleRetakeQuiz}
        />
      );
    
    default:
      return <div>Unknown state</div>;
  }
}
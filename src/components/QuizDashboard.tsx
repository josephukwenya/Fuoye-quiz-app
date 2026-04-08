import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Brain, 
  History, 
  Trophy, 
  Clock, 
  BookOpen, 
  Beaker, 
  Globe, 
  Calculator,
  Palette,
  Music,
  Monitor,
  Target
} from "lucide-react";
import { storageManager, initializeDemoUser } from "../utils/storage";
import { quizData } from "../data/quizzes";

interface QuizDashboardProps {
  onStartQuiz: (quizId: string) => void;
  onViewHistory: () => void;
  onViewLeaderboard: () => void;
}

export function QuizDashboard({ onStartQuiz, onViewHistory, onViewLeaderboard }: QuizDashboardProps) {
  // Initialize user and get stats
  const userProfile = initializeDemoUser();
  const userStats = storageManager.getUserStats(userProfile.id);

  const quizCategories = quizData.map(quiz => ({
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    icon: quiz.icon === "Brain" ? Brain : 
          quiz.icon === "Beaker" ? Beaker :
          quiz.icon === "BookOpen" ? BookOpen :
          quiz.icon === "Globe" ? Globe :
          quiz.icon === "Calculator" ? Calculator :
          quiz.icon === "Palette" ? Palette :
          quiz.icon === "Monitor" ? Monitor :
          quiz.icon === "Trophy" ? Trophy : Brain,
    difficulty: quiz.difficulty,
    questions: quiz.questions.length,
    duration: `${quiz.duration} min`,
    color: quiz.color
  }));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-medium">CSC Quiz</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onViewHistory}>
                <History className="h-4 w-4 mr-2" />
                History
              </Button>
              <Button variant="outline" onClick={onViewLeaderboard}>
                <Trophy className="h-4 w-4 mr-2" />
                Leaderboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2">Welcome back!</h1>
          <p className="text-muted-foreground">Ready to challenge yourself? Choose a quiz category below.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Quizzes Taken</p>
                  <p className="text-2xl font-medium">{userStats.totalQuizzes}</p>
                </div>
                <Target className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <p className="text-2xl font-medium">{userStats.averageScore}%</p>
                </div>
                <div className="text-right">
                  <Progress value={userStats.averageScore} className="w-16 h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-medium">{userStats.streakDays} days</p>
                </div>
                <div className="text-orange-500">🔥</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Categories */}
        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-4">Choose Your Quiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizCategories.map((quiz) => (
              <Card key={quiz.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg ${quiz.color} text-white mb-3`}>
                      <quiz.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className={getDifficultyColor(quiz.difficulty)}>
                      {quiz.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {quiz.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {quiz.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {quiz.questions} questions
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {quiz.duration}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={() => onStartQuiz(quiz.id)}
                  >
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
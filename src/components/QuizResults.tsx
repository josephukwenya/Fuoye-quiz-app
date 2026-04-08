import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  Trophy, 
  Target, 
  Clock, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  ArrowLeft,
  TrendingUp,
  Share2
} from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizResultsProps {
  quizTitle: string;
  questions: Question[];
  userAnswers: number[];
  score: number;
  timeSpent: number;
  onRetake: () => void;
  onBackToDashboard: () => void;
  onTryAnother: () => void;
}

export function QuizResults({ 
  quizTitle, 
  questions, 
  userAnswers, 
  score, 
  timeSpent, 
  onRetake, 
  onBackToDashboard, 
  onTryAnother 
}: QuizResultsProps) {
  const percentage = Math.round((score / questions.length) * 100);
  const correctAnswers = score;
  const incorrectAnswers = questions.length - score;
  
  const getScoreColor = (percent: number) => {
    if (percent >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (percent >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getPerformanceMessage = (percent: number) => {
    if (percent >= 90) return { title: "Excellent!", message: "Outstanding performance!" };
    if (percent >= 80) return { title: "Great Job!", message: "You did really well!" };
    if (percent >= 70) return { title: "Good Work!", message: "Nice effort, keep it up!" };
    if (percent >= 60) return { title: "Not Bad!", message: "Room for improvement." };
    return { title: "Keep Trying!", message: "Practice makes perfect!" };
  };

  const performance = getPerformanceMessage(percentage);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onBackToDashboard}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <span className="text-muted-foreground">|</span>
            <span className="font-medium">{quizTitle} Results</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Results Overview */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full border-4 mb-4 ${getScoreColor(percentage)}`}>
              <Trophy className="h-10 w-10" />
            </div>
            <h1 className="text-3xl font-medium mb-2">{performance.title}</h1>
            <p className="text-lg text-muted-foreground">{performance.message}</p>
          </div>

          {/* Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className={`text-3xl font-medium mb-1 ${percentage >= 70 ? 'text-green-600' : 'text-red-600'}`}>
                  {percentage}%
                </div>
                <p className="text-sm text-muted-foreground">Final Score</p>
                <Progress value={percentage} className="mt-2 h-2" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-1" />
                  <span className="text-2xl font-medium text-green-600">{correctAnswers}</span>
                </div>
                <p className="text-sm text-muted-foreground">Correct</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <XCircle className="h-6 w-6 text-red-500 mr-1" />
                  <span className="text-2xl font-medium text-red-600">{incorrectAnswers}</span>
                </div>
                <p className="text-sm text-muted-foreground">Incorrect</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-blue-500 mr-1" />
                  <span className="text-2xl font-medium text-blue-600">{formatTime(timeSpent)}</span>
                </div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={onRetake} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retake Quiz
            </Button>
            <Button onClick={onTryAnother}>
              <Target className="h-4 w-4 mr-2" />
              Try Another Quiz
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
          </div>

          {/* Detailed Review */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Question Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {questions.map((question, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  const wasAnswered = userAnswer !== -1;
                  
                  return (
                    <div key={question.id} className="border rounded-lg p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          isCorrect 
                            ? "bg-green-100 text-green-700" 
                            : wasAnswered 
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium mb-2">{question.question}</h3>
                          
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => {
                              const isUserAnswer = userAnswer === optionIndex;
                              const isCorrectAnswer = question.correctAnswer === optionIndex;
                              
                              return (
                                <div 
                                  key={optionIndex}
                                  className={`p-2 rounded border text-sm ${
                                    isCorrectAnswer 
                                      ? "bg-green-50 border-green-200 text-green-800"
                                      : isUserAnswer && !isCorrectAnswer
                                      ? "bg-red-50 border-red-200 text-red-800"
                                      : "bg-background"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {isCorrectAnswer && <CheckCircle className="h-4 w-4 text-green-600" />}
                                    {isUserAnswer && !isCorrectAnswer && <XCircle className="h-4 w-4 text-red-600" />}
                                    <span>{option}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          {!wasAnswered && (
                            <div className="mt-2">
                              <Badge variant="secondary">Not Answered</Badge>
                            </div>
                          )}
                          
                          {question.explanation && (
                            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm">
                              <p className="font-medium text-blue-800 mb-1">Explanation:</p>
                              <p className="text-blue-700">{question.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
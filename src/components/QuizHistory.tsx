import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  XCircle,
  BarChart3,
  Filter
} from "lucide-react";
import { storageManager, QuizResult, UserStats } from "../utils/storage";
import { getAllCategories } from "../data/quizzes";

interface QuizHistoryProps {
  onBack: () => void;
  onRetakeQuiz: (quizId: string) => void;
}

export function QuizHistory({ onBack, onRetakeQuiz }: QuizHistoryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "score">("date");
  
  const userProfile = storageManager.getUserProfile();
  const allResults = userProfile ? storageManager.getQuizResultsByUser(userProfile.id) : [];
  const userStats = userProfile ? storageManager.getUserStats(userProfile.id) : null;
  const categories = getAllCategories();

  const getFilteredResults = (): QuizResult[] => {
    let filtered = allResults;
    
    if (selectedCategory !== "all") {
      filtered = filtered.filter(result => result.category === selectedCategory);
    }
    
    return filtered.sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime();
      } else {
        return b.percentage - a.percentage;
      }
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (percentage >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getPerformanceBadge = (percentage: number) => {
    if (percentage >= 90) return { text: "Excellent", color: "bg-green-100 text-green-800" };
    if (percentage >= 80) return { text: "Great", color: "bg-blue-100 text-blue-800" };
    if (percentage >= 70) return { text: "Good", color: "bg-yellow-100 text-yellow-800" };
    if (percentage >= 60) return { text: "Fair", color: "bg-orange-100 text-orange-800" };
    return { text: "Needs Work", color: "bg-red-100 text-red-800" };
  };

  const filteredResults = getFilteredResults();

  if (!userProfile || !userStats) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No user data found.</p>
            <Button onClick={onBack} className="mt-4">Back to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center gap-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-medium">Quiz History</h1>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setSortBy(sortBy === "date" ? "score" : "date")}
              >
                <Filter className="h-4 w-4 mr-2" />
                Sort by {sortBy === "date" ? "Score" : "Date"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-2xl font-medium">{userStats.totalQuizzes}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Quizzes</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-2xl font-medium">{userStats.averageScore}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <Progress value={userStats.averageScore} className="mt-2 h-2" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-6 w-6 text-purple-500 mr-2" />
                  <span className="text-2xl font-medium">{userStats.bestScore}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Best Score</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-6 w-6 text-orange-500 mr-2" />
                  <span className="text-2xl font-medium">{Math.round(userStats.totalTimeSpent / 60)}m</span>
                </div>
                <p className="text-sm text-muted-foreground">Time Spent</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Performance */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Performance by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(userStats.categoryStats).map(([category, stats]) => (
                  <div key={category} className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">{category}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Quizzes:</span>
                        <span>{stats.quizzes}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Average:</span>
                        <span className={stats.averageScore >= 70 ? "text-green-600" : "text-red-600"}>
                          {stats.averageScore}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Best:</span>
                        <span className="text-blue-600">{stats.bestScore}%</span>
                      </div>
                      <Progress value={stats.averageScore} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz History */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              {categories.slice(0, 5).map(category => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Quiz History
                    {selectedCategory !== "all" && (
                      <Badge variant="secondary">{selectedCategory}</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {filteredResults.length === 0 ? (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium mb-2">No quizzes completed yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {selectedCategory === "all" 
                          ? "Start taking quizzes to see your history here!"
                          : `No ${selectedCategory} quizzes completed yet.`}
                      </p>
                      <Button onClick={onBack}>Take a Quiz</Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredResults.map((result) => {
                        const performance = getPerformanceBadge(result.percentage);
                        
                        return (
                          <div 
                            key={result.id}
                            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-medium">Quiz #{result.quizId}</h3>
                                  <Badge variant="outline">{result.category}</Badge>
                                  <Badge variant="outline">{result.difficulty}</Badge>
                                  <Badge className={performance.color}>
                                    {performance.text}
                                  </Badge>
                                </div>
                                
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {formatDate(result.completedAt)}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    {formatTime(result.timeSpent)}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Target className="h-4 w-4" />
                                    {result.score}/{result.totalQuestions} correct
                                  </div>
                                </div>
                              </div>
                              
                              <div className="text-right">
                                <div className={`text-2xl font-medium p-2 rounded border ${getScoreColor(result.percentage)}`}>
                                  {result.percentage}%
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="mt-2"
                                  onClick={() => onRetakeQuiz(result.quizId)}
                                >
                                  Retake
                                </Button>
                              </div>
                            </div>
                            
                            <div className="pt-3 border-t">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium">Progress</span>
                                <span className="text-sm text-muted-foreground">
                                  {result.score} of {result.totalQuestions} questions
                                </span>
                              </div>
                              <Progress value={result.percentage} className="h-2" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
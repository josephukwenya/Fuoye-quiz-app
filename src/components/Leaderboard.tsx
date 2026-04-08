import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Trophy, 
  Medal, 
  Award, 
  ArrowLeft, 
  Crown,
  TrendingUp,
  Users,
  Target
} from "lucide-react";
import { storageManager, LeaderboardEntry } from "../utils/storage";
import { getAllCategories } from "../data/quizzes";

interface LeaderboardProps {
  onBack: () => void;
}

export function Leaderboard({ onBack }: LeaderboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("overall");
  
  const globalLeaderboard = storageManager.getLeaderboard();
  const categories = getAllCategories();

  const getCategoryLeaderboard = (category: string): LeaderboardEntry[] => {
    if (category === "overall") {
      return globalLeaderboard;
    }
    return storageManager.getCategoryLeaderboard(category);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-lg font-medium text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-200";
      case 2:
        return "bg-gradient-to-r from-gray-100 to-gray-50 border-gray-200";
      case 3:
        return "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-200";
      default:
        return "bg-background border-border";
    }
  };

  const getInitials = (username: string) => {
    return username.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const currentLeaderboard = getCategoryLeaderboard(selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-medium">Leaderboard</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-blue-500 mr-2" />
                  <span className="text-2xl font-medium">{globalLeaderboard.length}</span>
                </div>
                <p className="text-sm text-muted-foreground">Total Players</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="h-6 w-6 text-green-500 mr-2" />
                  <span className="text-2xl font-medium">
                    {globalLeaderboard.length > 0 
                      ? Math.round(globalLeaderboard.reduce((sum, entry) => sum + entry.averageScore, 0) / globalLeaderboard.length)
                      : 0}%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-purple-500 mr-2" />
                  <span className="text-2xl font-medium">
                    {globalLeaderboard.reduce((sum, entry) => sum + entry.totalQuizzes, 0)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Total Quizzes</p>
              </CardContent>
            </Card>
          </div>

          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-6">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5">
              <TabsTrigger value="overall">Overall</TabsTrigger>
              {categories.slice(0, 4).map(category => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    {selectedCategory === "overall" ? "Global Rankings" : `${selectedCategory} Rankings`}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {currentLeaderboard.length === 0 ? (
                    <div className="text-center py-8">
                      <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-medium mb-2">No rankings yet</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete some quizzes to see rankings appear here!
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {currentLeaderboard.map((entry, index) => (
                        <div 
                          key={entry.userId}
                          className={`p-4 rounded-lg border transition-all hover:shadow-md ${getRankColor(entry.rank)}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              {/* Rank */}
                              <div className="flex items-center justify-center w-10">
                                {getRankIcon(entry.rank)}
                              </div>

                              {/* Avatar and Name */}
                              <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={entry.avatar} />
                                  <AvatarFallback className="bg-primary/10 text-primary font-medium">
                                    {getInitials(entry.username)}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h3 className="font-medium">{entry.username}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    {entry.totalQuizzes} quiz{entry.totalQuizzes !== 1 ? 'es' : ''} completed
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Score and Badge */}
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <div className="text-xl font-medium">{entry.averageScore}%</div>
                                <div className="text-sm text-muted-foreground">avg score</div>
                              </div>
                              
                              {entry.rank <= 3 && (
                                <Badge 
                                  variant="secondary" 
                                  className={
                                    entry.rank === 1 
                                      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                      : entry.rank === 2
                                      ? "bg-gray-100 text-gray-800 border-gray-200"
                                      : "bg-amber-100 text-amber-800 border-amber-200"
                                  }
                                >
                                  {entry.rank === 1 ? "Champion" : entry.rank === 2 ? "Runner-up" : "3rd Place"}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Additional Stats for Top 3 */}
                          {entry.rank <= 3 && (
                            <div className="mt-3 pt-3 border-t border-border/50">
                              <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Total Score: {entry.totalScore}pts</span>
                                <span>Quizzes: {entry.totalQuizzes}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          {globalLeaderboard.length > 0 && (
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-medium mb-2">Climb the Rankings!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete more quizzes and improve your scores to rise up the leaderboard.
                </p>
                <Button onClick={onBack}>
                  Take Another Quiz
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
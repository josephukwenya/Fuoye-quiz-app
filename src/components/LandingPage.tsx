import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Trophy, Brain, Users, Clock } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: Brain,
      title: "Test Your Knowledge",
      description: "Challenge yourself with quizzes across various topics"
    },
    {
      icon: Trophy,
      title: "Track Progress",
      description: "Monitor your performance and see improvement over time"
    },
    {
      icon: Clock,
      title: "Quick & Fun",
      description: "Short quizzes that fit into your busy schedule"
    },
    {
      icon: Users,
      title: "Multiple Categories",
      description: "Explore different subjects and find your expertise"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-medium">CSC Quiz</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Brain className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-medium mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Practice. Master. Excel.
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master the fundamentals of computer systems through interactive quizzes designed to guide your learning, test your understanding, and prepare you for success in the top-up program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={onGetStarted}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t mt-20">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CSC Quiz. Made with ❤️ by Joseph Ukwenya</p>
        </div>
      </footer>
    </div>
  );
}
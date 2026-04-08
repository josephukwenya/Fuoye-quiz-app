import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Clock, ArrowLeft, ArrowRight, Flag } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizInterfaceProps {
  quizTitle: string;
  questions: Question[];
  onComplete: (score: number, answers: number[]) => void;
  onExit: () => void;
}

export function QuizInterface({ quizTitle, questions, onComplete, onExit }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let score = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    onComplete(score, selectedAnswers);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredQuestions = selectedAnswers.filter(answer => answer !== -1).length;

  if (showConfirmExit) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Exit Quiz?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Are you sure you want to exit? Your progress will be lost.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowConfirmExit(false)}
              >
                Continue Quiz
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1"
                onClick={onExit}
              >
                Exit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowConfirmExit(true)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit
              </Button>
              <div>
                <h1 className="font-medium">{quizTitle}</h1>
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span className={timeLeft < 120 ? "text-destructive" : ""}>{formatTime(timeLeft)}</span>
              </div>
              <Badge variant="secondary">
                {answeredQuestions}/{questions.length} answered
              </Badge>
            </div>
          </div>
          
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline">Question {currentQuestion + 1}</Badge>
                {selectedAnswers[currentQuestion] !== -1 && (
                  <Badge variant="secondary">
                    <Flag className="h-3 w-3 mr-1" />
                    Answered
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`w-full p-4 text-left border rounded-lg transition-all hover:border-primary/50 ${
                      selectedAnswers[currentQuestion] === index
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? "border-primary bg-primary"
                          : "border-border"
                      }`}>
                        {selectedAnswers[currentQuestion] === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button 
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex gap-3">
              {currentQuestion === questions.length - 1 ? (
                <Button 
                  onClick={handleSubmit}
                  disabled={answeredQuestions === 0}
                >
                  Submit Quiz
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Question Navigator */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-medium mb-3">Question Navigator</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-10 h-10 rounded text-sm font-medium transition-colors ${
                    index === currentQuestion
                      ? "bg-primary text-primary-foreground"
                      : selectedAnswers[index] !== -1
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-background border border-border hover:bg-accent"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
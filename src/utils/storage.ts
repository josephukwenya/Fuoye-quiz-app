// Local storage utilities for persisting user data and quiz results

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  createdAt: string;
  avatar?: string;
}

export interface QuizResult {
  id: string;
  userId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  timeSpent: number; // in seconds
  answers: number[];
  completedAt: string;
  difficulty: string;
  category: string;
}

export interface UserStats {
  totalQuizzes: number;
  averageScore: number;
  bestScore: number;
  totalTimeSpent: number;
  streakDays: number;
  lastQuizDate: string;
  categoryStats: Record<string, {
    quizzes: number;
    averageScore: number;
    bestScore: number;
  }>;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  totalScore: number;
  averageScore: number;
  totalQuizzes: number;
  rank: number;
  avatar?: string;
}

class LocalStorageManager {
  private KEYS = {
    USER_PROFILE: 'quiz_app_user_profile',
    QUIZ_RESULTS: 'quiz_app_quiz_results',
    USER_STATS: 'quiz_app_user_stats',
    LEADERBOARD: 'quiz_app_leaderboard'
  };

  // User Profile Management
  saveUserProfile(profile: UserProfile): void {
    localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(profile));
  }

  getUserProfile(): UserProfile | null {
    const stored = localStorage.getItem(this.KEYS.USER_PROFILE);
    return stored ? JSON.parse(stored) : null;
  }

  clearUserProfile(): void {
    localStorage.removeItem(this.KEYS.USER_PROFILE);
  }

  // Quiz Results Management
  saveQuizResult(result: QuizResult): void {
    const existingResults = this.getQuizResults();
    const updatedResults = [...existingResults, result];
    localStorage.setItem(this.KEYS.QUIZ_RESULTS, JSON.stringify(updatedResults));
    
    // Update user stats
    this.updateUserStats(result);
    
    // Update leaderboard
    this.updateLeaderboard(result);
  }

  getQuizResults(): QuizResult[] {
    const stored = localStorage.getItem(this.KEYS.QUIZ_RESULTS);
    return stored ? JSON.parse(stored) : [];
  }

  getQuizResultsByUser(userId: string): QuizResult[] {
    return this.getQuizResults().filter(result => result.userId === userId);
  }

  getQuizResultsByCategory(category: string): QuizResult[] {
    return this.getQuizResults().filter(result => result.category === category);
  }

  // User Stats Management
  getUserStats(userId: string): UserStats {
    const stored = localStorage.getItem(this.KEYS.USER_STATS);
    const allStats = stored ? JSON.parse(stored) : {};
    
    return allStats[userId] || {
      totalQuizzes: 0,
      averageScore: 0,
      bestScore: 0,
      totalTimeSpent: 0,
      streakDays: 0,
      lastQuizDate: '',
      categoryStats: {}
    };
  }

  private updateUserStats(result: QuizResult): void {
    const stored = localStorage.getItem(this.KEYS.USER_STATS);
    const allStats = stored ? JSON.parse(stored) : {};
    
    const currentStats = allStats[result.userId] || {
      totalQuizzes: 0,
      averageScore: 0,
      bestScore: 0,
      totalTimeSpent: 0,
      streakDays: 0,
      lastQuizDate: '',
      categoryStats: {}
    };

    // Update overall stats
    currentStats.totalQuizzes += 1;
    currentStats.totalTimeSpent += result.timeSpent;
    currentStats.bestScore = Math.max(currentStats.bestScore, result.percentage);
    
    // Recalculate average score
    const userResults = this.getQuizResultsByUser(result.userId);
    const totalScore = userResults.reduce((sum, r) => sum + r.percentage, 0);
    currentStats.averageScore = Math.round(totalScore / userResults.length);

    // Update streak
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (currentStats.lastQuizDate === yesterday || currentStats.lastQuizDate === '') {
      if (currentStats.lastQuizDate !== today) {
        currentStats.streakDays += 1;
      }
    } else if (currentStats.lastQuizDate !== today) {
      currentStats.streakDays = 1;
    }
    
    currentStats.lastQuizDate = today;

    // Update category stats
    if (!currentStats.categoryStats[result.category]) {
      currentStats.categoryStats[result.category] = {
        quizzes: 0,
        averageScore: 0,
        bestScore: 0
      };
    }

    const categoryStats = currentStats.categoryStats[result.category];
    categoryStats.quizzes += 1;
    categoryStats.bestScore = Math.max(categoryStats.bestScore, result.percentage);
    
    const categoryResults = this.getQuizResultsByCategory(result.category)
      .filter(r => r.userId === result.userId);
    const categoryTotalScore = categoryResults.reduce((sum, r) => sum + r.percentage, 0);
    categoryStats.averageScore = Math.round(categoryTotalScore / categoryResults.length);

    allStats[result.userId] = currentStats;
    localStorage.setItem(this.KEYS.USER_STATS, JSON.stringify(allStats));
  }

  // Leaderboard Management
  getLeaderboard(): LeaderboardEntry[] {
    const stored = localStorage.getItem(this.KEYS.LEADERBOARD);
    return stored ? JSON.parse(stored) : [];
  }

  private updateLeaderboard(result: QuizResult): void {
    const userProfile = this.getUserProfile();
    if (!userProfile) return;

    let leaderboard = this.getLeaderboard();
    let userEntry = leaderboard.find(entry => entry.userId === result.userId);

    if (!userEntry) {
      userEntry = {
        userId: result.userId,
        username: userProfile.username,
        totalScore: 0,
        averageScore: 0,
        totalQuizzes: 0,
        rank: 0,
        avatar: userProfile.avatar
      };
      leaderboard.push(userEntry);
    }

    // Update user entry
    const userResults = this.getQuizResultsByUser(result.userId);
    userEntry.totalQuizzes = userResults.length;
    userEntry.totalScore = userResults.reduce((sum, r) => sum + r.percentage, 0);
    userEntry.averageScore = Math.round(userEntry.totalScore / userEntry.totalQuizzes);

    // Sort leaderboard by average score, then by total quizzes
    leaderboard.sort((a, b) => {
      if (a.averageScore !== b.averageScore) {
        return b.averageScore - a.averageScore;
      }
      return b.totalQuizzes - a.totalQuizzes;
    });

    // Update ranks
    leaderboard.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    localStorage.setItem(this.KEYS.LEADERBOARD, JSON.stringify(leaderboard));
  }

  getCategoryLeaderboard(category: string): LeaderboardEntry[] {
    const results = this.getQuizResultsByCategory(category);
    const userScores: Record<string, {
      totalScore: number;
      quizzes: number;
      userId: string;
    }> = {};

    // Calculate scores per user for this category
    results.forEach(result => {
      if (!userScores[result.userId]) {
        userScores[result.userId] = {
          totalScore: 0,
          quizzes: 0,
          userId: result.userId
        };
      }
      userScores[result.userId].totalScore += result.percentage;
      userScores[result.userId].quizzes += 1;
    });

    // Convert to leaderboard entries
    const leaderboard: LeaderboardEntry[] = Object.values(userScores).map(userScore => {
      const profile = this.getUserProfile(); // In real app, get by userId
      return {
        userId: userScore.userId,
        username: profile?.username || 'Unknown User',
        totalScore: userScore.totalScore,
        averageScore: Math.round(userScore.totalScore / userScore.quizzes),
        totalQuizzes: userScore.quizzes,
        rank: 0,
        avatar: profile?.avatar
      };
    });

    // Sort and rank
    leaderboard.sort((a, b) => {
      if (a.averageScore !== b.averageScore) {
        return b.averageScore - a.averageScore;
      }
      return b.totalQuizzes - a.totalQuizzes;
    });

    leaderboard.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    return leaderboard;
  }

  // Utility methods
  clearAllData(): void {
    Object.values(this.KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  exportUserData(): string {
    const data = {
      profile: this.getUserProfile(),
      results: this.getQuizResults(),
      stats: localStorage.getItem(this.KEYS.USER_STATS),
      leaderboard: this.getLeaderboard()
    };
    return JSON.stringify(data, null, 2);
  }
}

export const storageManager = new LocalStorageManager();

// Initialize demo user if none exists
export function initializeDemoUser(): UserProfile {
  let profile = storageManager.getUserProfile();
  
  if (!profile) {
    profile = {
      id: 'demo-user-' + Date.now(),
      username: 'Quiz Explorer',
      email: 'demo@example.com',
      createdAt: new Date().toISOString(),
      avatar: undefined
    };
    storageManager.saveUserProfile(profile);
  }
  
  return profile;
}
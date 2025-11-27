// Type definitions for the Dino Adventure games

// Common types
export type DinosaurType = 'carnivore' | 'herbivore' | 'flying' | 'marine';
export type Difficulty = 'easy' | 'medium' | 'hard';

// Dinosaur data structure
export interface Dinosaur {
  id: string;
  name: string;
  scientificName?: string;
  type: DinosaurType;
  imageUrl: string;
  fact: string;
  height?: string;
  length?: string;
  weight?: string;
  period?: string;
  diet?: string;
}

// Memory Match types
export interface Card {
  id: string;
  dinosaurId: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MemoryGameState {
  cards: Card[];
  flippedCards: string[];
  matchedPairs: number;
  moves: number;
  time: number;
  isGameStarted: boolean;
  isGameComplete: boolean;
  difficulty: Difficulty;
}

// Quiz types
export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct option
  difficulty: Difficulty;
  imageUrl?: string;
  explanation?: string;
  dinosaurId?: string;
}

export type QuizCategory =
  | 'types'
  | 'diets'
  | 'sizes'
  | 'features'
  | 'sounds'
  | 'prehistoric-times'
  | 'babies'
  | 'fun-facts';

export interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  isComplete: boolean;
  timeElapsed: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  timeElapsed: number;
  achievements: string[];
}

// Dinosaur Runner types
export interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Dinosaur extends GameObject {
  velocityY: number;
  isJumping: boolean;
  isDucking: boolean;
}

export interface Obstacle extends GameObject {
  type: 'cactus' | 'rock' | 'pterodactyl';
  passed: boolean;
}

export interface PowerUp extends GameObject {
  type: 'shield' | 'slow-motion' | 'magnet';
  active: boolean;
}

export interface RunnerGameState {
  dinosaur: Dinosaur;
  obstacles: Obstacle[];
  powerUps: PowerUp[];
  score: number;
  highScore: number;
  speed: number;
  isGameOver: boolean;
  isPaused: boolean;
}

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  GameMenu: undefined;
  DinosaurRunner: undefined;
  MemoryMatch: { difficulty?: Difficulty };
  Quiz: { category?: QuizCategory };
  Settings: undefined;
};

// Settings types
export interface AppSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  vibrationEnabled: boolean;
  difficulty: Difficulty;
}

// Achievement types
export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

// High score types
export interface GameScore {
  game: 'runner' | 'memory' | 'quiz';
  score: number;
  date: Date;
  difficulty?: Difficulty;
  metadata?: Record<string, any>;
}

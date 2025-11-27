// Application constants

// App Information
export const APP_NAME = 'Dino Adventure';
export const APP_VERSION = '1.0.0';

// Game Constants
export const GAMES = {
  RUNNER: 'dinosaur-runner',
  MEMORY: 'memory-match',
  QUIZ: 'quiz',
} as const;

// Memory Match Game Constants
export const MEMORY_GAME = {
  GRID_SIZES: {
    EASY: { rows: 3, cols: 4, pairs: 6 },
    MEDIUM: { rows: 4, cols: 4, pairs: 8 },
    HARD: { rows: 4, cols: 6, pairs: 12 },
  },
  FLIP_DELAY: 500, // milliseconds
  MATCH_DELAY: 1000, // milliseconds
  STAR_THRESHOLDS: {
    EASY: { three: 15, two: 20, one: 30 }, // moves
    MEDIUM: { three: 20, two: 28, one: 40 },
    HARD: { three: 30, two: 45, one: 60 },
  },
};

// Quiz Game Constants
export const QUIZ_GAME = {
  QUESTIONS_PER_QUIZ: 10,
  TIME_PER_QUESTION: 30, // seconds
  POINTS_CORRECT: 10,
  POINTS_WRONG: 0,
  SHOW_EXPLANATION_DURATION: 3000, // milliseconds
  ACHIEVEMENT_THRESHOLDS: {
    BRONZE: 50, // percentage
    SILVER: 70,
    GOLD: 90,
    PERFECT: 100,
  },
};

// Runner Game Constants
export const RUNNER_GAME = {
  GRAVITY: 0.6,
  JUMP_FORCE: -12,
  INITIAL_SPEED: 5,
  SPEED_INCREMENT: 0.001,
  MAX_SPEED: 15,
  GROUND_HEIGHT: 100,
  DINO_SIZE: { width: 60, height: 60 },
  OBSTACLE_GAP: { min: 800, max: 1200 },
  POWER_UP_CHANCE: 0.05, // 5% chance
  POWER_UP_DURATION: 5000, // milliseconds
};

// Storage Keys
export const STORAGE_KEYS = {
  HIGH_SCORES: '@dino_high_scores',
  SETTINGS: '@dino_settings',
  ACHIEVEMENTS: '@dino_achievements',
  USER_PROGRESS: '@dino_progress',
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  CARD_FLIP: 600,
  CELEBRATION: 2000,
} as const;

// Sound Effects
export const SOUNDS = {
  BUTTON_PRESS: 'button_press.mp3',
  CARD_FLIP: 'card_flip.mp3',
  MATCH: 'match.mp3',
  NO_MATCH: 'no_match.mp3',
  DINO_ROAR: 'dino_roar.mp3',
  CORRECT_ANSWER: 'correct.mp3',
  WRONG_ANSWER: 'wrong.mp3',
  JUMP: 'jump.mp3',
  GAME_OVER: 'game_over.mp3',
  COIN_COLLECT: 'coin.mp3',
  POWER_UP: 'power_up.mp3',
  BACKGROUND_MUSIC: 'background.mp3',
} as const;

// Achievement IDs
export const ACHIEVEMENTS = {
  FIRST_MATCH: 'first_match',
  MEMORY_MASTER: 'memory_master',
  SPEED_DEMON: 'speed_demon',
  QUIZ_BEGINNER: 'quiz_beginner',
  QUIZ_EXPERT: 'quiz_expert',
  PALEONTOLOGIST: 'paleontologist',
  RUNNER_100: 'runner_100',
  RUNNER_500: 'runner_500',
  RUNNER_1000: 'runner_1000',
  PERFECT_QUIZ: 'perfect_quiz',
  ALL_CATEGORIES: 'all_categories',
} as const;

// Difficulty Levels
export const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
} as const;

// Screen Dimensions (will be set dynamically)
export let SCREEN_WIDTH = 0;
export let SCREEN_HEIGHT = 0;

export const setScreenDimensions = (width: number, height: number) => {
  SCREEN_WIDTH = width;
  SCREEN_HEIGHT = height;
};

// Haptic Feedback Types
export const HAPTIC_TYPES = {
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

// Default Settings
export const DEFAULT_SETTINGS = {
  soundEnabled: true,
  musicEnabled: true,
  vibrationEnabled: true,
  difficulty: DIFFICULTY.MEDIUM,
};

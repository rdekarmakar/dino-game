// Utility helper functions

import { Difficulty } from '../types';

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Get random element from array
 */
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Get random elements from array
 */
export const getRandomElements = <T>(array: T[], count: number): T[] => {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
};

/**
 * Format time in MM:SS format
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Format score with leading zeros
 */
export const formatScore = (score: number, digits: number = 6): string => {
  return score.toString().padStart(digits, '0');
};

/**
 * Calculate star rating based on performance
 */
export const calculateStars = (
  moves: number,
  difficulty: Difficulty,
  thresholds: { three: number; two: number; one: number }
): number => {
  if (moves <= thresholds.three) return 3;
  if (moves <= thresholds.two) return 2;
  if (moves <= thresholds.one) return 1;
  return 0;
};

/**
 * Calculate quiz accuracy percentage
 */
export const calculateAccuracy = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

/**
 * Check if two rectangles collide (for game physics)
 */
export const checkCollision = (
  rect1: { x: number; y: number; width: number; height: number },
  rect2: { x: number; y: number; width: number; height: number }
): boolean => {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
};

/**
 * Clamp a number between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Linear interpolation
 */
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

/**
 * Delay execution (promise-based)
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Debounce function
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if device is mobile
 */
export const isMobile = (): boolean => {
  // This will be overridden in the actual app based on platform detection
  return true;
};

/**
 * Generate unique ID
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Get achievement badge based on accuracy
 */
export const getAchievementBadge = (accuracy: number): string => {
  if (accuracy === 100) return '🏆 Perfect!';
  if (accuracy >= 90) return '🥇 Gold!';
  if (accuracy >= 70) return '🥈 Silver!';
  if (accuracy >= 50) return '🥉 Bronze!';
  return '⭐ Keep Trying!';
};

/**
 * Get difficulty display name
 */
export const getDifficultyName = (difficulty: Difficulty): string => {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

/**
 * Calculate game score multiplier based on difficulty
 */
export const getDifficultyMultiplier = (difficulty: Difficulty): number => {
  switch (difficulty) {
    case 'easy':
      return 1;
    case 'medium':
      return 1.5;
    case 'hard':
      return 2;
    default:
      return 1;
  }
};

/**
 * Get congratulatory message based on performance
 */
export const getCongratulationsMessage = (stars: number): string => {
  switch (stars) {
    case 3:
      return '🌟🌟🌟 Amazing! You\'re a Dino Expert!';
    case 2:
      return '⭐⭐ Great job! Keep it up!';
    case 1:
      return '⭐ Good effort! Try again for more stars!';
    default:
      return '💪 Keep practicing! You can do it!';
  }
};

/**
 * Validate email format (for future features)
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

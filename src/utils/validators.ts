// Validation utility functions

import { Difficulty, QuizCategory } from '../types';

/**
 * Check if a value is a valid difficulty level
 */
export const isValidDifficulty = (value: any): value is Difficulty => {
  return ['easy', 'medium', 'hard'].includes(value);
};

/**
 * Check if a value is a valid quiz category
 */
export const isValidQuizCategory = (value: any): value is QuizCategory => {
  return [
    'types',
    'diets',
    'sizes',
    'features',
    'sounds',
    'prehistoric-times',
    'babies',
    'fun-facts',
  ].includes(value);
};

/**
 * Validate score value
 */
export const isValidScore = (score: number): boolean => {
  return typeof score === 'number' && score >= 0 && !isNaN(score);
};

/**
 * Validate time value (in seconds)
 */
export const isValidTime = (time: number): boolean => {
  return typeof time === 'number' && time >= 0 && !isNaN(time);
};

/**
 * Validate moves count
 */
export const isValidMoves = (moves: number): boolean => {
  return typeof moves === 'number' && moves >= 0 && Number.isInteger(moves);
};

/**
 * Validate percentage (0-100)
 */
export const isValidPercentage = (value: number): boolean => {
  return typeof value === 'number' && value >= 0 && value <= 100 && !isNaN(value);
};

/**
 * Sanitize user input (remove special characters)
 */
export const sanitizeInput = (input: string): string => {
  return input.replace(/[^\w\s-]/gi, '').trim();
};

/**
 * Validate object has required properties
 */
export const hasRequiredProperties = <T extends object>(
  obj: any,
  requiredProps: (keyof T)[]
): obj is T => {
  if (!obj || typeof obj !== 'object') return false;
  return requiredProps.every((prop) => prop in obj);
};

/**
 * Check if value is within range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Validate settings object
 */
export const isValidSettings = (settings: any): boolean => {
  if (!settings || typeof settings !== 'object') return false;

  const hasValidBooleans =
    typeof settings.soundEnabled === 'boolean' &&
    typeof settings.musicEnabled === 'boolean' &&
    typeof settings.vibrationEnabled === 'boolean';

  const hasValidDifficulty = isValidDifficulty(settings.difficulty);

  return hasValidBooleans && hasValidDifficulty;
};

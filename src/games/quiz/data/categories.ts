import { QuizCategory } from '../../../types';

export interface CategoryInfo {
  id: QuizCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const quizCategories: CategoryInfo[] = [
  {
    id: 'types',
    name: 'Dinosaur Types',
    description: 'Learn about different dinosaur species',
    icon: '🦕',
    color: '#4CAF50',
  },
  {
    id: 'diets',
    name: 'Dinosaur Diets',
    description: 'What did dinosaurs eat?',
    icon: '🍖',
    color: '#FF5722',
  },
  {
    id: 'sizes',
    name: 'Dinosaur Sizes',
    description: 'Big and small dinosaurs',
    icon: '📏',
    color: '#2196F3',
  },
  {
    id: 'features',
    name: 'Dinosaur Features',
    description: 'Special dinosaur body parts',
    icon: '⚡',
    color: '#FF9800',
  },
  {
    id: 'sounds',
    name: 'Dinosaur Sounds',
    description: 'How dinosaurs communicated',
    icon: '🔊',
    color: '#9C27B0',
  },
  {
    id: 'prehistoric-times',
    name: 'Prehistoric Times',
    description: 'When dinosaurs lived',
    icon: '⏰',
    color: '#795548',
  },
  {
    id: 'babies',
    name: 'Dinosaur Babies',
    description: 'Baby dinosaurs and eggs',
    icon: '🥚',
    color: '#FFEB3B',
  },
  {
    id: 'fun-facts',
    name: 'Fun Facts',
    description: 'Amazing dinosaur trivia',
    icon: '✨',
    color: '#E91E63',
  },
];

export const getCategoryById = (id: QuizCategory): CategoryInfo | undefined => {
  return quizCategories.find((cat) => cat.id === id);
};

export const getCategoryName = (id: QuizCategory): string => {
  return getCategoryById(id)?.name || 'Unknown Category';
};

export const getCategoryIcon = (id: QuizCategory): string => {
  return getCategoryById(id)?.icon || '🦕';
};

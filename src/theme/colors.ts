// Dinosaur-themed color palette

export const colors = {
  // Primary Colors - Prehistoric greens and earthy browns
  primary: {
    green: '#4CAF50',
    lightGreen: '#8BC34A',
    darkGreen: '#2E7D32',
    brown: '#795548',
    lightBrown: '#A1887F',
    darkBrown: '#5D4037',
  },

  // Secondary Colors - Sky blues and sunset oranges
  secondary: {
    skyBlue: '#03A9F4',
    lightBlue: '#81D4FA',
    darkBlue: '#0277BD',
    orange: '#FF9800',
    lightOrange: '#FFB74D',
    darkOrange: '#F57C00',
  },

  // Accent Colors - Bold dinosaur colors
  accent: {
    red: '#F44336',
    purple: '#9C27B0',
    yellow: '#FFEB3B',
    pink: '#E91E63',
    teal: '#009688',
    lime: '#CDDC39',
  },

  // Neutral Colors - Stone grays and sand beige
  neutral: {
    gray: '#9E9E9E',
    lightGray: '#E0E0E0',
    darkGray: '#616161',
    sand: '#FFF8E1',
    lightSand: '#FFFBF0',
    stone: '#757575',
  },

  // Background Colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#FFF8E1', // Sand color
    dark: '#212121',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },

  // Text Colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#BDBDBD',
    inverse: '#FFFFFF',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#03A9F4',
  },

  // Game-specific Colors
  game: {
    // Memory Match
    cardBack: '#8BC34A',
    cardFront: '#FFFFFF',
    matched: '#4CAF50',
    flipped: '#03A9F4',

    // Quiz
    correct: '#4CAF50',
    incorrect: '#F44336',
    selected: '#FF9800',
    unselected: '#E0E0E0',

    // Runner
    ground: '#795548',
    sky: '#81D4FA',
    skyNight: '#0D47A1',
    obstacle: '#5D4037',
    powerUp: '#FFEB3B',
  },

  // Dinosaur Type Colors
  dinosaur: {
    carnivore: '#F44336',
    herbivore: '#4CAF50',
    flying: '#03A9F4',
    marine: '#009688',
  },

  // UI Element Colors
  ui: {
    border: '#E0E0E0',
    divider: '#BDBDBD',
    shadow: 'rgba(0, 0, 0, 0.15)',
    focus: '#FF9800',
    disabled: '#E0E0E0',
  },

  // Status Colors
  status: {
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#03A9F4',
  },
};

// Helper function to get dinosaur type color
export const getDinosaurColor = (type: 'carnivore' | 'herbivore' | 'flying' | 'marine'): string => {
  return colors.dinosaur[type];
};

// Helper function to convert hex to rgba
export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

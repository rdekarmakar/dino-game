# CLAUDE.md - AI Assistant Guide

> **Last Updated**: 2025-11-27
> **Repository**: dino-game
> **Status**: Early Stage - Planning Phase

## Table of Contents

1. [Repository Overview](#repository-overview)
2. [Current State](#current-state)
3. [Project Architecture](#project-architecture)
4. [Development Workflow](#development-workflow)
5. [Code Conventions](#code-conventions)
6. [Implementation Guidelines](#implementation-guidelines)
7. [File Organization](#file-organization)
8. [Testing Strategy](#testing-strategy)
9. [Common Tasks](#common-tasks)
10. [AI Assistant Guidelines](#ai-assistant-guidelines)

---

## Repository Overview

### Project Purpose
**Dino Adventure** is a collection of three educational dinosaur-themed games for children:
1. **Dinosaur Runner** - Endless runner game with obstacles
2. **Dino Memory Match** - Memory card matching game
3. **Dino Quiz** - Educational dinosaur quiz

**Target Audience**: Children aged 3-8 years
**Platforms**: iOS, Android, Web (cross-platform)

### Technology Stack
- **Framework**: React Native with Expo
- **Language**: TypeScript
- **Web Support**: React Native Web
- **Navigation**: React Navigation
- **Animations**: React Native Reanimated
- **Storage**: AsyncStorage
- **State Management**: React Context API / Redux Toolkit

### Key Documentation
- `PROJECT_SPEC.md` - Detailed project specification, features, and implementation plan
- `README.md` - Basic project information
- `CLAUDE.md` - This file (AI assistant guide)

---

## Current State

### What Exists
✅ Project initialized with git
✅ Comprehensive project specification (see `PROJECT_SPEC.md`)
✅ Development plan and phase breakdown
✅ Git repository with branch structure

### What Needs Implementation
❌ Expo/React Native project setup
❌ Directory structure creation
❌ Package dependencies installation
❌ Common components library
❌ All three games (Runner, Memory Match, Quiz)
❌ Navigation system
❌ Theme and styling system
❌ Asset management
❌ Testing infrastructure

### Current Branch Strategy
- **Active Branch**: `claude/claude-md-mihn0xo1w6sds4h6-01SSgKmWK7ENt4d1xp297wEv`
- **Branch Naming**: All Claude branches follow `claude/[description]-[session-id]` pattern
- **Workflow**: Work on feature branches, merge to main via PRs

---

## Project Architecture

### Planned Directory Structure

```
dino-game/
├── src/                          # Main source directory
│   ├── App.tsx                   # Root application component
│   │
│   ├── games/                    # Game implementations
│   │   ├── dinosaur-runner/      # Runner game
│   │   │   ├── components/       # Game-specific components
│   │   │   ├── hooks/            # Game-specific hooks
│   │   │   ├── utils/            # Game utilities (physics, etc.)
│   │   │   └── DinosaurRunner.tsx
│   │   │
│   │   ├── memory-match/         # Memory game
│   │   │   ├── components/       # Card, Board, etc.
│   │   │   ├── hooks/            # useMemoryGame
│   │   │   ├── data/             # Dinosaur cards data
│   │   │   └── MemoryMatch.tsx
│   │   │
│   │   └── quiz/                 # Quiz game
│   │       ├── components/       # Question, Answer, etc.
│   │       ├── hooks/            # useQuiz
│   │       ├── data/             # Questions database
│   │       └── QuizGame.tsx
│   │
│   ├── components/               # Shared components
│   │   ├── common/               # Button, Card, Header
│   │   └── animations/           # Reusable animations
│   │
│   ├── screens/                  # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── GameMenuScreen.tsx
│   │   └── SettingsScreen.tsx
│   │
│   ├── navigation/               # Navigation configuration
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   │
│   ├── services/                 # Business logic services
│   │   ├── storage.ts            # AsyncStorage wrapper
│   │   ├── audio.ts              # Sound management
│   │   └── analytics.ts          # Analytics (optional)
│   │
│   ├── hooks/                    # Global custom hooks
│   │   ├── useSound.ts
│   │   ├── useVibration.ts
│   │   └── useHighScore.ts
│   │
│   ├── theme/                    # Design system
│   │   ├── colors.ts             # Color palette
│   │   ├── typography.ts         # Font styles
│   │   └── spacing.ts            # Spacing constants
│   │
│   ├── utils/                    # Utility functions
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── validators.ts
│   │
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts
│   │
│   └── assets/                   # Static assets
│       ├── images/               # Image files
│       ├── sounds/               # Audio files
│       └── fonts/                # Custom fonts
│
├── web/                          # Web-specific files
│   └── index.html
│
├── ios/                          # iOS native code (auto-generated)
├── android/                      # Android native code (auto-generated)
├── .expo/                        # Expo cache
│
├── __tests__/                    # Test files
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── docs/                         # Additional documentation
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── app.json                      # Expo config
├── .gitignore
├── .eslintrc.js                  # Linting rules
├── .prettierrc                   # Code formatting
│
├── README.md                     # Project README
├── PROJECT_SPEC.md               # Detailed specification
└── CLAUDE.md                     # This file
```

### Architectural Principles

1. **Component-Based Architecture**: Small, reusable, single-responsibility components
2. **Game Isolation**: Each game is self-contained in its own directory
3. **Shared Resources**: Common components, hooks, and utilities are centralized
4. **Type Safety**: Full TypeScript coverage with strict mode
5. **Performance First**: Optimize for 60 FPS, minimize re-renders
6. **Accessibility**: WCAG AA compliance, screen reader support

---

## Development Workflow

### Git Workflow

#### Branch Strategy
- **Main Branch**: Production-ready code (currently empty)
- **Feature Branches**: `claude/[feature-description]-[session-id]`
- **Convention**: Always work on feature branches, never commit directly to main

#### Commit Guidelines
- **Format**: `[type]: [clear description]`
- **Types**:
  - `feat:` New feature
  - `fix:` Bug fix
  - `docs:` Documentation only
  - `style:` Code style/formatting
  - `refactor:` Code refactoring
  - `test:` Adding tests
  - `chore:` Maintenance tasks

**Examples**:
```bash
feat: implement memory match card component
fix: correct collision detection in runner game
docs: update API documentation
refactor: extract game loop logic to custom hook
test: add unit tests for quiz validation
```

#### Pushing Changes
```bash
# Always push to feature branch with -u flag
git push -u origin claude/[branch-name]

# Retry on network failure (up to 4 times with exponential backoff)
# 2s, 4s, 8s, 16s intervals
```

### Pull Request Process
1. Ensure all tests pass
2. Code is properly formatted (Prettier)
3. No linting errors (ESLint)
4. Update documentation if needed
5. Create PR with clear description
6. Reference any related issues

---

## Code Conventions

### TypeScript Standards

#### Strict Type Safety
```typescript
// ✅ Good - Explicit types
interface GameProps {
  score: number;
  onGameOver: (finalScore: number) => void;
  difficulty: 'easy' | 'medium' | 'hard';
}

// ❌ Bad - Implicit any
function startGame(config) {
  // ...
}
```

#### Type Naming
- **Interfaces**: PascalCase, descriptive names (e.g., `GameState`, `CardProps`)
- **Types**: PascalCase (e.g., `DinosaurType`, `GameMode`)
- **Enums**: PascalCase (e.g., `GameStatus`, `DifficultLevel`)

#### File Types
- `.tsx` - React components
- `.ts` - Utility functions, types, hooks (non-JSX)

### React Native Conventions

#### Component Structure
```typescript
// Preferred component structure
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComponentProps {
  // Props interface
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 1. Hooks
  const [state, setState] = useState();

  // 2. Effects
  useEffect(() => {
    // ...
  }, []);

  // 3. Handlers
  const handlePress = () => {
    // ...
  };

  // 4. Render
  return (
    <View style={styles.container}>
      {/* JSX */}
    </View>
  );
};

// 5. Styles at bottom
const styles = StyleSheet.create({
  container: {
    // styles
  },
});
```

#### Component Naming
- **Files**: PascalCase (e.g., `GameBoard.tsx`, `DinosaurCard.tsx`)
- **Components**: PascalCase, export named components
- **Hooks**: camelCase with `use` prefix (e.g., `useGameLoop`, `useMemoryGame`)

#### Hook Guidelines
```typescript
// Custom hook pattern
export const useGameLoop = (fps: number = 60) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      // Game loop logic
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [isRunning, fps]);

  return { isRunning, start: () => setIsRunning(true), stop: () => setIsRunning(false) };
};
```

### Styling Conventions

#### Use StyleSheet.create()
```typescript
// ✅ Good - StyleSheet for optimization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

// ❌ Avoid - Inline styles (except for dynamic values)
<View style={{ flex: 1, backgroundColor: '#fff' }} />
```

#### Theme Usage
```typescript
// Import theme constants
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: spacing.md,
  },
});
```

#### Responsive Design
```typescript
import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallDevice = width < 375;
```

### Naming Conventions

#### Variables
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_SCORE`, `DEFAULT_LIVES`)
- **Variables**: camelCase (e.g., `currentScore`, `isGameRunning`)
- **Booleans**: Prefix with `is`, `has`, `should` (e.g., `isVisible`, `hasWon`)

#### Functions
- **Functions**: camelCase, verb-based (e.g., `calculateScore`, `handleCardFlip`)
- **Event Handlers**: Prefix with `handle` (e.g., `handlePress`, `handleGameOver`)
- **Callbacks**: Prefix with `on` (e.g., `onComplete`, `onScoreChange`)

#### Files and Directories
- **Components**: PascalCase (e.g., `GameBoard.tsx`)
- **Utilities**: camelCase (e.g., `physics.ts`, `helpers.ts`)
- **Directories**: kebab-case (e.g., `dinosaur-runner/`, `memory-match/`)

---

## Implementation Guidelines

### Starting New Features

#### 1. Read the Spec First
Always consult `PROJECT_SPEC.md` before implementing:
- Understand the feature requirements
- Check design guidelines (colors, fonts, animations)
- Review technical considerations
- Follow the development phase plan

#### 2. Create Directory Structure
If directories don't exist, create them according to the planned structure:
```bash
mkdir -p src/games/memory-match/{components,hooks,data}
```

#### 3. Start with Types
Define TypeScript interfaces/types first:
```typescript
// src/games/memory-match/types.ts
export interface Card {
  id: string;
  dinosaurName: string;
  imageUrl: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: Card[];
  flippedCards: string[];
  matchedPairs: number;
  moves: number;
  timeElapsed: number;
}
```

#### 4. Build Bottom-Up
- Start with utility functions and data
- Create basic components
- Build composite components
- Wire up state management
- Add animations and polish

#### 5. Child-Friendly First
Remember the target audience (3-8 years old):
- **Large touch targets** (minimum 44x44 points)
- **High contrast colors**
- **Clear, simple language**
- **Encouraging feedback** ("Dino-mite!", "Roar-some!")
- **Sound effects** for all interactions
- **Visual feedback** for all actions

### Performance Optimization

#### React.memo for Heavy Components
```typescript
export const DinosaurCard = React.memo<CardProps>(({ dinosaur, onPress }) => {
  // Component implementation
}, (prevProps, nextProps) => {
  // Custom comparison if needed
  return prevProps.dinosaur.id === nextProps.dinosaur.id;
});
```

#### useCallback for Handlers
```typescript
const handleCardPress = useCallback((cardId: string) => {
  // Handler logic
}, [/* dependencies */]);
```

#### Optimize Images
- Use appropriate image sizes
- Compress images (WebP format when possible)
- Lazy load images
- Use `FastImage` library for better performance

#### Animations
- Use `react-native-reanimated` for smooth 60 FPS animations
- Avoid animating layout properties when possible
- Use `transform` and `opacity` for best performance

### Error Handling

#### User-Facing Errors
```typescript
try {
  await saveHighScore(score);
} catch (error) {
  // Show user-friendly error
  Alert.alert(
    'Oops!',
    'Could not save your score. Try again!',
    [{ text: 'OK', style: 'default' }]
  );
}
```

#### Development Errors
```typescript
if (__DEV__) {
  console.warn('Development warning:', message);
}
```

### Accessibility

#### Screen Reader Support
```typescript
<TouchableOpacity
  accessible={true}
  accessibilityLabel="Play Memory Match Game"
  accessibilityHint="Starts the dinosaur memory matching game"
  accessibilityRole="button"
>
  <Text>Play Memory Match</Text>
</TouchableOpacity>
```

#### High Contrast Mode
```typescript
import { useColorScheme } from 'react-native';

const colorScheme = useColorScheme();
const colors = colorScheme === 'dark' ? darkColors : lightColors;
```

---

## File Organization

### Import Order
1. React and React Native imports
2. Third-party libraries
3. Internal components
4. Utilities and helpers
5. Types
6. Styles

```typescript
// 1. React
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// 2. Third-party
import { useNavigation } from '@react-navigation/native';

// 3. Internal components
import { Button } from '@/components/common/Button';
import { DinosaurCard } from './components/DinosaurCard';

// 4. Utilities
import { shuffleArray } from '@/utils/helpers';

// 5. Types
import type { GameState, Card } from './types';

// 6. Styles
import { styles } from './styles';
```

### Path Aliases
Configure in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@hooks/*": ["src/hooks/*"],
      "@utils/*": ["src/utils/*"],
      "@theme/*": ["src/theme/*"],
      "@services/*": ["src/services/*"]
    }
  }
}
```

### File Size Guidelines
- Components: Keep under 300 lines
- Hooks: Keep under 150 lines
- Utilities: Keep focused and single-purpose
- If a file grows too large, split it into smaller modules

---

## Testing Strategy

### Testing Philosophy
1. **Test behavior, not implementation**
2. **Write tests that give confidence**
3. **Focus on critical paths first**
4. **Keep tests maintainable**

### Unit Tests

#### Testing Utilities
```typescript
// __tests__/unit/utils/physics.test.ts
import { checkCollision } from '@/utils/physics';

describe('checkCollision', () => {
  it('should detect collision when objects overlap', () => {
    const obj1 = { x: 0, y: 0, width: 50, height: 50 };
    const obj2 = { x: 25, y: 25, width: 50, height: 50 };

    expect(checkCollision(obj1, obj2)).toBe(true);
  });

  it('should not detect collision when objects are separate', () => {
    const obj1 = { x: 0, y: 0, width: 50, height: 50 };
    const obj2 = { x: 100, y: 100, width: 50, height: 50 };

    expect(checkCollision(obj1, obj2)).toBe(false);
  });
});
```

#### Testing Custom Hooks
```typescript
// __tests__/unit/hooks/useMemoryGame.test.ts
import { renderHook, act } from '@testing-library/react-hooks';
import { useMemoryGame } from '@/games/memory-match/hooks/useMemoryGame';

describe('useMemoryGame', () => {
  it('should initialize game with shuffled cards', () => {
    const { result } = renderHook(() => useMemoryGame());

    expect(result.current.cards).toHaveLength(16);
    expect(result.current.moves).toBe(0);
  });

  it('should flip card when selected', () => {
    const { result } = renderHook(() => useMemoryGame());

    act(() => {
      result.current.flipCard('card-1');
    });

    expect(result.current.flippedCards).toContain('card-1');
  });
});
```

### Integration Tests

#### Testing Component Interactions
```typescript
// __tests__/integration/MemoryMatch.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { MemoryMatch } from '@/games/memory-match/MemoryMatch';

describe('MemoryMatch', () => {
  it('should allow flipping two cards', () => {
    const { getByTestId } = render(<MemoryMatch />);

    const card1 = getByTestId('card-0');
    const card2 = getByTestId('card-1');

    fireEvent.press(card1);
    fireEvent.press(card2);

    // Assert expected behavior
  });
});
```

### E2E Tests

#### Testing Complete Game Flow
```typescript
// __tests__/e2e/memoryMatchGameFlow.test.ts
describe('Memory Match Game Flow', () => {
  it('should complete a full game successfully', async () => {
    // 1. Navigate to game
    // 2. Start game
    // 3. Match all pairs
    // 4. See victory screen
    // 5. View high score
  });
});
```

### Test Coverage Goals
- **Utilities**: 90%+ coverage
- **Custom Hooks**: 80%+ coverage
- **Components**: 70%+ coverage (focus on critical interactions)
- **Integration**: All critical user paths

---

## Common Tasks

### Adding a New Game Component

1. **Create component file**:
```bash
touch src/games/[game-name]/components/[ComponentName].tsx
```

2. **Define types**:
```typescript
interface ComponentProps {
  // props
}
```

3. **Implement component**:
```typescript
export const ComponentName: React.FC<ComponentProps> = (props) => {
  // implementation
};
```

4. **Add styles**:
```typescript
const styles = StyleSheet.create({
  // styles
});
```

5. **Export from index** (if creating a components library):
```typescript
// src/games/[game-name]/components/index.ts
export { ComponentName } from './ComponentName';
```

### Adding a Custom Hook

1. **Create hook file**:
```bash
touch src/hooks/use[HookName].ts
```

2. **Implement hook**:
```typescript
export const useHookName = (params) => {
  // Hook logic

  return {
    // Exposed values and functions
  };
};
```

3. **Add tests**:
```bash
touch __tests__/unit/hooks/useHookName.test.ts
```

### Adding Sound Effects

1. **Add audio file**:
```bash
# Place in src/assets/sounds/
cp [sound-file].mp3 src/assets/sounds/
```

2. **Use audio service**:
```typescript
import { playSound } from '@/services/audio';

const handlePress = async () => {
  await playSound('button-press');
};
```

### Adding Theme Colors

1. **Update colors file**:
```typescript
// src/theme/colors.ts
export const colors = {
  primary: '#4CAF50',
  secondary: '#FF9800',
  // Add new color
  newColor: '#HEXVALUE',
};
```

2. **Use in components**:
```typescript
import { colors } from '@/theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.newColor,
  },
});
```

### Debugging Tips

#### React Native Debugger
```bash
# Enable debugging
# Shake device (or Cmd+D on simulator)
# Select "Debug" or "Show Perf Monitor"
```

#### Console Logging
```typescript
// Conditional logging
if (__DEV__) {
  console.log('Debug info:', data);
}

// Object inspection
console.log(JSON.stringify(data, null, 2));
```

#### Performance Monitoring
```typescript
import { InteractionManager } from 'react-native';

InteractionManager.runAfterInteractions(() => {
  // Run expensive operation after animations
});
```

---

## AI Assistant Guidelines

### Understanding Context

#### Before Starting Work
1. **Read this file** (CLAUDE.md) - You're doing this now!
2. **Read PROJECT_SPEC.md** - Understand the full project vision
3. **Check current branch** - Ensure you're on the right branch
4. **Review recent commits** - Understand recent changes

#### When Implementing Features
1. **Check PROJECT_SPEC.md** for requirements
2. **Follow the development phases** outlined in the spec
3. **Maintain the dinosaur theme** consistently
4. **Keep child-friendliness** as top priority

### Decision-Making Framework

#### When Uncertain About Implementation
Ask yourself:
1. Does this match the PROJECT_SPEC.md requirements?
2. Is this child-friendly and age-appropriate?
3. Will this work across iOS, Android, and Web?
4. Is this performant (60 FPS target)?
5. Is this maintainable and well-typed?

#### When to Ask for Clarification
- Requirements are ambiguous or conflicting
- Technical approach has multiple valid options
- User preferences might differ from spec
- Security or privacy concerns arise

### Code Generation Best Practices

#### Always Include
- ✅ Full TypeScript types
- ✅ Proper error handling
- ✅ Accessibility attributes
- ✅ Comments for complex logic
- ✅ Consistent code style

#### Avoid
- ❌ Any types
- ❌ Console.log in production code
- ❌ Hardcoded values (use constants)
- ❌ Inline styles (except for dynamic values)
- ❌ Missing error handling

### Working with the Repository

#### Reading Files
Before modifying any file:
```typescript
// 1. Read the file first
// 2. Understand existing patterns
// 3. Match the existing style
// 4. Make minimal, focused changes
```

#### Creating New Files
```typescript
// 1. Check if similar file exists
// 2. Follow existing patterns
// 3. Use proper naming conventions
// 4. Place in correct directory
```

#### Committing Changes
```bash
# 1. Review all changes
git status
git diff

# 2. Stage relevant files
git add [files]

# 3. Commit with clear message
git commit -m "feat: add memory match card component"

# 4. Push to feature branch
git push -u origin [branch-name]
```

### Communication Guidelines

#### When Explaining Code
- Use clear, simple language
- Explain "why" not just "what"
- Reference line numbers: `filename.ts:42`
- Provide examples when helpful

#### When Reporting Progress
- Be specific about what was implemented
- Mention any deviations from spec
- Highlight potential issues or concerns
- Suggest next steps

#### When Asking Questions
- Provide context and rationale
- Offer potential solutions
- Explain trade-offs
- Be concise but thorough

### Project-Specific Reminders

#### Dinosaur Theme
- All games feature dinosaurs prominently
- Use dinosaur-related terminology
- Incorporate prehistoric elements
- Keep it colorful and engaging

#### Child-Friendly Design
- Large, obvious touch targets (44x44 minimum)
- High contrast, readable text
- Positive, encouraging language
- Sound feedback for all interactions
- Visual animations for feedback
- No scary or violent content

#### Cross-Platform Considerations
- Test on iOS, Android, and Web
- Use platform-agnostic components when possible
- Handle platform differences gracefully
- Use Platform.select() when needed

#### Performance Targets
- 60 FPS for animations
- Fast load times (< 3 seconds)
- Smooth interactions
- Efficient memory usage
- Optimized assets

---

## Quick Reference

### Essential Commands

```bash
# Project setup (when implemented)
npm install
npx expo start

# Development
npm run ios          # Run on iOS simulator
npm run android      # Run on Android emulator
npm run web          # Run on web browser

# Testing
npm test             # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report

# Linting & Formatting
npm run lint         # Check linting
npm run format       # Format code

# Building
npm run build:ios    # Build iOS
npm run build:android # Build Android
npm run build:web    # Build web
```

### Key File Locations

| Purpose | Location |
|---------|----------|
| Project Spec | `PROJECT_SPEC.md` |
| AI Guide | `CLAUDE.md` (this file) |
| Main App | `src/App.tsx` |
| Runner Game | `src/games/dinosaur-runner/` |
| Memory Match | `src/games/memory-match/` |
| Quiz Game | `src/games/quiz/` |
| Common Components | `src/components/common/` |
| Theme | `src/theme/` |
| Utilities | `src/utils/` |
| Tests | `__tests__/` |

### Color Palette (Dinosaur Theme)

```typescript
// From PROJECT_SPEC.md
const colors = {
  // Primary
  prehistoricGreen: '#4CAF50',
  earthyBrown: '#795548',

  // Secondary
  skyBlue: '#03A9F4',
  sunsetOrange: '#FF9800',

  // Accent
  dinoRed: '#F44336',
  dinoPurple: '#9C27B0',
  dinoYellow: '#FFEB3B',

  // Neutral
  stoneGray: '#9E9E9E',
  sandBeige: '#FFF8E1',
};
```

### Common Dinosaur Names (for games)
- T-Rex (Tyrannosaurus Rex)
- Triceratops
- Stegosaurus
- Brachiosaurus
- Pterodactyl (Pteranodon)
- Velociraptor
- Ankylosaurus
- Parasaurolophus
- Diplodocus
- Spinosaurus

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-27 | Initial CLAUDE.md creation |

---

## Additional Resources

### Documentation
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Design Resources
- [React Native Design Patterns](https://reactnativeexample.com/)
- [Expo Icon Directory](https://icons.expo.fyi/)
- [React Native Express](https://www.reactnative.express/)

### Testing Resources
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

---

**Questions or Suggestions?**
This is a living document. If you notice areas that need clarification or improvement, update this file and commit the changes.

**Happy Coding! 🦕**

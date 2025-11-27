import { useState, useEffect, useCallback, useRef } from 'react';
import { RunnerGameState } from '../../../types';
import { RUNNER_GAME } from '../../../utils/constants';
import {
  applyGravity,
  jump,
  duck,
  moveObstacles,
  generateObstacle,
  checkObstacleCollision,
  updateObstaclesPassed,
  calculateSpeed,
} from '../utils/physics';

export const useGameLoop = () => {
  const [gameState, setGameState] = useState<RunnerGameState>({
    dinosaur: {
      x: 50,
      y: RUNNER_GAME.GROUND_HEIGHT + 50, // Position on top of ground
      width: RUNNER_GAME.DINO_SIZE.width,
      height: RUNNER_GAME.DINO_SIZE.height,
      velocityY: 0,
      isJumping: false,
      isDucking: false,
    },
    obstacles: [],
    powerUps: [],
    score: 0,
    highScore: 0,
    speed: RUNNER_GAME.INITIAL_SPEED,
    isGameOver: false,
    isPaused: false,
  });

  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const lastObstacleDistanceRef = useRef<number>(0); // Start at 0 for proper initial delay

  // Initialize game
  const initializeGame = useCallback(() => {
    setGameState({
      dinosaur: {
        x: 50,
        y: RUNNER_GAME.GROUND_HEIGHT + 50, // Position on top of ground
        width: RUNNER_GAME.DINO_SIZE.width,
        height: RUNNER_GAME.DINO_SIZE.height,
        velocityY: 0,
        isJumping: false,
        isDucking: false,
      },
      obstacles: [],
      powerUps: [],
      score: 0,
      highScore: gameState.highScore,
      speed: RUNNER_GAME.INITIAL_SPEED,
      isGameOver: false,
      isPaused: false,
    });
    lastObstacleDistanceRef.current = 0; // Reset to 0 for proper initial delay
  }, [gameState.highScore]);

  // Jump action
  const handleJump = useCallback(() => {
    setGameState((prev) => {
      if (prev.isGameOver || prev.isPaused) return prev;
      return {
        ...prev,
        dinosaur: jump(prev.dinosaur),
      };
    });
  }, []);

  // Duck action
  const handleDuck = useCallback((isDucking: boolean) => {
    setGameState((prev) => {
      if (prev.isGameOver || prev.isPaused) return prev;
      return {
        ...prev,
        dinosaur: duck(prev.dinosaur, isDucking),
      };
    });
  }, []);

  // Pause/Resume
  const togglePause = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      isPaused: !prev.isPaused,
    }));
  }, []);

  // Game loop
  useEffect(() => {
    if (gameState.isGameOver || gameState.isPaused) {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
      return;
    }

    gameLoopRef.current = setInterval(() => {
      setGameState((prev) => {
        // Apply gravity
        let newDino = applyGravity(prev.dinosaur);

        // Move obstacles
        let newObstacles = moveObstacles(prev.obstacles, prev.speed);

        // Update obstacle distance
        lastObstacleDistanceRef.current += prev.speed;

        // Generate new obstacle
        const newObstacle = generateObstacle(lastObstacleDistanceRef.current, prev.speed);
        if (newObstacle) {
          newObstacles.push(newObstacle);
          lastObstacleDistanceRef.current = 0;
        }

        // Update passed obstacles and score
        const { obstacles: updatedObstacles, newlyPassed } = updateObstaclesPassed(
          newObstacles,
          newDino.x
        );
        const newScore = prev.score + newlyPassed;

        // Calculate new speed
        const newSpeed = calculateSpeed(newScore);

        // Check collision
        const hasCollision = checkObstacleCollision(newDino, updatedObstacles);

        if (hasCollision) {
          return {
            ...prev,
            isGameOver: true,
            highScore: Math.max(prev.highScore, newScore),
          };
        }

        return {
          ...prev,
          dinosaur: newDino,
          obstacles: updatedObstacles,
          score: newScore,
          speed: newSpeed,
        };
      });
    }, 1000 / 60); // 60 FPS

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, [gameState.isGameOver, gameState.isPaused]);

  // Reset game
  const resetGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    handleJump,
    handleDuck,
    togglePause,
    resetGame,
    initializeGame,
  };
};

import { Dinosaur, Obstacle, PowerUp } from '../../../types';
import { RUNNER_GAME } from '../../../utils/constants';
import { checkCollision } from '../../../utils/helpers';

/**
 * Apply gravity to dinosaur
 */
export const applyGravity = (dino: Dinosaur): Dinosaur => {
  const newVelocityY = dino.velocityY + RUNNER_GAME.GRAVITY;
  let newY = dino.y + newVelocityY;
  let isJumping = true;

  // Check if dinosaur has landed
  if (newY >= RUNNER_GAME.GROUND_HEIGHT) {
    newY = RUNNER_GAME.GROUND_HEIGHT;
    isJumping = false;
  }

  return {
    ...dino,
    y: newY,
    velocityY: isJumping ? newVelocityY : 0,
    isJumping,
  };
};

/**
 * Make dinosaur jump
 */
export const jump = (dino: Dinosaur): Dinosaur => {
  if (dino.isJumping || dino.isDucking) return dino;

  return {
    ...dino,
    velocityY: RUNNER_GAME.JUMP_FORCE,
    isJumping: true,
  };
};

/**
 * Make dinosaur duck
 */
export const duck = (dino: Dinosaur, isDucking: boolean): Dinosaur => {
  if (dino.isJumping) return dino;

  return {
    ...dino,
    isDucking,
    height: isDucking ? RUNNER_GAME.DINO_SIZE.height * 0.6 : RUNNER_GAME.DINO_SIZE.height,
  };
};

/**
 * Move obstacles
 */
export const moveObstacles = (
  obstacles: Obstacle[],
  speed: number
): Obstacle[] => {
  return obstacles
    .map((obstacle) => ({
      ...obstacle,
      x: obstacle.x - speed,
    }))
    .filter((obstacle) => obstacle.x + obstacle.width > 0); // Remove off-screen obstacles
};

/**
 * Generate new obstacle
 */
export const generateObstacle = (lastObstacleX: number, speed: number): Obstacle | null => {
  const minGap = RUNNER_GAME.OBSTACLE_GAP.min;
  const maxGap = RUNNER_GAME.OBSTACLE_GAP.max;
  const gap = Math.random() * (maxGap - minGap) + minGap;

  if (lastObstacleX < gap) return null;

  const types: Obstacle['type'][] = ['cactus', 'rock', 'pterodactyl'];
  const type = types[Math.floor(Math.random() * types.length)];

  const obstacle: Obstacle = {
    x: 400, // Screen width
    y: type === 'pterodactyl' ? RUNNER_GAME.GROUND_HEIGHT - 80 : RUNNER_GAME.GROUND_HEIGHT - 50,
    width: type === 'pterodactyl' ? 60 : 40,
    height: type === 'pterodactyl' ? 40 : 50,
    type,
    passed: false,
  };

  return obstacle;
};

/**
 * Check collision with obstacles
 */
export const checkObstacleCollision = (
  dino: Dinosaur,
  obstacles: Obstacle[]
): boolean => {
  return obstacles.some((obstacle) => {
    // Add some padding for better gameplay
    const dinoBounds = {
      x: dino.x + 5,
      y: dino.y + 5,
      width: dino.width - 10,
      height: dino.height - 10,
    };

    return checkCollision(dinoBounds, obstacle);
  });
};

/**
 * Update obstacles passed status for scoring
 */
export const updateObstaclesPassed = (
  obstacles: Obstacle[],
  dinoX: number
): { obstacles: Obstacle[]; newlyPassed: number } => {
  let newlyPassed = 0;

  const updatedObstacles = obstacles.map((obstacle) => {
    if (!obstacle.passed && obstacle.x + obstacle.width < dinoX) {
      newlyPassed++;
      return { ...obstacle, passed: true };
    }
    return obstacle;
  });

  return { obstacles: updatedObstacles, newlyPassed };
};

/**
 * Calculate game speed based on score
 */
export const calculateSpeed = (score: number): number => {
  const speed = RUNNER_GAME.INITIAL_SPEED + score * RUNNER_GAME.SPEED_INCREMENT;
  return Math.min(speed, RUNNER_GAME.MAX_SPEED);
};

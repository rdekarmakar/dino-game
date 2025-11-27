import { Dinosaur, Obstacle, PowerUp } from '../../../types';
import { RUNNER_GAME } from '../../../utils/constants';
import { checkCollision } from '../../../utils/helpers';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/**
 * Apply gravity to dinosaur
 * Note: Using 'bottom' positioning, so Y increases = moves UP, Y decreases = moves DOWN
 */
export const applyGravity = (dino: Dinosaur): Dinosaur => {
  const newVelocityY = dino.velocityY - RUNNER_GAME.GRAVITY; // Subtract gravity (pulls down)
  let newY = dino.y + newVelocityY;
  let isJumping = true;

  // Check if dinosaur has landed on ground
  const groundLevel = RUNNER_GAME.GROUND_HEIGHT + 50; // Ground visual height + ground line position
  if (newY <= groundLevel) {
    newY = groundLevel;
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

  const groundLevel = RUNNER_GAME.GROUND_HEIGHT + 50;

  const obstacle: Obstacle = {
    x: SCREEN_WIDTH, // Use dynamic screen width
    y: type === 'pterodactyl' ? groundLevel + 80 : groundLevel,
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
    // Only check obstacles that are close to the dinosaur's position
    // Skip if obstacle is too far ahead (not spawned yet) or already passed
    const isInRange =
      obstacle.x < dino.x + dino.width + 20 && // Obstacle is not too far right
      obstacle.x + obstacle.width > dino.x + 10; // Obstacle hasn't completely passed

    if (!isInRange) {
      return false;
    }

    // VERY generous hitboxes - reduce by 60% for fair gameplay
    // This accounts for the visual shape of emojis vs their bounding box
    const hitboxPadding = 25;
    const dinoBounds = {
      x: dino.x + hitboxPadding,
      y: dino.y + hitboxPadding,
      width: Math.max(10, dino.width - hitboxPadding * 2),
      height: Math.max(10, dino.height - hitboxPadding * 2),
    };

    const obstaclePadding = 20;
    const obstacleBounds = {
      x: obstacle.x + obstaclePadding,
      y: obstacle.y + obstaclePadding,
      width: Math.max(10, obstacle.width - obstaclePadding * 2),
      height: Math.max(10, obstacle.height - obstaclePadding * 2),
    };

    // Check if the reduced hitboxes actually overlap
    const hasCollision = checkCollision(dinoBounds, obstacleBounds);

    return hasCollision;
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

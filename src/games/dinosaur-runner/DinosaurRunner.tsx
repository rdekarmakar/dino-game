import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Modal,
  Text,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { Button } from '../../components/common';
import { Background } from './components/Background';
import { Dinosaur } from './components/Dinosaur';
import { Obstacle } from './components/Obstacle';
import { GameUI } from './components/GameUI';
import { useGameLoop } from './hooks/useGameLoop';
import { colors, spacing, typography } from '../../theme';
import { formatScore } from '../../utils/helpers';

type DinosaurRunnerProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DinosaurRunner'>;
};

const DinosaurRunner: React.FC<DinosaurRunnerProps> = ({ navigation }) => {
  const {
    gameState,
    handleJump,
    handleDuck,
    togglePause,
    resetGame,
    initializeGame,
  } = useGameLoop();

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const handleScreenPress = () => {
    if (gameState.isGameOver) {
      resetGame();
    } else if (!gameState.isPaused) {
      handleJump();
    }
  };

  const handleGoHome = () => {
    navigation.navigate('GameMenu');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.game.sky} />

      <Background />

      <GameUI
        score={gameState.score}
        highScore={gameState.highScore}
        isPaused={gameState.isPaused}
        onPause={togglePause}
      />

      {/* Game Area */}
      <TouchableOpacity
        style={styles.gameArea}
        activeOpacity={1}
        onPress={handleScreenPress}
      >
        {/* Dinosaur */}
        <Dinosaur dinosaur={gameState.dinosaur} />

        {/* Obstacles */}
        {gameState.obstacles.map((obstacle, index) => (
          <Obstacle key={index} obstacle={obstacle} />
        ))}

        {/* Instructions overlay (shown at start) */}
        {gameState.score === 0 && !gameState.isGameOver && (
          <View style={styles.instructionsOverlay}>
            <Text style={styles.instructionsText}>Tap to Jump! 🦖</Text>
          </View>
        )}

        {/* Pause overlay */}
        {gameState.isPaused && !gameState.isGameOver && (
          <View style={styles.pauseOverlay}>
            <Text style={styles.pausedText}>⏸️</Text>
            <Text style={styles.pausedLabel}>Paused</Text>
            <Button
              title="Resume"
              onPress={togglePause}
              variant="primary"
              size="medium"
            />
            <Button
              title="Quit"
              onPress={handleGoHome}
              variant="outline"
              size="medium"
              style={styles.quitButton}
            />
          </View>
        )}
      </TouchableOpacity>

      {/* Game Over Modal */}
      <Modal
        visible={gameState.isGameOver}
        transparent
        animationType="fade"
        onRequestClose={resetGame}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.gameOverEmoji}>💥</Text>
            <Text style={styles.gameOverTitle}>Game Over!</Text>

            <View style={styles.finalScoreContainer}>
              <Text style={styles.finalScoreLabel}>Final Score</Text>
              <Text style={styles.finalScoreValue}>{formatScore(gameState.score, 4)}</Text>
            </View>

            {gameState.score === gameState.highScore && gameState.score > 0 && (
              <View style={styles.newHighScoreBadge}>
                <Text style={styles.newHighScoreText}>🏆 New High Score! 🏆</Text>
              </View>
            )}

            {gameState.highScore > 0 && (
              <Text style={styles.highScoreText}>
                Best: {formatScore(gameState.highScore, 4)}
              </Text>
            )}

            <View style={styles.modalButtons}>
              <Button
                title="Play Again"
                onPress={resetGame}
                variant="primary"
                size="large"
                style={styles.modalButton}
              />
              <Button
                title="Home"
                onPress={handleGoHome}
                variant="outline"
                size="large"
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.game.sky,
  },

  gameArea: {
    flex: 1,
  },

  instructionsOverlay: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    backgroundColor: colors.background.primary + 'CC',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    borderRadius: 20,
  },

  instructionsText: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  pauseOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },

  pausedText: {
    fontSize: 80,
    marginBottom: spacing.base,
  },

  pausedLabel: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
    marginBottom: spacing.xl,
  },

  quitButton: {
    marginTop: spacing.md,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: colors.background.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: colors.background.primary,
    borderRadius: 24,
    padding: spacing['2xl'],
    width: '85%',
    alignItems: 'center',
  },

  gameOverEmoji: {
    fontSize: 80,
    marginBottom: spacing.base,
  },

  gameOverTitle: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.red,
    marginBottom: spacing.lg,
  },

  finalScoreContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: 16,
    padding: spacing.lg,
    width: '100%',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  finalScoreLabel: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    marginBottom: spacing.sm,
  },

  finalScoreValue: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  newHighScoreBadge: {
    backgroundColor: colors.accent.yellow + '40',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
  },

  newHighScoreText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary.orange,
  },

  highScoreText: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    marginBottom: spacing.lg,
  },

  modalButtons: {
    width: '100%',
  },

  modalButton: {
    marginBottom: spacing.md,
  },
});

export default DinosaurRunner;

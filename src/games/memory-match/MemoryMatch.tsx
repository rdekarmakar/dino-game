import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Modal,
  Text,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, Difficulty } from '../../types';
import { Header, Button } from '../../components/common';
import { GameBoard } from './components/GameBoard';
import { ScorePanel } from './components/ScorePanel';
import { useMemoryGame } from './hooks/useMemoryGame';
import { colors, spacing, typography } from '../../theme';
import { calculateStars, getCongratulationsMessage } from '../../utils/helpers';
import { MEMORY_GAME } from '../../utils/constants';

type MemoryMatchProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MemoryMatch'>;
  route: RouteProp<RootStackParamList, 'MemoryMatch'>;
};

const MemoryMatch: React.FC<MemoryMatchProps> = ({ navigation, route }) => {
  const difficulty: Difficulty = route.params?.difficulty || 'medium';
  const { gameState, initializeGame, flipCard, resetGame } = useMemoryGame(difficulty);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const totalPairs = gameState.cards.length / 2;
  const isGameInProgress = gameState.flippedCards.length > 0;

  const handlePlayAgain = () => {
    resetGame();
  };

  const handleGoHome = () => {
    navigation.navigate('GameMenu');
  };

  const stars = gameState.isGameComplete
    ? calculateStars(
        gameState.moves,
        difficulty,
        MEMORY_GAME.STAR_THRESHOLDS[difficulty.toUpperCase() as keyof typeof MEMORY_GAME.STAR_THRESHOLDS]
      )
    : 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />

      <Header
        title="Dino Memory Match"
        subtitle={`${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode`}
        onBack={() => navigation.goBack()}
        rightAction={
          <Button
            title="Reset"
            onPress={resetGame}
            size="small"
            variant="secondary"
          />
        }
      />

      <ScorePanel
        moves={gameState.moves}
        time={gameState.time}
        matchedPairs={gameState.matchedPairs}
        totalPairs={totalPairs}
      />

      <GameBoard
        cards={gameState.cards}
        onCardPress={flipCard}
        difficulty={difficulty}
        disabled={isGameInProgress}
      />

      {/* Victory Modal */}
      <Modal
        visible={gameState.isGameComplete}
        transparent
        animationType="fade"
        onRequestClose={handlePlayAgain}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalEmoji}>🎉</Text>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalMessage}>{getCongratulationsMessage(stars)}</Text>

            <View style={styles.modalStats}>
              <View style={styles.modalStatRow}>
                <Text style={styles.modalStatLabel}>Moves:</Text>
                <Text style={styles.modalStatValue}>{gameState.moves}</Text>
              </View>
              <View style={styles.modalStatRow}>
                <Text style={styles.modalStatLabel}>Time:</Text>
                <Text style={styles.modalStatValue}>{gameState.time}s</Text>
              </View>
              <View style={styles.modalStatRow}>
                <Text style={styles.modalStatLabel}>Stars:</Text>
                <Text style={styles.modalStatValue}>{'⭐'.repeat(stars)}</Text>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <Button
                title="Play Again"
                onPress={handlePlayAgain}
                variant="primary"
                size="medium"
                style={styles.modalButton}
              />
              <Button
                title="Home"
                onPress={handleGoHome}
                variant="outline"
                size="medium"
                style={styles.modalButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.tertiary,
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

  modalEmoji: {
    fontSize: 80,
    marginBottom: spacing.base,
  },

  modalTitle: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
    marginBottom: spacing.sm,
  },

  modalMessage: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  modalStats: {
    width: '100%',
    backgroundColor: colors.background.secondary,
    borderRadius: 16,
    padding: spacing.base,
    marginBottom: spacing.lg,
  },

  modalStatRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
  },

  modalStatLabel: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
  },

  modalStatValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  modalButtons: {
    width: '100%',
  },

  modalButton: {
    marginBottom: spacing.md,
  },
});

export default MemoryMatch;

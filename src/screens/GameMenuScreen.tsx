import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Header, Card } from '../components/common';
import { colors, typography, spacing, borderRadius } from '../theme';

type GameMenuScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'GameMenu'>;
};

interface GameCard {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  onPress: () => void;
}

const GameMenuScreen: React.FC<GameMenuScreenProps> = ({ navigation }) => {
  const games: GameCard[] = [
    {
      id: 'runner',
      title: '🦖 Dinosaur Runner',
      description: 'Run and jump! Avoid obstacles and collect eggs!',
      emoji: '🦖',
      color: colors.accent.red,
      onPress: () => {
        // navigation.navigate('DinosaurRunner');
        alert('Dinosaur Runner coming soon!');
      },
    },
    {
      id: 'memory',
      title: '🦕 Dino Memory Match',
      description: 'Match dinosaur pairs and learn their names!',
      emoji: '🦕',
      color: colors.primary.green,
      onPress: () => {
        // navigation.navigate('MemoryMatch', { difficulty: 'medium' });
        alert('Memory Match coming soon!');
      },
    },
    {
      id: 'quiz',
      title: '🧠 Dino Quiz',
      description: 'Test your dinosaur knowledge! Answer fun questions!',
      emoji: '🧠',
      color: colors.secondary.orange,
      onPress: () => {
        // navigation.navigate('Quiz');
        alert('Dino Quiz coming soon!');
      },
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />

      <Header
        title="Choose a Game"
        subtitle="Pick your favorite dino game!"
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {games.map((game) => (
          <TouchableOpacity
            key={game.id}
            onPress={game.onPress}
            activeOpacity={0.8}
            style={styles.gameCardContainer}
          >
            <Card variant="elevated" style={[styles.gameCard, { borderLeftColor: game.color }]}>
              <View style={styles.gameCardContent}>
                <Text style={styles.gameEmoji}>{game.emoji}</Text>
                <View style={styles.gameInfo}>
                  <Text style={styles.gameTitle}>{game.title}</Text>
                  <Text style={styles.gameDescription}>{game.description}</Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        ))}

        {/* Fun dinosaur facts section */}
        <View style={styles.funFactSection}>
          <Text style={styles.funFactTitle}>🦴 Did You Know?</Text>
          <Card variant="elevated" style={styles.funFactCard}>
            <Text style={styles.funFactText}>
              Dinosaurs lived on Earth for over 165 million years! That's much longer than humans
              have been around!
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.tertiary,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    padding: spacing.base,
  },

  gameCardContainer: {
    marginBottom: spacing.base,
  },

  gameCard: {
    borderLeftWidth: 6,
    overflow: 'hidden',
  },

  gameCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  gameEmoji: {
    fontSize: 64,
    marginRight: spacing.base,
  },

  gameInfo: {
    flex: 1,
  },

  gameTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  },

  gameDescription: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    lineHeight: 24,
  },

  funFactSection: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },

  funFactTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.brown,
    marginBottom: spacing.md,
    textAlign: 'center',
  },

  funFactCard: {
    backgroundColor: colors.primary.lightGreen + '20',
  },

  funFactText: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    lineHeight: 26,
    textAlign: 'center',
  },
});

export default GameMenuScreen;

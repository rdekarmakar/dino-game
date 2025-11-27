import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Button } from '../components/common';
import { colors, typography, spacing } from '../theme';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />

      <View style={styles.content}>
        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.emoji}>🦕</Text>
          <Text style={styles.title}>Dino Adventure</Text>
          <Text style={styles.subtitle}>Learn & Play with Dinosaurs!</Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsSection}>
          <Button
            title="Start Playing"
            onPress={() => navigation.navigate('GameMenu')}
            size="large"
            variant="primary"
            style={styles.button}
          />

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>📊 High Scores</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>⚙️ Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>🦖 Three Fun Dino Games! 🦖</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.tertiary,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.lg,
  },

  titleSection: {
    alignItems: 'center',
    marginTop: spacing['4xl'],
  },

  emoji: {
    fontSize: 120,
    marginBottom: spacing.base,
  },

  title: {
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  subtitle: {
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    textAlign: 'center',
  },

  buttonsSection: {
    width: '100%',
  },

  button: {
    marginBottom: spacing.base,
  },

  secondaryButton: {
    padding: spacing.base,
    marginBottom: spacing.md,
    alignItems: 'center',
  },

  secondaryButtonText: {
    fontSize: typography.fontSize.xl,
    color: colors.text.primary,
    fontWeight: typography.fontWeight.semibold,
  },

  footer: {
    alignItems: 'center',
    paddingBottom: spacing.lg,
  },

  footerText: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
  },
});

export default HomeScreen;

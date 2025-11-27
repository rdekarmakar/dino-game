import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QuizQuestion } from '../../../types';
import { Card } from '../../../components/common';
import { colors, typography, spacing } from '../../../theme';
import { getCategoryIcon } from '../data/categories';

interface QuestionProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
}

export const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Card variant="elevated" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryIcon}>{getCategoryIcon(question.category)}</Text>
        <Text style={styles.questionNumber}>
          Question {questionNumber} of {totalQuestions}
        </Text>
      </View>

      <Text style={styles.questionText}>{question.question}</Text>

      {question.imageUrl && (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>🦕 Dinosaur Image 🦖</Text>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.base,
    marginVertical: spacing.md,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  categoryIcon: {
    fontSize: typography.fontSize['2xl'],
    marginRight: spacing.sm,
  },

  questionNumber: {
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },

  questionText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text.primary,
    lineHeight: 32,
  },

  imagePlaceholder: {
    marginTop: spacing.base,
    padding: spacing.lg,
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagePlaceholderText: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
  },
});

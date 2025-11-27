import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, QuizCategory, QuizResult } from '../../types';
import { Header, Button, Card } from '../../components/common';
import { Question } from './components/Question';
import { AnswerButton } from './components/AnswerButton';
import { ProgressBar } from './components/ProgressBar';
import { ResultScreen } from './components/ResultScreen';
import { useQuiz } from './hooks/useQuiz';
import { colors, spacing, typography } from '../../theme';
import { getRandomEncouragingMessage, getRandomTryAgainMessage } from './data/dinoFacts';

type QuizGameProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Quiz'>;
  route: RouteProp<RootStackParamList, 'Quiz'>;
};

const QuizGame: React.FC<QuizGameProps> = ({ navigation, route }) => {
  const category: QuizCategory | undefined = route.params?.category;
  const {
    quizState,
    currentQuestion,
    totalQuestions,
    progress,
    initializeQuiz,
    selectAnswer,
    nextQuestion,
    resetQuiz,
  } = useQuiz(category);

  useEffect(() => {
    console.log('QuizGame: initializeQuiz effect running');
    initializeQuiz();
  }, [initializeQuiz]);

  console.log('QuizGame render:', {
    isComplete: quizState.isComplete,
    currentIndex: quizState.currentQuestionIndex,
    questionsLength: quizState.questions.length,
    hasCurrentQuestion: !!currentQuestion,
  });

  if (quizState.isComplete) {
    const result: QuizResult = {
      score: quizState.score,
      totalQuestions: totalQuestions,
      correctAnswers: quizState.correctAnswers,
      accuracy: Math.round((quizState.correctAnswers / totalQuestions) * 100),
      timeElapsed: quizState.timeElapsed,
      achievements: [],
    };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />
        <Header title="Dino Quiz" onBack={() => navigation.goBack()} />
        <ResultScreen
          result={result}
          onPlayAgain={resetQuiz}
          onGoHome={() => navigation.reset({
            index: 0,
            routes: [{ name: 'GameMenu' }],
          })}
        />
      </SafeAreaView>
    );
  }

  if (!currentQuestion) {
    console.error('No current question available', {
      currentIndex: quizState.currentQuestionIndex,
      totalQuestions: quizState.questions.length,
      questions: quizState.questions,
    });
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />
        <Header title="Dino Quiz" onBack={() => navigation.goBack()} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.xl }}>
          <Text style={{ fontSize: typography.fontSize['2xl'], color: colors.text.primary, textAlign: 'center' }}>
            Loading quiz questions...
          </Text>
          <Button
            title="Go Back"
            onPress={() => navigation.goBack()}
            variant="primary"
            size="medium"
            style={{ marginTop: spacing.lg }}
          />
        </View>
      </SafeAreaView>
    );
  }

  const isAnswered = quizState.selectedAnswer !== null;
  const isCorrect =
    isAnswered && quizState.selectedAnswer === currentQuestion.correctAnswer;

  // Debug logging
  console.log('Quiz State:', {
    isAnswered,
    selectedAnswer: quizState.selectedAnswer,
    showExplanation: quizState.showExplanation,
    currentIndex: quizState.currentQuestionIndex,
    totalQuestions,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary.green} />

      <Header
        title="Dino Quiz"
        subtitle={`Score: ${quizState.score}`}
        onBack={() => navigation.goBack()}
        rightAction={
          <Button title="Quit" onPress={() => navigation.goBack()} size="small" variant="danger" />
        }
      />

      <ProgressBar
        progress={progress}
        currentQuestion={quizState.currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
      />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Question
          question={currentQuestion}
          questionNumber={quizState.currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />

        <View style={styles.answersContainer}>
          {currentQuestion.options.map((option, index) => (
            <AnswerButton
              key={index}
              answer={option}
              index={index}
              onPress={() => selectAnswer(index)}
              isSelected={quizState.selectedAnswer === index}
              isCorrect={index === currentQuestion.correctAnswer}
              showResult={quizState.showExplanation}
              disabled={isAnswered}
            />
          ))}
        </View>

        {/* Explanation Card */}
        {quizState.showExplanation && (
          <Card variant="elevated" style={styles.explanationCard}>
            <View style={styles.feedbackHeader}>
              <Text style={[styles.feedbackEmoji, isCorrect && styles.correct]}>
                {isCorrect ? '🎉' : '💪'}
              </Text>
              <Text
                style={[
                  styles.feedbackText,
                  isCorrect ? styles.correctText : styles.incorrectText,
                ]}
              >
                {isCorrect ? getRandomEncouragingMessage() : getRandomTryAgainMessage()}
              </Text>
            </View>

            {currentQuestion.explanation && (
              <View style={styles.explanationContent}>
                <Text style={styles.explanationTitle}>📚 Explanation:</Text>
                <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
              </View>
            )}
          </Card>
        )}

        {/* Next Button */}
        {isAnswered && (
          <View style={styles.nextButtonContainer}>
            <Button
              title={
                quizState.currentQuestionIndex + 1 === totalQuestions
                  ? 'See Results'
                  : 'Next Question'
              }
              onPress={nextQuestion}
              variant="primary"
              size="large"
            />
          </View>
        )}
      </ScrollView>
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
  },

  answersContainer: {
    marginTop: spacing.md,
  },

  explanationCard: {
    marginHorizontal: spacing.base,
    marginTop: spacing.lg,
    backgroundColor: colors.background.primary,
  },

  feedbackHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  feedbackEmoji: {
    fontSize: typography.fontSize['3xl'],
    marginRight: spacing.md,
  },

  correct: {
    // Can add animation here
  },

  feedbackText: {
    flex: 1,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },

  correctText: {
    color: colors.status.success,
  },

  incorrectText: {
    color: colors.secondary.orange,
  },

  explanationContent: {
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.ui.border,
  },

  explanationTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.brown,
    marginBottom: spacing.sm,
  },

  explanationText: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    lineHeight: 24,
  },

  nextButtonContainer: {
    padding: spacing.base,
    paddingBottom: spacing.lg,
  },
});

export default QuizGame;

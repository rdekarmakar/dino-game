import { useState, useEffect, useCallback } from 'react';
import { QuizState, QuizQuestion, QuizCategory } from '../../../types';
import { getRandomQuestions } from '../data/dinoQuestions';
import { QUIZ_GAME } from '../../../utils/constants';

export const useQuiz = (category?: QuizCategory, questionCount: number = QUIZ_GAME.QUESTIONS_PER_QUIZ) => {
  const [quizState, setQuizState] = useState<QuizState>({
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    isComplete: false,
    timeElapsed: 0,
    selectedAnswer: null,
    showExplanation: false,
  });

  // Initialize quiz
  const initializeQuiz = useCallback(() => {
    const questions = getRandomQuestions(questionCount);
    setQuizState({
      questions,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      isComplete: false,
      timeElapsed: 0,
      selectedAnswer: null,
      showExplanation: false,
    });
  }, [questionCount]);

  // Select answer
  const selectAnswer = useCallback((answerIndex: number) => {
    setQuizState((prev) => {
      if (prev.selectedAnswer !== null) return prev; // Already answered

      const currentQuestion = prev.questions[prev.currentQuestionIndex];
      const isCorrect = answerIndex === currentQuestion.correctAnswer;

      return {
        ...prev,
        selectedAnswer: answerIndex,
        showExplanation: true,
        score: isCorrect ? prev.score + QUIZ_GAME.POINTS_CORRECT : prev.score,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
      };
    });
  }, []);

  // Next question
  const nextQuestion = useCallback(() => {
    setQuizState((prev) => {
      const nextIndex = prev.currentQuestionIndex + 1;
      const isComplete = nextIndex >= prev.questions.length;

      return {
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        showExplanation: false,
        isComplete,
      };
    });
  }, []);

  // Timer
  useEffect(() => {
    if (quizState.isComplete) return;

    const interval = setInterval(() => {
      setQuizState((prev) => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
    }, 1000);

    return () => clearInterval(interval);
  }, [quizState.isComplete]);

  // Reset quiz
  const resetQuiz = useCallback(() => {
    initializeQuiz();
  }, [initializeQuiz]);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const totalQuestions = quizState.questions.length;
  const progress = totalQuestions > 0 ? (quizState.currentQuestionIndex + 1) / totalQuestions : 0;

  return {
    quizState,
    currentQuestion,
    totalQuestions,
    progress,
    initializeQuiz,
    selectAnswer,
    nextQuestion,
    resetQuiz,
  };
};

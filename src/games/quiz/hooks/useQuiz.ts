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
    console.log('Initializing quiz with questions:', questions.length);
    if (questions.length === 0) {
      console.error('No questions available!');
    }
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
    console.log('selectAnswer called with index:', answerIndex);
    setQuizState((prev) => {
      console.log('Current quiz state:', {
        questionsLength: prev.questions.length,
        currentIndex: prev.currentQuestionIndex,
        selectedAnswer: prev.selectedAnswer,
      });

      if (prev.selectedAnswer !== null) {
        console.log('Already answered, returning previous state');
        return prev; // Already answered
      }

      const currentQuestion = prev.questions[prev.currentQuestionIndex];
      if (!currentQuestion) {
        console.error('No current question found', {
          questionsLength: prev.questions.length,
          currentIndex: prev.currentQuestionIndex,
        });
        return prev;
      }

      const isCorrect = answerIndex === currentQuestion.correctAnswer;
      console.log('Answer is correct:', isCorrect);

      const newState = {
        ...prev,
        selectedAnswer: answerIndex,
        showExplanation: true,
        score: isCorrect ? prev.score + QUIZ_GAME.POINTS_CORRECT : prev.score,
        correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
        wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
      };

      console.log('New quiz state after answer:', {
        selectedAnswer: newState.selectedAnswer,
        showExplanation: newState.showExplanation,
        currentIndex: newState.currentQuestionIndex,
        questionsLength: newState.questions.length,
      });

      return newState;
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

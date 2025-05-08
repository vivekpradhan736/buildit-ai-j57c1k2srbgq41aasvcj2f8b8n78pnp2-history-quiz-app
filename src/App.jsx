import React, { useState } from 'react';
import QuizDisplay from './components/QuizDisplay';
import Results from './components/Results';
import { questions } from './data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6"><span role="img" aria-label="Quiz">🧠</span> History Quiz</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        {showResults ? (
          <Results score={score} totalQuestions={questions.length} resetQuiz={resetQuiz} />
        ) : (
          <QuizDisplay
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            handleAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default App;

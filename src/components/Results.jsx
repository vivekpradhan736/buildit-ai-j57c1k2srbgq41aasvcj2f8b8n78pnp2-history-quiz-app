import React from 'react';
import { Star } from 'lucide-react';

function Results({ score, totalQuestions, resetQuiz }) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4"><span role="img" aria-label="Trophy">🏆</span> Results</h2>
      <p className="text-gray-700 mb-4">You scored {score} out of {totalQuestions} ({percentage.toFixed(0)}%)</p>
      <div className="flex items-center justify-center mb-4">
        {[...Array(score)].map((_, index) => (
          <Star key={index} className="h-6 w-6 text-yellow-500 mr-1" />
        ))}
      </div>
      <button onClick={resetQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;

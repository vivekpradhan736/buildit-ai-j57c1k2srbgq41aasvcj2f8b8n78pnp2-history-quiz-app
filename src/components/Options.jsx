import React from 'react';

function Options({ options, handleAnswer }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleAnswer(option.isCorrect)}
          className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {option.answerText}
        </button>
      ))}
    </div>
  );
}

export default Options;

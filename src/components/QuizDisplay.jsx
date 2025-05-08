import React from 'react';
import Options from './Options';

function QuizDisplay({ question, questionNumber, totalQuestions, handleAnswer }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Question {questionNumber} / {totalQuestions}</h2>
      <img src={question.image} alt={question.questionText} className="w-full h-48 object-cover rounded-md mb-4" />
      <p className="text-gray-700 mb-4">{question.questionText}</p>
      <Options options={question.answerOptions} handleAnswer={handleAnswer} />
    </div>
  );
}

export default QuizDisplay;

/* eslint-disable no-restricted-globals */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSelection = () => {
  const handleQuizSelect = (quizId) => {
    const width = screen.availWidth;
    const height = screen.availHeight;
    const quizWindow = window.open(`/quiz/${quizId}`, '_blank', `width=${width},height=${height},top=0,left=0`);
    if (quizWindow) {
      quizWindow.moveTo(0, 0);
      quizWindow.resizeTo(width, height);
      quizWindow.opener = null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Select a Quiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((quizId) => (
          <button
            key={quizId}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleQuizSelect(quizId)}
          >
            Quiz {quizId}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizSelection;
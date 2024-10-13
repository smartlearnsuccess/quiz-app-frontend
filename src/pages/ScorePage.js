import React from 'react';
import './ScorePage.css';

const ScorePage = ({ score, questions, userAnswers }) => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="score-page">
      <button className="close-button" onClick={handleClose}>X</button>
      <h2>Your Score</h2>
      <p>You scored {score} out of {questions.length}</p>
      <h3>Review Your Answers</h3>
      <table className="results-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.options[question.answer-1];
            const isUnanswered = userAnswer === undefined || userAnswer === null || userAnswer === '';

            return (
              <tr key={index} className={isUnanswered ? 'unanswered' : isCorrect ? 'correct' : 'incorrect'}>
                <td>{question.question}</td>
                <td>{userAnswer || 'Not Answered'}</td>
                <td>{question.options[question.answer-1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ScorePage;
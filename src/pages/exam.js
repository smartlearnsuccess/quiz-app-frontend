import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question';
import './Quiz';


const Quiz = () => {
    const questions = [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4'
      },
      {
        question: 'What is 2 + 4?',
        options: ['3', '4', '5', '6'],
        answer: '6'
      }
    ];
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(30); // Global timer for all questions
    const [answeredQuestions, setAnsweredQuestions] = useState([]); // Track answered questions
  
    useEffect(() => {
      if (timer === 0) {
        setShowScore(true);
      }
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]); // Mark question as answered
    // handleNextQuestion();
  };

  const handleClearAnswer = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = null;
    setUserAnswers(updatedAnswers);
    setAnsweredQuestions(answeredQuestions.filter(index => index !== currentQuestionIndex)); // Unmark question as answered
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const handlePreviousQuestion = () => {
    const prevQuestionIndex = currentQuestionIndex - 1;
    if (prevQuestionIndex >= 0) {
      setCurrentQuestionIndex(prevQuestionIndex);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowScore(true);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score">
          <h2>Your score is {score} out of {questions.length}</h2>
          <h3>Review your answers:</h3>
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
                const isCorrect = userAnswer === question.answer;
                const isUnanswered = userAnswer === undefined || userAnswer === null || userAnswer === '';
  
                return (
                  <tr key={index} className={isUnanswered ? 'unanswered' : isCorrect ? 'correct' : 'incorrect'}>
                    <td>{question.question}</td>
                    <td>{userAnswer || 'Not Answered'}</td>
                    <td>{question.answer}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="quiz-content">
          <div className="main-content">
            <div className="timer">Time left: {timer} seconds</div>
            <div className="question-number">
              Question {currentQuestionIndex + 1} out of {questions.length}
            </div>
            <Question
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              selectedAnswer={userAnswers[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
            <div className="navigation-buttons">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="nav-button"
              >
                Previous
              </button>
              <button
                onClick={handleClearAnswer}
                className="nav-button"
              >
                Clear Answer
              </button>
              {currentQuestionIndex === questions.length - 1 ? (
                <button onClick={handleSubmit} className="nav-button">
                  Submit
                </button>
              ) : (
                <button onClick={handleNextQuestion} className="nav-button">
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="sidebar">
            <h3>Questions</h3>
            <div className="question-buttons">
              {questions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionSelect(index)}
                  className={`question-button ${answeredQuestions.includes(index) ? 'answered' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default Quiz;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question';
import './Quiz.css';
import ScorePage from './ScorePage';
import answeredIcon from '../assets/img/answered.png';
import notansweredIcon from '../assets/img/not_answered.png';
import notvisitedIcon from '../assets/img/not_visited.png';
import reviewlaterIcon from '../assets/img/review.png';
import reviewanserIcon from '../assets/img/review_answer.png';
// import quizzes from '../data/quizData'; // Import the quiz data
import quizzes from '../data/quiz-CurrentAffairs-1'; // Import the quiz data

const Quiz = () => {
  const { quizId } = useParams(); // Extract quizId from URL



  // const questions = quizzes[quizId] || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // const [userAnswers, setUserAnswers] = useState(Array(quizzes[quizId].length).fill(null));
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(3600); // Global timer for all questions in seconds (e.g., 1 hour)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // collapse bar
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Track answered questions
  const [markedForReview, setMarkedForReview] = useState([]); // Track Mark for Review Questions
  const [unansweredQuestions, setUnAnsweredQuestions] = useState([]); // Track answered questions
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Initialize userAnswers state
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/quizzes/${quizId}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setQuestions(data);
          setUserAnswers(Array(data.length).fill(null));
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (err) {
        console.error('Failed to fetch quiz data:', err);
      }
    };

    fetchQuizData();
  }, [quizId]);

  useEffect(() => {
    if (timer === 0) {
      setShowScore(true);
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleClearAnswer = () => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = null;
    setUserAnswers(updatedAnswers);
    setAnsweredQuestions(answeredQuestions.filter(index => index !== currentQuestionIndex)); // Unmark question as answered
    setUnAnsweredQuestions([...unansweredQuestions, currentQuestionIndex]); // Mark question as Not answered
  };
  const handleAnswer = (selectedOption) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]); // Mark question as answered
    setUnAnsweredQuestions(unansweredQuestions.filter(index => index !== currentQuestionIndex)); // Unmark question as NOT answered
    // handleNextQuestion();
  };


  const handleNextQuestion = () => {

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
    if(answeredQuestions[currentQuestionIndex] == null ){
      setUnAnsweredQuestions([...unansweredQuestions, currentQuestionIndex]); // Mark question as Not answered
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
    const question = questions[index];
    if (question && Array.isArray(question.options) && question.answer > 0 && question.answer <= question.options.length) {
      console.log(answer + " :: " + question.options[question.answer - 1]);
      if (answer === question.options[question.answer - 1]) {
        calculatedScore += 1;
      } else if (answer != null) {
        calculatedScore -= 0.25;
      }
    } else {
      console.error(`Invalid question data at index ${index}:`, question);
    }
  });
  setScore(calculatedScore);
  setShowScore(true);
};

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };


  const handleMarkForReview = () => {
    setMarkedForReview((prev) => {
      if (prev.includes(currentQuestionIndex)) {
        return prev.filter((index) => index !== currentQuestionIndex);
      } else {
        return [...prev, currentQuestionIndex];
      }
    });
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (

    
    <>
    {/* <div> */}
    {/* //   {questions.length > 0 ? ( */}
    {/* //     questions.map((question, index) => ( */}
    {/* //       <div key={index}> */}
    {/* //           <p>{questions[currentQuestionIndex].options}</p> */}
    {/* //          Render other question details */}
    {/* //       </div> */}
    {/* //     )) */}
        
      {/* // ) : ( */}
      {/* //   <p>Loading questions...</p> */}
      {/* // )} */}
    {/* // </div> */}
    <div class="mx-auto p-4">
        {showScore ? (
          <ScorePage score={score} questions={questions} userAnswers={userAnswers} />
        ) : (
          <div>
            <h2 class="text-xl font-bold bg-blue-500 text-white p-2 rounded">
              Current Affairs MCQ June 4th Week
            </h2>

            <div class="flex mt-4 h-90vh" id="questionPanelHeight">
              <div className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
                <div class="bg-gray-200 p-2 rounded mb-4">
                  <button class="bg-blue-500 text-white px-4 py-2 rounded">
                    Current Affairs
                  </button>
                </div>
                <div className="timer">Time left: {formatTime(timer)}</div>

                {questions.length > 0 && (
                  <Question
                    currentQuestionNumber={currentQuestionIndex + 1}
                    question={questions[currentQuestionIndex].question}
                    // options={questions[currentQuestionIndex].options}
                    options={Array.isArray(questions[currentQuestionIndex].options) ? questions[currentQuestionIndex].options : []}
                    
                    selectedAnswer={userAnswers[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                  />
                )}
                <div className="navigation-buttons">
                  {/* <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="nav-button"
            >
              Previous
            </button> */}
                  <button
                    onClick={handleMarkForReview}
                    className="nav-button"
                  >
                    {markedForReview.includes(currentQuestionIndex) ? 'Unmark' : 'Mark for Review'}
                  </button>


                  <button
                    onClick={handleClearAnswer}
                    className="nav-button"
                  >
                    Clear Response
                  </button>
                  {currentQuestionIndex === questions.length - 1 ? (
                    <button onClick={handleSubmit} className="nav-button">
                      Submit
                    </button>
                  ) : (
                    <button onClick={handleNextQuestion} className="nav-button">
                      Save & Next
                    </button>
                  )}
                </div>
              </div>
              <div class={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <button onClick={toggleSidebar} className="toggle-sidebar-button">
                  {isSidebarCollapsed ? '<<' : '>>'}
                </button>
                {!isSidebarCollapsed && (
                  <>


                    <div class="question-buttons bg-white p-4 rounded shadow mb-4 flex-auto">
                      <div id="Question pallete2" class="h-3/5 w-full flex-auto">
                        <h3>Questions Palette</h3>
                        <div class="flex flex-wrap">
                        {questions.map((q, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuestionSelect(index)}
                              class="px-5 pr-5 bg-cover bg-center bg-no-repeat "
                              className={`question-button ${answeredQuestions.includes(index) ? 'answered' : ''} ${markedForReview.includes(index) ? 'marked' : ''} ''} ${unansweredQuestions.includes(index) ? 'unanswered' : ''} `}
                            >
                              <span class="font-semibold w-5">  {index + 1} </span>
                            </button>
                          ))}
                        </div>

                      </div>

                      <div class="mt-4 w-full ">
                        <div class="flex items-center mb-2">
                          <img src={answeredIcon} alt="Answered" class="pr-5 bg-no-repeat" />
                          Answered
                        </div>
                        <div class="flex items-center mb-2">
                          <img src={notansweredIcon} alt="NotAnswered" class="pr-5 bg-cover bg-center bg-no-repeat" />
                          Not Answered
                        </div>
                        <div class="flex items-center mb-2">
                          <img src={reviewlaterIcon} alt="ReviewLater" class="pr-5" />
                          Marked
                        </div>
                        <div class="flex items-center mb-2">
                          <img src={notvisitedIcon} alt="NotVisited" class="pr-5 bg-cover bg-center bg-no-repea" />
                          Not Visited
                        </div>
                        <div class="flex items-center mb-2">
                          <img src={reviewanserIcon} alt="Answered&Marked" class="pr-5" />
                          Answered &amp; Marked for Review
                        </div>
                      </div>
                      <div class="mt-4 w-full">
                        <label class="block mb-2" for="filter">
                          Filter:
                        </label>
                        <select class="border rounded p-1 w-full" id="filter">
                          <option>
                            All
                          </option>
                        </select>
                      </div>

                      <div class="flex justify-between w-full">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded">
                          Question Paper
                        </button>
                        <button class="bg-blue-500 text-white px-4 py-2 rounded">
                          Instructions
                        </button>
                        <button onClick={handleSubmit} className="nav-button" class="bg-red-500 text-white px-4 py-2 rounded">
                          Submit
                        </button>
                      </div>

                    </div>
                  </>
                )}

              </div>
            </div>
          </div>
        )}
      </div></>
  );
  
};

export default Quiz;

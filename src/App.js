import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import QuizSelection from './components/QuizSelection';
import Quiz from './pages/Quiz';
import Exam from './pages/exam';
import NoPage from './pages/NoPage';
import Temp from './pages/temp';

const App = () => {
  return (

    <div>    
      <h1> Header </h1>
      <BrowserRouter>
      <Routes>
        <Route index element={<QuizSelection />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </BrowserRouter>
    <h3>Footer</h3>
    </div>
  );
};

export default App;
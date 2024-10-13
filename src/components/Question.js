import React from 'react';
import './Question.css';

const Question = ({ currentQuestionNumber, question, options, selectedAnswer, onAnswer }) => {
  const convertToRoman = (num) => {
    const romanNumerals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    return romanNumerals[num - 1] || num;
  };
  return (

    
    <div className="question-container">
            <div class="border-2 border-gray-900 rounded">
            <div class=" pl-4 rounded">
       <div class="flex justify-between items-center p-3">
        <h3 class="text-lg font-bold">
         Question No. {currentQuestionNumber}
        </h3>
        <div class="flex items-center">
         <span class="mr-2">
          View In :
         </span>
         <select class="border rounded p-1">
          <option>
           English
          </option>
         </select>
         <span class="ml-4 text-green-600 font-bold">
          +1.00
         </span>
         <span class="ml-2 text-red-600 font-bold">
          -0.25
         </span>
        </div>
       </div>
       </div>
       <div class="flex-grow border-2 border-t border-gray-500"></div>
       <p class="m-4 p-4 text-lg font-bold">
       {question}
       </p>


      <ul class="m-4 p-4 max-w-max ml-10 ">
        {options.map((option, index) => (
          <li 
            key={index}
            class={`option ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => onAnswer(option)}
          >
              <input
              type="radio"
              name="option"
              checked={selectedAnswer === option}
              onChange={() => onAnswer(option)}
            />
            <span className="option-label"> {convertToRoman(index + 1)}) {option}</span>
          </li>
          
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Question;
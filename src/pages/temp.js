import React, { useState } from 'react';

const App = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="container">
      
      <body class="bg-gray-100">
  <div class="max-w-7xl mx-auto p-4">
   <div class="flex justify-between items-center mb-4">
    <div class="flex items-center">
     <img alt="Practice Board Logo" class="mr-2" height="50" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-LmQ09WWGIGwOeeA4ArnRw0x5/user-uJPET5fjNenSso8wCETWVNOp/img-UxpPREUr8EPOKobVNHfTXNoe.png?st=2024-09-13T13%3A27%3A18Z&amp;se=2024-09-13T15%3A27%3A18Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-13T10%3A38%3A41Z&amp;ske=2024-09-14T10%3A38%3A41Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=0Co/5StFtrDGCK/9FtYUsRUWo0cBsfxT2NHK1N59eaw%3D" width="50"/>
     <h1 class="text-2xl font-bold text-green-600">
      practice board
     </h1>
    </div>
    <button class="bg-blue-500 text-white px-4 py-2 rounded">
     Exit Full Screen
    </button>
   </div>
   <div class="bg-white p-4 rounded shadow">
    <h2 class="text-xl font-bold bg-blue-500 text-white p-2 rounded">
     Current Affairs MCQ June 4th Week
    </h2>
    <div class="flex mt-4">
     <div class="w-3/4 pr-4">
      <div class="bg-gray-200 p-2 rounded mb-4">
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Current Affairs
       </button>
      </div>
      <div class="border p-4 rounded mb-4">
       <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold">
         Question No.97
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
       <p class="mb-4">
        According to recent newspaper reports, what is the tenure of the Sustainability-linked bonds issued by Mindspace Business Parks REIT?
       </p>
       <div>
        <label class="block mb-2">
         <input class="mr-2" name="question" type="radio"/>
         A) 5 years
        </label>
        <label class="block mb-2">
         <input class="mr-2" name="question" type="radio"/>
         B) 7 years
        </label>
        <label class="block mb-2">
         <input class="mr-2" name="question" type="radio"/>
         C) 10 years
        </label>
        <label class="block mb-2">
         <input class="mr-2" name="question" type="radio"/>
         D) 15 years
        </label>
        <label class="block mb-2">
         <input class="mr-2" name="question" type="radio"/>
         E) 20 years
        </label>
       </div>
      </div>
      <div class="flex justify-between">
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Mark for review
       </button>
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Clear Response
       </button>
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Save &amp; Next
       </button>
      </div>
     </div>
     <div class="w-1/4 pl-4">
      <div class="bg-white p-4 rounded shadow mb-4">
       <div class="flex justify-between items-center mb-4">
        <div>
         <span class="block text-xl font-bold">
          0
         </span>
         <span class="block">
          Hours
         </span>
        </div>
        <div>
         <span class="block text-xl font-bold">
          43
         </span>
         <span class="block">
          Minutes
         </span>
        </div>
        <div>
         <span class="block text-xl font-bold">
          59
         </span>
         <span class="block">
          Seconds
         </span>
        </div>
       </div>
       <div class="text-center font-bold mb-4">
        Rithika
       </div>
       <div class="question-palette grid grid-cols-5 gap-2">
        <button class="not-visited">
         55
        </button>
        <button class="not-visited">
         56
        </button>
        <button class="not-visited">
         57
        </button>
        <button class="not-visited">
         58
        </button>
        <button class="not-visited">
         59
        </button>
        <button class="not-visited">
         60
        </button>
        <button class="not-visited">
         61
        </button>
        <button class="not-visited">
         62
        </button>
        <button class="not-visited">
         63
        </button>
        <button class="not-visited">
         64
        </button>
        <button class="not-visited">
         65
        </button>
        <button class="not-visited">
         66
        </button>
        <button class="not-visited">
         67
        </button>
        <button class="not-visited">
         68
        </button>
        <button class="not-visited">
         69
        </button>
        <button class="not-answered">
         70
        </button>
        <button class="not-visited">
         71
        </button>
        <button class="not-visited">
         72
        </button>
        <button class="not-answered">
         73
        </button>
        <button class="not-visited">
         74
        </button>
        <button class="not-answered">
         75
        </button>
        <button class="not-visited">
         76
        </button>
        <button class="not-answered">
         77
        </button>
        <button class="not-visited">
         78
        </button>
        <button class="not-visited">
         79
        </button>
        <button class="not-visited">
         80
        </button>
        <button class="not-visited">
         81
        </button>
        <button class="not-visited">
         82
        </button>
        <button class="not-visited">
         83
        </button>
        <button class="not-visited">
         84
        </button>
        <button class="not-visited">
         85
        </button>
        <button class="not-visited">
         86
        </button>
        <button class="not-visited">
         87
        </button>
        <button class="not-visited">
         88
        </button>
        <button class="not-visited">
         89
        </button>
        <button class="not-visited">
         90
        </button>
        <button class="not-visited">
         91
        </button>
        <button class="not-visited">
         92
        </button>
        <button class="not-answered">
         93
        </button>
        <button class="not-visited">
         94
        </button>
        <button class="not-visited">
         95
        </button>
        <button class="not-visited">
         96
        </button>
        <button class="not-answered">
         97
        </button>
        <button class="not-answered">
         98
        </button>
        <button class="not-visited">
         99
        </button>
        <button class="not-visited">
         100
        </button>
        <button class="not-visited">
         101
        </button>
        <button class="not-visited">
         102
        </button>
        <button class="not-visited">
         103
        </button>
        <button class="not-visited">
         104
        </button>
        <button class="not-answered">
         105
        </button>
        <button class="not-visited">
         106
        </button>
        <button class="not-visited">
         107
        </button>
        <button class="not-visited">
         108
        </button>
        <button class="not-visited">
         109
        </button>
        <button class="not-visited">
         110
        </button>
        <button class="not-answered">
         111
        </button>
        <button class="not-answered">
         112
        </button>
        <button class="not-visited">
         113
        </button>
        <button class="not-visited">
         114
        </button>
        <button class="not-visited">
         115
        </button>
        <button class="not-visited">
         116
        </button>
        <button class="not-visited">
         117
        </button>
        <button class="not-visited">
         118
        </button>
        <button class="not-visited">
         119
        </button>
        <button class="not-visited">
         120
        </button>
       </div>
       <div class="mt-4">
        <div class="flex items-center mb-2">
         <span class="w-4 h-4 bg-green-500 inline-block mr-2">
         </span>
         Answered
        </div>
        <div class="flex items-center mb-2">
         <span class="w-4 h-4 bg-red-500 inline-block mr-2">
         </span>
         Not Answered
        </div>
        <div class="flex items-center mb-2">
         <span class="w-4 h-4 bg-yellow-500 inline-block mr-2">
         </span>
         Marked
        </div>
        <div class="flex items-center mb-2">
         <span class="w-4 h-4 bg-gray-300 inline-block mr-2">
         </span>
         Not Visited
        </div>
        <div class="flex items-center mb-2">
         <span class="w-4 h-4 bg-purple-500 inline-block mr-2">
         </span>
         Answered &amp; Marked for Review
        </div>
       </div>
       <div class="mt-4">
        <label class="block mb-2" for="filter">
         Filter:
        </label>
        <select class="border rounded p-1 w-full" id="filter">
         <option>
          All
         </option>
        </select>
       </div>
      </div>
      <div class="flex justify-between">
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Question Paper
       </button>
       <button class="bg-blue-500 text-white px-4 py-2 rounded">
        Instructions
       </button>
       <button class="bg-red-500 text-white px-4 py-2 rounded">
        Submit
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 </body>
    </div>
  );
};

export default App;
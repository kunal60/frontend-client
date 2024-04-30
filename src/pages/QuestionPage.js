// QuestionPage.js
import React from 'react';

const QuestionPage = () => {
    // Define the questions and answers here
    const questions = [
        "Question 1: What is the first question?",
        "Question 2: What is the second question?",
        "Question 3: What is the third question?",
        "Question 4: What is the fourth question?",
        "Question 5: What is the fifth question?",
    ];

    return (
        <div>
            <h1>Questions</h1>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionPage;

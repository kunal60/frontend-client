// QuestionPage.js
import React, { useState } from 'react';
import './QuestionPage.css'; // Import CSS file for styling
import Loader from './Loader'; // Import Loader component for displaying loading spinner

const QuestionPage = () => {
    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Function to handle click on a question
    const handleClick = async (question) => {
        setIsLoading(true);
        setMessage(`Fetching answer for "${question}"...`);
        try {
            const response = await fetch('http://localhost:3001/answers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });
            const data = await response.json();
            // Update answers state with the retrieved answer
            setAnswers(prevState => ({ ...prevState, [question]: data.answer }));
            setMessage('');
        } catch (error) {
            console.error('Error fetching answer:', error);
            setMessage('Error fetching answer. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    // Define the questions here
    const questions = [
        "Can you summarize the content in 4-5 lines?",
        "What is the conclusion or abstract of the study?",
        "What are the overall survival benefits mentioned in the study?",
        "What is meant by progress-free survival according to the study?",
        "Is there any graph or data related to overall survival in the study?",
        "Does the study include a graph regarding progression-free survival?",
        "What are the limitations of the study?",
        "Could you identify the strengths of this study?"
    ];

    return (
        <div className="question-page">
            <h1>Questions</h1>
            <p className="message">{message}</p>
            <ul className="question-list">
                {questions.map((question, index) => (
                    // Render each question as a clickable list item
                    <li key={index} onClick={() => handleClick(question)} className="question-item">
                        <span>{question}</span>
                        {/* Display the loading spinner if isLoading is true */}
                        {isLoading && <Loader />}
                        {/* Display the answer if available */}
                        {answers[question] && <div className="answer">Answer: {answers[question]}</div>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionPage;

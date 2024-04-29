// QuestionPrompt.js
import React, { useState } from 'react';

const QuestionPrompt = () => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement logic to send question to the server
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask your question..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionPrompt;

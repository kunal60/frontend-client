import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotificationsPage from '../pages/NotificationsPage'; // Update import path
import QuestionPromptPage from '../pages/QuestionPromptPage'; // Update import path

const App = () => {
    return (
        <Router>
            <div className="container">
                {/* Add content for the NotificationsPage */}
                <Routes>
                    <Route exact path="/" element={<NotificationsPage />} />
                    {/* <Route exact path="/ask" element={<QuestionPromptPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;

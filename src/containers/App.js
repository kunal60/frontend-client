import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotificationsPage from '../pages/NotificationsPage'; // Update import path
import QuestionPage from '../pages/QuestionPage'; // Update import path

const App = () => {
    return (
        <Router>
            <div className="container">
                {/* Add content for the NotificationsPage */}
                <Routes>
                    <Route exact path="/" element={<NotificationsPage />} />
                    <Route exact path="/questions" element={<QuestionPage />} /> // Define the route for the new page
                </Routes>
            </div>
        </Router>
    );
};

export default App;

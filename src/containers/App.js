import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotificationsPage from '../pages/NotificationsPage';
import QuestionPromptPage from '../pages/QuestionPromptPage';

const App = () => {
    return (
        <Router>
        <div>
            {/* Add a div as a container for route content */}
            <div className="container">
                <div>Hellp</div>
                <Routes>
                <Route exact path="/" component={NotificationsPage} />
                <Route exact path="/ask" component={QuestionPromptPage} />
                </Routes>
            </div>
        </div>
    </Router>
    );
};

export default App;




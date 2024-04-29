import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from '../pages/UploadPage';
import DashboardPage from '../pages/DashboardPage';

const App = () => {
    return (
        <Router>
        <div>
            {/* Add a div as a container for route content */}
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<UploadPage />} />
                    <Route exact path="/dashboard" element={<DashboardPage />} />
                </Routes>
            </div>
        </div>
    </Router>
    );
};

export default App;

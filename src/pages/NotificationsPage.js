import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notifications';
import bell1Icon from '../assets/bell.png'; // Import bell1 icon
import { Link } from 'react-router-dom';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [showNotificationIcon, setShowNotificationIcon] = useState(false);
    const [articleName, setArticleName] = useState('');

    useEffect(() => {
        // Fetch notifications from the server initially
        fetchNotifications();

        // Set up interval to fetch notifications every 5 seconds
        const interval = setInterval(fetchNotifications, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Fetch notifications from the server
    const fetchNotifications = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/api/notifications');
            const data = await response.json();
            const { showArticleNotification, articleName } = data;

            // Update notifications state
            setNotifications(data);

            // Check if the article notification should be shown
            if (showArticleNotification) {
                setShowNotificationIcon(true);
                setArticleName(articleName);
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    // Show article name when notification icon is clicked
    const handleBellClick = () => {
        // Implement logic to display the article name (e.g., show a modal)
    };

    // Fetch question-answer pairs from API
    const fetchQAFromAPI = async () => {
        try {
            const response = await fetch('your-api-url');
            const data = await response.json();
            // Process the data and create a prompt engineering based on questions
            console.log(data);
        } catch (error) {
            console.error('Error fetching question-answer pairs:', error);
        }
    };

    return (
        <div>
            <h1>Notifications</h1>
            {/* Show notification icon only when there's a new notification */}
            {showNotificationIcon && (
                <div className="notification-container">
                    <img src={bell1Icon} alt="Notification Bell" />
                    <span>A new Article named: {articleName} is published!</span>
                    {/* Button to fetch question-answer pairs */}
  {/* Use Link to navigate to the new page */}
  <Link to="/questions">
                        <button>Show More Insights</button>
                    </Link>
                </div>
            )}
            <Notifications notifications={notifications} />
        </div>
    );
};

export default NotificationsPage;

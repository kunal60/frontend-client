import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notifications';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [currentCount, setCurrentCount] = useState(0);
    const [showNotificationIcon, setShowNotificationIcon] = useState(false);

    useEffect(() => {
        // Fetch notifications from the server initially
        fetchNotifications();

        // Set up interval to fetch notifications every 30 seconds
        const interval = setInterval(fetchNotifications, 5000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Fetch notifications from the server
    const fetchNotifications = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/api/notifications'); // Correct endpoint
            const data = await response.json();
            const { count, articleName } = data; // Change 'name' to 'articleName'

            // If the incoming count is greater than the current count, show notification
            if (count > currentCount) {
                showNotification(articleName); // Pass 'articleName' to showNotification function
            }

            // Update the current count
            setCurrentCount(count);

            // Set notifications data
            setNotifications(data);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    // Show notification
    const showNotification = (articleName) => {
        // Set showNotificationIcon to true to display the notification icon
        setShowNotificationIcon(true);

        // Implement notification logic here (e.g., using browser notifications)
        console.log(`New article published: ${articleName}`);
        // Example: 
        // const notification = new Notification('New article published', {
        //     body: articleName
        // });
    };

    // Hide notification icon
    const hideNotificationIcon = () => {
        setShowNotificationIcon(false);
    };

    return (
        <div>
            <h1>Notifications1</h1>
            {/* Show notification icon if showNotificationIcon is true */}
            {showNotificationIcon && <div className="notification-icon" onClick={hideNotificationIcon}>New Article Published: {notifications.articleName}!</div>}

            <Notifications notifications={notifications} />
        </div>
    );
};

export default NotificationsPage;

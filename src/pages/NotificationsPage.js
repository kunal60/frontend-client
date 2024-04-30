import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notifications';
import bell1Icon from '../assets/bell.png'; // Import bell1 icon

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

                // Hide the notification icon after 5 seconds
                setTimeout(() => {
                    setShowNotificationIcon(false);
                }, 5000);
            }
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };

    return (
        <div>
            <h1>Notifications</h1>
            {/* Show notification icon only when there's a new notification */}
            {showNotificationIcon && <div className="notification-icon"><img src={bell1Icon} alt="Notification Bell" /></div>}
            <Notifications notifications={notifications} />
        </div>
    );
};

export default NotificationsPage;

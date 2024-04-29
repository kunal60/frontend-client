// NotificationsPage.js
import React, { useState, useEffect } from 'react';
import Notifications from '../components/Notifications';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications from the server
        // Example:
        const fetchData = async () => {
            const response = await fetch('/api/notifications');
            const data = await response.json();
            setNotifications(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Notifications</h1>
            <Notifications notifications={notifications} />
        </div>
    );
};

export default NotificationsPage;

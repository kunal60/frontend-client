import React, { useState, useEffect } from 'react';

const Notifications = ({ notifications }) => {
    // Ensure notifications is initialized as an empty array if it's null or undefined
    const [notificationList, setNotificationList] = useState([]);

    // Update notificationList state when notifications prop changes
    useEffect(() => {
        // Check if notifications is an array before updating state
        if (Array.isArray(notifications)) {
            setNotificationList(notifications);
        } else {
            // If notifications is not an array, log a warning and set an empty array
            console.warn('Notifications is not an array:', notifications);
            setNotificationList([]);
        }
    }, [notifications]);

    return (
        <div>
            <h1>Notifications</h1>
            {/* Render notifications UI here */}
            {notificationList.map(notification => (
                <div key={notification.id}>
                    {/* Render individual notification content here */}
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Notifications;

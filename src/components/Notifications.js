// Notifications.js
import React from 'react';

const Notifications = ({ notifications }) => {
    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification.title} - {notification.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
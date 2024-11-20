import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './stylesheet/Notifications.css'; // Import the CSS file

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, this would be an API call
    const mockNotifications = [
      {
        id: 1,
        title: "Time Capsule Unlocked",
        message: "Your capsule 'Birthday Wishes' is now available!",
        date: "2024-03-15T10:00:00Z",
        read: false
      },
      {
        id: 2,
        title: "Upcoming Unlock",
        message: "Your capsule 'Time Capsule 2025' will unlock in 7 days",
        date: "2024-03-14T15:30:00Z",
        read: true
      }
    ];

    setNotifications(mockNotifications);
    setLoading(false);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1>Notifications</h1>
        {notifications.some(n => !n.read) && (
          <button
            onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
            className="mark-all-button"
          >
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="empty-notifications">
          <div className="bell-icon" />
          <h3>No notifications</h3>
          <p>You're all caught up!</p>
        </div>
      ) : (
        <div className="notification-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
                <p className="notification-date">
                  {format(new Date(notification.date), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
              {!notification.read && (
                <button
                  onClick={() => markAsRead(notification.id)}
                  className="mark-read-button"
                >
                  Mark as read
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

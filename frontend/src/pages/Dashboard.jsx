import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CapsuleCard from '../components/CapsuleCard';
import './stylesheet/Dashboard.css'; // Import the CSS file

export default function Dashboard() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - in a real app, this would be an API call
    const mockCapsules = [
      {
        id: 1,
        title: "Birthday Wishes",
        message: "Happy 30th birthday! Here's to many more amazing years!",
        recipientEmail: "friend@example.com",
        unlockDate: "2024-12-25",
        imageUrl: "https://i.imgur.com/CzXTtJV.jpg"
      },
      {
        id: 2,
        title: "Time Capsule 2025",
        message: "Remember where you were when you wrote this...",
        recipientEmail: "future@example.com",
        unlockDate: "2025-01-01"
      }
    ];
    
    setCapsules(mockCapsules);
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    // In a real app, this would make an API call
    setCapsules(capsules.filter(capsule => capsule.id !== id));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1 className="title">Your Time Capsules</h1>
        <Link to="/create" className="create-button">
          Create New Capsule
        </Link>
      </div>

      {capsules.length === 0 ? (
        <div className="no-capsules">
          <h3 className="message">No time capsules yet</h3>
          <p className="description">Create your first time capsule to get started!</p>
        </div>
      ) : (
        <div className="capsules-grid">
          {capsules.map((capsule) => (
            <CapsuleCard key={capsule.id} capsule={capsule} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

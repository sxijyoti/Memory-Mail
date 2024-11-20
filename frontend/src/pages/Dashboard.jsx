import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CapsuleCard from '../components/CapsuleCard';
import './stylesheet/Dashboard.css'; // Import the CSS file

export default function Dashboard() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For handling any errors from the API

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('authToken');
        console.log('Token retrieved:', token); // Log the token to verify
    
        if (!token) {
          setError('Token not found');
          return;
        }
    
        // Fetching capsules from the backend API
        const response = await fetch('http://localhost:5000/api/capsules', { // Include the backend URL and port
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
          },
        });
    
        // Check if response is OK (200-299 status code)
        if (!response.ok) {
          const errorText = await response.text(); // Get error message as plain text if not JSON
          console.error('Error response:', errorText);
          setError(errorText || 'Failed to fetch capsules');
          return;
        }
    
        // Parse the JSON response
        const result = await response.json();
    
        // Assuming response contains the capsules array
        setCapsules(result.capsules);
      } catch (err) {
        setError('Error fetching capsules');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCapsules();
    

  }, []); // Empty array so this effect runs only once when the component is mounted

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      console.log('Token for delete:', token);  // Log token for deletion action

      const response = await fetch(`/api/capsules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      if (response.ok) {
        // Remove the deleted capsule from the state
        setCapsules(capsules.filter(capsule => capsule._id !== id));
      } else {
        const result = await response.json();
        setError(result.message || 'Failed to delete capsule');
      }
    } catch (err) {
      setError('Error deleting capsule');
      console.error(err);
    }
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

      {error && <div className="error-message">{error}</div>}

      {capsules.length === 0 ? (
        <div className="no-capsules">
          <h3 className="message">No time capsules yet</h3>
          <p className="description">Create your first time capsule to get started!</p>
        </div>
      ) : (
        <div className="capsules-grid">
          {capsules.map((capsule) => (
            <CapsuleCard key={capsule._id} capsule={capsule} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

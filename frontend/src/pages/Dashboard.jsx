import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CapsuleCard from '../components/CapsuleCard';
import './stylesheet/Dashboard.css';

export default function Dashboard() {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
          setError('Authentication token not found');
          setLoading(false);
          return;
        }
    
        const response = await fetch('http://localhost:5000/api/capsules', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
    
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || 'Failed to fetch capsules');
        }
    
        const result = await response.json();
        setCapsules(result.capsules);
      } catch (err) {
        setError(err.message || 'Error fetching capsules');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchCapsules();
  }, []); 

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      
      const response = await fetch(`http://localhost:5000/api/capsules/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.message || 'Failed to delete capsule');
      }

      // Remove the deleted capsule from the state
      setCapsules(prevCapsules => 
        prevCapsules.filter(capsule => capsule._id !== id)
      );
    } catch (err) {
      setError(err.message || 'Error deleting capsule');
      console.error(err);
    }
  };

  const handleCapsuleClick = (id) => {
    // Handle capsule click - navigate to capsule detail or open modal
    console.log('Clicked capsule:', id);
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
            <CapsuleCard 
              key={capsule._id} 
              capsule={capsule} 
              onClick={handleCapsuleClick}
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
}
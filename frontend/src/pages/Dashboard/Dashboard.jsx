// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>Dashboard</h1>
      <p>Welcome to the Time Capsule Dashboard!</p>
      <div style={{ margin: '1rem 0' }}>
        <h2>Time for next capsule:</h2>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>04 years 11 months 29 days</div>
      </div>
      <div>
        <Link to="/new-entry">
          <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Make New Entry</button>
        </Link>
        <Link to="/old-entries">
          <button style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}>Old Entries</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

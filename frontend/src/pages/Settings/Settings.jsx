import React from 'react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const linkStyle = {
    display: 'block',
    margin: '1rem 0',
    padding: '0.5rem 1rem',
    backgroundColor:'grey',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
    width: 'fit-content',
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Settings</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li> 
          <Link style={linkStyle} to="/error404">Account Settings</Link>
        </li>
        <li> 
          <Link style={linkStyle} to="/error404">Notification Preferences</Link>
        </li>
        <li> 
          <Link style={linkStyle} to="/error404">Privacy</Link>
        </li>
        <li> 
          <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Link your Spotify Account</a>
        </li>
      </ul>
    </div>
  );
};

export default Settings;

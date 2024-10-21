import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyleType: 'none' }}>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Dashboard</Link>
        </li>
        <li>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/settings">Settings</Link>
        </li>
        <li>
            <Link style={{color: 'white', textDecoration: 'none'}} to="/notifications">Notifications</Link>
        </li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;

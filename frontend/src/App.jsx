import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import Notifications from './pages/Misc/Notifications';
import Error404 from './pages/Misc/Error404';
import About from './pages/Misc/About';
import EditRecipients from './pages/Dashboard/EditRecipients';
import NewEntry from './pages/Dashboard/NewEntry';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/about" element={<About/>} />
        <Route path="/error404" element={<Error404 />} /> 
        <Route path="*" element={<Error404 />} /> 
        <Route path="/edit-recipients" element={<EditRecipients />} />
        <Route path="/new-entry" element={<NewEntry />} />
      </Routes>
    </Router>
  );
};

export default App;

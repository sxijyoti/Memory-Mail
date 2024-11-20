import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './stylesheet/Landing.css';

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="landing">
      {/* Hero Section */}
      <div className="landing-hero">
        <div className="landing-container">
          <div className="landing-text-center">
            <h1 className="landing-title">
              Send Messages to the Future
            </h1>
            <p className="landing-subtitle">
              Create digital time capsules with MemoryMail. Share messages, photos, and memories that will be delivered at the perfect moment.
            </p>
            <div className="landing-buttons">
              {user ? (
                <Link to="/dashboard" className="landing-button-primary">
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/register" className="landing-button-primary">
                    Get started
                  </Link>
                  <Link to="/login" className="landing-button-secondary">
                    Sign in <span aria-hidden="true">→</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="landing-animation">
          <div className="circle-animation circle-1"></div>
          <div className="circle-animation circle-2"></div>
          <div className="circle-animation circle-3"></div>
        </div>
      </div>

      {/* About Section */}
      <section className="landing-about">
        <div className="landing-container">
          <h2 className="landing-section-title">About MemoryMail</h2>
          <p className="landing-section-description">
            MemoryMail allows you to send messages, pictures, and videos into the future. 
            Whether it’s a heartfelt note for a loved one or a message to your future self, 
            our platform ensures your memories are preserved and delivered at the right time.
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="landing-contact">
        <div className="landing-container">
          <h2 className="landing-section-title">Contact Us</h2>
          <p className="landing-section-description">
            Have questions or need help? Reach out to us:
          </p>
          <ul className="landing-contact-list">
            <li>Email: <a href="mailto:memorymail@gmail.com">memorymail@gmail.com</a></li>
            <li>Phone: <a href="tel:xxxxxxxxx">XXXXXXXXX</a></li>
            <li>GITHUB LINK</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

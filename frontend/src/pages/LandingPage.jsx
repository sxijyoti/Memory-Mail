import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Create Your Time Capsule</h1>
        <p style={styles.heroSubtitle}>
          Preserve memories, leave messages for the future, and share them when the time is right.
        </p>
        <div style={styles.buttonContainer}>
          <Link to="/dashboard">
            <button style={styles.getStartedButton}>Get Started</button>
          </Link>
          <Link to="/login">
            <button style={styles.loginButton}>Log In</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Features</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <h3>Save Memories</h3>
            <p>Write messages and attach media to revisit later.</p>
          </div>
          <div style={styles.feature}>
            <h3>Choose Your Recipients</h3>
            <p>Select who can access your time capsule when it's time.</p>
          </div>
          <div style={styles.feature}>
            <h3>Set a Release Date</h3>
            <p>Pick the perfect date for your time capsule to be unlocked.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.howItWorksText}>
          Create entries, add recipients, and set a date. We'll take care of the rest and make sure
          your time capsule is preserved until the release date!
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 0',
    backgroundColor: '#f5f5f5',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '2rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  getStartedButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#555',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  featuresSection: {
    textAlign: 'center',
    padding: '4rem 0',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2rem',
  },
  feature: {
    width: '30%',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
  },
  howItWorksSection: {
    textAlign: 'center',
    padding: '4rem 0',
  },
  howItWorksText: {
    fontSize: '1.25rem',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto',
  },
};

export default LandingPage;

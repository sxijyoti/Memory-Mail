import './stylesheet/AboutUs.css'; // Import the CSS file

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-subtitle">
          Learn more about our mission, vision, and the team behind the Time Capsule project.
        </p>
      </div>

      <section className="about-us-section">
        <h2 className="about-us-heading">Our Mission</h2>
        <p className="about-us-text">
          At Time Capsule, we believe in preserving precious memories for the future. Our mission
          is to create a platform where people can save meaningful messages, photos, and more,
          to be unlocked and cherished at the perfect moment.
        </p>
      </section>

      <section className="about-us-section">
        <h2 className="about-us-heading">Our Vision</h2>
        <p className="about-us-text">
          We envision a world where technology bridges the past, present, and future, creating
          lasting connections between people and their memories.
        </p>
      </section>

      <section className="about-us-section">
        <h2 className="about-us-heading">Meet the Team</h2>
        <p className="about-us-text">
          Our team is made up of passionate developers, designers, and memory enthusiasts who
          are committed to building a platform that inspires nostalgia and future joy.
        </p>
      </section>

      <footer className="about-us-footer">
        <p className="about-us-footer-text">
          &copy; {new Date().getFullYear()} Time Capsule. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

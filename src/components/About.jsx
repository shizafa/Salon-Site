import { Link } from 'react-router-dom';
import aboutImg from '../assests/About.jpg';
import '../styles/About.css';

function About() {
  return (
    
    <section className="section about-section">
      <div className="about-inner">
        <div className="about-visual">
          <div
            className="about-glass-panel"
            style={{ backgroundImage: `url(${aboutImg})` }}
          >
            <div className="about-tag">
              <b>Shiza</b>
              Founder &amp; Lead Stylist
            </div>
          </div>
        </div>

        <div className="about-copy">
          <div className="section-label">Our story</div>
          <h2 className="section-title">
            Built on one idea: <em>make people feel good.</em>
          </h2>
          <p className="about-text">
            Signature by Shiza started with a simple belief — that a salon visit
            should leave you lighter, not rushed. What began as a single chair
            has grown into three branches across Faisalabad, but the standard
            hasn't changed: skilled hands, honest advice, and a space that
            feels calm the moment you walk in.
          </p>
          <p className="about-text">
            Every stylist and therapist on our team trains continuously, so
            whether you're in for a bridal trial or a quick trim, you're
            getting the same care and attention to detail.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years of experience</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Branches in Faisalabad</span>
            </div>
            <div className="about-stat">
              <span className="stat-number">5k+</span>
              <span className="stat-label">Happy clients</span>
            </div>
          </div>

          <Link to="/about" className="about-link">
            More about us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
import { Link } from 'react-router-dom';
import team from '../data/team';
import '../styles/AboutPage.css';

function About() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="section about-page-intro">
        <div className="section-label">Our story</div>
        <h1 className="about-page-title">
          Built on one idea: <em>make people feel good.</em>
        </h1>
        <p className="about-page-lead">
          Signature by Eram started with a single chair and a simple belief —
          that a salon visit should leave you lighter, not rushed. Today
          we're three branches across Faisalabad, but the standard hasn't
          moved an inch.
        </p>
      </section>

      {/* ── Story + stats ── */}
      <section className="section about-page-story">
        <div className="about-page-story-grid">
          <div>
            <p className="about-page-text">
              What began as one stylist working out of a small space has
              grown into a full team of hair, skin, nail and bridal
              specialists — but we've kept the part that mattered from day
              one: skilled hands, honest advice, and a space that feels calm
              the moment you walk in.
            </p>
            <p className="about-page-text">
              Every stylist and therapist on our team trains continuously,
              so whether you're in for a quick trim or a full bridal trial,
              you get the same care and attention to detail across all three
              branches.
            </p>
            <Link to="/contact" className="about-page-cta">Book an appointment</Link>
          </div>

          <div className="about-page-stats">
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
            <div className="about-stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Services under one roof</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section about-page-values">
        <div className="section-head">
          <div className="section-label">What guides us</div>
          <h2 className="section-title">Not just a tagline.</h2>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Skill first</h3>
            <p>Every stylist trains continuously — trends change, standards don't.</p>
          </div>
          <div className="value-card">
            <h3>Honest advice</h3>
            <p>We'll tell you what actually suits you, not just what's trending.</p>
          </div>
          <div className="value-card">
            <h3>A calm space</h3>
            <p>No rushing, no overbooking. Your appointment is your time.</p>
          </div>
          <div className="value-card">
            <h3>Consistent, everywhere</h3>
            <p>Same standard whichever of our three branches you walk into.</p>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section about-page-team">
        <div className="section-head">
          <div className="section-label">Meet the team</div>
          <h2 className="section-title">The hands behind the work.</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-tile" key={member.id}>
              <img src={member.image} alt={member.name} className="team-img" />
              <div className="team-caption">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span className="team-branch">{member.branch}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section about-page-cta-block">
        <div className="about-page-cta-glass">
          <h2>Ready to come in?</h2>
          <p>Pick a branch, pick a time — we'll take care of the rest.</p>
          <Link to="/contact" className="hero-cta-primary">Book an appointment</Link>
        </div>
      </section>
    </>
  );
}

export default About;
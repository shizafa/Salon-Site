import { Link } from 'react-router-dom';
import bridalImg from '../assests/bridal.jpg';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero-scene">
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">Faisalabad · Bridal · Hair · Beauty</div>
          <h1 className="hero-heading">
            Your signature look, <em>found here.</em>
          </h1>
          <p className="hero-text">
            From bridal day to everyday, Signature by Shiza brings skilled hands
            and a calm space to hair, skin, nails and makeup — across three
            branches in Faisalabad.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="hero-cta-primary">Book an appointment</Link>
            <Link to="/gallery" className="hero-cta-secondary">See our work</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-glass-panel"
            style={{ backgroundImage: `url(${bridalImg})` }}
          >
            <div className="hero-tag">
              <b>Bridal Makeup</b>
              3 branches · open today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
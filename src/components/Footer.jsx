import { Link } from 'react-router-dom';
import services from '../data/services';
import locations from '../data/locations';
import '../styles/Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-main">Signature</span>
            <span className="footer-logo-sub">by Shiza</span>
          </div>
          <p className="footer-blurb">
            Bridal, hair, skin and nails — done with a calm hand, across three
            branches in Faisalabad.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="footer-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="footer-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M14 8.5h2.5V5h-2.5c-2.2 0-4 1.8-4 4v2H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3V9c0-.55.45-1 1-1z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="footer-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.8-1.2A9 9 0 1 0 12 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                <path d="M8.5 8.8c.2-.5.5-.5.8-.5h.5c.2 0 .4 0 .6.5s.6 1.5.6 1.6.1.3 0 .4c-.5.8-1 .8-.7 1.3.7 1.2 1.4 1.7 2.5 2.2.2.1.3.1.5-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1.9.4 1.8.9 1.9 1s.2.4.1.7c-.1.4-.9 1.2-1.7 1.3-.6.1-1.2.2-3.9-1.1-2.9-1.4-4.1-4-4.2-4.2-.1-.2-.9-1.2-.9-2.3s.6-1.6.8-1.8" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" className="footer-book-link">Book Now</Link>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} to={s.path}>{s.name}</Link>
          ))}
        </div>

        <div className="footer-col footer-locations">
          <h4>Locations</h4>
          {locations.map((loc) => (
            <div key={loc.id} className="footer-location">
              <span className="footer-location-name">{loc.name}</span>
              <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>{loc.phone}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Shiza Fatima. All rights reserved.</p>
        <p>Faisalabad, Pakistan</p>
      </div>
    </footer>
  );
}

export default Footer;
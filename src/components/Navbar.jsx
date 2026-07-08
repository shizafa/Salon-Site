import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import services from '../data/services';
import locations from '../data/locations';
import '../styles/Navbar.css';

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar-glass">
        <Link to="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-main">Signature</span>
          <span className="brand-sub">by Eram</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>

          <li
            className="has-dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="dropdown-label">
              Services
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </span>
            {servicesOpen && (
              <ul className="dropdown-panel">
                {services.map(s => (
                  <li key={s.slug}><Link to={s.path}>{s.name}</Link></li>
                ))}
              </ul>
            )}
          </li>

          <li
            className="has-dropdown"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <span className="dropdown-label">
              Locations
              <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </span>
            {locationsOpen && (
              <ul className="dropdown-panel">
                {locations.map(l => (
                  <li key={l.id}><Link to={l.path}>{l.name}</Link></li>
                ))}
              </ul>
            )}
          </li>

          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <Link to="/contact" className="book-btn">Book Now</Link>

        <button
          className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="mobile-group-label">Services</div>
          {services.map(s => (
            <Link key={s.slug} to={s.path} className="mobile-sublink" onClick={() => setMobileOpen(false)}>{s.name}</Link>
          ))}

          <div className="mobile-group-label">Locations</div>
          {locations.map(l => (
            <Link key={l.id} to={l.path} className="mobile-sublink" onClick={() => setMobileOpen(false)}>{l.name}</Link>
          ))}

          <Link to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/contact" className="mobile-book-btn" onClick={() => setMobileOpen(false)}>Book Now</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <nav className="navbar-glass">
        <Link to="/" className="nav-brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-main">Signature</span>
          <span className="brand-sub">by Shiza</span>
        </Link>

        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
          {/* <li><Link to="/#services">Services</Link></li> */}
          <li><Link to="/locations">Locations</Link></li>
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
          {/* <Link to="/services" onClick={() => setMobileOpen(false)}>Services</Link> */}
          <Link to="/locations" onClick={() => setMobileOpen(false)}>Locations</Link>
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
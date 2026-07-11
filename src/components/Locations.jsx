import locations from '../data/locations';
import '../styles/Locations.css';

function Locations() {
  return (
    <section className="section locations-section" id="locations">
      <div className="section-head">
        <div className="section-label">Find us</div>
        <h2 className="section-title">
          Three branches, <em>one standard.</em>
        </h2>
        <p className="locations-intro">
          Walk in, call ahead, or message us on WhatsApp — whichever's easiest.
        </p>
      </div>

      <div className="locations-grid">
        {locations.map((loc) => (
          <div className="location-card" key={loc.id}>
            <h3>{loc.name}</h3>
            <p className="location-address">{loc.address}</p>

            <div className="location-contact">
              <a
                href={`tel:${loc.phone.replace(/\s/g, '')}`}
                className="location-line"
              >
                <span className="location-label">Mobile</span> {loc.phone}
              </a>

              <a
                href={`tel:${loc.landline.replace(/\s/g, '')}`}
                className="location-line"
              >
                <span className="location-label">Landline</span> {loc.landline}
              </a>
            </div>

            <div className="location-actions">
              <a
                href={`https://wa.me/${loc.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn location-btn-whatsapp"
              >
                WhatsApp
              </a>

              <a
                href={loc.map}
                target="_blank"
                rel="noopener noreferrer"
                className="location-btn location-btn-map"
              >
                Get directions
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Locations;
import locations from '../data/locations';
import '../styles/LocationsPage.css';

function LocationsPage() {
  return (
    <section className="section locations-page">
      <div className="section-head">
        <div className="section-label">Find us</div>
        <h1 className="section-title">
          Three branches, <em>one standard.</em>
        </h1>
        <p className="locations-page-intro">
          Walk in, call ahead, or message us on WhatsApp — pick whichever
          branch is closest to you.
        </p>
      </div>

      <div className="locations-page-list">
        {locations.map((loc, index) => (
          <div
            key={loc.id}
            id={loc.path.replace('/', '')}
            className={`location-feature ${index % 2 === 1 ? 'reverse' : ''}`}
          >
            <div
              className="location-feature-image"
              style={{ backgroundImage: `url(${loc.image})` }}
            ></div>

            <div className="location-feature-info">
              <h2>{loc.name}</h2>

              <p className="location-feature-address">{loc.address}</p>
              <p className="location-feature-hours">{loc.hours}</p>

              <div className="location-feature-contact">
                <a
                  href={`tel:${loc.phone.replace(/\s/g, '')}`}
                  className="location-feature-line"
                >
                  <span className="location-label">Mobile</span> {loc.phone}
                </a>

                <a
                  href={`tel:${loc.landline.replace(/\s/g, '')}`}
                  className="location-feature-line"
                >
                  <span className="location-label">Landline</span> {loc.landline}
                </a>
              </div>

              <div className="location-feature-actions">
                <a
                  href={`https://wa.me/${loc.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-btn location-btn-whatsapp"
                >
                  WhatsApp this branch
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationsPage;
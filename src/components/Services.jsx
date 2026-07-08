import services from '../data/services';
import ServiceCard from './ServiceCard';
import '../styles/Services.css';

function Services() {
  return (
    <section className="section services-section">
      <div className="section-head">
        <div className="section-label">What we offer</div>
        <h2 className="section-title">Every service, <em>done properly.</em></h2>
        <p className="services-intro">
          Six ways to feel like yourself again — hover a card to see what's inside.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  );
}

export default Services;
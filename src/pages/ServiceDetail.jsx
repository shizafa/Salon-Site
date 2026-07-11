import { useParams, Link, Navigate } from 'react-router-dom';
import services from '../data/services';
import '../styles/ServiceDetail.css';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <section className="section service-detail-hero">
        <div className="service-detail-hero-inner">
          <div
            className="service-detail-image"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="service-detail-intro">
            <div className="section-label">Service</div>
            <h1>{service.name}</h1>
            <p>{service.desc}</p>
            <Link to="/contact" className="hero-cta-primary">Book this service</Link>
          </div>
        </div>
      </section>

      <section className="section service-detail-offerings">
        <div className="section-head">
          <div className="section-label">What's included</div>
          <h2 className="section-title">Pick what you need.</h2>
        </div>

        <div className="offerings-list">
          {service.offerings.map((item, i) => (
            <div className="offering-row" key={i}>
              <span className="offering-name">{item.name}</span>
              <span className="offering-price">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="offerings-note">
          Prices may vary slightly by branch. Message us on WhatsApp to confirm
          exact pricing and availability.
        </p>
      </section>
    </>
  );
}

export default ServiceDetail;
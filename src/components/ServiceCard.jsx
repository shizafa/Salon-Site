import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  const { name, path, image, desc, size } = service;

  return (
    <Link to={path} className={`service-card card-${size}`}>
      <img src={image} alt={name} className="service-img" />

      <div className="service-base-label">
        <h3>{name}</h3>
      </div>

      <div className="service-glass">
        <h3>{name}</h3>
        <p>{desc}</p>
        <span className="service-explore">
          Explore
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
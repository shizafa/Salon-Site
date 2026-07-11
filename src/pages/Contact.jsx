import { useState } from 'react';
import locations from '../data/locations';
import services from '../data/services';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        branch: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Design-only for now — no email sending yet.
        setSubmitted(true);
    };

    return (
        <section className="section contact-page">
            <div className="section-head">
                <div className="section-label">Get in touch</div>
                <h1 className="section-title">Let's get you booked in.</h1>
                <p className="contact-intro">
                    Fill out the form, or reach a branch directly — whichever's faster for you.
                </p>
            </div>

            <div className="contact-grid">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Phone
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>

                    <div className="form-row">
                        <label>
                            Preferred branch
                            <select name="branch" value={formData.branch} onChange={handleChange} required>
                                <option value="">Select a branch</option>
                                {locations.map((loc) => (
                                    <option key={loc.id} value={loc.name}>{loc.name}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Service
                            <select name="service" value={formData.service} onChange={handleChange} required>
                                <option value="">Select a service</option>
                                {services.map((s) => (
                                    <option key={s.slug} value={s.name}>{s.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Preferred date/time, anything else we should know..."
                        />
                    </label>

                    <button type="submit" className="contact-submit">
                        Send request
                    </button>

                    {submitted && (
                        <p className="form-status form-status-success">
                            Thanks! We'll get back to you shortly. (Design preview only — form isn't wired up to send yet.)
                        </p>
                    )}
                </form>

                <div className="contact-locations">
                    {locations.map((loc) => (
                        <div className="contact-location-card" key={loc.id}>
                            <h3>{loc.name}</h3>

                            <p className="contact-address">{loc.address}</p>

                            <a
                                href={`tel:${loc.phone.replace(/\s/g, '')}`}
                                className="contact-line"
                            >
                                {loc.phone}
                            </a>

                            <div className="contact-actions">
                                <a
                                    href={`https://wa.me/${loc.whatsapp.replace('+', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-btn contact-btn-whatsapp"
                                >
                                    WhatsApp
                                </a>

                                <a
                                    href={loc.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-btn contact-btn-map"
                                >
                                    Directions
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
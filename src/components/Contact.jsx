import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { profile } from '../data/profile';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        nextErrors[key] = 'This field is required.';
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setNotice('Please fix the validation errors before sending your message.');
      return;
    }

    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNotice('Your default email app should open. Please send the message from there.');
    setFormData(initialState);
  };

  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <p className="section-tag">Contact Me</p>
        <h3>Let’s connect and build something useful.</h3>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope aria-hidden="true" />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt aria-hidden="true" />
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="contact-item">
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              {profile.github}
            </a>
          </div>
          {profile.linkedin ? (
            <div className="contact-item">
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedin}
              </a>
            </div>
          ) : null}
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
            {errors.name ? <span className="error-message">{errors.name}</span> : null}
          </div>

          <div className="field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
            {errors.email ? <span className="error-message">{errors.email}</span> : null}
          </div>

          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} />
            {errors.subject ? <span className="error-message">{errors.subject}</span> : null}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} />
            {errors.message ? <span className="error-message">{errors.message}</span> : null}
          </div>

          <button type="submit" className="btn btn-primary full-width">
            Send Email
          </button>

          {notice ? (
            <p className="form-notice" aria-live="polite">
              {notice}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

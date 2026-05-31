import { useState, type FormEvent } from 'react';
import type { Copy } from '../data/copy';
import Reveal from './Reveal';

type ContactProps = {
  t: Copy;
};

export default function Contact({ t }: ContactProps) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', company: '', email: '', service: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="impt-section" id="contacto">
      <div className="impt-section-inner">
        <div className="impt-contact-grid">
          <Reveal className="impt-contact-info">
            <div className="impt-sec-eyebrow">{t.contactEyebrow}</div>
            <h2 className="impt-sec-title">
              {t.contactTitleParts[0]}
              <span className="impt-sec-title-accent">
                {t.contactTitleParts[1]}
              </span>
            </h2>
            <p
              className="impt-sec-sub"
              style={{ margin: '22px 0 0', textAlign: 'left' }}
            >
              {t.contactSub}
            </p>
            <div className="impt-contact-meta">
              <div>
                <div className="impt-contact-meta-label">
                  {t.contactEmailLabel}
                </div>
                <div className="impt-contact-meta-value">{t.contactEmail}</div>
              </div>
              <div>
                <div className="impt-contact-meta-label">
                  {t.contactResponseLabel}
                </div>
                <div className="impt-contact-meta-value">
                  {t.contactResponse}
                </div>
              </div>
            </div>
            <div className="impt-contact-note">
              Diagnostico inicial, alcance claro y siguiente paso definido.
            </div>
          </Reveal>
          <Reveal
            as="form"
            className="impt-form"
            delay={100}
            onSubmit={handleSubmit}
          >
            <div className="impt-form-grid">
              <div className="impt-form-row">
                <div className="impt-field">
                  <label className="impt-label" htmlFor="contact-name">
                    {t.form.name} <span className="impt-label-req">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    className="impt-input"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={t.form.namePh}
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />
                </div>
                <div className="impt-field">
                  <label className="impt-label" htmlFor="contact-company">
                    {t.form.company}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    className="impt-input"
                    type="text"
                    autoComplete="organization"
                    placeholder={t.form.companyPh}
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="impt-field">
                <label className="impt-label" htmlFor="contact-email">
                  {t.form.email} <span className="impt-label-req">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  className="impt-input"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t.form.emailPh}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
              </div>
              <div className="impt-field">
                <label className="impt-label" htmlFor="contact-service">
                  {t.form.service}
                </label>
                <select
                  id="contact-service"
                  name="service"
                  className="impt-select"
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                >
                  <option value="">{t.form.servicePh}</option>
                  {t.services.map((s) => (
                    <option key={s.title} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="impt-field">
                <label className="impt-label" htmlFor="contact-message">
                  {t.form.message} <span className="impt-label-req">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="impt-textarea"
                  required
                  autoComplete="off"
                  placeholder={t.form.messagePh}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={5}
                />
              </div>
              <button type="submit" className="impt-submit">
                {t.form.submit}
              </button>
              {submitted && (
                <div className="impt-form-success" role="status">
                  {t.form.success}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

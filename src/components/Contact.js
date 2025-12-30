import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title text-center">{t('contact.title')}</h2>
          <p className="section-subtitle text-center">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-card">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>{t('contact.email')}</h4>
                  <a href="mailto:contato@borgesconsulting.com.br">contato@borgesconsulting.com.br</a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>{t('contact.phone')}</h4>
                  <a href="tel:+5511999999999">+55 11 99999-9999</a>
                </div>
              </div>

              <div className="contact-item">
                <FaWhatsapp className="contact-icon whatsapp" />
                <div>
                  <h4>{t('contact.whatsapp')}</h4>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>{t('contact.location')}</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>{t('contact.followUs')}</h4>
              <div className="social-links">
                <a href="https://linkedin.com/company/borgesconsulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/borgesconsulting" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>

          </div>

          <div className="contact-form-wrapper" data-aos="fade-left">
            <form className="contact-form">
              <h3>{t('contact.form.title')}</h3>

              <div className="form-group">
                <input type="text" placeholder={t('contact.form.name')} required />
              </div>

              <div className="form-group">
                <input type="email" placeholder={t('contact.form.email')} required />
              </div>

              <div className="form-group">
                <input type="text" placeholder={t('contact.form.subject')} required />
              </div>

              <div className="form-group">
                <textarea placeholder={t('contact.form.message')} rows="6" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

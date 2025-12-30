import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/favicon.svg" alt="Borges Consulting" />
            </div>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/borgesconsulting" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/borgesconsulting" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:contato@borgesconsulting.com.br" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><a href="#services">{t('footer.servicesList.dataAnalysis')}</a></li>
              <li><a href="#services">{t('footer.servicesList.webScraping')}</a></li>
              <li><a href="#services">{t('footer.servicesList.bi')}</a></li>
              <li><a href="#services">{t('footer.servicesList.webDev')}</a></li>
              <li><a href="#services">{t('footer.servicesList.systems')}</a></li>
              <li><a href="#services">{t('footer.servicesList.consulting')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#home">{t('footer.home')}</a></li>
              <li><a href="#about">{t('footer.aboutUs')}</a></li>
              <li><a href="#services">{t('footer.services')}</a></li>
              <li><a href="#schedule">{t('footer.scheduleCall')}</a></li>
              <li><a href="#contact">{t('footer.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <ul className="footer-contact">
              <li>
                <strong>Email:</strong><br />
                contato@borgesconsulting.com.br
              </li>
              <li>
                <strong>Telefone:</strong><br />
                +55 11 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>{t('footer.rights')}</p>
            <div className="footer-bottom-links">
              <button type="button" onClick={(e) => e.preventDefault()}>{t('footer.privacy')}</button>
              <span>|</span>
              <button type="button" onClick={(e) => e.preventDefault()}>{t('footer.terms')}</button>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label={t('footer.backToTop')}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

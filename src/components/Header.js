import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo-container">
            <img src="/logo.png" alt="Borges Consulting" className="logo" />
          </div>
          
          <div className={`nav-links ${isMobileMenuOpen ? 'nav-mobile-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              {t('nav.home')}
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
              {t('nav.about')}
            </a>
            <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
              {t('nav.services')}
            </a>
            <a href="#schedule" onClick={(e) => { e.preventDefault(); scrollToSection('schedule'); }}>
              {t('nav.schedule')}
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
              {t('nav.contact')}
            </a>
            
            <button 
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <span className="flag-icon">
                {language === 'pt' ? '🇺🇸' : '🇧🇷'}
              </span>
            </button>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;


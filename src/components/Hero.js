import React from 'react';
import './Hero.css';
import { FaArrowRight, FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {t('hero.title1')} <span className="text-gradient">{t('hero.title2')}</span> {t('hero.title3')}
            <span className="text-gradient"> {t('hero.title4')}</span>
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          
          <div className="hero-buttons">
            <a href="#schedule" className="btn btn-primary">
              {t('hero.cta1')} <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <a href="#services" className="btn btn-secondary">
              {t('hero.cta2')}
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <FaDatabase className="feature-icon" />
              <span>{t('hero.features.dataAnalysis')}</span>
            </div>
            <div className="hero-feature">
              <FaCode className="feature-icon" />
              <span>{t('hero.features.webScraping')}</span>
            </div>
            <div className="hero-feature">
              <FaChartLine className="feature-icon" />
              <span>{t('hero.features.bi')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;


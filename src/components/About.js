import React from 'react';
import './About.css';
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="section-subtitle">
              {t('about.subtitle')}
            </p>

            <div className="about-description">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
            </div>

            <div className="about-values">
              <div className="value-item">
                <FaCheckCircle className="value-icon" />
                <div>
                  <h4>{t('about.values.rigor.title')}</h4>
                  <p>{t('about.values.rigor.description')}</p>
                </div>
              </div>
              <div className="value-item">
                <FaUsers className="value-icon" />
                <div>
                  <h4>{t('about.values.partnership.title')}</h4>
                  <p>{t('about.values.partnership.description')}</p>
                </div>
              </div>
              <div className="value-item">
                <FaLightbulb className="value-icon" />
                <div>
                  <h4>{t('about.values.custom.title')}</h4>
                  <p>{t('about.values.custom.description')}</p>
                </div>
              </div>
              <div className="value-item">
                <FaRocket className="value-icon" />
                <div>
                  <h4>{t('about.values.scalable.title')}</h4>
                  <p>{t('about.values.scalable.description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image" data-aos="fade-left">
            <div className="image-container">
              <img src="/nicolas-arnold-e_xLO2vmiQI-unsplash.jpg" alt="Data Analysis" />
              <div className="image-decoration"></div>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <h3>20+</h3>
                <p>{t('about.stats.sources')}</p>
              </div>
              <div className="stat-item">
                <h3>7TB</h3>
                <p>{t('about.stats.records')}</p>
              </div>
              <div className="stat-item">
                <h3>24h</h3>
                <p>{t('about.stats.monitoring')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

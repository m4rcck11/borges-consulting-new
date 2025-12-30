import React from 'react';
import './Projects.css';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-subtitle" data-aos="fade-up">{t('projects.subtitle')}</p>
        <div className="logos-container">
          <div className="logo-item" data-aos="fade-up" data-aos-delay="100">
            <img src="/insyspo.png" alt="Insyspo" className="project-logo" />
          </div>
          <div className="logo-item" data-aos="fade-up" data-aos-delay="200">
            <div className="project-text">MultiOBS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

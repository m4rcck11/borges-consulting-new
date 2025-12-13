import React from 'react';
import './Projects.css';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-subtitle">{t('projects.subtitle')}</p>
        <div className="logos-container">
          <div className="logo-item">
            <img src="/insyspo.png" alt="Insyspo" className="project-logo" />
          </div>
          <div className="logo-item">
            <div className="project-text">MultiOBS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

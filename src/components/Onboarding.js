import React, { useState } from 'react';
import './Onboarding.css';
import { FaBuilding, FaLightbulb, FaChevronDown } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Onboarding = () => {
  const { t } = useLanguage();
  const [expandedTrack, setExpandedTrack] = useState(null);

  const empresasSteps = t('onboarding.empresas.steps');
  const inovacaoSteps = t('onboarding.inovacao.steps');

  const toggleTrack = (track) => {
    setExpandedTrack(expandedTrack === track ? null : track);
  };

  return (
    <section id="onboarding" className="onboarding section">
      <div className="container">
        <div className="onboarding-header" data-aos="fade-up">
          <h2 className="section-title text-center">{t('onboarding.title')}</h2>
          <p className="section-subtitle text-center">
            {t('onboarding.subtitle')}
          </p>
        </div>

        <div className="onboarding-tracks">
          {/* Track Empresas */}
          <div className={`onboarding-track ${expandedTrack === 'empresas' ? 'expanded' : ''}`} data-aos="fade-right">
            <div className="track-header" onClick={() => toggleTrack('empresas')}>
              <div className="track-icon">
                <FaBuilding />
              </div>
              <h3 className="track-title">{t('onboarding.empresas.title')}</h3>
              <p className="track-focus">{t('onboarding.empresas.focus')}</p>
              <div className="track-toggle">
                <FaChevronDown />
              </div>
            </div>

            <div className="roadmap">
              {empresasSteps.map((step, index) => (
                <div key={index} className="roadmap-step">
                  <div className="step-content">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-info">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                  {index < empresasSteps.length - 1 && (
                    <div className="step-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Track Inovação */}
          <div className={`onboarding-track ${expandedTrack === 'inovacao' ? 'expanded' : ''}`} data-aos="fade-left">
            <div className="track-header" onClick={() => toggleTrack('inovacao')}>
              <div className="track-icon innovation">
                <FaLightbulb />
              </div>
              <h3 className="track-title">{t('onboarding.inovacao.title')}</h3>
              <p className="track-focus">{t('onboarding.inovacao.focus')}</p>
              <div className="track-toggle">
                <FaChevronDown />
              </div>
            </div>

            <div className="roadmap">
              {inovacaoSteps.map((step, index) => (
                <div key={index} className="roadmap-step">
                  <div className="step-content">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-info">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-description">{step.description}</p>
                    </div>
                  </div>
                  {index < inovacaoSteps.length - 1 && (
                    <div className="step-arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;

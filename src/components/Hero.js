import React from 'react';
import './Hero.css';
import { FaArrowRight, FaDatabase, FaCode, FaChartLine } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Transforme seus <span className="text-gradient">dados</span> em 
            <span className="text-gradient"> decisões estratégicas</span>
          </h1>
          <p className="hero-subtitle">
            Consultoria especializada em Análise de Dados, Web Scraping e 
            Desenvolvimento de Sistemas sob medida para o seu negócio
          </p>
          
          <div className="hero-buttons">
            <a href="#schedule" className="btn btn-primary">
              Agende uma Conversa <FaArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <a href="#services" className="btn btn-secondary">
              Nossos Serviços
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <FaDatabase className="feature-icon" />
              <span>Análise de Dados</span>
            </div>
            <div className="hero-feature">
              <FaCode className="feature-icon" />
              <span>Web Scraping</span>
            </div>
            <div className="hero-feature">
              <FaChartLine className="feature-icon" />
              <span>Business Intelligence</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default Hero;


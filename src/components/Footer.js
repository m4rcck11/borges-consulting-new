import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="Borges Consulting" />
            </div>
            <p className="footer-description">
              Transformando dados em decisões estratégicas. 
              Consultoria especializada em T.I. para impulsionar seu negócio.
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
            <h4>Serviços</h4>
            <ul>
              <li><a href="#services">Análise de Dados</a></li>
              <li><a href="#services">Web Scraping</a></li>
              <li><a href="#services">Business Intelligence</a></li>
              <li><a href="#services">Desenvolvimento Web</a></li>
              <li><a href="#services">Sistemas Sob Medida</a></li>
              <li><a href="#services">Consultoria em T.I.</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#schedule">Agendar Reunião</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
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
            <p>&copy; 2026 Borges Consulting. Todos os direitos reservados.</p>
            <div className="footer-bottom-links">
              <a href="javascript:void(0)">Política de Privacidade</a>
              <span>|</span>
              <a href="javascript:void(0)">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Voltar ao topo">
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;

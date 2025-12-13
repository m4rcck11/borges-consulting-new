import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title text-center">Contato</h2>
          <p className="section-subtitle text-center">
            Estamos prontos para ajudar você a transformar seus desafios em oportunidades
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:contato@borgesconsulting.com.br">contato@borgesconsulting.com.br</a>
                </div>
              </div>

              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Telefone</h4>
                  <a href="tel:+5511999999999">+55 11 99999-9999</a>
                </div>
              </div>

              <div className="contact-item">
                <FaWhatsapp className="contact-icon whatsapp" />
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Siga-nos</h4>
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

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <h3>Envie sua mensagem</h3>
              
              <div className="form-group">
                <input type="text" placeholder="Nome completo" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="E-mail" required />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Assunto" required />
              </div>

              <div className="form-group">
                <textarea placeholder="Sua mensagem" rows="6" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import './Schedule.css';
import { FaCalendarAlt, FaClock, FaVideo, FaPhone } from 'react-icons/fa';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'video',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigado! Entraremos em contato em breve para confirmar sua reunião.');
  };

  return (
    <section id="schedule" className="schedule section">
      <div className="schedule-background"></div>
      <div className="container">
        <div className="schedule-content">
          <div className="schedule-info">
            <h2 className="section-title">Agende uma Conversa</h2>
            <p className="section-subtitle">
              Vamos discutir como podemos ajudar seu negócio a crescer
            </p>

            <div className="schedule-benefits">
              <h3>Por que agendar conosco?</h3>
              <ul>
                <li>
                  <FaCalendarAlt className="benefit-icon" />
                  <span>Consultoria gratuita de 30 minutos</span>
                </li>
                <li>
                  <FaClock className="benefit-icon" />
                  <span>Horários flexíveis que se adaptam à sua agenda</span>
                </li>
                <li>
                  <FaVideo className="benefit-icon" />
                  <span>Reuniões presenciais ou virtuais</span>
                </li>
                <li>
                  <FaPhone className="benefit-icon" />
                  <span>Análise personalizada das suas necessidades</span>
                </li>
              </ul>
            </div>

            <div className="schedule-testimonial">
              <blockquote>
                "O serviço da Borges foi essencial para o sucesso dos nossos projetos de pesquisa graças a serviços de extração e normalização de dados em Big Data e nuvem eficientes."
              </blockquote>
              <cite>Projeto InSySPO</cite>
            </div>
          </div>

          <div className="schedule-form-container">
            <form className="schedule-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu Nome *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o Serviço de Interesse *</option>
                  <option value="analise-dados">Análise de Dados</option>
                  <option value="web-scraping">Web Scraping</option>
                  <option value="business-intelligence">Business Intelligence</option>
                  <option value="desenvolvimento-web">Desenvolvimento Web</option>
                  <option value="sistemas">Sistemas Sob Medida</option>
                  <option value="consultoria">Consultoria em T.I.</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Horário Preferido *</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="meeting-type">
                  <label>
                    <input
                      type="radio"
                      name="meetingType"
                      value="video"
                      checked={formData.meetingType === 'video'}
                      onChange={handleChange}
                    />
                    <span>Videochamada</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="meetingType"
                      value="phone"
                      checked={formData.meetingType === 'phone'}
                      onChange={handleChange}
                    />
                    <span>Telefone</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="meetingType"
                      value="presencial"
                      checked={formData.meetingType === 'presencial'}
                      onChange={handleChange}
                    />
                    <span>Presencial</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Conte-nos um pouco sobre seu projeto ou desafio"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Agendar Reunião
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;


import React, { useState } from 'react';
import './Schedule.css';
import { FaCalendarAlt, FaClock, FaVideo, FaPhone } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Schedule = () => {
  const { t } = useLanguage();

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
    console.log('Formulário enviado:', formData);
    alert(t('schedule.form.successMessage'));
  };

  return (
    <section id="schedule" className="schedule section">
      <div className="schedule-background"></div>
      <div className="container">
        <div className="schedule-content">
          <div className="schedule-info" data-aos="fade-right">
            <h2 className="section-title">{t('schedule.title')}</h2>
            <p className="section-subtitle">
              {t('schedule.subtitle')}
            </p>

            <div className="schedule-benefits">
              <h3>{t('schedule.benefitsTitle')}</h3>
              <ul>
                <li>
                  <FaCalendarAlt className="benefit-icon" />
                  <span>{t('schedule.benefits.consultation')}</span>
                </li>
                <li>
                  <FaClock className="benefit-icon" />
                  <span>{t('schedule.benefits.flexible')}</span>
                </li>
                <li>
                  <FaVideo className="benefit-icon" />
                  <span>{t('schedule.benefits.meetings')}</span>
                </li>
                <li>
                  <FaPhone className="benefit-icon" />
                  <span>{t('schedule.benefits.analysis')}</span>
                </li>
              </ul>
            </div>

            <div className="schedule-testimonial">
              <blockquote>
                "{t('schedule.testimonial.quote')}"
              </blockquote>
              <cite>{t('schedule.testimonial.author')}</cite>
            </div>
          </div>

          <div className="schedule-form-container" data-aos="fade-left">
            <form className="schedule-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder={t('schedule.form.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder={t('schedule.form.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder={t('schedule.form.company')}
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
                  <option value="">{t('schedule.form.serviceSelect')}</option>
                  <option value="analise-dados">{t('schedule.services.dataAnalysis')}</option>
                  <option value="web-scraping">{t('schedule.services.webScraping')}</option>
                  <option value="business-intelligence">{t('schedule.services.bi')}</option>
                  <option value="desenvolvimento-web">{t('schedule.services.webDev')}</option>
                  <option value="sistemas">{t('schedule.services.systems')}</option>
                  <option value="consultoria">{t('schedule.services.consulting')}</option>
                  <option value="inovacao">{t('schedule.services.innovation')}</option>
                  <option value="outros">{t('schedule.services.other')}</option>
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
                    <option value="">{t('schedule.form.time')}</option>
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
                    <span>{t('schedule.form.video')}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="meetingType"
                      value="phone"
                      checked={formData.meetingType === 'phone'}
                      onChange={handleChange}
                    />
                    <span>{t('schedule.form.phone')}</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="meetingType"
                      value="presencial"
                      checked={formData.meetingType === 'presencial'}
                      onChange={handleChange}
                    />
                    <span>{t('schedule.form.inPerson')}</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder={t('schedule.form.message')}
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                {t('schedule.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

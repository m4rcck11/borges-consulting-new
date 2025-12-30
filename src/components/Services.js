import React from 'react';
import './Services.css';
import { FaDatabase, FaCode, FaLaptopCode, FaMobile, FaCogs, FaFileInvoiceDollar } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    <FaDatabase />,
    <FaCode />,
    <FaLaptopCode />,
    <FaMobile />,
    <FaCogs />,
    <FaFileInvoiceDollar />
  ];

  const services = t('services.items');

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header" data-aos="fade-up">
          <h2 className="section-title text-center">{t('services.title')}</h2>
          <p className="section-subtitle text-center">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon">
                {icons[index]}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

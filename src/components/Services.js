import React from 'react';
import './Services.css';
import { FaDatabase, FaCode, FaChartBar, FaLaptopCode, FaMobile, FaCogs } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDatabase />,
      title: "Análise de Dados",
      description: "Atuamos no ciclo completo de analise de dados, desde a coleta até a entrega, independente do volume de dados.",
      features: ["Business Intelligence", "Data Mining", "Data Visualization", "Dashboards Interativos", "Integração de Dados"]
    },
    {
      icon: <FaCode />,
      title: "Web Scraping",
      description: "Extração automatizada de dados web com precisão e eficiência respeitando as boas práticas de coleta de dados.",
      features: ["Coleta Automatizada", "APIs Restful", "Monitoramento de Dados", "Tratamento e Normalização de Dados", "Contorno de Bloqueios (Anti-bot Bypass)"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas.",
      features: ["Sites Institucionais", "E-commerce", "Landing Pages", "Sistemas Progressivos"]
    },
    {
      icon: <FaMobile />,
      title: "Arquitetura e Desenvolvimento de Sistemas",
      description: "Soluções personalizadas para as necessidades específicas do seu negócio.",
      features: ["Sistemas de Gestão", "Automação de Processos", "Integração de APIs", "Apps Mobile", "Apps Web"]
    },
    {
      icon: <FaCogs />,
      title: "Consultoria em T.I.",
      description: "Orientação estratégica para o crescimento tecnológico do seu negócio.",
      features: ["Arquitetura de Sistemas", "Transformação Digital", "Otimização de Processos", "Segurança da Informação", "Integrações de Workflows com IA"]
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="services-header">
          <h2 className="section-title text-center">Nossos Serviços</h2>
          <p className="section-subtitle text-center">
            Soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
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


import React from 'react';
import './About.css';
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nós</h2>
            <p className="section-subtitle">
              Transformando dados em insights valiosos para o seu negócio
            </p>
            
            <div className="about-description">
              <p>
                A <strong>Borges Consulting</strong> é uma consultoria técnica especializada em dados e desenvolvimento de software, 
                focada na construção de soluções digitais robustas e na otimização de processos de coleta de informação. 
                
              </p>
              <p>
              Nossa experiência é consolidada em projetos de alta complexidade técnica e análise bibliométrica, que nos permite estruturar grandes volumes de dados com precisão científica e <strong>com custos otimizados. </strong>
              Aplicamos esse rigor para transformar informações brutas em conhecimento organizado, servindo tanto iniciativas de pesquisa quanto estratégias de negócios.
              </p>
              <p>
              Além da inteligência de dados, desenvolvemos <strong>sistemas personalizados</strong> e <strong>aplicações web modernas</strong>. 
              Nossas entregas priorizam a performance e a segurança, garantindo que a tecnologia funcione como uma alavanca para os objetivos dos nossos parceiros.
              </p>
            </div>

            <div className="about-values">
              <div className="value-item">
                <FaCheckCircle className="value-icon" />
                <div>
                  <h4>Rigor Técnico</h4>
                  <p>Aplicamos as melhores práticas de desenvolvimento de software e arquitetura de sistemas aliado a documentação rica.</p>
                </div>
              </div>
              <div className="value-item">
                <FaUsers className="value-icon" />
                <div>
                  <h4>Parceria Estratégica</h4>
                  <p>Trabalhamos próximos ao cliente, entendendo o contexto do negócio para propor a solução técnica mais adequada.</p>
                </div>
              </div>
              <div className="value-item">
                <FaLightbulb className="value-icon" />
                <div>
                  <h4>Soluções Sob Medida</h4>
                  <p>Desenvolvemos arquiteturas personalizadas, ideais para cenários onde ferramentas de prateleira não são suficientes</p>
                </div>
              </div>
              <div className="value-item">
                <FaRocket className="value-icon" />
                <div>
                  <h4>Resultados Ricos e Escaláveis</h4>
                  <p>Entregamos soluções que podem ser escaladas conforme o crescimento do negócio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="/nicolas-arnold-e_xLO2vmiQI-unsplash.jpg" alt="Data Analysis" />
              <div className="image-decoration"></div>
            </div>
            
            <div className="stats-container">
              <div className="stat-item">
                <h3>50M</h3>
                <p>Registros Processados</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Fontes de Dados Integradas</p>
              </div>
              <div className="stat-item">
                <h3>24h</h3>
                <p>Monitoramento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


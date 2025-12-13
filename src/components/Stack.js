import React from 'react';
import './Stack.css';
import { 
  SiDocker, 
  SiPython, 
  SiPostgresql, 
  SiAlibabadotcom, 
  SiGooglecloud, 
  SiSelenium, 
  SiPandas 
} from 'react-icons/si';

const Stack = () => {
  const technologies = [
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiPostgresql />, name: 'SQL' },
    { icon: <SiAlibabadotcom />, name: 'Alibaba Cloud' },
    { icon: <SiGooglecloud />, name: 'Google Cloud' },
    { icon: <SiSelenium />, name: 'Selenium' },
    { icon: <SiPandas />, name: 'Pandas' }
  ];

  // Duplicate the array for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="stack" className="stack-section">
      <div className="stack-marquee">
        <div className="stack-track">
          {duplicatedTechnologies.map((tech, index) => (
            <div key={index} className="tech-item">
              <div className="tech-icon">
                {tech.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

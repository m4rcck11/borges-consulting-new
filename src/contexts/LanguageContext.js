import React, { createContext, useState, useContext } from 'react';

// Traduções
const translations = {
  pt: {
    // Header
    nav: {
      home: 'Home',
      about: 'Sobre',
      services: 'Serviços',
      schedule: 'Agendar',
      contact: 'Contato'
    },
    // Hero
    hero: {
      title1: 'Transforme seus',
      title2: 'dados',
      title3: 'em',
      title4: 'decisões estratégicas',
      subtitle: 'Consultoria especializada em Análise de Dados, Web Scraping e Desenvolvimento de Sistemas sob medida para o seu negócio',
      cta1: 'Agende uma Conversa',
      cta2: 'Nossos Serviços',
      features: {
        dataAnalysis: 'Análise de Dados',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence'
      }
    },
    // About
    about: {
      title: 'Sobre Nós',
      subtitle: 'Transformando dados em valor para o seu negócio',
      description: 'Somos especializados em extrair insights valiosos dos seus dados, automatizar processos e criar soluções personalizadas que impulsionam o crescimento do seu negócio.',
      stats: {
        projects: 'Projetos Entregues',
        satisfaction: 'Satisfação',
        experience: 'Anos de Experiência',
        technologies: 'Tecnologias'
      },
      values: {
        title: 'Por que escolher a Borges Consulting?',
        expertise: {
          title: 'Expertise Comprovada',
          description: 'Anos de experiência em análise de dados e desenvolvimento de soluções empresariais.'
        },
        custom: {
          title: 'Soluções Sob Medida',
          description: 'Desenvolvemos arquiteturas personalizadas, ideais para cenários onde ferramentas de prateleira não são suficientes'
        },
        scalable: {
          title: 'Resultados Ricos e Escaláveis',
          description: 'Entregamos soluções que podem ser escaladas conforme o crescimento do negócio.'
        }
      }
    },
    // Services
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções completas em tecnologia para impulsionar seu negócio',
      items: {
        dataAnalysis: {
          title: 'Análise de Dados',
          description: 'Transforme dados brutos em insights estratégicos para tomada de decisão',
          features: ['Dashboards Interativos', 'Relatórios Automatizados', 'Análise Preditiva', 'KPIs Personalizados']
        },
        webScraping: {
          title: 'Web Scraping',
          description: 'Extração automatizada de dados da web com alta precisão',
          features: ['Coleta Automatizada', 'Dados Estruturados', 'Monitoramento Contínuo', 'APIs Customizadas']
        },
        businessIntel: {
          title: 'Business Intelligence',
          description: 'Inteligência de negócios para decisões data-driven',
          features: ['Data Warehousing', 'ETL Pipelines', 'Visualização de Dados', 'Análise de Tendências']
        },
        webDev: {
          title: 'Desenvolvimento Web',
          description: 'Aplicações web modernas e responsivas para seu negócio',
          features: ['Sites Institucionais', 'E-commerce', 'Sistemas Web', 'Landing Pages']
        },
        customSystems: {
          title: 'Sistemas Sob Medida',
          description: 'Soluções personalizadas para necessidades específicas',
          features: ['Análise de Requisitos', 'Arquitetura Escalável', 'Integração de Sistemas', 'Suporte Contínuo']
        },
        consulting: {
          title: 'Consultoria em T.I.',
          description: 'Orientação estratégica para transformação digital',
          features: ['Planejamento Estratégico', 'Otimização de Processos', 'Segurança da Informação', 'Integrações de Workflows com IA']
        }
      }
    },
    // Projects
    projects: {
      subtitle: 'Participação em Projetos'
    },
    // Schedule
    schedule: {
      title: 'Agende uma Conversa',
      subtitle: 'Vamos discutir como podemos ajudar seu negócio a crescer',
      benefits: {
        title: 'Benefícios da Consultoria',
        custom: 'Soluções personalizadas para seu negócio',
        expert: 'Consultoria especializada em dados',
        results: 'Resultados mensuráveis e ROI comprovado',
        flexible: 'Horários flexíveis que se adaptam à sua agenda'
      },
      form: {
        name: 'Seu Nome *',
        email: 'Seu E-mail *',
        company: 'Empresa',
        service: 'Selecione o Serviço de Interesse *',
        date: 'Data Preferida *',
        time: 'Horário Preferido *',
        meetingType: 'Formato da Reunião',
        video: 'Videochamada',
        phone: 'Telefone',
        inPerson: 'Presencial',
        message: 'Conte-nos um pouco sobre seu projeto ou desafio',
        submit: 'Agendar Reunião'
      }
    },
    // Contact
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos prontos para transformar seus dados em resultados',
      email: 'E-mail',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
      followUs: 'Siga-nos',
      form: {
        title: 'Envie sua mensagem',
        name: 'Nome completo',
        email: 'E-mail',
        subject: 'Assunto',
        message: 'Sua mensagem',
        submit: 'Enviar Mensagem'
      }
    },
    // Footer
    footer: {
      description: 'Transformando dados em decisões estratégicas. Consultoria especializada em T.I. para impulsionar seu negócio.',
      services: 'Serviços',
      quickLinks: 'Links Rápidos',
      home: 'Home',
      aboutUs: 'Sobre Nós',
      scheduleCall: 'Agendar Reunião',
      contact: 'Contato',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Uso',
      rights: '© 2026 Borges Consulting. Todos os direitos reservados.',
      backToTop: 'Voltar ao topo'
    }
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      schedule: 'Schedule',
      contact: 'Contact'
    },
    // Hero
    hero: {
      title1: 'Transform your',
      title2: 'data',
      title3: 'into',
      title4: 'strategic decisions',
      subtitle: 'Specialized consultancy in Data Analysis, Web Scraping and Custom System Development for your business',
      cta1: 'Schedule a Meeting',
      cta2: 'Our Services',
      features: {
        dataAnalysis: 'Data Analysis',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence'
      }
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Transforming data into value for your business',
      description: 'We specialize in extracting valuable insights from your data, automating processes and creating custom solutions that drive your business growth.',
      stats: {
        projects: 'Projects Delivered',
        satisfaction: 'Satisfaction',
        experience: 'Years of Experience',
        technologies: 'Technologies'
      },
      values: {
        title: 'Why choose Borges Consulting?',
        expertise: {
          title: 'Proven Expertise',
          description: 'Years of experience in data analysis and business solutions development.'
        },
        custom: {
          title: 'Custom Solutions',
          description: 'We develop personalized architectures, ideal for scenarios where off-the-shelf tools are not sufficient'
        },
        scalable: {
          title: 'Rich and Scalable Results',
          description: 'We deliver solutions that can be scaled as your business grows.'
        }
      }
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Complete technology solutions to boost your business',
      items: {
        dataAnalysis: {
          title: 'Data Analysis',
          description: 'Transform raw data into strategic insights for decision making',
          features: ['Interactive Dashboards', 'Automated Reports', 'Predictive Analytics', 'Custom KPIs']
        },
        webScraping: {
          title: 'Web Scraping',
          description: 'Automated web data extraction with high precision',
          features: ['Automated Collection', 'Structured Data', 'Continuous Monitoring', 'Custom APIs']
        },
        businessIntel: {
          title: 'Business Intelligence',
          description: 'Business intelligence for data-driven decisions',
          features: ['Data Warehousing', 'ETL Pipelines', 'Data Visualization', 'Trend Analysis']
        },
        webDev: {
          title: 'Web Development',
          description: 'Modern and responsive web applications for your business',
          features: ['Corporate Websites', 'E-commerce', 'Web Systems', 'Landing Pages']
        },
        customSystems: {
          title: 'Custom Systems',
          description: 'Personalized solutions for specific needs',
          features: ['Requirements Analysis', 'Scalable Architecture', 'Systems Integration', 'Continuous Support']
        },
        consulting: {
          title: 'IT Consulting',
          description: 'Strategic guidance for digital transformation',
          features: ['Strategic Planning', 'Process Optimization', 'Information Security', 'AI Workflow Integration']
        }
      }
    },
    // Projects
    projects: {
      subtitle: 'Project Participation'
    },
    // Schedule
    schedule: {
      title: 'Schedule a Meeting',
      subtitle: "Let's discuss how we can help your business grow",
      benefits: {
        title: 'Consulting Benefits',
        custom: 'Custom solutions for your business',
        expert: 'Specialized data consulting',
        results: 'Measurable results and proven ROI',
        flexible: 'Flexible hours that adapt to your schedule'
      },
      form: {
        name: 'Your Name *',
        email: 'Your Email *',
        company: 'Company',
        service: 'Select Service of Interest *',
        date: 'Preferred Date *',
        time: 'Preferred Time *',
        meetingType: 'Meeting Format',
        video: 'Video Call',
        phone: 'Phone',
        inPerson: 'In Person',
        message: 'Tell us a bit about your project or challenge',
        submit: 'Schedule Meeting'
      }
    },
    // Contact
    contact: {
      title: 'Get in Touch',
      subtitle: 'We are ready to transform your data into results',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      followUs: 'Follow Us',
      form: {
        title: 'Send your message',
        name: 'Full name',
        email: 'Email',
        subject: 'Subject',
        message: 'Your message',
        submit: 'Send Message'
      }
    },
    // Footer
    footer: {
      description: 'Transforming data into strategic decisions. Specialized IT consultancy to boost your business.',
      services: 'Services',
      quickLinks: 'Quick Links',
      home: 'Home',
      aboutUs: 'About Us',
      scheduleCall: 'Schedule Meeting',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      rights: '© 2026 Borges Consulting. All rights reserved.',
      backToTop: 'Back to top'
    }
  }
};

// Contexto
const LanguageContext = createContext();

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook customizado
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

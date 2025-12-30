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
      contact: 'Contato',
      databaseAccess: 'Acesso à Base'
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
      subtitle: 'Unindo o rigor acadêmico à agilidade técnica do mercado',
      description1: 'A Borges Consulting é uma consultoria técnica focada em dados, desenvolvimento de software e viabilização de projetos de inovação. Nossa atuação busca encurtar o caminho para a digitalização, seja para a sua empresa que precisa organizar processos ou para projetos de inovação e pesquisa que precisam de um time técnico especializado.',
      description2: 'Nossa experiência é consolidada em projetos de alta complexidade técnica e análise bibliométrica. Contamos com um time de pesquisadores especializados que nos permite não apenas desenvolver software, mas estruturar projetos de inovação com o rigor científico exigido por órgãos de fomento. Transformamos ideias de mercado em propostas técnicas sólidas, servindo tanto iniciativas de pesquisa quanto estratégias de negócios.',
      description3: 'Além da inteligência de dados, desenvolvemos sistemas personalizados e aplicações web modernas. Nossas entregas priorizam a performance e a segurança, garantindo que a tecnologia funcione como uma alavanca para os objetivos dos nossos parceiros.',
      stats: {
        sources: 'Fontes Integradas',
        records: 'Dados Coletados e Tratados',
        monitoring: 'Monitoramento'
      },
      values: {
        rigor: {
          title: 'Rigor Técnico',
          description: 'Aplicamos as melhores práticas de desenvolvimento e arquitetura de sistemas. Entregamos soluções com foco na qualidade da entrega e documentação.'
        },
        partnership: {
          title: 'Parceria Estratégica',
          description: 'Trabalhamos próximos ao cliente, entendendo o contexto do negócio para propor a solução técnica mais adequada.'
        },
        custom: {
          title: 'Soluções Sob Medida',
          description: 'Desenvolvemos arquiteturas personalizadas, ideais para cenários onde ferramentas de prateleira não são suficientes.'
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
      items: [
        {
          title: 'Análise de Dados',
          description: 'Atuamos no ciclo completo de dados, da coleta à visualização, independentemente do volume.',
          features: ['Business Intelligence', 'Data Mining', 'Data Visualization', 'Dashboards Interativos', 'Integração de Dados']
        },
        {
          title: 'Web Scraping e Coleta',
          description: 'Extração automatizada de dados web com precisão, eficiência e respeito às boas práticas.',
          features: ['Coleta Automatizada', 'APIs Restful', 'Monitoramento de Dados', 'Tratamento e Normalização de Dados', 'Contorno de Bloqueios (Anti-bot Bypass)']
        },
        {
          title: 'Desenvolvimento Web',
          description: 'Sites e aplicações web modernas, responsivas e otimizadas.',
          features: ['Sites Institucionais', 'E-commerce', 'Landing Pages', 'Sistemas Progressivos']
        },
        {
          title: 'Arquitetura e Desenvolvimento de Sistemas',
          description: 'Soluções personalizadas para as necessidades específicas do seu negócio.',
          features: ['Sistemas de Gestão', 'Automação de Processos', 'Integração de APIs', 'Apps Mobile', 'Apps Web']
        },
        {
          title: 'Consultoria em T.I.',
          description: 'Orientação estratégica para o crescimento tecnológico do seu negócio.',
          features: ['Arquitetura de Sistemas', 'Transformação Digital', 'Otimização de Processos', 'Segurança da Informação', 'Integrações de Workflows com IA']
        },
        {
          title: 'Viabilização de Projetos de Inovação',
          description: 'Transforme sua ideia em um projeto elegível para captação de recursos governamentais.',
          features: ['Tradução Técnica para Editais (PIPE/FAPESP, CNPq, Finep)', 'Estruturação de Projeto e Cronograma Físico-Financeiro', 'Fundamentação Tecnológica e Arquitetura da Solução', 'Consultoria Sob Demanda para Execução']
        }
      ]
    },
    // Projects
    projects: {
      subtitle: 'Participação em Projetos'
    },
    // Onboarding
    onboarding: {
      title: 'Como Trabalhamos',
      subtitle: 'Dois caminhos, uma missão: transformar sua ideia em realidade',
      empresas: {
        title: 'Para Empresas e Negócios Privados',
        focus: 'Focado em agilidade e retorno sobre investimento.',
        steps: [
          { title: 'Diagnóstico', description: 'Entendemos sua dor e necessidade imediata.' },
          { title: 'Proposta', description: 'Apresentamos orçamento fechado e cronograma.' },
          { title: 'Execução', description: 'Desenvolvimento ágil com entregas parciais.' },
          { title: 'Entrega', description: 'Sistema rodando e suporte garantido.' }
        ]
      },
      inovacao: {
        title: 'Fluxo para Projetos de Inovação',
        focus: 'Da ideia à captação de recursos governamentais.',
        steps: [
          { title: 'Análise de Potencial', description: 'Avaliamos se sua ideia tem o grau de ineditismo necessário para pleitear recursos governamentais.' },
          { title: 'Escrita Técnica', description: 'Nossos pesquisadores elaboram toda a documentação do projeto, definindo escopo, riscos e metodologia.' },
          { title: 'Submissão', description: 'Você submete o projeto ao órgão financiador com nossa assessoria técnica.' },
          { title: 'Decisão de Execução', description: 'Após a aprovação da verba, você tem a liberdade de contratar a Borges Consulting para desenvolver a solução ou seguir com outra equipe.' }
        ]
      }
    },
    // Schedule
    schedule: {
      title: 'Agende uma Conversa',
      subtitle: 'Vamos discutir como podemos ajudar seu negócio a crescer',
      benefitsTitle: 'Por que agendar conosco?',
      benefits: {
        consultation: 'Consultoria gratuita de 30 minutos',
        flexible: 'Horários flexíveis que se adaptam à sua agenda',
        meetings: 'Reuniões presenciais ou virtuais',
        analysis: 'Análise personalizada das suas necessidades'
      },
      testimonial: {
        quote: 'O serviço da Borges foi essencial para o sucesso dos nossos projetos de pesquisa graças a serviços de extração e normalização de dados em Big Data e nuvem eficientes.',
        author: 'Projeto InSySPO'
      },
      form: {
        name: 'Seu Nome *',
        email: 'Seu E-mail *',
        company: 'Empresa',
        serviceSelect: 'Selecione o Serviço de Interesse *',
        time: 'Horário Preferido *',
        video: 'Videochamada',
        phone: 'Telefone',
        inPerson: 'Presencial',
        message: 'Conte-nos um pouco sobre seu projeto ou desafio',
        submit: 'Agendar Reunião',
        successMessage: 'Obrigado! Entraremos em contato em breve para confirmar sua reunião.'
      },
      services: {
        dataAnalysis: 'Análise de Dados',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence',
        webDev: 'Desenvolvimento Web',
        systems: 'Sistemas Sob Medida',
        consulting: 'Consultoria em T.I.',
        innovation: 'Viabilização de Projetos',
        other: 'Outros'
      }
    },
    // Contact
    contact: {
      title: 'Contato',
      subtitle: 'Estamos prontos para ajudar você a transformar seus desafios em oportunidades',
      email: 'E-mail',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
      location: 'Localização',
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
      backToTop: 'Voltar ao topo',
      servicesList: {
        dataAnalysis: 'Análise de Dados',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence',
        webDev: 'Desenvolvimento Web',
        systems: 'Sistemas Sob Medida',
        consulting: 'Consultoria em T.I.'
      }
    }
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      schedule: 'Schedule',
      contact: 'Contact',
      databaseAccess: 'Database Access'
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
      subtitle: 'Combining academic rigor with market technical agility',
      description1: 'Borges Consulting is a technical consultancy focused on data, software development and innovation project enablement. Our work aims to shorten the path to digitalization, whether for your company that needs to organize processes or for innovation and research projects that need a specialized technical team.',
      description2: 'Our experience is consolidated in projects of high technical complexity and bibliometric analysis. We have a team of specialized researchers that allows us not only to develop software, but to structure innovation projects with the scientific rigor required by funding agencies. We transform market ideas into solid technical proposals, serving both research initiatives and business strategies.',
      description3: 'Beyond data intelligence, we develop custom systems and modern web applications. Our deliveries prioritize performance and security, ensuring that technology works as a lever for our partners\' objectives.',
      stats: {
        sources: 'Integrated Sources',
        records: 'Data Collected & Processed',
        monitoring: 'Monitoring'
      },
      values: {
        rigor: {
          title: 'Technical Rigor',
          description: 'We apply the best practices in development and systems architecture. We deliver solutions focused on quality and documentation.'
        },
        partnership: {
          title: 'Strategic Partnership',
          description: 'We work closely with clients, understanding the business context to propose the most suitable technical solution.'
        },
        custom: {
          title: 'Custom Solutions',
          description: 'We develop personalized architectures, ideal for scenarios where off-the-shelf tools are not sufficient.'
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
      items: [
        {
          title: 'Data Analysis',
          description: 'We work on the complete data cycle, from collection to visualization, regardless of volume.',
          features: ['Business Intelligence', 'Data Mining', 'Data Visualization', 'Interactive Dashboards', 'Data Integration']
        },
        {
          title: 'Web Scraping & Data Collection',
          description: 'Automated web data extraction with precision, efficiency and respect for best practices.',
          features: ['Automated Collection', 'Restful APIs', 'Data Monitoring', 'Data Treatment and Normalization', 'Anti-bot Bypass']
        },
        {
          title: 'Web Development',
          description: 'Modern, responsive and optimized websites and web applications.',
          features: ['Corporate Websites', 'E-commerce', 'Landing Pages', 'Progressive Systems']
        },
        {
          title: 'Systems Architecture & Development',
          description: 'Customized solutions for your business specific needs.',
          features: ['Management Systems', 'Process Automation', 'API Integration', 'Mobile Apps', 'Web Apps']
        },
        {
          title: 'IT Consulting',
          description: 'Strategic guidance for your business technological growth.',
          features: ['Systems Architecture', 'Digital Transformation', 'Process Optimization', 'Information Security', 'AI Workflow Integration']
        },
        {
          title: 'Innovation Project Enablement',
          description: 'Turn your idea into a project eligible for government funding.',
          features: ['Technical Translation for Grants (PIPE/FAPESP, CNPq, Finep)', 'Project Structuring and Financial Timeline', 'Technological Foundation and Solution Architecture', 'On-Demand Consulting for Execution']
        }
      ]
    },
    // Projects
    projects: {
      subtitle: 'Project Participation'
    },
    // Onboarding
    onboarding: {
      title: 'How We Work',
      subtitle: 'Two paths, one mission: turning your idea into reality',
      empresas: {
        title: 'For Companies and Private Businesses',
        focus: 'Focused on agility and return on investment.',
        steps: [
          { title: 'Diagnosis', description: 'We understand your pain points and immediate needs.' },
          { title: 'Proposal', description: 'We present a fixed budget and timeline.' },
          { title: 'Execution', description: 'Agile development with partial deliveries.' },
          { title: 'Delivery', description: 'System running with guaranteed support.' }
        ]
      },
      inovacao: {
        title: 'Innovation Projects Flow',
        focus: 'From idea to government funding.',
        steps: [
          { title: 'Potential Analysis', description: 'We assess whether your idea has the degree of innovation required to apply for government resources.' },
          { title: 'Technical Writing', description: 'Our researchers prepare all project documentation, defining scope, risks, and methodology.' },
          { title: 'Submission', description: 'You submit the project to the funding agency with our technical advisory.' },
          { title: 'Execution Decision', description: 'After funding approval, you have the freedom to hire Borges Consulting to develop the solution or proceed with another team.' }
        ]
      }
    },
    // Schedule
    schedule: {
      title: 'Book a Consultation',
      subtitle: 'Let us explore how we can drive value for your organization',
      benefitsTitle: 'Why Partner With Us?',
      benefits: {
        consultation: 'Complimentary 30-minute strategic consultation',
        flexible: 'Flexible scheduling tailored to your availability',
        meetings: 'On-site or virtual meetings available',
        analysis: 'Customized assessment of your business requirements'
      },
      testimonial: {
        quote: 'Borges Consulting\'s expertise was instrumental to our research project success, delivering efficient Big Data extraction and cloud-based data normalization services.',
        author: 'InSySPO Project'
      },
      form: {
        name: 'Full Name *',
        email: 'Corporate Email *',
        company: 'Organization',
        serviceSelect: 'Select Area of Interest *',
        time: 'Preferred Time Slot *',
        video: 'Video Conference',
        phone: 'Phone Call',
        inPerson: 'In-Person Meeting',
        message: 'Brief description of your project or business challenge',
        submit: 'Request Consultation',
        successMessage: 'Thank you for your interest. Our team will contact you shortly to confirm your meeting.'
      },
      services: {
        dataAnalysis: 'Data Analytics',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence',
        webDev: 'Web Development',
        systems: 'Enterprise Solutions',
        consulting: 'IT Consulting',
        innovation: 'Innovation Project Enablement',
        other: 'Other'
      }
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to help transform your challenges into opportunities',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      location: 'Location',
      followUs: 'Connect With Us',
      form: {
        title: 'Send Us a Message',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Submit Inquiry'
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
      backToTop: 'Back to top',
      servicesList: {
        dataAnalysis: 'Data Analysis',
        webScraping: 'Web Scraping',
        bi: 'Business Intelligence',
        webDev: 'Web Development',
        systems: 'Enterprise Solutions',
        consulting: 'IT Consulting'
      }
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



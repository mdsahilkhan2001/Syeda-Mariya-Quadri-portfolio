import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, MonitorSmartphone, Database, X, CheckCircle2, TrendingUp, Lock } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Enterprise Sales & Operations Dashboard',
      type: 'Data Analysis Project',
      description: 'A comprehensive business intelligence dashboard providing real-time insights into sales trends, customer demographics, and revenue forecasting.',
      overview: 'Developed a secure, high-performance Power BI dashboard for an enterprise client to replace manual Excel reporting. The solution aggregated data from three different legacy SQL databases into a single source of truth, providing C-level executives with real-time operational visibility.',
      impact: [
        'Reduced weekly reporting time from 12 hours to fully automated real-time dashboards.',
        'Identified a 15% revenue leakage in the supply chain through advanced data modeling.',
        'Enabled predictive forecasting using historical sales data and trend analysis.'
      ],
      contributions: [
        'Wrote complex SQL queries to extract and transform millions of rows of data.',
        'Designed interactive UI/UX for the dashboard with drill-down capabilities.',
        'Implemented Row-Level Security (RLS) to ensure data privacy across regional managers.'
      ],
      icon: <BarChart size={40} />,
      tags: ['Power BI', 'SQL Server', 'DAX', 'Data Modeling', 'Business Intelligence'],
      color: '#0ea5e9',
      imageSrc: '/dashboar project.png',
      image: 'linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(14,165,233,0.02) 100%)'
    },
    {
      title: 'B2B E-Commerce Web Portal',
      type: 'Web Development Project',
      description: 'A fully responsive and highly optimized e-commerce web application featuring dynamic product catalogs and secure client portals.',
      overview: 'Led the frontend development of a modern B2B e-commerce platform using React.js. The goal was to modernize the client\'s legacy monolithic system into a fast, decoupled, and highly responsive web application capable of handling high-volume wholesale transactions securely.',
      impact: [
        'Improved initial page load speed by 45%, significantly boosting SEO rankings.',
        'Increased wholesale conversion rates by streamlining the complex checkout flow.',
        'Successfully delivered the frontend architecture 2 weeks ahead of the project deadline.'
      ],
      contributions: [
        'Developed reusable, component-driven UI architecture using React and Tailwind CSS.',
        'Integrated RESTful APIs for real-time inventory tracking and secure payment gateways.',
        'Implemented complex state management for wholesale bulk-ordering logic.'
      ],
      icon: <MonitorSmartphone size={40} />,
      tags: ['React.js', 'JavaScript', 'REST APIs', 'UI/UX Design', 'Performance Optimization'],
      color: '#6d28d9',
      imageSrc: '/web-portals-types.png',
      image: 'linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(109,40,217,0.02) 100%)'
    },
    {
      title: 'Automated ETL Data Pipeline',
      type: 'Data Engineering Project',
      description: 'An automated data cleaning and processing pipeline that significantly reduced manual data handling time and ensured high data accuracy.',
      overview: 'Engineered a robust ETL (Extract, Transform, Load) pipeline using Python and Pandas to automate the processing of messy, unstructured data received from external vendors. The pipeline standardized the data formats before injecting them into the company\'s central data warehouse.',
      impact: [
        'Eliminated 100% of human errors previously caused by manual data entry.',
        'Saved the data operations team over 20 hours of manual formatting per week.',
        'Accelerated the data-to-insight lifecycle, allowing faster strategic pivoting.'
      ],
      contributions: [
        'Built automated Python scripts utilizing Pandas and NumPy for complex data cleaning.',
        'Designed exception handling protocols to automatically flag data anomalies.',
        'Scheduled and monitored daily cron jobs to ensure uninterrupted data flow.'
      ],
      icon: <Database size={40} />,
      tags: ['Python', 'Pandas', 'ETL', 'Data Warehousing', 'Automation'],
      color: '#10b981',
      imageSrc: '/ETL.webp',
      image: 'linear-gradient(135deg, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.02) 100%)'
    }
  ];

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Projects</h2>
        <p className="projects-subtitle">Highlighting high-impact client and enterprise solutions I've developed.</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card clickable"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.imageSrc} alt={project.title} className="project-bg-img" />
                <div className="project-img-overlay" style={{ background: project.image }}></div>
                <div className="view-more-overlay">
                  <span>View Case Study</span>
                </div>
                <div className="confidential-badge">
                  <Lock size={14} /> Enterprise
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-type" style={{ color: project.color }}>{project.type}</span>
                <h3>{project.title}</h3>
                <p className="project-short-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="tag glass">{tag}</span>
                  ))}
                  {project.tags.length > 3 && <span className="tag glass">+{project.tags.length - 3}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="project-modal-content glass-card"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn glass" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="modal-header-accent" style={{ background: selectedProject.color }}></div>

              <div className="modal-cover-image">
                <img src={selectedProject.imageSrc} alt={selectedProject.title} />
                <div className="modal-cover-overlay"></div>
              </div>

              <div className="modal-scroll-area">
                <div className="modal-top-section">
                  <div className="modal-icon-large" style={{ color: selectedProject.color, background: `${selectedProject.color}15` }}>
                    {selectedProject.icon}
                  </div>
                  <div>
                    <span className="modal-type" style={{ color: selectedProject.color }}>
                      <Lock size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }}/> 
                      Proprietary {selectedProject.type}
                    </span>
                    <h2>{selectedProject.title}</h2>
                  </div>
                </div>

                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="tag glass" style={{ border: `1px solid ${selectedProject.color}40` }}>{tag}</span>
                  ))}
                </div>

                <div className="modal-section">
                  <h3>Project Overview</h3>
                  <p>{selectedProject.overview}</p>
                </div>

                <div className="modal-split-content">
                  <div className="modal-section">
                    <h3 className="section-heading-flex"><CheckCircle2 size={20} color={selectedProject.color} /> Key Contributions</h3>
                    <ul className="modal-list">
                      {selectedProject.contributions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h3 className="section-heading-flex"><TrendingUp size={20} color={selectedProject.color} /> Business Impact</h3>
                    <ul className="modal-list impact-list">
                      {selectedProject.impact.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

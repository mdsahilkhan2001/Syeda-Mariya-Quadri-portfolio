import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Briefcase } from 'lucide-react';
import './Education.css';

const Education = () => {
  const journeyData = [
    {
      title: 'Data Analyst',
      organization: 'Dubilist',
      icon: <Briefcase size={28} />,
      status: 'Professional Experience',
      date: '2023 - Current',
      image: '/dubilsit.png',
      description: 'Working as a Data Analyst for Dubilist, a premier online classifieds marketplace in Dubai (similar to OLX). I specialize in data extraction, trend analysis, and providing actionable insights to optimize business operations.'
    },
    {
      title: 'PG as Data Analyst',
      organization: 'St Anns College for Women',
      icon: <Award size={28} />,
      status: 'Master\'s Degree',
      date: '2021 - 2023',
      image: '/stt anna.jpg',
      description: 'Specialized in Data Analysis, statistical modeling, and data visualization techniques.'
    },
    {
      title: 'BSc Computers',
      organization: 'Madina Degree College',
      icon: <GraduationCap size={28} />,
      status: 'Bachelor\'s Degree',
      date: '2018 - 2021',
      image: '/madina collage.png',
      description: 'Core focus on computer science fundamentals, programming, and database management.'
    },
    {
      title: 'High School',
      organization: 'St Celina High School',
      icon: <BookOpen size={28} />,
      status: 'Schooling',
      date: '2016 - 2018',
      image: '/CelinaHighSchool.jpg',
      description: 'Completed foundational schooling with a strong focus on mathematics and science.'
    }
  ];

  return (
    <section id="education" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience & Education</h2>
        <p className="education-subtitle">My professional journey and academic background.</p>
        
        <div className="timeline">
          {journeyData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                <div className="timeline-icon">{item.icon}</div>
              </div>
              
              <motion.div 
                className={`timeline-content glass-card ${index % 2 === 0 ? 'left' : 'right'}`}
                whileHover={{ 
                  scale: 1.15,
                  y: -15,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
                  zIndex: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="timeline-text-content">
                  <div className="card-header-flex">
                    {item.image && (
                      <div className="card-logo-container">
                        <img src={item.image} alt="logo" className="card-logo" />
                      </div>
                    )}
                    <div className="card-title-group">
                      <div className="card-badges">
                        <span className="badge glass">{item.status}</span>
                        <span className="badge glass date-badge">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <h4 className="organization">{item.organization}</h4>
                    </div>
                  </div>
                  {item.description && <p className="journey-desc">{item.description}</p>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

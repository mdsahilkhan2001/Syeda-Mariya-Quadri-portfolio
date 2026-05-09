import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Layout, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Data Analysis', image: '/data-analysis.webp', color: '#0ea5e9' },
    { name: 'Web Development', image: '/web dev.jpg', color: '#6d28d9' },
    { name: 'Dashboard Creation', image: '/dashbaor creation.png', color: '#f43f5e' },
    { name: 'Performance Optimization', image: '/performance-optimization.png', color: '#10b981' },
  ];

  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text glass-card">
            <h3>Bridging the Gap Between <span className="text-gradient">Data and Design</span></h3>
            <p>
              I am an IT professional with hands-on experience in web development, data handling, and dashboard creation. I have worked on real client projects, delivering responsive websites, clean data solutions, and interactive dashboards.
            </p>
            <p>
              My dual expertise allows me to not only analyze and structure complex data but also present it through beautiful, intuitive, and high-performance user interfaces. I focus on usability, clean code, and clear communication to ensure every project exceeds expectations.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card glass-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="skill-icon-wrapper">
                  <div className="skill-glow" style={{ backgroundColor: skill.color }}></div>
                  <div className="skill-image-container" style={{ border: `1px solid ${skill.color}40` }}>
                    <img src={skill.image} alt={skill.name} className="skill-img" />
                  </div>
                </div>
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

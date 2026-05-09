import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="badge glass">Hello, I'm</span>
          <h1 className="hero-title">
            Syeda <br />
            <span className="text-gradient">Mariya Quadri.</span>
          </h1>
          <h2 className="hero-subtitle">Data Analyst & Web Developer</h2>
          <p className="hero-description">
            I transform complex data into actionable insights and build modern, interactive web applications. Focused on performance, usability, and clear communication.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="primary-btn">
              Hire Me <ChevronRight size={20} />
            </a>
            <a href="#contact" className="secondary-btn glass">
              Request CV <Download size={20} />
            </a>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/syeda-mariya-quadri-2ab047267/" target="_blank" rel="noopener noreferrer" className="glass social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/evoastra" target="_blank" rel="noopener noreferrer" className="glass social-icon-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="image-main-container">
            <div className="rotating-border"></div>
            <div className="image-border">
              <img src="/profile.png" alt="Syeda Mariya Quadri" className="hero-image" />
            </div>
            <div className="glow-effect"></div>
          </div>
          
          <motion.div 
            className="floating-card card-1 glass"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <h3>100%</h3>
            <p>Data Accuracy</p>
          </motion.div>
          
          <motion.div 
            className="floating-card card-2 glass"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <h3>Modern</h3>
            <p>Web Solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

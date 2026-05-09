import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Data Analysis & ML",
      rows: [
        {
          direction: "left",
          items: [
            { name: 'Python', icon: '/icons/python.png', color: '#f59e0b', level: 90 },
            { name: 'Machine Learning', icon: '/icons/ml.png', color: '#8b5cf6', level: 80 },
            { name: 'Power BI', icon: '/icons/powerbi.jpeg', color: '#eab308', level: 90 }
          ]
        },
        {
          direction: "right",
          items: [
            { name: 'Tableau', icon: '/icons/tableou.png', color: '#f43f5e', level: 85 },
            { name: 'SQL', icon: '/icons/sql.png', color: '#0ea5e9', level: 95 },
            { name: 'Excel', icon: '/icons/excel.jpeg', color: '#10b981', level: 95 }
          ]
        }
      ]
    },
    {
      category: "Web Development",
      rows: [
        {
          direction: "left",
          items: [
            { name: 'React.js', icon: '/icons/react.png', color: '#61dafb', level: 85 },
            { name: 'JavaScript', icon: '/icons/js.jpeg', color: '#f7df1e', level: 90 },
            { name: 'HTML5', icon: '/icons/html.jpeg', color: '#e34f26', level: 95 },
            { name: 'CSS3', icon: '/icons/css.png', color: '#1572b6', level: 90 }
          ]
        }
      ]
    }
  ];

  const handleMouseMove = (e) => {
    const cards = document.getElementsByClassName("skill-card-premium");
    for(const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="skills" className="section" onMouseMove={handleMouseMove}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="skills-subtitle">A comprehensive toolkit spanning Data Analysis, Machine Learning, and Web Development.</p>
        </motion.div>
      </div>

      <div className="skills-container-marquee">
        {skillsData.map((category, idx) => (
          <div key={idx} className="skill-category-marquee">
            <div className="container">
              <h3 className="category-title">{category.category}</h3>
            </div>
            
            <div className="marquee-wrapper">
              {category.rows.map((row, rowIdx) => {
                // Triplicate items to ensure seamless infinite scrolling on all screen sizes
                const duplicatedItems = [...row.items, ...row.items, ...row.items, ...row.items, ...row.items, ...row.items];

                return (
                  <motion.div 
                    key={rowIdx}
                    className="marquee-track"
                    style={{ marginTop: rowIdx > 0 ? '1.5rem' : '0' }}
                    animate={
                      row.direction === "left" 
                      ? { x: ["0%", "-50%"] }
                      : { x: ["-50%", "0%"] }
                    }
                    transition={{ 
                      repeat: Infinity, 
                      ease: "linear", 
                      duration: 35 // speed of marquee
                    }}
                  >
                    {duplicatedItems.map((skill, index) => (
                      <div 
                        key={index}
                        className="skill-card-premium marquee-card"
                        style={{ "--hover-color": skill.color }}
                      >
                        <div className="skill-card-inner">
                          <div className="skill-image-container">
                            <img src={skill.icon} alt={skill.name} className="skill-image" />
                          </div>
                          
                          <div className="skill-info">
                            <span className="skill-name-large">{skill.name}</span>
                          </div>
                        </div>

                        <div className="skill-progress-track">
                          <div 
                            className="skill-progress-bar"
                            style={{ backgroundColor: skill.color, width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

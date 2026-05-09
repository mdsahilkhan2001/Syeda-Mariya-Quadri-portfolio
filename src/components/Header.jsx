import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`header ${scrolled ? 'scrolled glass' : ''}`}
    >
      <div className="header-container container">
        <a href="#home" className="logo text-gradient">
          Syeda Mariya.
        </a>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="contact-btn glass">Let's Talk</a>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu glass"
        >
          <nav>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="contact-btn glass text-center" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

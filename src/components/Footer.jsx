import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, ArrowUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Footer.css';

const Footer = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      formRef.current,
      import.meta.env.VITE_EMAILJS_USER
    )
      .then((result) => {
        setStatus('success');
        setTimeout(() => setStatus(''), 5000);
        e.target.reset();
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
        console.error('Email Error:', error);
      });
  };

  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-title text-gradient">Let's Connect</h2>
            <p className="footer-desc">
              I'm currently available for professional opportunities and data analysis projects. 
              <strong> Connect with me here to receive a copy of my latest CV directly in your inbox.</strong>
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon glass"><Mail size={20} /></div>
                <div className="contact-text">
                  <span>Email Me</span>
                  <a href="mailto:syedaquadri66@gmail.com">syedaquadri66@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon glass"><MapPin size={20} /></div>
                <div className="contact-text">
                  <span>Location</span>
                  <p>Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-form glass-card">
            <h3>Send a Message</h3>
            <p className="form-subtitle">I'll get back to you and send my CV shortly.</p>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="from_name" placeholder="Your Name" required className="glass" />
              </div>
              <div className="form-group">
                <input type="email" name="from_email" placeholder="Your Email" required className="glass" />
              </div>
              <div className="form-group">
                <textarea name="message" rows="4" placeholder="How can I help you? (Request CV here)" required className="glass"></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${status === 'sending' ? 'loading' : ''}`}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              {status === 'success' && (
                <div className="form-status success">
                  <CheckCircle2 size={18} /> Message sent! I will email you my CV soon.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status error">
                  <AlertCircle size={18} /> Failed to send. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Syeda Mariya Quadri. All rights reserved.</p>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/syeda-mariya-quadri-2ab047267/" className="glass" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/evoastra" className="glass" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
          
          <button className="scroll-top glass" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

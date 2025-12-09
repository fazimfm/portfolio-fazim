import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Message sent successfully!');
      setIsSubmitting(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Connect</h3>
              <p>I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <a href="mailto:fazimwrkid@gmail.com">fazimwrkid@gmail.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>Phone</h4>
                  <a href="tel:+916382676699">+91 6382676699</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Location</h4>
                  <p>India (Remote & On-site)</p>
                </div>
              </div>
            </div>
            
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-grid">
                <a href="https://www.linkedin.com/in/fazimr/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <span>💼</span>
                  <div>
                    <strong>LinkedIn</strong>
                    <p>Professional Network</p>
                  </div>
                </a>
                <a href="https://github.com/fazimfm" target="_blank" rel="noopener noreferrer" className="social-link github">
                  <span>🐙</span>
                  <div>
                    <strong>GitHub</strong>
                    <p>Code Repository</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="availability-card">
              <div className="status-header">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <h4>Available for Work</h4>
                </div>
              </div>
              <p>Currently accepting new projects and opportunities</p>
              <div className="response-time">
                <span>⏱️</span>
                <small>Usually responds within 24 hours</small>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Send Message</h3>
              <p>Have a project in mind? Let's discuss it!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input 
                  type="text" 
                  placeholder="Your Name *" 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Your Email *"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject *"
                value={form.subject}
                onChange={(e) => setForm({...form, subject: e.target.value})}
                required
              />
              <textarea 
                placeholder="Your Message *"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                rows="6"
                required
              ></textarea>
              
              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus && (
                <div className="submit-status success">
                  ✓ {submitStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
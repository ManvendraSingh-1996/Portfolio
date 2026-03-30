import { Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-heading">Let's build something amazing together.</h3>
            <p className="contact-desc">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              Currently open for new opportunities.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon glass">
                  <Mail size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>manvendrasrmcem.1996@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon glass">
                  <Phone size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8299260887</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon glass">
                  <MapPin size={24} className="text-gradient" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form glass-box">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Tell me about your project..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary w-full shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Manvendra Singh. Built with React & TypeScript.</p>
      </footer>
    </section>
  );
}

import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

export function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="status-badge glass">
            <span className="pulse-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-title">
            Crafting Digital
            <br />
            Experiences with <span className="text-gradient">React & TS</span>
          </h1>

          <p className="hero-subtitle delay-100">
            I'm a Software Engineer specializing in crafting end-to-end digital solutions.
            With <strong>3 years of experience</strong> using JavaScript and Cloud services, I thrive on solving real-world problems and building scalable systems.
          </p>

          <div className="hero-actions delay-200">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV <Download size={20} />
            </a>
          </div>

          <div className="hero-socials delay-300">
            <a href="https://github.com/ManvendraSingh-1996" target="_blank" rel="noopener noreferrer" className="social-icon hover-glow">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manvendra-singh-3b67bb208" target="_blank" rel="noopener noreferrer" className="social-icon hover-glow">
              <LinkedinIcon size={24} />
            </a>
            <a href="#contact" className="social-icon hover-glow">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual delay-200">
          <div className="visual-circle glass-box">
            <div className="inner-circle"></div>
            {/* Floating elements */}
            <div className="float-item react-logo glass">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gradient"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
            </div>
            <div className="float-item ts-logo glass">
              <span className="text-gradient fw-bold">TS</span>
            </div>
            {/* <div className="float-item ts-logo glass">
              <span className="text-gradient fw-bold">JS</span>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

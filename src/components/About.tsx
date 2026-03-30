import { Terminal, Code, Layout, Database } from 'lucide-react';
import './About.css';

export function About() {
  const cards = [
    {
      icon: <Layout size={24} className="text-gradient" />,
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and high-performance user interfaces using React, Redux, and modern CSS.'
    },
    {
      icon: <Terminal size={24} className="text-gradient" />,
      title: 'Architecture & Scalability',
      description: 'Designing scalable component architectures and establishing best practices for large codebase maintenance.'
    },
    {
      icon: <Code size={24} className="text-gradient" />,
      title: 'TypeScript Ecosystem',
      description: 'Leveraging strict typing to build robust applications with fewer bugs and excellent developer experience.'
    },
    {
      icon: <Database size={24} className="text-gradient" />,
      title: 'State Management',
      description: 'Expertise in managing complex application states using Redux Toolkit, Context API, and React Query.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <h3 className="about-greeting">Hello, I'm Manvendra.</h3>
            <p>
              I am a passionate <strong>Software Engineer</strong> with <strong>3 years of professional experience</strong> crafting end-to-end digital solutions using JavaScript and cloud services. I thrive on solving real-world problems and building scalable systems.
            </p>
            <p>
              I graduated with a <strong>Bachelor of Technology (ME) from SRMCEM Lucknow (2015-2019)</strong>. Since then, I've focused my career on full-stack technologies, excelling across modern JavaScript frameworks, robust back-ends like Node.js, and complex Azure Cloud infrastructure.
            </p>
            <p>
              When I'm not coding, I'm exploring new JavaScript frameworks, contributing to open-source, or refining my UI/UX design skills to bridge the gap between engineering and design.
            </p>
          </div>
          
          <div className="about-cards">
            {cards.map((card, index) => (
              <div key={index} className={`glass-box feature-card delay-${(index + 1) * 100}`}>
                <div className="card-icon">{card.icon}</div>
                <h4 className="card-title">{card.title}</h4>
                <p className="card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Projects.css';

export function Projects() {
  const projects = [
    {
      title: "Tuyeres Monitoring System",
      description: "An industrial monitoring UI for real-time tuyere temperature tracking, integrating Fabric.js for precise part-specific analysis on live facility feeds.",
      tech: ["Angular", "Material UI", "Echarts", "Fabric.js"],
      github: "https://github.com/ManvendraSingh-1996",
      live: "#"
    },
    {
      title: "Visibility Forecasting App",
      description: "A dynamic responsive application designed for plotting atmospheric visibility predictions, consuming real-time APIs to provide accurate 48-hour forecasts.",
      tech: ["React.js", "Echarts", "Real-time REST APIs"],
      github: "https://github.com/ManvendraSingh-1996",
      live: "#"
    },
    {
      title: "React Native Cross-Platform POC",
      description: "A mobile application for Android and iOS providing multi-user authentication backed by an extensive backend, implementing admin dashboards and map services.",
      tech: ["React Native", "Node.js", "PostgreSQL", "Google Maps API"],
      github: "https://github.com/ManvendraSingh-1996",
      live: "#"
    },
    {
      title: "Defect Management Dashboard",
      description: "A dedicated frontend system with robust data visualization highlighting defect parameters and service workflow for automobile centers using protected admin routes.",
      tech: ["React.js", "Tailwind CSS", "Chart.js"],
      github: "https://github.com/ManvendraSingh-1996",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`glass-box project-card delay-${(index + 1) * 100}`}>
              <div className="project-header">
                <Folder size={40} className="text-gradient" />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover-glow">
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover-glow">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

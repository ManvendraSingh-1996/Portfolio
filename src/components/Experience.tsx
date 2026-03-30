import { Briefcase } from 'lucide-react';
import './Experience.css';

export function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Deevia Software India Pvt. Ltd. | Bangalore, India",
      duration: "Sept 2022 - Present",
      description: "Designed highly responsive interfaces using React.js and Tailwind CSS. Built real-time interactive dashboards using Echarts resulting in a 25% user engagement boost. Handled end-to-end data pipelines and automated SQL server recovery via Azure Data Factory.",
      skills: ["React", "React Native", "Power BI", "Tailwind CSS", "Material UI", "Azure Data Factory", "Node.js", "PostgreSQL"]
    },
    {
      role: "Fullstack Development Trainee",
      company: "Newton School",
      duration: "Nov 2021 - July 2022",
      description: "Completed an intensive Fullstack Development traineeship, gaining hands-on programming experience by engineering complex web clones of platforms like Netflix and Google.",
      skills: ["React", "HTML", "CSS", "JavaScript", "Java", "Rapid APIs"]
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional <span className="text-gradient">Journey</span></h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item delay-${(index + 1) * 100}`}>
              <div className="timeline-dot">
                <Briefcase size={20} className="timeline-icon" />
              </div>
              <div className="timeline-content glass-box">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <h4 className="timeline-company text-gradient">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
                <div className="timeline-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

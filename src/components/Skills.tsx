import './Skills.css';

export function Skills() {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["React", "Angular", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "Material UI"]
    },
    {
      title: "Back-End Development",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "SQL Database"]
    },
    {
      title: "Cloud & Tools",
      skills: ["Azure Data Factory", "Databricks", "Synapse Analytics", "Logic Apps", "Postman API", "Power BI", "Git"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`glass-box skill-card delay-${(idx + 1) * 100}`}>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-tag border-gradient">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

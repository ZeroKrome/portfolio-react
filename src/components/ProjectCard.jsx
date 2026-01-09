const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>

      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer">
          Démo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

const ProjectCard = ({ title, description, tech, github, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>

      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {demo && (
          <a href={demo} target="_blank" rel="noreferrer">
            Voir le site
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

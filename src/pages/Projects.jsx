import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Site vitrine – Restaurant"
          description="Site responsive visant à améliorer la visibilité et la prise de contact d’un restaurant."
          tech="React • CSS"
          github="https://github.com/ZeroKrome"
          demo="#"
        />

        <ProjectCard
          title="Application de gestion"
          description="Mini application React avec formulaires et gestion de données."
          tech="React"
        />
      </div>
    </section>
  );
};

export default Projects;

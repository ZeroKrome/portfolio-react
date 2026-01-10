import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        <ProjectCard
          title="Portfolio personnel"
          description="Portfolio développé en React pour présenter mes projets et mon profil."
          tech="React • CSS • Vite"
          github="https://github.com/ZeroKrome/portfolio-react"
          demo="#"
        />
        <ProjectCard
          title="Site vitrine – Rugby Club Béthunois"
          description="Conception et développement complet d’un site web vitrine pour un club sportif, réalisé dans le cadre de mon stage."
          tech="HTML • CSS • JavaScript"
          github="https://github.com/kevindubois2804/site_club_rugby_bethune"
          demo="https://rugby-club-bethunois.fr/"
        />

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

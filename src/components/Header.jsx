const Header = () => {
  return (
    <header className="header">
      <div className="logo">Lemaire Mathieu</div>

      <nav>
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              href="/cv-mathieu-lemaire.pdf"
              target="_blank"
              rel="noreferrer"
              className="cv-link"
            >
              CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

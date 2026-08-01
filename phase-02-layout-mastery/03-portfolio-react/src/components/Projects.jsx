function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Digital Business Card</h3>
            <p>A clean personal card built with HTML, CSS and React.</p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Responsive portfolio using Flexbox and CSS Grid.</p>
          </div>

          <div className="project-card">
            <h3>Coming Soon</h3>
            <p>More projects will be added here soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">

        <a href="https://bujamovies.vercel.app/" target="_blank" className="project-card">
          <h3>Bujamovies</h3>
          <p>Movie streaming platform</p>
        </a>

        <a href="https://purpose-discovery.vercel.app/" target="_blank" className="project-card">
          <h3>Purpose Discovery</h3>
          <p>Personal growth platform</p>
        </a>

        <a href="https://ypdsi-ndashoboye-org.vercel.app/" target="_blank" className="project-card">
          <h3>Ndashoboye</h3>
          <p>Organization website</p>
        </a>

      </div>
    </section>
  );
}

export default Projects;
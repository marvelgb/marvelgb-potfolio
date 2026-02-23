import buja from "../assets/bujamovies.png";
import purpose from "../assets/purpose.png";
import ndashoboye from "../assets/ndashoboye.png";

function Projects() {
  const projects = [
    {
      name: "Bujamovies",
      image: buja,
      tech: "React",
      link: "https://bujamovies.vercel.app/",
    },
    {
      name: "Purpose Discovery",
      image: purpose,
      tech: "React",
      link: "https://purpose-discovery.vercel.app/",
    },
    {
      name: "Ndashoboye",
      image: ndashoboye,
      tech: "React",
      link: "https://ypdsi-ndashoboye-org.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            key={index}
            className="project-card"
          >
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;

import ProjectCard from "./ProjectCard";

type Projects = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

type ProjectsProps = {
  projects: Projects[];
};

function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) {
    return <p>No projects to display.</p>;
  }

  return (
    <section>
      <h2>My Projects</h2>

      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;

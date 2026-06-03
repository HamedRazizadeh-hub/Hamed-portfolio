import ProjectCard from "./ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
};

type ProjectsProps = {
  projects: Project[];
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
};

function Projects({ projects, activeFilter, setActiveFilter }: ProjectsProps) {
  const allTags = [
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];

  const filteredProjects =
    activeFilter === null
      ? projects
      : projects.filter((project) => project.techStack.includes(activeFilter));

  return (
    <section>
      <h2>My Projects</h2>

      <div>
        <button
          type="button"
          className={activeFilter === null ? "active-filter" : ""}
          onClick={() => setActiveFilter(null)}
        >
          All
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={activeFilter === tag ? "active-filter" : ""}
            onClick={() => setActiveFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 && <p>No projects match this filter.</p>}

      <ul>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}

export default Projects;

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, TypeScript, React Router, and Tailwind CSS.",
  },
  {
    title: "Task Manager",
    description:
      "A small task management app that uses React state to add, complete, and remove tasks.",
  },
  {
    title: "Weather App",
    description:
      "A frontend application that fetches live weather data from an external API.",
  },
];

export function ProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Projects
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Here are some projects I have built while learning frontend
          development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex min-h-72 flex-col justify-start rounded-2xl border border-slate-300 bg-white/85 px-6 py-8 text-center shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>

            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

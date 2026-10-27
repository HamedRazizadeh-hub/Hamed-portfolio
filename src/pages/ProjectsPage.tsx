import { projects } from "../data/projects";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ProjectsPage() {
  useDocumentTitle("Projects — Hamed Razizadeh");
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Projects</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">Selected web applications, with my contributions highlighted for team projects.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex min-w-0 flex-col rounded-2xl border border-slate-300 bg-white/85 px-6 py-8 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-3 text-sm font-semibold text-blue-700 dark:text-blue-300">{project.context}</p>
            <h2 className="mb-4 text-xl font-bold">{project.title}</h2>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">{project.description}</p>
            {project.contributions && (
              <div className="mt-5">
                <h3 className="mb-2 font-semibold">My contributions</h3>
                <p className="leading-relaxed text-slate-700 dark:text-slate-300">{project.contributions}</p>
              </div>
            )}
            <h3 className="mb-2 mt-5 font-semibold">{project.stackLabel}</h3>
            <ul className="mb-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => <li key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{tech}</li>)}
            </ul>
            <div className="mt-auto flex flex-wrap gap-4 border-t border-slate-200 pt-5 font-semibold text-blue-700 dark:border-slate-700 dark:text-blue-300">
              <a className="underline underline-offset-4" href={project.demo} aria-label={`${project.title}: demo`}>Demo</a>
              <a className="underline underline-offset-4" href={project.repository} aria-label={`${project.title}: repository`}>Repository</a>
              {project.teamRepository && <a className="underline underline-offset-4" href={project.teamRepository}>Original team repository</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

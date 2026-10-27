import { Link } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle("Home — Hamed Razizadeh");

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center rounded-3xl bg-gradient-to-r from-brand to-indigo-600 px-8 py-12 text-center text-white shadow-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-100">
          Frontend Developer
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Hamed Razizadeh
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-blue-50">
          Based in Utrecht, the Netherlands. I build responsive interfaces with
          React, Next.js, and TypeScript, connecting them to backend APIs.
        </p>
        <p className="mt-4 font-medium text-blue-50">Seeking junior frontend developer opportunities.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link to="/projects" className="rounded-full bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50">View projects</Link>
          <Link to="/contact" className="rounded-full border border-white px-5 py-3 font-semibold hover:bg-white/10">Get in touch</Link>
        </div>
      </div>

      <div className="flex flex-col items-center rounded-3xl bg-white/85 p-8 text-center shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
          About me
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          I have completed the HackYourFuture web development program and have a
          background in architecture and design. I bring that design perspective
          to frontend development, creating clear, useful interfaces and
          practical web applications.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-3xl bg-white/85 p-8 text-center shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>

        <ul className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-6">
          {["React", "Next.js", "TypeScript", "Responsive UI", "API integration", "Tailwind CSS"].map(
            (skill) => (
              <li
                key={skill}
                className="min-w-0 rounded-2xl bg-slate-100 px-2 py-4 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1 hover:bg-brand hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-brand"
              >
                {skill}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

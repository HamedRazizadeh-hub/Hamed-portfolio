import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
        Error 404
      </p>

      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Page not found
      </h1>

      <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist. You can go back to the
        homepage and continue browsing the portfolio.
      </p>

      <Link
        to="/"
        className="inline-block rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:ring-offset-slate-900"
      >
        Go back home
      </Link>
    </section>
  );
}

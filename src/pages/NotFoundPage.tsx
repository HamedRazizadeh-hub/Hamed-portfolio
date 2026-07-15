import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
        Page not found
      </h1>

      <p className="mt-4 max-w-xl text-lg text-slate-700 dark:text-slate-300">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
      >
        Go back home
      </Link>
    </section>
  );
}

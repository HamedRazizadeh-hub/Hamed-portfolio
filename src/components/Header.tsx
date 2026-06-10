import { useState } from "react";
import { NavLink } from "react-router";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "rounded-full bg-brand px-4 py-2 font-semibold text-white shadow-sm"
    : "rounded-full px-4 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeToggle() {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header className="sticky top-0 z-10 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img
            className="h-20 w-20 rounded-full object-cover shadow-md ring-4 ring-white dark:ring-slate-800"
            src="/profile.jpg"
            alt="Portrait of Hamed Razizadeh"
          />

          <div>
            <NavLink
              to="/"
              className="text-2xl font-extrabold tracking-tight text-slate-900 hover:text-brand dark:text-white"
            >
              Hamed Razizadeh
            </NavLink>

            <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              Frontend Developer Student
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap gap-2">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/projects" className={navLinkClass}>
                  Projects
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <button
            className="w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 dark:ring-offset-slate-950"
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

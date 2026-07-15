import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { SectionError } from "./components/SectionError";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-200 via-slate-100 to-blue-200 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-slate-100">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {/*
          Each page has its own ErrorBoundary so if one page crashes,
          only that page shows the fallback message and the rest of the app
          can still work. Header stays outside the Routes, so users can still
          navigate even if a page fails. If Header were inside Routes without
          a boundary, a rendering error could remove the navigation too.
        */}
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary FallbackComponent={SectionError}>
                <HomePage />
              </ErrorBoundary>
            }
          />

          <Route
            path="/projects"
            element={
              <ErrorBoundary FallbackComponent={SectionError}>
                <ProjectsPage />
              </ErrorBoundary>
            }
          />

          <Route
            path="/contact"
            element={
              <ErrorBoundary FallbackComponent={SectionError}>
                <ContactPage />
              </ErrorBoundary>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

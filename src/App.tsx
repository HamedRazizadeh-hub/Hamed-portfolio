import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-200 via-slate-100 to-blue-200 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 dark:text-slate-100">
      <Header />

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

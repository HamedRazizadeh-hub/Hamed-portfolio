import Contact from "../components/Contact";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ContactPage() {
  useDocumentTitle("Contact — Hamed Razizadeh");
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          I’m based in Utrecht, the Netherlands, and looking for junior frontend developer opportunities. Let’s talk about your team or project.
        </p>
      </div>
      <Contact />
    </section>
  );
}

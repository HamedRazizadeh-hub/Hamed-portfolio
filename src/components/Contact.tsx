function Contact() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-white/85 p-6 text-center shadow-lg ring-1 ring-slate-300 sm:p-8 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="text-2xl font-bold">Get in touch</h2>
      <p className="text-slate-700 dark:text-slate-300">Email me directly or connect with me on LinkedIn.</p>
      <a className="inline-block max-w-full break-words rounded-2xl bg-brand px-5 py-3 font-semibold text-white hover:bg-blue-700" href="mailto:hamed.razizadeh@gmail.com">hamed.razizadeh@gmail.com</a>
      <p className="text-sm text-slate-600 dark:text-slate-400">Opens your email app. You can also copy the address above.</p>
      <div className="flex flex-wrap justify-center gap-6">
        <a className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300" href="https://www.linkedin.com/in/hamed-razizadeh-5b97304b/">LinkedIn</a>
        <a className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300" href="https://github.com/HamedRazizadeh-hub">GitHub</a>
      </div>
    </div>
  );
}
export default Contact;

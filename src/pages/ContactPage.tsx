import { useState } from "react";
import { useNavigate } from "react-router";

export function ContactPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    alert("Message sent!");
    navigate("/");
  }

  return (
    <section className="space-y-8">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>

        <p className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Send me a message using the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-5xl space-y-6 rounded-3xl bg-white/85 p-8 shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800"
      >
        {error && (
          <p className="rounded-2xl bg-red-50 p-4 text-center text-sm font-medium text-red-600 ring-1 ring-red-200 dark:bg-red-950 dark:text-red-300 dark:ring-red-900">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-center text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              type="text"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-center text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              type="email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-center text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="min-h-40 w-full rounded-2xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:ring-offset-slate-900"
          >
            Send message
          </button>
        </div>
      </form>
    </section>
  );
}

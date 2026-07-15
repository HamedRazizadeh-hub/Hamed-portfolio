import { useEffect, useRef, useTransition } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export function ContactPage() {
  const navigate = useNavigate();

  useDocumentTitle("Contact — Hamed Razizadeh");

  const nameRef = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { ref: nameRegisterRef, ...nameRegisterRest } = register("name", {
    required: "Name is required.",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters.",
    },
  });

  const setNameRef = (element: HTMLInputElement | null) => {
    nameRegisterRef(element);
    nameRef.current = element;
  };

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  function onSubmit(data: ContactFormData) {
    startTransition(async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));

        console.log("Contact form submitted:", data);

        reset();
        navigate("/");
      } catch {
        setError("root", {
          message: "Something went wrong. Please try again.",
        });
      }
    });
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
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-5xl space-y-6 rounded-3xl bg-white/85 p-8 shadow-lg ring-1 ring-slate-300 backdrop-blur dark:bg-slate-900 dark:ring-slate-800"
      >
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
              type="text"
              className={`w-full rounded-2xl border bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-slate-950 dark:text-white ${
                errors.name
                  ? "border-red-500"
                  : "border-slate-300 dark:border-slate-700"
              }`}
              ref={setNameRef}
              {...nameRegisterRest}
            />

            {errors.name && (
              <p role="alert" className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
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
              type="email"
              className={`w-full rounded-2xl border bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-slate-950 dark:text-white ${
                errors.email
                  ? "border-red-500"
                  : "border-slate-300 dark:border-slate-700"
              }`}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />

            {errors.email && (
              <p role="alert" className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
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
            rows={7}
            className={`min-h-40 w-full rounded-2xl border bg-white p-3 text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:bg-slate-950 dark:text-white ${
              errors.message
                ? "border-red-500"
                : "border-slate-300 dark:border-slate-700"
            }`}
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 20,
                message: "Message must be at least 20 characters.",
              },
            })}
          />

          {errors.message && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        {errors.root && (
          <p
            role="alert"
            className="rounded-2xl bg-red-50 p-4 text-center text-sm font-medium text-red-600 ring-1 ring-red-200 dark:bg-red-950 dark:text-red-300 dark:ring-red-900"
          >
            {errors.root.message}
          </p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isPending || isSubmitting}
            className="rounded-2xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:ring-offset-slate-900"
          >
            {isPending || isSubmitting ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}

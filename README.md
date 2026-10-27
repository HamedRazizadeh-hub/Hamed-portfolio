# Hamed Razizadeh — Portfolio

My personal portfolio as a Frontend Developer based in Utrecht, the Netherlands.

I have completed the HackYourFuture web development program and bring a background in architecture and design. I build responsive interfaces with React and TypeScript, and my current focus also includes Next.js and API integration.

**I am seeking junior frontend developer opportunities.**

## Features

- Professional introduction, skills, and navigation to projects and contact.
- Three featured projects: **JobMatch**, **Football Teams Explorer**, and **Cookbook**, with technology details, repository links, demos, and my contributions to team projects.
- Contact links for email, LinkedIn, and GitHub.
- Responsive layouts and a light/dark theme toggle.
- Keyboard focus indicators, skip-to-content navigation, and reduced-motion support.
- React Router navigation, page titles, page-level error boundaries, and a not-found page.

The email link opens the visitor’s email application. The portfolio does not send or store contact messages.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Error Boundary
- ESLint

Next.js and other technologies mentioned in the featured projects describe those applications, rather than this portfolio.

## Run Locally

Clone the repository and install its dependencies:

```bash
git clone https://github.com/HamedRazizadeh-hub/Hamed-portfolio.git
cd Hamed-portfolio
npm ci
npm run dev
```

Open the local URL printed by Vite.

Use a Node.js version supported by the installed Vite version. No environment variables, credentials, or backend are required.

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Commands

| Command           | Purpose                                             |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the development server                        |
| `npm run lint`    | Run ESLint                                          |
| `npm run build`   | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally                |

There is currently no automated test command.

## Project Structure

```text
public/                      Static assets
src/
  main.tsx                   Application entry point
  App.tsx                    Shared layout and routes
  pages/                     Home, projects, contact, and not-found pages
  components/                Shared UI components
  data/projects.ts           Project descriptions, contributions, and links
  context/ThemeContext.tsx   Light/dark theme state
  hooks/                     Document title hook
  index.css                  Tailwind entry and accessibility styles
index.html                   HTML entry and metadata
vite.config.ts               Vite configuration
vercel.json                  Client-side routing configuration
```

Routes include `/`, `/projects`, and `/contact`. Unknown routes display the not-found page.

The theme resets on reload. The existing Vercel configuration supports direct navigation to client-side routes.

## Preview & Validation

[Portfolio website](https://hamed-portfolio-mu.vercel.app/)

The updated portfolio has been visually checked locally. ESLint and the production build passed.

The published website should be checked again after the updated code is pushed and deployed.

## Contact

- [GitHub](https://github.com/HamedRazizadeh-hub)
- [LinkedIn](https://www.linkedin.com/in/hamed-razizadeh-5b97304b/)
- [Email](mailto:hamed.razizadeh@gmail.com)

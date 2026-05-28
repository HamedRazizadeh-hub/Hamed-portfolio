import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with HTML and CSS.",
    techStack: ["HTML", "CSS"],
    url: "",
  },
  {
    id: 2,
    title: "React Shop",
    description: "A simple React shop project using components and props.",
    techStack: ["React", "TypeScript"],
    url: "",
  },
  {
    id: 3,
    title: "Recipe App",
    description: "Recipe application using MealDB API.",
    techStack: ["JavaScript", "API", "CSS"],
    url: "",
  },
];

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <About />
        <Projects projects={projects} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

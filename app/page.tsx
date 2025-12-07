import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

import Reveal from "../components/Reveal";

const projects = [
  {
    title: "CineVibe",
    description:
      "A smart movie-discovery app that recommends films based on your mood, genre and rating preferences.",
    tags: ["Next.js", "Tailwind", "TypeScript", "OMDb API"],
    github: "https://github.com/JawaharCreator06/cinevibe",
    live: "https://cinevibe07.netlify.app/"
  },
  // Add more projects here if you want
  // {
  //   title: "Project Two",
  //   description: "...",
  //   tags: [...],
  //   github: "...",
  //   live: "..."
  // }
];

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            // stagger by index using small incremental delay
            const delay = 0.05 + i * 0.08;
            return (
              <Reveal key={p.title} delay={delay}>
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  github={p.github}
                  live={p.live}
                />
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-4">About</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-slate-600 max-w-3xl">
            I build delightful interfaces and intelligent systems. I specialize in frontend engineering,
            performance optimization, and crafting exceptional user experiences.
          </p>
        </Reveal>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <Reveal>
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
          
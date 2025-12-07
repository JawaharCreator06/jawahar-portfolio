import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Page() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="CineVibe"
            description="A smart movie-discovery app that recommends films based on your mood, genre and rating preferences."
            tags={["Next.js","Tailwind","TypeScript","OMDb API"]}
            github="https://github.com/JawaharCreator06/cinevibe"
            live="https://cinevibe07.netlify.app/"
          />
        </div>
      </section>
    </main>
  )
}

"use client";

import { HorizontalScroll } from "@/components/HorizontalScroll";

const projects = [
  {
    id: 1,
    title: "Neon Verses",
    category: "Architecture",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Silent Forms",
    category: "Furniture Design",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Echo Void",
    category: "High-End Coaching",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Prism Core",
    category: "Digital Art",
    color: "bg-purple-500",
  },
];

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-center z-10 text-foreground mix-blend-exclusion">
          The Interactive
          <br />
          Storyteller
        </h1>
        <p className="mt-8 text-xl text-neutral-500 max-w-lg text-center z-10 px-4">
          A premium portfolio experience designed for impact.
        </p>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0 pointer-events-none" />
      </section>

      {/* Horizontal Scroll Section */}
      <HorizontalScroll>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-3xl ${project.color} shrink-0 transition-transform duration-500 hover:scale-[0.98] cursor-none`}
            data-cursor-hover
          >
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-white/80 uppercase tracking-widest text-sm mb-2">
                {project.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </HorizontalScroll>

      {/* Contact / Footer Section */}
      <section className="h-screen flex items-center justify-center bg-foreground text-background">
        <div className="text-center px-4">
          <h2 className="text-5xl md:text-8xl font-bold mb-8">Let's Talk.</h2>
          <a
            href="mailto:contact@example.com"
            className="text-2xl underline decoration-1 underline-offset-8 hover:opacity-70 transition-opacity"
          >
            contact@interactive-storyteller.com
          </a>
        </div>
      </section>
    </main>
  );
}

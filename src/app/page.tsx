"use client";

import { use, useState } from "react";
import { HorizontalScroll } from "@/components/HorizontalScroll";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Neon Verses",
    category: "Architecture",
    description: "A futuristic exploration of light and space. Neon Verses challenges the boundaries of traditional architectural forms by integrating dynamic lighting directly into the structural elements.",
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Silent Forms",
    category: "Furniture Design",
    description: "Minimalist furniture that speaks volumes through silence. Each piece is crafted with precision to blend seamlessly into any environment while making a bold statement.",
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Echo Void",
    category: "High-End Coaching",
    description: "Transformative coaching experiences designed for the elite. Echo Void provides a sanctuary for growth, reflection, and strategic planning.",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Prism Core",
    category: "Digital Art",
    description: "Digital landscapes that fracture and reform. Prism Core explores the intersection of mathematics and art, creating visual experiences that are both chaotic and ordered.",
    color: "bg-purple-500",
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className={`group relative h-[70vh] w-[80vw] md:w-[60vw] overflow-hidden rounded-3xl ${project.color} shrink-0 cursor-none`}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5, type: "spring" }}
            data-cursor-hover
          >
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent"
              layoutId={`content-${project.id}`}
            >
              <motion.span
                className="text-white/80 uppercase tracking-widest text-sm mb-2"
                layoutId={`category-${project.id}`}
              >
                {project.category}
              </motion.span>
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white"
                layoutId={`title-${project.id}`}
              >
                {project.title}
              </motion.h2>
            </motion.div>
          </motion.div>
        ))}
      </HorizontalScroll>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto cursor-pointer"
            />
            {projects.map((project) => (
              project.id === selectedId && (
                <motion.div
                  layoutId={`card-${project.id}`}
                  key={project.id}
                  className={`relative w-full max-w-5xl h-full md:h-[80vh] ${project.color} rounded-3xl overflow-hidden shadow-2xl pointer-events-auto`}
                >
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                    layoutId={`content-${project.id}`}
                  >
                    <motion.button
                      className="absolute top-8 right-8 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-md transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedId(null);
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>

                    <motion.span
                      className="text-white/80 uppercase tracking-widest text-sm mb-4"
                      layoutId={`category-${project.id}`}
                    >
                      {project.category}
                    </motion.span>
                    <motion.h2
                      className="text-5xl md:text-8xl font-bold text-white mb-8"
                      layoutId={`title-${project.id}`}
                    >
                      {project.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-white/90 text-lg md:text-2xl max-w-2xl leading-relaxed"
                    >
                      {project.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </div>
        )}
      </AnimatePresence>

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

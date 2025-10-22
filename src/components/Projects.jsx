import React from "react";
import { motion } from "framer-motion";

void motion;
const projects = [
  {
    title: "Groom Yourself",
    description: "A grooming website to book your personalized appointment at your address.",
    image: "groom-yourself.png",
    technologies: ["React.js", "JavaScript", "TailwindCSS"],
    website: "https://groom-yourself-w1ac-qg56amkxm-manavs-projects-0916b1c1.vercel.app/",
    github: "https://github.com/krypto-xic/Groom-Yourself"
  },
  {
    title: "Real Estate App",
    description: "A modern, responsive Real Estate application built with React.js, JavaScript, and TailwindCSS. Features property listings, filtering, and user authentication.",
    image: "real-estate.png",
    technologies: ["React.js","JavaScript", "TailwindCSS"],
    github: "https://github.com/krypto-xic/RealEstate"
  },
  {
    title: "TripNest",
    description: "A travel booking platform that allows users to explore and book trips seamlessly.",
    image: "trip-nest.png",
    technologies: ["React.js","JavaScript", "TailwindCSS"],
    github: "https://github.com/krypto-xic/TripNest"
  }
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-[#0A0A0A] border border-zinc-800 rounded-2xl overflow-hidden group"
    >
      <div className="p-4 flex justify-between items-center">
        <span className="text-zinc-500">Featured</span>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-[#0D0D0D] border border-zinc-800 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#FF2E92] transition-colors"
        >
          <span className="text-lg">👀</span>
          View Code
        </a>

        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-[#FF2E92] transition-colors cursor-pointer"
        >
          <span className="text-lg">👀</span>
          Visit Website
        </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center bg-[#030606] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="App">Featured Projects</span>
          </h2>
          <p className="text-gray-400">
            A showcase of my <span className="altText">creative work</span> and technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


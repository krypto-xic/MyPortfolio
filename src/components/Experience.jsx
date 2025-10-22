import React from "react";
import { motion } from "framer-motion";

void motion;

const experienceData = [
  {
    role: "Front-End Developer Intern",
    company: "Venture Consultancy Services (On Site)",
    date: "Jan - Jun 2025",
    points: [
      "Developed reusable components with React.js, JavaScript, and TailwindCSS.",
      "Translated mockups into responsive web interfaces.",
      "Integrated RESTful APIs and handled error states securely.",
      "Collaborated with cross-functional teams to define and implement new features."
    ],
    technologies: ["React.js", "JavaScript", "TailwindCSS", "RESTful APIs", "GitHub"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center bg-[#030606] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="App">Experience</span>
          </h2>
          <p className="text-gray-400">
            My professional journey in <span className="altText">software development</span>
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#030606] border border-zinc-800 rounded-2xl p-8"
            >
              <div className="relative">
                <div className="absolute -left-3 top-3 w-3 h-3 bg-[#FF2E92] rounded-full"></div>
                
                <div className="ml-4">
                  <h3 className="text-2xl font-bold App mb-1">{exp.role}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="altText">{exp.company}</span>
                    <span className="text-gray-500">{exp.date}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#FF2E92] mr-2">•</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-[#0A0A0A] border border-zinc-800 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
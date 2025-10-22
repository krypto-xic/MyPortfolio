import React from "react";
import { motion } from "framer-motion";

void motion;

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-[#030606] text-white pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="App">About Me</span>
          </h2>
          <p className="text-gray-400">
            Get to know the person behind the <span className="altText">code</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="border-4 w-1/2 ml-30 border-zinc-800 rounded-2xl overflow-hidden">
              <img
                src="/profile.jpeg"
                alt="Profile"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate frontend developer with a love for creating beautiful,
              functional web experiences. My journey in web development started with
              curiosity and has evolved into a dedication to crafting digital solutions that
              make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or learning about the latest trends in
              web development. I believe in continuous learning and pushing the
              boundaries of what's possible on the web.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My goal is to bridge the gap between design and development, creating
              seamless user experiences that are both visually stunning and highly
              functional.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-between mt-8 pt-8 border-t border-zinc-800"
            >
              <div className="text-center">
                <h3 className="App text-2xl font-bold">0</h3>
                <p className="text-sm text-gray-400">Years of Experience</p>
              </div>
              <div className="text-center">
                <h3 className="altText text-2xl font-bold">4+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="App text-2xl font-bold">6</h3>
                <p className="text-sm text-gray-400">Months of Internship</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

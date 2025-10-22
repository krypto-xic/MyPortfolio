import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

void motion;

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-[#030606] text-white" style={{ paddingTop: 80 }}>
      {/* Welcome message */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-18 left-1/2 transform -translate-x-1/2"
      >
        <div className="bg-[#030606] border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2">
          <span className="text-yellow-400 text-xl">⭐</span>
          <span className="text-white text-sm">Welcome to my universe</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-8xl font-bold mb-4"
        >
          <span className="App">Frontend Developer</span>
          <br />
          <span className="text-white">& Creative</span>
          <span className="altText"> Coder</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-2xl text-gray-300 mb-4">
            I craft <span className="App">beautiful</span>, <span className="altText">interactive</span> web experiences with modern technologies.
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            Passionate about clean code, stunning designs, and seamless user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link to="projects" smooth duration={600}>
            <button className="text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer duration-500" style={{ backgroundColor: 'var(--textColor)' }}>
              <span className="text-lg">🚀</span>
              Explore My Universe
            </button>
          </Link>
          <a 
            href="/Patanjal_CV_FD.pdf"
            download="Patanjal_CV_FD.pdf"
            className="border border-zinc-700 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-all duration-300 flex items-center gap-2"
          >
            <span className="text-lg">📄</span>
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4 text-[#00E5FF] text-sm animate-bounce"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

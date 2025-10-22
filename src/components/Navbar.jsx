import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HiHome } from "react-icons/hi";
import { BsPerson, BsBriefcase } from "react-icons/bs";
import { MdOutlineContactPage } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

void motion;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-colors duration-300 border-b border-zinc-800 ${
        scrolled ? "bg-[#030606] backdrop-blur-md" : "bg-[#030606]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer" style={{ backgroundPosition: "26.6286% 50%", backgroundSize: "200% 200%", backgroundColor: 'var(--altTextColor)' }}>
            <svg 
              stroke="currentColor" 
              fill="currentColor" 
              strokeWidth="0" 
              viewBox="0 0 640 512" 
              className="text-white text-xl animate-spin-slow" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ animation: 'spin 5s linear infinite' }}
            >
              <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
              ></path>
            </svg>
          </div>
          <div>
            <h1 className="App text-xl font-semibold cursor-pointer transition-transform duration-500 hover:scale-105">Patanjal Vishwakarma</h1>
            <p className="text-gray-400 text-sm tracking-tight cursor-pointer">Frontend Developer</p>
          </div>
        </div>

        {/* Right side - Navigation */}
        <nav className="hidden md:flex items-center border border-zinc-800 py-2 px-3 rounded-4xl">
          <Link 
            to="home" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <HiHome className="text-xl" />
            Home
          </Link> 
          <Link 
            to="about" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <BsPerson className="text-xl" />
            About
          </Link>
          <Link 
            to="experience" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <BsBriefcase className="text-xl" />
            Experience
          </Link>
          <Link 
            to="skills" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <AiOutlineCode className="text-xl" />
            Skills
          </Link>
          <Link 
            to="projects" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <BsBriefcase className="text-xl" />
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth 
            duration={500} 
            className="flex items-center gap-2 text-gray-300 rounded-4xl py-1 px-3  transition-transform duration-500 hover:scale-105 hover:bg-zinc-800 cursor-pointer"
          >
            <MdOutlineContactPage className="text-xl" />
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-black/95 backdrop-blur-md`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <Link to="home" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <HiHome className="text-xl" /> Home
          </Link>
          <Link to="about" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <BsPerson className="text-xl" /> About
          </Link>
          <Link to="experience" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <BsBriefcase className="text-xl" /> Experience
          </Link>
          <Link to="skills" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <AiOutlineCode className="text-xl" /> Skills
          </Link>
          <Link to="projects" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <BsBriefcase className="text-xl" /> Projects
          </Link>
          <Link to="contact" smooth duration={500} onClick={() => setOpen(false)} className="flex items-center gap-2 text-white">
            <MdOutlineContactPage className="text-xl" /> Contact
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}

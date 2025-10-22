import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaGit } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill} from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";


void motion;

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    iconColor: "text-[#61DAFB]",
    bgColor: "bg-[#20232A]",
    progressColor: "from-[#61DAFB] to-[#2A6B7C]"
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
    iconColor: "text-[#3178C6]",
    bgColor: "bg-[#1E1E1E]",
    progressColor: "from-[#3178C6] to-[#1A3C63]"
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    iconColor: "text-[#38BDF8]",
    bgColor: "bg-[#1E1E1E]",
    progressColor: "from-[#38BDF8] to-[#1D5D7C]"
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
    iconColor: "text-[#E34F26]",
    bgColor: "bg-[#1E1E1E]",
    progressColor: "from-[#E34F26] to-[#712713]"
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 />,
    iconColor: "text-[#1572B6]",
    bgColor: "bg-[#1E1E1E]",
    progressColor: "from-[#1572B6] to-[#0B395B]"
  },
  {
    name: "Git",
    icon: <FaGit />,
    iconColor: "text-[#F05032]",
    bgColor: "bg-[#1E1E1E]",
    progressColor: "from-[#F05032] to-[#782819]"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center bg-[#030606] text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="App">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400">
            The magical tools I use to bring <span className="altText">ideas to life</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-[#0A0A0A] border border-zinc-800 rounded-xl p-4 h-full flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                
                <div className="absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center text-2xl ${skill.iconColor} mb-2`}>
                  {skill.icon}
                </div>

                <h3 className="text-sm font-medium text-gray-300">{skill.name}</h3>

                <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-2">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.progressColor} w-full transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
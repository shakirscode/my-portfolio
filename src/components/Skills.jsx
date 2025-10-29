// components/Skills.jsx
import React from 'react';
import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaAws, FaDocker, FaGitAlt, FaKey
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql,
  SiFirebase, SiKubernetes, SiVercel, SiPostman,
  SiLeaflet, SiRazorpay, SiCloudinary
} from 'react-icons/si';

import { SiSpring } from "react-icons/si";


const Skills = () => {
  const skills = [
    
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "frontend" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, category: "frontend" },
    { name: "React", icon: <FaReact className="text-blue-400" />, category: "frontend" },
    //{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, category: "frontend" },
    { name: "Java", icon: <FaJava className="text-red-600" />, category: "backend" },
    { name: "Spring Boot", icon: <SiSpring className="text-green-600" />, category: "backend" },

    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, category: "backend" },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-400" />, category: "backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, category: "backend" },
    { name: "Python", icon: <FaPython className="text-blue-600" />, category: "backend" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" />, category: "backend" },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, category: "backend" },
    { name: "AWS", icon: <FaAws className="text-orange-500" />, category: "devops" },
    { name: "Docker", icon: <FaDocker className="text-blue-400" />, category: "devops" },
    { name: "Kubernetes", icon: <SiKubernetes className="text-sky-500" />, category: "devops" },
    { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" />, category: "devops" },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" />, category: "tools" },
    { name: "Postman", icon: <SiPostman className="text-orange-500" />, category: "tools" },
    { name: "JWT", icon: <FaKey className="text-purple-500" />, category: "tools" },
    { name: "Leaflet", icon: <SiLeaflet className="text-green-500" />, category: "tools" },
    //{ name: "Razorpay", icon: <SiRazorpay className="text-blue-600" />, category: "tools" },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" />, category: "tools" }
  ];

  const categories = {
    frontend: "Frontend",
    backend: "Backend & Database",
    devops: "DevOps & Cloud",
    tools: "Tools"
  };

  // Desired category order (modify here if you want a different ordering)
  const categoryOrder = ['frontend', 'backend', 'devops', 'tools'];

  // Group & sort (alphabetically) by category
  const grouped = categoryOrder
    .map((cat) => ({
      key: cat,
      label: categories[cat],
      items: skills
        .filter((s) => s.category === cat)
        .sort((a, b) => a.name.localeCompare(b.name)),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with to build amazing applications
          </p>
        </div>

        {/* Render each category */}
        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.key} aria-labelledby={`skills-${group.key}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 id={`skills-${group.key}`} className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {group.label}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{group.items.length} items</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {group.items.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-3 hover:scale-105 transition-transform duration-200 border border-gray-100 dark:border-gray-700"
                    title={skill.name}
                    aria-label={skill.name}
                  >
                    <div className="text-3xl md:text-4xl">
                      {skill.icon}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mt-1">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

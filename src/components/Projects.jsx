// src/components/Projects.jsx
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "E-Transit",
      subtitle: "A Live Bus Tracking Web App",
      description:
        "Real-time public transport tracking system using GTFS, React Leaflet, and Node.js backend. Led a team to build a real-time bus tracking system with dynamic route assignment and interactive map UI using Leaflet.",
      technologies: ["React", "Node.js", "MongoDB", "GTFS", "Leaflet"],
      github: "https://github.com/shakirscode/etransit.git",
      demo: "https://github.com/shakirscode/etransit",
      period: "May 2024 – Jun 2025",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "SLACK Platform",
      subtitle: "A Full-Stack Chat-Messaging App",
      description:
        "This is a SLACK (Searchable Log of All Conversation and Knowledge) is multi-purpose communication platform.",
      technologies: ["MERN", "GETStream.io API", "Twillio API"],
      github: "https://github.com/shakirscode",
      demo: "https://slackplatforms.vercel.app/",
      period: "Jan 2024 – May 2024",
      image: "/api/placeholder/400/250",
      featured: true,
    },
    {
      title: "Weather io",
      subtitle: "Web based weather app",
      description:
        "This is a dynamic weather application that provides current weather information based on user input. It fetches data from the OpenWeather API and displays it in an easy-to-understand format.",
      technologies: ["Plain HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/shakirscode/weather.io",
      demo: "https://github.com/shakirscode/weather.io",
      period: "Jun 2023 – Dec 2023",
      image: "/api/placeholder/400/250",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full blur-3xl animate-bounce dark:bg-purple-700" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-bounce delay-75 dark:bg-indigo-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills
            and experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-700">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ Featured
                  </div>
                )}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-indigo-100">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{project.period}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

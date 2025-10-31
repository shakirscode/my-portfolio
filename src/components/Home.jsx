// components/Home.jsx
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full blur-3xl opacity-30 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-400 rounded-full blur-3xl opacity-20 animate-pulse delay-150"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left copy */}
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Shakir
                </span>{" "}
                👋
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
                JAVA Full Stack Developer
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
                I build modern, scalable, real-time web applications with
                passion and precision. Transforming ideas into digital reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("#projects")}
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>🚀 View Projects</span>
              </button>
              <a
                href="https://drive.google.com/file/d/1XnWCImmE2eA1B7WMPgnV8YjYVcDrTqnw/view?usp=sharing"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaFileDownload className="mr-2" />
                <span>📄 Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center md:justify-start">
              <a
                href="https://github.com/shakirscode"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/shakir-dhamaskar"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:dhamaskarshakir72@gmail.com"
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>

          {/* Right: Animated Profile (KEEP this here) */}
          <div className="md:w-2/5 flex justify-center relative">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl animate-float transition-all duration-1000">
                <div className="text-white text-6xl md:text-8xl font-bold">
                  SD
                </div>
              </div>

              {/* Floating small icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-lg md:text-xl">🚀</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-75">
                <span className="text-lg md:text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

// components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-300 py-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 flex flex-col items-center text-center">
        {/* Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com/codesbyharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-125"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/codesbyharsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-125"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:jadhavh655@gmail.com"
            className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-125"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm mb-2">
          Designed & Built by{" "}
          <span className="text-indigo-400 font-medium">codesbyharsh</span>
        </p>
        <p className="text-gray-500 text-xs">© {year} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

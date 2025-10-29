// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    // { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    //{ name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simplified active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Theme initialization
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const newDark = !darkMode;
    setDarkMode(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
          scrolled ? "text-indigo-600 dark:text-indigo-400" : "text-white dark:text-white"
        }`}>
        
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative font-medium transition-all duration-300 hover:scale-105 overflow-visible ${
                  scrolled 
                    ? "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400" 
                    : "text-white/90 hover:text-white"
                } ${isActive ? (scrolled ? "text-indigo-600 dark:text-indigo-400" : "text-white") : ""}`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transform -translate-x-1/2 origin-center transition-all duration-300 ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
          <button 
            onClick={toggleDarkMode} 
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              scrolled 
                ? "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" 
                : "text-white hover:bg-white/20"
            }`} 
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-3">
          <button 
            onClick={toggleDarkMode} 
            aria-label="Toggle dark mode"
            className={`p-2 rounded-full transition-all duration-300 ${
              scrolled ? "text-gray-600 dark:text-gray-300" : "text-white"
            }`}
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className={scrolled ? "text-gray-600 dark:text-gray-300" : "text-white"}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-2 pb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg rounded-lg">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            
            return (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-3 px-4 font-medium transition-colors ${
                  isActive 
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20" 
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
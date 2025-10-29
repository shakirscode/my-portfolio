// components/About.jsx
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative"
    >
      {/* This space will be filled by the floating profile photo via CSS */}
      <div
        id="about-profile-anchor"
        className="absolute top-20 right-10 lg:right-20 w-64 h-64 md:w-80 md:h-80"
      ></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section - Full width on mobile, adjusted on desktop */}
          <div className="lg:w-full text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8 mx-auto lg:mx-0"></div>

            <div className="space-y-6 max-w-4xl">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a Recent Graduate (2025) Computer Engineer with a strong
                background in developing and deploying high-quality, scalable,
                and secure applications. I'm passionate about building
                impactful, real-time applications and specialize in backend
                architecture and frontend performance.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My toolkit includes AWS, Git, Github, Docker, Kubernetes,
                Spring, Spring boot, ReactJS, REST APIs. , I was responsible for
                leading the development of a Transit application that track
                buses in real time, multitier applications using GTFS
                technologies. I have a strong understanding of agile development
                principles and have successfully applied them in my work to
                deliver solutions that meet business needs and exceed customer
                expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {/* Currently working on freelance projects delivering end-to-end
                solutions for clients, from backend logic development to
                deployment on platforms like AWS and Vercel. */}
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <div className="bg-blue-500 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                <div className="bg-green-500 p-3 rounded-full">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Email
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    dhamaskarshakir72@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                <div className="bg-purple-500 p-3 rounded-full">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Phone
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    +91 9421881539
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                <div className="bg-orange-500 p-3 rounded-full">
                  <FaDownload className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Resume
                  </p>
                  <a
                    href="/resume.pdf"
                    className="font-semibold text-gray-800 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
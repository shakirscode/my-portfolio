import React from 'react';
import { FaCalendarAlt, FaRocket, FaCode, FaUsers, FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: " JPMC’s Software Engineering Program. ",
      company: "forage academy",
      period: "2023",
      type: "Self-learned",
      location: "Virtual",
      description:
        "Participated in JPMorgan Chase & Co.'s Software Engineering Program through Forage Academy, gaining hands-on experience in building financial applications using modern web technologies.",
      achievements: [
        "Interface	with	a	stock	price	data	feed",
        "Use JPMorgan	Chase	&	Co.	frameworks	and	tools",
        "Display	data	visually	for	traders",
        "Understanding the basics of Version Control System (VCS)",
        "Bonus	task:	Open	source	contribution",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS",
        "Git & GitHub",
        "Firebase",
      ],
      icon: "🚀",
      current: true,
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development
          </p>
        </div>

        <div className="max-w-4xl w-[90%] mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:scale-105 group relative"
            >
              {exp.current && (
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Current
                </div>
              )}
              
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl">
                  {exp.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-gray-700 dark:text-gray-300 font-semibold">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-purple-500 dark:text-purple-400" />
                  <span>{exp.period}</span>
                </div>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  {exp.type}
                </span>
                <span className="flex items-center">
                  <FaLaptopCode className="mr-2 text-blue-500" />
                  {exp.location}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    <FaRocket className="mr-2 text-green-500 dark:text-green-400" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-green-500 dark:text-green-400 mr-3 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="flex items-center text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    <FaCode className="mr-2 text-blue-500 dark:text-blue-400" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

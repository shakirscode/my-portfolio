// src/components/Certifications.jsx
import React from "react";
import {
  FaCertificate,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      title: " Oracle Certified Foundation Associate (2025)",
      issuer: "Oracle",
      date: "Oct 2025 – Oct 2027",
      description:
        "Familiarity with core OCI services including Compute, Storage, Networking, Database, Developer, Analytics, AI, Observability and Hybrid services",
      badge: "🎓",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B72DA385469D80E217A357FAEC0C002B61256F7C0EE8499EF72305BD9735C39A",
    },
    {
      title: "Java Foundation Professional Certificate by JetBrains (2025)",
      issuer: "JetBrains",
      date: "Feb 2025",
      description:
        "Comprehensive understanding of Java programming fundamentals, including OOP, data structures, and exception handling",
      badge: "🏆",
      link: "https://www.linkedin.com/posts/shakir-dhamaskar_certificate-of-completion-activity-7300595258902376448-IQB8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADZ-weMB-hGuGMEiXnnTHlv3LLo-lHMVZTw",
    },
    {
      title: "Workshop on Cloud Computing and DevOps",
      issuer: "RMCET",
      date: "Jan 2024",
      description:
        "Hands-on workshop covering cloud infrastructure, containerization with Docker, and CI/CD pipelines",
      badge: "☁️",
      link: "https://www.linkedin.com/in/shakir-dhamaskar",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(79,70,229,0.12) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.badge}</div>
                <FaCertificate className="text-indigo-500 text-xl dark:text-indigo-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-semibold text-indigo-500 dark:text-indigo-300">
                  {cert.issuer}
                </span>
              </div>

              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{cert.date}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              <a
                href={cert.link}
                className="inline-flex items-center text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 font-medium transition-colors group/link"
              >
                View Certificate
                <FaExternalLinkAlt className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

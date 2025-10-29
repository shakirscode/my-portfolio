import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from "react-icons/fa";


const Education = () => {
const educationData = [
  {
    degree: "B.E. Computer Engineering",
    institution: "Rajendra Mane College of Engineering & Technology, Ratnagiri",
    period: "2021 - 2025",
    score: "CGPA: 7.15",
    location: "Ratnagiri, Maharashtra",
    icon: "🎓",
  },
  {
    degree: "HSC (12th) PCM Group",
    institution: "Kai. Sau. Meenatai Thaakare Jr. Science College, Sadawali",
    period: "2019 - 2021",
    score: "75.17%",
    location: "Devrukh, Maharashtra",
    icon: "📚",
  },
  {
    degree: "SSC (10th)",
    institution: "Madhyamik Vidyamandir Tamhane, Tamhane",
    period: "2013 - 2019",
    score: "79%",
    location: "Tamhane, Maharashtra",
    icon: "🏫",
  },
];


return (
<section id="education" className="py-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row items-center justify-between mb-6">
<div>
<h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-1 max-w-xl">
Selected academic highlights arranged as a horizontal timeline (desktop).
</p>
</div>
</div>


{/* timeline markers */}
<div className="relative">
{/* connecting line */}
<div className="hidden sm:block absolute left-4 right-4 top-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-400 opacity-40 rounded" />


{/* markers */}
<div className="flex justify-between items-start gap-2 sm:gap-8">
{educationData.map((edu, idx) => (
<div key={idx} className="w-full sm:w-1/3 flex flex-col items-start sm:items-center">
<div className="relative z-20 -mt-1 sm:mt-0">
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white dark:bg-gray-800 border-2 border-indigo-300 dark:border-indigo-500 flex items-center justify-center shadow">
<span className="text-lg sm:text-2xl">{edu.icon}</span>
</div>
</div>


<div className="mt-3 sm:mt-4 w-full sm:w-11/12">
<div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 dark:border-gray-700">
<div className="flex items-start justify-between">
<div className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">{edu.degree}</div>
<div className="text-xs text-gray-500 dark:text-gray-400">{edu.period}</div>
</div>


<div className="text-xs text-gray-600 dark:text-gray-300 mt-2">{edu.institution}</div>


<div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
<span className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-500" />{edu.location}</span>
<span className="flex items-center gap-2"><FaStar className="text-yellow-500" />{edu.score}</span>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</div>
</section>
);
};


export default Education;
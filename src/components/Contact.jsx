// components/Contact.jsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="   text-center mb-4 text-4xl md:text-5xl font-bold text-gray-800 dark:text-white ">
          Contact
        </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6" />

   
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:dhamaskarshakir72@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    dhamaskarshakir72@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaPhone className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Phone</h4>
                  <a href="tel:+919421881539" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                    +91 9421881539
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Send Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium w-full transition-colors duration-300 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
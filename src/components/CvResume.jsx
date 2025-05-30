import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const LAST_UPDATED = "May 30, 2025";

const CvResume = () => (
  <section id="cv" className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4">
    <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl flex flex-col items-center py-10 px-6">
      <h2 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Resume</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-300">Last Updated: {LAST_UPDATED}</p>
      <a
        href="/sqaresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 shadow transition mb-16"
      >
        Download Resume
      </a>
      <div className="flex flex-col items-center mt-12 w-full">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://github.com/ishtiaque991" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110" aria-label="GitHub">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/ishtiaque-khan1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110" aria-label="LinkedIn">
            <FaLinkedin size={32} />
          </a>
        </div>
        <a href="#home" className="text-blue-400 font-semibold hover:underline text-lg transition-colors duration-200">
          Ishtiaque Islam Khan
        </a>
      </div>
    </div>
  </section>
);

export default CvResume;

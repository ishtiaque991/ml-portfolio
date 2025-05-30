import React from 'react';
import profilePic from '../assets/bgremove.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <section id="home" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-32 pb-0">
    <img
      src={profilePic}
      alt="Ishtiaque Islam Khan"
      className="w-72 h-72 rounded-full border-4 border-white dark:border-gray-700 ring-4 ring-blue-400 dark:ring-purple-500 shadow-xl object-cover mb-6 scale-110"
    />

    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2 text-center">Ishtiaque Islam Khan</h1>
    <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 text-center">
      QA Engineer | Test Automation Enthusiast
    </p>
    <div className="flex space-x-6 mb-10">
      <a href="https://github.com/ishtiaque991" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
        <FaGithub size={32} />
      </a>
      <a href="https://linkedin.com/in/ishtiaque-khan1" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110">
        <FaLinkedin size={32} />
      </a>
    </div>
    {/* Animated SVG wave */}
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,80L60,85.3C120,91,240,101,360,96C480,91,600,69,720,74.7C840,80,960,112,1080,122.7C1200,133,1320,123,1380,117.3L1440,112L1440,150L1380,150C1320,150,1200,150,1080,150C960,150,840,150,720,150C600,150,480,150,360,150C240,150,120,150,60,150L0,150Z" />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  </section>
);

export default Home;

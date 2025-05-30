import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Helper for closing mobile menu on link click
  const handleMobileLinkClick = () => setOpen(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/brand */}
        <a href="#home" className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">Ishtiaque</a>
        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 items-center text-lg">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href="/sqaresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-md font-semibold hover:from-blue-700 hover:to-purple-700 shadow transition"
          >
            Resume
          </a>
        </div>
        {/* ThemeToggle always visible */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-700 dark:text-gray-100" onClick={() => setOpen(!open)}>
          <svg width={28} height={28} fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} /></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          <a href="#about" className="nav-link block" onClick={handleMobileLinkClick}>About</a>
          <a href="#skills" className="nav-link block" onClick={handleMobileLinkClick}>Skills</a>
          <a href="#projects" className="nav-link block" onClick={handleMobileLinkClick}>Projects</a>
          <a href="#contact" className="nav-link block" onClick={handleMobileLinkClick}>Contact</a>
          <a
            href="/sqaresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded font-semibold hover:from-blue-700 hover:to-purple-700 shadow transition"
            onClick={handleMobileLinkClick}
          >
            Resume
          </a>
        </div>
      )}
      <style>{`
        .nav-link {
          color: #1e293b;
          font-weight: 600;
          transition: color 0.2s;
        }
        .dark .nav-link {
          color: #f1f5f9;
        }
        .nav-link:hover {
          color: #6366f1;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

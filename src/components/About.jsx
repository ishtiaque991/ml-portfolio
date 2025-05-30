import React from 'react';

const About = () => (
  <section id="about" className="py-20 flex justify-center bg-white dark:bg-gray-900">
    <div className="max-w-2xl w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-xl p-10 text-center">
      <div className="mb-4 text-5xl">🧪</div>
      <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg">
        I am a passionate Software Quality Assurance specialist skilled in both manual and automation testing. My experience spans designing and executing robust test cases, performing regression and exploratory testing, and ensuring software reliability through detailed bug reporting and analysis. I thrive on leveraging tools like Selenium, Cypress, and JIRA to streamline testing processes and deliver high-quality, reliable software. My commitment is to continuous improvement, clear communication, and helping teams ship flawless products.
      </p>
    </div>
  </section>
);

export default About;

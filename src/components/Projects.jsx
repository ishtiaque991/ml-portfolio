import React from 'react';

const projects = [
  {
    title: "Load Testing using JMeter",
    description: "Designed and executed load testing scenarios using Apache JMeter, including creating test plans and analyzing results to assess application performance under simulated user load.",
    github: "https://github.com/ishtiaque991/Load_Testing_using_JMeter",
    demo: ""
  },
  {
    title: "API Testing Using Postman",
    description: "Demonstrates comprehensive API testing using Postman, including the creation and execution of test cases to validate API endpoints and ensure their correct functionality.",
    github: "https://github.com/ishtiaque991/API-Testing-Using-Postman",
    demo: ""
  },
  {
    title: "Test Case for E-Passport Contact Form",
    description: "A set of detailed manual test cases for the E-Passport contact form, covering positive, negative, and boundary scenarios to ensure robust form validation and user experience.",
    github: "https://github.com/ishtiaque991/Test-Case-for-E-Passport-contact-form.",
    demo: ""
  },
  {
    title: "Quora Paraphrase Classifier",
    description: "A deep learning model that determines whether two Quora questions have the same meaning, leveraging NLP and transformer-based techniques for paraphrase detection.",
    github: "https://github.com/ishtiaque991/paraphrase-detection-project",
    demo: ""
  }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-400 text-center">
        My Best Projects: QA, Automation, and AI
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 border-2 border-transparent hover:border-blue-400 rounded-xl shadow-lg p-6 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
            <div className="flex space-x-4">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline font-semibold"
              >
                GitHub
              </a>
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline font-semibold"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Browse More Button */}
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/ishtiaque991?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-md font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition"
        >
          Browse More Projects on GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Projects;

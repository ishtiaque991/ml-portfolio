import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-20 flex justify-center bg-blue-50 dark:bg-gray-800">
    <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-10 text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">Contact</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Let’s connect! I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="mailto:ishtiaquek392@gmail.com"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          <MdEmail className="w-6 h-6" /> Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/ishtiaque-khan1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-50 dark:hover:bg-gray-900 shadow transition"
        >
          <FaLinkedin className="w-6 h-6" /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;

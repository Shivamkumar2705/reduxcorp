import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl font-bold text-purple-700 dark:text-purple-400 tracking-wide"
        >
          Redux<span className="text-pink-500">Corp</span>
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            About
          </a>
          <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            Portfolio
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-md transition"
          >
            Let’s Talk
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-700 dark:text-purple-400 focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-center bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg">
          <a href="#about" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
            About
          </a>
          <a href="#services" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
            Services
          </a>
          <a href="#portfolio" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
            Portfolio
          </a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
            Contact
          </a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-5 py-2 rounded-full shadow-md"
          >
            Let’s Talk
          </motion.button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

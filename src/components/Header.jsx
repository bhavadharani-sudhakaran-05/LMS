import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          className="text-2xl font-bold gradient-text"
        >
          LMS Pro
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="/" className="text-secondary-700 hover:text-primary-600 font-semibold">Home</a>
          <a href="/courses" className="text-secondary-700 hover:text-primary-600 font-semibold">Courses</a>
          <a href="/about" className="text-secondary-700 hover:text-primary-600 font-semibold">About</a>
          <a href="/contact" className="text-secondary-700 hover:text-primary-600 font-semibold">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="btn-ghost hidden md:block">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>
    </motion.header>
  );
}

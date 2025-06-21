import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://thumbs.dreamstime.com/b/quiz-speech-bubble-icon-isolated-dark-background-quiz-speech-bubble-icon-isolated-dark-background-simple-vector-logo-274953196.jpg"
            alt="Quiz Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 rounded-full object-cover"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link
              to="/"
              className="text-xl font-light hover:text-orange-400 hover:underline underline-offset-8 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="text-xl font-light hover:text-orange-400 hover:underline underline-offset-8 transition duration-300"
            >
              Quiz
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/signup"
          className="hidden md:block bg-orange-600 px-6 py-2 rounded-md text-lg font-light hover:bg-orange-500 transition duration-300"
        >
          Register
        </Link>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-white">
          <HiMenuAlt3 size={26} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-900 z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <RxCross1 size={26} />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-6 mt-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-orange-400"
          >
            Home
          </Link>
          <Link
            to="/quiz"
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-orange-400"
          >
            Quiz
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-orange-600 px-4 py-2 rounded-md text-lg hover:bg-orange-500 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#about' },
    { label: 'My Experience', href: '#experience' },
    { label: 'My Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo GIF */}
        <a href="#about" className="block">
          <div className="flex items-center" style={{ height: '48px' }}>
            <img
              src="/images/logo.gif"
              alt="SJK Logo"
              className="h-20 sm:h-24 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-12 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide font-mono">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="transition duration-300 hover:text-pink-400 hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 text-lg font-mono bg-black text-white border-t border-gray-700 transition-all duration-300">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="transition duration-300 hover:text-pink-400 hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
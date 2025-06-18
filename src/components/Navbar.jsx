import React from 'react';

export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#about' },
    { label: 'My Experience', href: '#experience' },
    { label: 'My Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black shadow-lg z-50">
      <ul className="flex justify-center gap-12 py-6 text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-wide font-mono">
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
    </nav>
  );
}
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black-100 shadow-md text-xl text-white fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-extrabold text-white hover:text-blue-500 transition">
              H
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-blue-500 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500 transition duration-300">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-blue-500 transition duration-300">
              Recent Projects
            </Link>
            <Link href="/skills" className="text-white hover:text-blue-500 transition duration-300">
              Skills
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-500 transition duration-300">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-500 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-500 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden transition-all duration-300">
            <div className="space-y-2 py-2 bg-black-100">
              <Link
                href="/"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/skills"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-blue-500 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

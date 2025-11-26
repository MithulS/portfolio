import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="glass shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mithul Sadhasivam
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Education', 'Courses', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="relative text-gray-700 hover:text-primary transition-colors duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            {['About', 'Skills', 'Experience', 'Education', 'Courses', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

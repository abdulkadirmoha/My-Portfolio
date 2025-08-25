import { useState } from "react";

const Header = () => {
  // State to manage the mobile menu's open/closed state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Handles mobile menu link clicks.
   * Prevents the default link behavior and manually navigates
   * to the section before closing the menu.
   * @param {object} event The click event object.
   * @param {string} href The href of the link to navigate to.
   */
  const handleMenuLinkClick = (event, href) => {
    // Prevent the default anchor link behavior
    event.preventDefault();

    // Manually set the URL hash to trigger navigation
    window.location.hash = href;

    // Close the mobile menu after navigation
    setIsMenuOpen(false);
  };

  // Function to toggle the menu state for the button
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/">
            <div className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              Abdulkadir Mohamed
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#frontend-projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#web-projects"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Web Design
            </a>
            <a
              href="#skills"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu content, conditionally rendered */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <a
            href="#about"
            onClick={(e) => handleMenuLinkClick(e, "#about")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleMenuLinkClick(e, "#projects")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
          >
            Projects
          </a>
          <a
            href="#wp-projects"
            onClick={(e) => handleMenuLinkClick(e, "#wp-projects")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
          >
            Web Design
          </a>
          <a
            href="#skills"
            onClick={(e) => handleMenuLinkClick(e, "#skills")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={(e) => handleMenuLinkClick(e, "#contact")}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

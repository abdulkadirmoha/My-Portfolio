import { useState, useEffect } from "react"; // AI Generated: Added useEffect

const Header = () => {
  // State to manage the mobile menu's open/closed state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // AI Generated: State to manage header background visibility on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // AI Generated: Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scroll position is greater than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // AI Generated: Apply conditional styling based on scroll position
        isScrolled
          ? "bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm"
          : "bg-transparent backdrop-blur-sm border-b-2-gray-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
    
            <div
              className={`text-xl font-bold transition-colors duration-300 ${
                // AI Generated: Ensure logo text color is readable on transparent background
                isScrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              Abdulkadir Mohamed
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed text color for transparent background
            >
              About
            </a>
            <a
              href="#frontend-projects"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed text color for transparent background
            >
              Projects
            </a>
            <a
              href="#web-projects"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed text color for transparent background
            >
              Web Design
            </a>
            <a
              href="#skills"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed text color for transparent background
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed text color for transparent background
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-white-700 hover:text-blue-600"
              }`} // AI Generated: Changed icon color for transparent background
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
        className={`md:hidden absolute top-16 left-0 right-0 border-b border-gray-200 shadow-lg transition-all duration-300 ease-in-out transform ${
          // AI Generated: Apply conditional background to mobile menu
          isScrolled
            ? "bg-white"
            : "bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm shadow-white"
        } ${
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

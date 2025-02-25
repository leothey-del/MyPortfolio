import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  // Prevent scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = ""; // Cleanup when unmounting
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 backdrop-blur-lg border-b border-white/20 shadow-xl">
      <div className="max-w-5xl mx-auto px-4 relative flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="font-mono text-xl font-bold text-white">
          Leo<span className="text-yellow-300">Ortega</span>
        </a>

        {/* Desktop Navigation (Centered) */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-yellow-300 transition-colors font-semibold"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (SVG) */}
        <button
          className="w-7 h-7 relative cursor-pointer z-40 md:hidden text-white"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

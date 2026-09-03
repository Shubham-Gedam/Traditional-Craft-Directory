import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to check if a link is currently active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-amber-950 transition-colors">
            🧵
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-stone-900 text-base leading-none group-hover:text-amber-900 transition-colors">
              Craft Directory
            </span>
            <span className="text-[10px] uppercase font-semibold text-amber-900 tracking-wider">
              Traditional Artisans of India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <Link
            to="/"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              isActive("/")
                ? "bg-amber-900/10 text-amber-900 font-semibold"
                : "text-stone-700 hover:text-amber-900 hover:bg-stone-100/80"
            }`}
          >
            Home
          </Link>

          <Link
            to="/regions"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              isActive("/regions")
                ? "bg-amber-900/10 text-amber-900 font-semibold"
                : "text-stone-700 hover:text-amber-900 hover:bg-stone-100/80"
            }`}
          >
            By Region
          </Link>

          <Link
            to="/crafts"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              isActive("/crafts")
                ? "bg-amber-900/10 text-amber-900 font-semibold"
                : "text-stone-700 hover:text-amber-900 hover:bg-stone-100/80"
            }`}
          >
            By Craft
          </Link>

          <Link
            to="/about"
            className={`px-3.5 py-2 rounded-xl transition-all ${
              isActive("/about")
                ? "bg-amber-900/10 text-amber-900 font-semibold"
                : "text-stone-700 hover:text-amber-900 hover:bg-stone-100/80"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <span className="text-xl font-bold">✕</span>
          ) : (
            <span className="text-xl font-bold">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-[#FDFBF7] px-4 pt-3 pb-5 space-y-2 animate-fadeIn">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
              isActive("/") ? "bg-amber-900/10 text-amber-900 font-semibold" : "text-stone-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/regions"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
              isActive("/regions") ? "bg-amber-900/10 text-amber-900 font-semibold" : "text-stone-700"
            }`}
          >
            By Region
          </Link>
          <Link
            to="/crafts"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
              isActive("/crafts") ? "bg-amber-900/10 text-amber-900 font-semibold" : "text-stone-700"
            }`}
          >
            By Craft
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
              isActive("/about") ? "bg-amber-900/10 text-amber-900 font-semibold" : "text-stone-700"
            }`}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div
            className="text-xl md:text-2xl font-bold text-gray-900 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Omriq Hospitality AI
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("product")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Solution
            </button>
            <button
              onClick={() => scrollToSection("market")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Market
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Vision
            </button>
          </div>

          <button
            onClick={() => scrollToSection("investor-meeting")}
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Book Investor Meeting
          </button>
        </div>
      </div>
    </nav>
  );
}


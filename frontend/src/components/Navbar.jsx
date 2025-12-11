import React, { useState } from 'react';
import { Leaf, Menu, X, User, Box } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage, isAuthenticated, setIsAuthenticated }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);




  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-2.5 shadow-lg group-hover:shadow-xl transition-shadow">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">Virtual Herbal Garden</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                currentPage === 'home' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('identify')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                currentPage === 'identify' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              Identify
            </button>
            
            {/* --- NEW 3D LIBRARY BUTTON --- */}
            <button
              onClick={() => setCurrentPage('3d-library')}
              className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                currentPage === '3d-library' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>3D Library</span>
            </button>
            {/* ----------------------------- */}

            <button
              onClick={() => setCurrentPage('chatbot')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                currentPage === 'chatbot' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              Ask Herbalist
            </button>
            <button
              onClick={() => setCurrentPage('recommendations')}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                currentPage === 'recommendations' 
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
              }`}
            >
              Wellness
            </button>

            {/* Auth Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="text-gray-600 hover:text-green-700 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentPage('auth')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-green-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-green-100">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentPage === 'home' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('identify')}
                className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentPage === 'identify' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                Identify Plants
              </button>
              
              {/* --- NEW 3D LIBRARY MOBILE LINK --- */}
              <button
                onClick={() => handleNavClick('3d-library')}
                className={`text-left px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  currentPage === '3d-library' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                <Box className="w-5 h-5" />
                3D Library
              </button>
              {/* ---------------------------------- */}

              <button
                onClick={() => handleNavClick('chatbot')}
                className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentPage === 'chatbot' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                Ask Herbalist
              </button>
              <button
                onClick={() => handleNavClick('recommendations')}
                className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                  currentPage === 'recommendations' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                    : 'text-gray-600 hover:bg-green-50'
                }`}
              >
                Recommendations
              </button>

              {/* Mobile Auth Button */}
              <div className="pt-3 border-t border-green-100">
                {isAuthenticated ? (
                  <button
                    onClick={() => { setIsAuthenticated(false); setMobileMenuOpen(false); }}
                    className="w-full text-left px-6 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => { setCurrentPage('auth'); setMobileMenuOpen(false); }}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
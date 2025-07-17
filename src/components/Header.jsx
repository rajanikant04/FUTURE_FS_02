import React from 'react';
import { ShoppingCart, Search, User, Menu, X, Sun, Moon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

const Header = ({ 
  onCartClick, 
  searchQuery, 
  onSearchChange, 
  currentPage, 
  onNavigate,
  onLoginClick,
  onSignupClick
}) => {
  const { totalItems } = useCart();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg sticky top-0 z-40 animate-slideInFromBottom border-b border-white/20 dark:border-gray-700/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 group transition-all duration-300 transform hover:scale-105 animate-fadeInLeft"
            >
              <Logo 
                className="h-10 w-10 text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" 
                fillColor="currentColor"
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 hidden sm:block">
                Snitch
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 animate-fadeInUp animate-delay-200">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'home'
                  ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span>Home</span>
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                currentPage === 'products'
                  ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span>Products</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className={`hidden md:flex flex-1 max-w-lg mx-8 animate-fadeInUp animate-delay-300 ${currentPage === 'home' ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                disabled={currentPage === 'home'}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 focus:shadow-lg hover:border-gray-400 dark:hover:border-gray-500"
                placeholder={currentPage === 'home' ? 'Go to Products to search...' : 'Search products...'}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 animate-fadeInRight animate-delay-400">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-110 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Auth Buttons */}
            <button 
              onClick={onLoginClick}
              className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-all duration-300 transform hover:scale-105 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Login
            </button>
            <button 
              onClick={onSignupClick}
              className="px-6 py-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg hover:from-gray-800 hover:to-gray-600 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Sign Up
            </button>
            
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 animate-fadeInRight animate-delay-200">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-110 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Cart Button for Mobile */}
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-all duration-300 transform hover:scale-110"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 animate-slideInFromBottom transition-colors duration-300">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation */}
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => {
                    onNavigate('home');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left transform hover:scale-105 ${
                    currentPage === 'home'
                      ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    onNavigate('products');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 text-left transform hover:scale-105 ${
                    currentPage === 'products'
                      ? 'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  Products
                </button>
              </div>
              
              {/* Mobile Search */}
              <div className={`relative ${currentPage === 'home' ? 'opacity-50 pointer-events-none' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  disabled={currentPage === 'home'}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 focus:shadow-lg hover:border-gray-400 dark:hover:border-gray-500"
                  placeholder={currentPage === 'home' ? 'Go to Products to search...' : 'Search products...'}
                />
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => {
                    onLoginClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-all duration-300 text-left border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Login</span>
                  </div>
                </button>
                <button 
                  onClick={() => {
                    onSignupClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg hover:from-gray-800 hover:to-gray-600 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
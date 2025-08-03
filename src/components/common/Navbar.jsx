import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Acting Portfolio', path: '/portfolio' },
    { name: 'Dan Audu Collection', path: '/store' },
    { name: 'News & Media', path: '/news' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-warm-white shadow-warm sticky top-0 z-50 border-b border-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="text-2xl font-bold heading-primary text-earth hover:text-brown transition-colors">
            Baba Dan Audu
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-brown hover:text-earth transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brown hover:text-earth transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cream border-t border-sand">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-brown hover:text-earth hover:bg-sand rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
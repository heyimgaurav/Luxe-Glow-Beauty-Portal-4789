import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-pink-900">Luxe Beauty</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
          <Link to="/shop" className="text-gray-600 hover:text-pink-500 transition-colors">Shop</Link>
          <Link to="/about" className="text-gray-600 hover:text-pink-500 transition-colors">About</Link>
          <Link to="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Link>
          <Link to="/cart" className="relative">
            <FiShoppingBag className="w-6 h-6 text-gray-600 hover:text-pink-500 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-gray-600">Home</Link>
            <Link to="/shop" className="text-gray-600">Shop</Link>
            <Link to="/about" className="text-gray-600">About</Link>
            <Link to="/blog" className="text-gray-600">Blog</Link>
            <Link to="/contact" className="text-gray-600">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
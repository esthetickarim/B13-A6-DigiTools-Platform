import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-purple-600">
          DigiTools
        </div>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Products</li>
          <li className="hover:text-purple-600 cursor-pointer">Features</li>
          <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
          <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Cart */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-xl text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login */}
          <button className="hidden md:block text-gray-700 font-medium hover:text-purple-600">
            Login
          </button>

          {/* Get Started */}
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
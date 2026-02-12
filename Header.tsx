import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600">RealEstate</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-indigo-600">Buy</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600">Rent</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600">Sell</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
        </ul>
      </nav>
      <div className="hidden md:block">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Login</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 z-10">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600" onClick={toggleMenu}>Buy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600" onClick={toggleMenu}>Rent</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600" onClick={toggleMenu}>Sell</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600" onClick={toggleMenu}>About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600" onClick={toggleMenu}>Contact</a></li>
            <li>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700" onClick={toggleMenu}>Login</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

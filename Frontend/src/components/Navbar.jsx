import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-20 md:h-12 lg:h-16" />
          </Link>
         </div>
        <div className="text-3xl font-bold">Cookery Hub</div>
        <div>
          <ul className="flex space-x-4 mx-10">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

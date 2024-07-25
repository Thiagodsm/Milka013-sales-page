// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Milka 013</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">Produtos</Link>
          <Link to="/adicionar-produto" className="text-gray-300 hover:text-white mx-2">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

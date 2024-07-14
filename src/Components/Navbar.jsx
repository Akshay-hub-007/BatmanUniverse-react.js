import React from 'react';
import logo from '../movieLogo.jpg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px] rounded-full ..." src={logo} alt="Movie Logo" />

      <Link className="text-blue-400 text-3xl font-bold" to="/">Movies</Link>
      <Link className="text-blue-400 text-3xl font-bold" to="/watchlist">watchlist</Link>
    </div>

  );
};

export default Navbar;

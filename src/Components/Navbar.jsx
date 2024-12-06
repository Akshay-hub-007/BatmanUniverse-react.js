import React from 'react';
import logo from '../movieLogo.jpg';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    

  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <NavLink to="/">
      <img className="w-[50px] rounded-full ..." src={logo} alt="Movie Logo" />

      </NavLink>

      <NavLink className="text-blue-400 text-3xl font-bold" to="/home">Movies</NavLink>
      <NavLink className="text-blue-400 text-3xl font-bold" to="/watchlist">watchlist</NavLink>
    </div>

  );
};

export default Navbar;

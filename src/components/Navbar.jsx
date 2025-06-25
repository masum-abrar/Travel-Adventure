import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProviders';
import { Tooltip } from 'react-tooltip';
import { IoPersonOutline } from "react-icons/io5";


export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => console.log('Logged out'))
      .catch((error) => console.error(error));
  };

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'night' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
   <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-black/40 backdrop-blur-sm text-white'}`}>
  <div className="navbar container max-w-[1170px] mx-auto px-4 py-3 flex justify-between items-center">
    
    {/* Left Start: Logo + Mobile Dropdown */}
    <div className="navbar-start flex items-center gap-4">
      <div className="dropdown lg:hidden">
        <label tabIndex={0} className="btn btn-ghost p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow-lg rounded-md bg-base-100 w-52 space-y-2">
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-rose-600 font-bold' : 'font-medium'}>Home</NavLink></li>
          <li><NavLink to='/mylist' className={({ isActive }) => isActive ? 'text-rose-600 font-bold' : 'font-medium'}>My List</NavLink></li>
          <li><NavLink to='/addtouristspot' className={({ isActive }) => isActive ? 'text-rose-600 font-bold' : 'font-medium'}>Add Spot</NavLink></li>
           <li><NavLink to='/alltouristspot' className={({ isActive }) => isActive ? 'text-rose-600 font-bold' : 'font-medium'}>All Spot</NavLink></li>
        </ul>
      </div>
      <Link to='/' className="flex items-center space-x-2">
  <img 
    src="/logo.png" 
    alt="Travel Logo" 
    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
  />
  <span className="text-xl sm:text-2xl font-extrabold text-rose-600">
    Travel
  </span>
</Link>

    </div>

    {/* Center Nav Items (Desktop Only) */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal gap-6 text-base font-semibold">
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'}>Home</NavLink></li>
        <li><NavLink to='/alltouristspot' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'}>All Spots</NavLink></li>
        <li><NavLink to='/addtouristspot' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'}>Add Spot</NavLink></li>
        <li><NavLink to='/mylist' className={({ isActive }) => isActive ? 'text-rose-600' : 'hover:text-rose-600'}>My List</NavLink></li>
      </ul>
    </div>

    {/* End Section: Avatar + Theme + Buttons */}
    <div className="navbar-end flex items-center gap-4">
      {/* Avatar */}
      {user && (
        <div className="tooltip tooltip-bottom" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}>
          {user.photoURL ? (
            <img src={user.photoURL} alt="user" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200">
              <IoPersonOutline size={20} />
            </div>
          )}
        </div>
      )}

      {/* Auth Buttons */}
 <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
  {!user ? (
    <>
      {/* Sign In */}
      <Link 
        to="/login" 
        className="relative px-4 py-2 text-xs sm:text-sm md:text-base w-auto rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium shadow-md hover:shadow-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 group"
      >
        <span className="relative z-10 flex items-center justify-center">
          Sign In
          <svg 
            className="w-4 h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </span>
      </Link>

      {/* Sign Up */}
      <Link 
        to="/registration" 
        className="relative px-4 py-2 text-xs sm:text-sm md:text-base w-auto rounded-full bg-gradient-to-r from-teal-400 to-teal-500 text-white font-medium shadow-md hover:shadow-lg hover:from-teal-500 hover:to-teal-600 transition-all duration-300 group"
      >
        <span className="relative z-10 flex items-center justify-center">
          Sign Up
          <svg 
            className="w-4 h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </span>
      </Link>
    </>
  ) : (
    /* Logout */
    <button 
      onClick={handleLogout} 
      className="relative px-4 py-2 text-xs sm:text-sm md:text-base w-auto rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium shadow-md hover:shadow-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 group"
    >
      <span className="relative z-10 flex items-center justify-center">
        Logout
        <svg 
          className="w-4 h-4 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      </span>
    </button>
  )}
</div>




      {/* Theme Toggle */}
    
    </div>

    <Tooltip id="my-tooltip" />
  </div>
</div>

  );
};



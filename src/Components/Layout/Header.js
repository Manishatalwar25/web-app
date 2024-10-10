import React from 'react';
import MainLogo from "../../assets/images/main-logo.png";
import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex flex-wrap justify-between items-center p-4 bg-white border-b border-gray-300 shadow-lg z-10">
    {/* Mobile View: Logo + User Info on One Row */}
    <div className="flex w-full justify-between items-center sm:hidden">
      {/* Logo */}
      <img src={MainLogo} alt="Cash Fluence Logo" className="w-32" />
  
      {/* User Info (Greeting + Profile) */}
      <div className="flex items-center space-x-2">
        {/* Greeting Text */}
        <div className="text-right">
          <p className="text-gray-500 text-sm">Hello, Good Afternoon</p>
          <p className="font-bold text-lg">Burna Boy</p>
        </div>
  
        {/* User Profile */}
        <div className="relative flex items-center">
          <img
            src={profile}
            alt="User profile"
            className="h-10 w-10 rounded-full border-2 border-gray-300"
          />
          <span className="ml-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  
    {/* Desktop View */}
    <div className="w-full sm:flex sm:justify-between sm:items-center hidden">
      {/* Logo */}
      <img src={MainLogo} alt="Cash Fluence Logo" className="w-32 sm:w-40 lg:w-48" />
  
      {/* Search Bar */}
      <div className="w-full sm:w-auto flex-grow sm:px-8 mt-4 sm:mt-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search vendors, team, and schools..."
            className="w-full sm:w-[90%] p-3 pl-5 pr-10 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute top-1/2 transform -translate-y-1/2 right-3 md:right-[4.75rem] text-gray-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 17a8 8 0 100-16 8 8 0 000 16z"></path>
            </svg>
          </button>
        </div>
      </div>
  
      {/* User Info */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-4 w-full sm:w-auto justify-end">
        {/* Greeting Message */}
        <div className="text-right">
          <p className="text-gray-500 text-sm">Hello, Good Afternoon</p>
          <p className="font-bold text-lg">Burna Boy</p>
        </div>
  
        {/* User Profile */}
        <div className="relative flex items-center">
          <img
            src={profile}
            alt="User profile"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-gray-300"
          />
          <span className="ml-2">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  
    {/* Search Bar for Mobile */}
    <div className="w-full sm:hidden mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search vendors, team, and schools..."
          className="w-full p-3 pl-5 pr-10 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 17a8 8 0 100-16 8 8 0 000 16z"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
  
  
  );
};

export default Header;

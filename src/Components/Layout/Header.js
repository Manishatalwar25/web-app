import React, { useState ,useEffect} from 'react';
import MainLogo from "../../assets/images/main-logo.png";
import profile from "../../assets/images/profile.png";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Header = ({ searchQuery, setSearchQuery }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    setDropdownOpen(false); // Close dropdown
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of your account.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5EB66E',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // If confirmed, proceed with logout
        navigate("/"); // Redirect to home page
      }
    });
  };
  // Handle Change Profile
  const handleChangeProfile = () => {
    setDropdownOpen(false); // Close dropdown
    navigate("/profile"); // Redirect to profile page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.dropdown'); // Adjust to your dropdown class
      if (dropdown && !dropdown.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="font-sans flex flex-wrap justify-between items-center p-2 bg-white border-b border-gray-300 shadow-lg z-10">
      {/* Mobile View: Logo + User Info on One Row */}
      <div className="flex w-full justify-between items-center sm:hidden">
        {/* Logo */}
        <img src={MainLogo} alt="Cash Fluence Logo" className="w-28" />

        {/* User Info (Greeting + Profile) */}
        <div className="flex items-center space-x-2 relative">
          {/* Greeting Text */}
          <div className="text-right">
            <p className="text-[#717579] text-[12px] font-sans">Hello, Good Afternoon</p>
            <p className="font-normal text-[#171B1E] text-[18px] font-sans">Burna Boy</p>
          </div>

          {/* User Profile */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={profile}
              alt="User profile"
              className="h-9 w-9 rounded-full border-2 border-gray-300"
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

            {/* Dropdown Menu */}
            {dropdownOpen && (
        <div className="absolute right-0 top-[40px] w-48 bg-white border border-gray-300 rounded-lg shadow-md z-20 dropdown"> {/* Change top to 40px for 10% position */}
          <button
            onClick={handleChangeProfile}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 font-sans"
          >
            Change Profile
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 font-sans hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="font-sans w-full sm:flex sm:justify-between sm:items-center hidden">
        {/* Logo */}
        <img src={MainLogo} alt="Cash Fluence Logo" className="w-28 sm:w-36 lg:w-45" />

        {/* Search Bar */}
        <div className="w-full sm:w-auto flex-grow sm:px-8 mt-4 sm:mt-0">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Loans"
              className="w-full sm:w-[90%] p-3 pl-5 pr-10 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-[9rem] text-gray-500">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10 17a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-4 w-full sm:w-auto justify-end">
          {/* Greeting Message */}
          <div className="text-right">
            <p className="text-gray-500 text-sm font-sans">Hello, Good Afternoon</p>
            <p className="font-bold text-lg font-sans">Burna Boy</p>
          </div>

          {/* User Profile */}
          <div
            className="relative flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
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

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="font-sans !top-[120%] absolute right-0  w-48 bg-white border border-gray-300 rounded-lg shadow-md z-20">
                <button
                  onClick={handleChangeProfile}
                  className="font-sans block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Change Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="font-sans block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="w-full sm:hidden mt-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search Loans"
            className="w-full p-3 pl-5 pr-10 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="font-sans absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10 17a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import verify from "../assets/images/verify.png"; 
import { useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import Swal from 'sweetalert2';
const ConnectAccounts = () => {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleSelect = (account) => {
    setSelectedAccount(account);
  };
  
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#5EB66E',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logged out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
        // After the confirmation and success message, navigate to the homepage.
        setTimeout(() => {
          navigate('/');
        }, 2000); // Wait for 2 seconds before navigating
      }
    });
  };


  return (
    <div className="flex justify-center  min-h-screen font-sans">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md h-full min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-[#5EB66E1A] bg-white shadow-md">

          <button className="mr-4 text-[#383838]" onClick={() => {
      navigate('/verification');
    }} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="font-sans text-[18px] font-extrabold text-[#383838] font-sans">Connect Your Accounts</h1>
          <div className="ml-auto relative group">
          <button className="flex items-center font-sans" onClick={handleLogout}>
          <BiLogOutCircle size={25} className="text-[#383838]" />
        </button>
        {/* Tooltip */}
        <span className="font-sans absolute top-[30px] right-0 w-max px-2 py-1 text-xs text-white bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Logout
        </span>
      </div>
        </div>

        {/* Description */}
        <div className="p-4 bg-white flex-grow">
          <p className="font-sans text-[16px] text-[#646464] font-semibold mb-4 text-left">To calculate your social score for microloans, please connect your social media accounts.</p>

          {/* Account Options */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelect('Facebook')}
              className={`font-sans flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span>Connect Facebook</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Twitter')}
              className={`font-sans flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span className='font-sans' >Connect Twitter</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Linkedin')}
              className={`font-sans flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span className='font-sans'>Connect Linkedin</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Instagram')}
              className={`font-sans flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span className='font-sans'>Connect Instagram</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="p-4 mt-auto">
          <button onClick={() => {
      navigate('/loan');
    }}   className="font-sans w-full bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectAccounts;

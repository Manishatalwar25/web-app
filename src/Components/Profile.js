import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// Imported icons
import Edit from "../assets/images/material-symbols_edit.png";
import bankDetails from "../assets/images/BankDetails.png";
import Settings from "../assets/images/Vector (1).png";
import Notification from "../assets/images/Vector (2).png";
import changePass from "../assets/images/Vector (3).png";
import FAQ from "../assets/images/headphones.png";
import TC from "../assets/images/Vector (5).png";
import contact from "../assets/images/Vector (6).png";
import logout from "../assets/images/Vector (7).png";
import arrow from "../assets/images/Vector (8).png";
import plusProfile from "../assets/images/plusProfile.png";


const Profile = () => {
  const navigate = useNavigate();

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
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    });
  };

  return (
    <div className="flex justify-center min-h-screen ">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md h-full min-h-screen flex flex-col">
        
        {/* Header */}
        <div className="flex items-center border-b-4 border-[#E5E5E5] py-4 px-4">
          <button onClick={() => navigate('/verification')} className="text-[#383838]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="font-sans text-[18px] font-extrabold text-[#383838] ml-3  ">
        Profile
          </h1>
        </div>

        {/* Profile Info */}
        <div className="flex items-center px-4 pt-2 relative">
  <div className="relative">
    <div className="w-16 h-16 rounded-full bg-[#000000]"></div>
    <img src={plusProfile} alt="Edit" className="absolute bottom-0 right-0 w-4 h-4" />
  </div>
  <div className="ml-4">
    <h2 className="text-[17px] font-semibold text-[#383838]">XYZ</h2>
    <p className="text-[14px] font-normal text-[#383838]">8399872178</p>
    <p className="text-[14px] font-normal text-[#383838]">Stebinroy@gmail.com</p>
  </div>
  <img src={Edit} alt="Edit" className="absolute top-2 right-2 w-4 h-4 cursor-pointer" />
</div>


        {/* Menu Options */}
        <div>
          <MenuItem icon={bankDetails} label="Bank Details" isBank onClick={() => navigate('/bank-details')} />
          <MenuItem icon={Settings} label="Settings" onClick={() => navigate('/settings')} />
          <MenuItem icon={Notification} label="Notification Setting" onClick={() => navigate('/notification-settings')} />
          <MenuItem icon={changePass} label="Change Password" onClick={() => navigate('/change-password')} />
          <MenuItem icon={FAQ} label="FAQ's" onClick={() => navigate('/faqs')} />
          <MenuItem icon={TC} label="Terms & Conditions" onClick={() => navigate('/terms-conditions')} />
          <MenuItem icon={contact} label="Contact Support" onClick={() => navigate('/contact-support')} />
          <MenuItem icon={logout} label="Log Out" onClick={handleLogout} isLogout />
        </div>
      </div>
    </div>
  );
};

// MenuItem Component for reusability
const MenuItem = ({ icon, label, onClick, isLogout = false ,isBank=false }) => (
    <div
    className={`flex items-center justify-between py-4 px-5 border-[#E5E5E5] cursor-pointer 
      ${isBank ? 'border-t-4 border-[#E5E5E5] mt-4' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center">
      <img src={icon} alt={label} className={`
      ${isBank ? 'w-9 h-9 -ml-2' : 'w-6 h-6'}`} />
      <p className={`text-[17px] ml-4 font-sans
  ${isLogout ? 'text-[#5EB66E] font-semibold' : ''} 
  ${isBank ? 'text-[#383838] font-semibold !text-[17px] leading-[24.55px]' : 'text-[#383838] font-normal'}
`}>
  {label}
</p>
    </div>
    <img src={arrow} alt="Arrow" className="w-[0.60rem] h-4" />
  </div>
);

export default Profile;

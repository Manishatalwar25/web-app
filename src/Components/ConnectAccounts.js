import React, { useState } from 'react';
import verify from "../assets/images/verify.png"; 
import { useNavigate } from 'react-router-dom';


const ConnectAccounts = () => {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleSelect = (account) => {
    setSelectedAccount(account);
  };


  return (
    <div className="flex justify-center  min-h-screen ">
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
          <h1 className="text-[18px] font-extrabold text-[#383838]">Connect Your Accounts</h1>
        </div>

        {/* Description */}
        <div className="p-4 bg-white flex-grow">
          <p className="text-[16px] text-[#646464] font-semibold mb-4 text-left">To calculate your social score for microloans, please connect your social media accounts.</p>

          {/* Account Options */}
          <div className="space-y-4">
            <button
              onClick={() => handleSelect('Facebook')}
              className={`flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span>Connect Facebook</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Twitter')}
              className={`flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span>Connect Twitter</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Linkedin')}
              className={`flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span>Connect Linkedin</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>

            <button
              onClick={() => handleSelect('Instagram')}
              className={`flex items-center justify-between w-full p-4  rounded-md bg-[#F8F8F8] text-[16px] text-[#1F274A]`}
            >
              <span>Connect Instagram</span>
              <img src={verify} alt="Verify Icon" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="p-4 mt-auto">
          <button onClick={() => {
      navigate('/loan');
    }}   className="w-full bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectAccounts;

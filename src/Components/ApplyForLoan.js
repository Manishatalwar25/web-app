import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import Swal from 'sweetalert2';
const ApplyForLoan = () => {
  const navigate = useNavigate();
  const [loanAmount, setLoanAmount] = useState(1200);
  const [repaymentTerm, setRepaymentTerm] = useState("6 Months");

  const handleSliderChange = (e) => {
    setLoanAmount(e.target.value);
    };

  const handleRepaymentChange = (e) => {
    setRepaymentTerm(e.target.value);
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
    <div className="flex justify-center  min-h-screen ">
    <div className="bg-white shadow-md rounded-lg w-full max-w-md h-full min-h-screen flex flex-col justify-between ">
      {/* Header */}
      <div>
        <div className="font-sans flex items-center  border-b  bg-[#0000]">
          <button onClick={() => {
   navigate('/verification');
  }}  className="mr-4 text-[#383838] m-4 ">

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
          <h1 className="font-sans text-[18px] font-extrabold text-[#383838] font-sans ">
          Apply for a Microloan
          </h1>
          <div className="ml-auto relative group mr-3">
          <button className="font-sans flex items-center" onClick={handleLogout}>
          <BiLogOutCircle size={25} className="text-[#383838]" />
        </button>
        {/* Tooltip */}
        <span className="font-sans absolute top-[30px] right-0 w-max px-2 py-1 text-xs text-white bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          Logout
        </span>
      </div>
        </div>

        <div className="p-4 text-left"> {/* Added text-left to align the content */}
        {/* <h1 className="text-[18px] font-extrabold text-[#383838] mb-4">Apply for a Microloan</h1> */}
          <p className="font-sans text-[#646464] mb-4 font-bold text-[15px]">
            Get a loan between $1000 to $1500 with flexible repayment terms
          </p>

          <div className="mt-4">
            <p className="font-sans text-[#555555] font-bold text-[15px] mb-3">Loan Amount</p>
            <p className="font-sans text-[18px] font-semibold text-[#3F455D]">${loanAmount}</p>
          </div>

          <div className="mt-3">
            <div className="relative mb-1">
                
              <input
                type="range"
                min="1000"
                max="1500"
                step={100}
                value={loanAmount}
                onChange={handleSliderChange}
                className="font-sans w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4caf50 ${
                    ((loanAmount - 1000) / 500) * 100
                  }%, #e5e7eb ${(loanAmount - 1000) / 500}% 100%)`,
                }}

              />
           
            </div>
            <div className="flex justify-between text-gray-400 text-sm mb-1">
              <span className="font-sans text-[#9299B5] font-normal text-[14px]">$1000</span>
              <span  className="font-sans text-[#9299B5] font-normal text-[14px]">$1500</span>
            </div>
          </div>

          <style jsx>{`
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: white; 
    border: 4px solid #17CEE74D; 
    box-shadow: inset 0 0 0 6px white, 
                inset 0 0 0 14px #5EB66E; 
  }

  input[type='range']::-moz-range-thumb {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: white; /* White middle circle */
    border: 4px solid #17CEE74D; 
    box-shadow: inset 0 0 0 6px white, 
                inset 0 0 0 14px #5EB66E; 
  }

  /* Focus state with more blue glow */
  input[type='range']:focus::-webkit-slider-thumb {
    box-shadow: inset 0 0 0 6px white, 
                inset 0 0 0 14px #5EB66E, 
                0px 0px 14px #17CEE74D; 
  }

  input[type='range']:focus::-moz-range-thumb {
    box-shadow: inset 0 0 0 6px white, 
                inset 0 0 0 14px #5EB66E, 
                0px 0px 14px #17CEE74D; 
  }
`}</style>


          {/* Repayment Term Dropdown */}
          <div className="mt-6">
          <label htmlFor="firstName" className=" font-sans mb-3 block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px] text-left ">Repayment Term</label>
           

          <select
                id="repaymentTerm"
                value={repaymentTerm}
                onChange={handleRepaymentChange}
                name="repaymentTerm"
               
                className="font-sans w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
               <option value={3}>3 Months</option>
              <option value={6}>6 Months</option>
              <option value={12}>12 Months</option>
              </select>


          
             </div>

          {/* Risk Profile Section */}
          <div className="font-sans mt-6 bg-green-50 p-4 rounded-lg">
            <p className="font-sans font-semibold text-[#0D0D0D]">• Risk Profile</p>
            <div className="font-sans flex items-center my-1">
              <span className="font-sans h-3 w-3 bg-[#5EB66E] rounded-full inline-block mr-2"></span>
              <p className="font-sans font-medium text-[14px]">Low</p>
            </div>
            <p className="font-sans font-semibold mt-4 text-[#0D0D0D]">• Estimated Interest Rate</p>
            <p className="font-sans text-4xl text-[#0D0D0D] font-bold mt-2">8.5 %</p>
            <p className="font-sans text-[#646464]">Based on your risk profile</p>
          </div>

          {/* Apply Button */}
        

       
        </div>
      </div>

      {/* Submit Button at Bottom */}
      <div className="p-4">
        <button   onClick={() => {
    navigate('/loanconfirmation');
  }}  className="w-full font-sans bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
        >
           Apply for Loan
        </button>
      </div>
    </div>
  </div>










  
  );
};

export default ApplyForLoan;

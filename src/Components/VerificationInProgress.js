import React, { useState } from 'react';
import Sidebar from "./Layout/Sidebar";
import { useNavigate } from 'react-router-dom';
const VerificationInProgress = () => {
  const navigate = useNavigate();
  const [rangeValue, setRangeValue] = useState(75);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <div className="flex justify-center  min-h-screen ">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md h-full min-h-screen flex flex-col justify-between ">
        {/* Header */}
        <div>
          <div className="flex items-center  border-b  bg-[#0000]">
            <button onClick={() => {
      navigate('/kyc-profile');
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
            <h1 className="text-[18px] font-extrabold text-[#383838] m-4">
              Verification in Progress
            </h1>
          </div>

          {/* Credit Check */}
          <div className="p-4 bg-white">
            <p className="text-[16px] text-[#646464] text-normal text-left mb-4">
              Your credit history looks good. You are eligible for a microloan.
            </p>

            {/* ID Card Upload */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                ID Card
              </label>

              <input
                type="text"
                id="idCard"
                value="xyz.png"
                disabled
                className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Live Selfie Upload */}
            <div className="mb-6">
              <label
                htmlFor="liveSelfie"
                className="block text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Live Selfie
              </label>

              <input
                type="text"
                id="liveSelfie"
                value="xyz.png"
                disabled
                className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            {/* Progress Bar */}
            <div className="mb-6 mt- flex items-right">
              <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={handleRangeChange}
                className="w-full h-2 rounded outline-none"
                style={{
                  background: `linear-gradient(to right, #5EB66E ${rangeValue}%, #E5E7EC ${rangeValue}%)`,
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
              />
              <style jsx>{`
                input[type="range"]::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  height: 30px;
                  width: 30px;
                  border-radius: 50%;
                  background: white; /* White middle circle */
                  border: 4px solid #17cee74d; /* Blue outer border */
                  box-shadow: inset 0 0 0 6px white, /* White inner circle */
                    inset 0 0 0 12px #5eb66e; /* Larger grey circle */
                }

                input[type="range"]::-moz-range-thumb {
                  height: 30px;
                  width: 30px;
                  border-radius: 50%;
                  background: white; /* White middle circle */
                  border: 4px solid #17cee74d; /* Blue outer border */
                  box-shadow: inset 0 0 0 6px white, /* White inner circle */
                    inset 0 0 0 12px #5eb66e; /* Larger grey circle */
                }

                /* Focus state with more blue glow */
                input[type="range"]:focus::-webkit-slider-thumb {
                  box-shadow: inset 0 0 0 6px white, /* White inner circle */
                    inset 0 0 0 10px #5eb66e, /* Larger grey circle */
                    0px 0px 10px #17cee74d; /* Blue outer glow */
                }

                input[type="range"]:focus::-moz-range-thumb {
                  box-shadow: inset 0 0 0 6px white, /* White inner circle */
                    inset 0 0 0 10px #5eb66e, /* Larger grey circle */
                    0px 0px 10px #17cee74d; /* Blue outer glow */
                }
              `}</style>
            </div>

            <p className="text-[12px] mt-1 text-[#646464] mb-7 text-left">
              You have completed 75% of the profile & KYC verification process.
            </p>

            {/* Compliance Notice */}
            <div className="p-4 bg-[#5EB66E1A] rounded-lg font-normal text-[16px] text-[#646464] mb-4 text-left">
              To comply with financial regulations, we require you to complete
              the KYC verification process. This helps ensure the security and
              integrity of our platform.
            </div>
          </div>
        </div>

        {/* Submit Button at Bottom */}
        <div className="p-4">
          <button   onClick={() => {
      navigate('/socialaccount');
    }}  className="w-full bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
          >
           Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationInProgress;
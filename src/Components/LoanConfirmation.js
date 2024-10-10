import React from 'react';
import Logo from "../assets/images/logo.png";

const LoanConfirmation = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Full-screen white container */}
      <div className="bg-white shadow-md w-full max-w-md min-h-screen flex flex-col justify-center items-center">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-4">
          <img src={Logo} alt="logo" className="w-24 h-24" />
        </div>

        {/* Green Box Centered */}
        <div className="p-6 bg-green-50 text-[#5EB66E] rounded-md text-center w-4/5">
          <h1 className="text-2xl font-bold mb-2">Loan Request Submitted!</h1>
          <p className="text-lg">Your loan request has been successfully submitted.</p>
          <p className="text-sm mt-2">
            We will review your application and get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoanConfirmation;

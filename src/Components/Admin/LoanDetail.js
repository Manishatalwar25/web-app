import React from "react";
import Header from "../Layout/Header";

const LoanDetail = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-col md:flex-row min-h-screen bg-[#ffff]">
        
        {/* Sidebar for Loan Management */}
        <div className="w-full md:w-1/4 bg-white p-4 shadow-md md:h-screen">
          <div className="border border-[#C4C4C4] p-4 rounded-lg">
            <h2 className="text-[24px] font-bold mb-4 text-left">
              Loan Management
            </h2>

            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search Loans"
                className="w-full p-3 pr-10 shadow-md border rounded-md border-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#C4C4C4]">
                <svg
                  className="w-5 h-5"
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
              </span>
            </div>

            {/* Loan List */}
            <div className="space-y-4">
              {/* Single Loan Item */}
              {["L001", "L002", "L003"].map((loanId, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0 ? "bg-[#EFEFEF]" : "bg-[#fff]"
                  } border border-[#C4C4C4] p-4 rounded-lg shadow-md flex justify-between items-center`}
                >
                  <div className="text-left w-[90%]">
                    <h3 className="text-[32px] font-bold text-[#646464]">
                      {loanId}
                    </h3>
                    <p className="text-[#646464]">$1500</p>
                    <p className="text-[#646464]">Due Date : 28-09-2024</p>
                  </div>
                  <div className="space-y-2">
                    <button className="border-2 border-black font-bold text-black py-1 px-4 rounded-lg">
                      Pending
                    </button>
                    <button className="border-2 border-black font-bold text-black py-1 px-4 rounded-lg">
                      Pending
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full md:w-3/4 p-6">
          <div className="flex justify-between items-center mb-6">
            {/* Loan ID and Name */}
            <h1 className="text-[32px] font-bold">L001 - John Doe</h1>

            {/* Approve/Reject Buttons */}
            <div className="flex space-x-4">
              <button className="px-10 py-3 border border-[#5EB66E] text-[#5EB66E] rounded-lg">
                Reject
              </button>
              <button className="px-10 py-3 bg-[#5EB66E] text-white rounded-lg">
                Approve
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Borrowers Profile */}
            <div className="bg-white p-6 rounded-lg shadow border text-left border-[#C4C4C4]">
              <h2 className="text-[24px] text-[#383838] font-extrabold mb-4">
                Borrowers Profile - L001
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FCFCFC] w-full">
                <div className="flex flex-col">
                  <span className="font-normal text-[16px] text-[#646464]">
                    Name:
                  </span>
                  <span className="font-semibold text-[18px] text-[#383838]">
                    Stebin
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-normal text-[16px] text-[#646464]">
                    Loan Amount:
                  </span>
                  <span className="font-semibold text-[18px] text-[#383838]">
                    $1500
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-normal text-[16px] text-[#646464]">
                    Application Date:
                  </span>
                  <span className="font-semibold text-[18px] text-[#383838]">
                    28-09-2024
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-normal text-[16px] text-[#646464]">
                    Status:
                  </span>
                  <span className="font-semibold text-[18px] text-[#383838]">
                    Pending
                  </span>
                </div>
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="bg-white p-6 rounded-lg shadow border border-[#C4C4C4]">
              <h2 className="text-[24px] text-[#383838] font-extrabold mb-4 text-left">
                Compliance Checklist
              </h2>
              <div className="space-y-4 w-full">
                <div className="flex justify-between">
                  <span className="text-[#242424] text-[14px] font-semibold">
                    KYC (Know Your Customer)
                  </span>
                  <button className="px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#242424] text-[14px] font-semibold">
                    Anti-Fraud Checks
                  </span>
                  <button className="px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </button>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#242424] text-[14px] font-semibold">
                    Regulatory Requirements
                  </span>
                  <button className="px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Repayment History */}
          <div className="mt-6 bg-white p-6 rounded-lg w-full md:w-[65%] shadow border border-[#C4C4C4] ">
            <h2 className="text-[24px] text-[#383838] font-extrabold mb-4 text-left">
              Repayment History
            </h2>

            <table className="w-full text-left">
              <thead>
                <tr className="text-[#E2E5E9]">
                  <th className="py-2 text-[#646464] font-normal text-[16px] w-[60%] md:w-[55%]">
                    Date
                  </th>
                  <th className="py-2 text-[#646464] font-normal text-[16px]">
                    Amount
                  </th>
                  <th className="py-2 text-[#646464] font-normal text-[16px] text-right">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] w-[60%] md:w-[55%]">
                    05/09/2024
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px]">
                    $1500
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] text-right">
                    <button className="border-2 border-[#242424] font-bold text-[16px] text-[#242424] py-1 px-4 rounded-lg">
                      Paid
                    </button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] w-[60%] md:w-[55%]">
                    05/09/2024
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px]">
                    $1500
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] text-right">
                    <button className="border-2 border-[#242424] font-bold text-[16px] text-[#242424] py-1 px-4 rounded-lg">
                      Paid
                    </button>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] w-[60%] md:w-[55%]">
                    05/09/2024
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px]">
                    $1500
                  </td>
                  <td className="py-2 text-[#373D46] font-semibold text-[18px] text-right">
                    <button className="border-2 border-[#242424] font-bold text-[16px] text-[#242424] py-1 px-4 rounded-lg">
                      Overdue
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanDetail;

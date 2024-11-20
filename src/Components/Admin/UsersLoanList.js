import React, { useState } from "react";
import Header from "../Layout/Header";
import { useLocation } from "react-router-dom";
import UsersLoanDetail from "./UsersLoanDetail";

const UsersLoanList = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const [loanMinAmount, setLoanMinAmount] = useState(0);
  const [loanMaxAmount, setLoanMaxAmount] = useState(5000);
  const [loanStatus, setLoanStatus] = useState("All");
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [showLoanDetails,setShowLoanDetails]=useState(false);

  // If user or loans data is not available, set default empty array for loans
  const loanData = user?.loans || [];

  // Filter loans based on the range and status
  const filteredLoans = loanData.filter((loan) => {
    const withinRange =
      loan.amount >= loanMinAmount && loan.amount <= loanMaxAmount;
    const matchesStatus = loanStatus === "All" || loan.status === loanStatus;
    return withinRange && matchesStatus;
  });

  // Handle changes in the min range
  const handleMinChange = (e) => {
    const newMin = Math.min(e.target.value, loanMaxAmount); // Ensure min is not greater than max
    setLoanMinAmount(newMin);
  };

  // Handle changes in the max range
  const handleMaxChange = (e) => {
    const newMax = Math.max(e.target.value, loanMinAmount); // Ensure max is not less than min
    setLoanMaxAmount(newMax);
  };

  const handleLoanDetails = (loan,id) => {
    setShowLoanDetails(true);
    setSelectedLoan(loan);
  };
  const handleBackToList = () => {
    setShowLoanDetails(false);
  
  };



  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="font-sans flex flex-col md:flex-row min-h-screen bg-[#ffff]">
        {/* Sidebar for Loan Management */}
        <div className="font-sans border border-[#C4C4C4] md:p-6 p-3 rounded-lg md:m-9 m-5 md:w-[28%]">
          <h2 className="font-sans text-[24px] font-bold mb-4 text-left">
            Loan Management
          </h2>

          {/* Conditional Rendering for Loan Filters or No Loans Message */}
          {loanData.length > 0 ? (
            <>
              {/* Loan Amount Range Filter */}
              <div className="mb-4">
                <label className="font-sans text-[16px] text-[#646464] font-bold mb-2 block">
                  Loan Amount Range: ${loanMinAmount} - ${loanMaxAmount}
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={loanMinAmount}
                  onChange={handleMinChange}
                  className="w-full mt-2 accent-[#5EB66E]"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={loanMaxAmount}
                  onChange={handleMaxChange}
                  className="w-full mt-2 accent-[#5EB66E]"
                />
              </div>

              {/* Loan Status Filter */}
              <div className="mb-4">
                <label className="font-sans text-[16px] text-[#646464] font-bold mb-2 block">
                  Loan Status
                </label>
                <select
                  value={loanStatus}
                  onChange={(e) => setLoanStatus(e.target.value)}
                  className="font-sans w-full p-3 border rounded-md border-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
                >
                  <option value="All">All</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Loan List */}
              <div className="space-y-4">
                {filteredLoans.map((loan, index) => (
                  <div
                    key={loan.id}
                    onClick={() => handleLoanDetails(loan,loan.id)}
                    className={`${
                      selectedLoan?.id === loan?.id ? "bg-[#EFEFEF]" : "bg-[#fff]"
                    } border font-sans border-[#C4C4C4] p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer`}
                  >
                    <div className="font-sans text-left w-[90%]">
                      <h3 className="font-sans text-[32px] font-bold text-black">
                        Loan ID: {loan.id}
                      </h3>
                      <p className="font-sans text-[#646464]">
                        Amount: ${loan.amount}
                      </p>
                      <p className="font-sans text-[#646464]">
                        Created At:{" "}
                        {new Date(loan.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <span className="font-sans border-2 border-black font-bold text-black py-1 px-4 rounded-lg">
                        {loan.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-[#646464] font-sans text-[16px] text-center">
              No loans available
            </p>
          )}
        </div>

        {/* Main Content Area */}
        <div className="font-sans w-full md:w-3/4 md:p-6 p-4">

        {/* {showLoanDetails ? (
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
         
            <h1 className="text-[32px] text-left font-bold mb-4 font-sans">
              Loan ID: {selectedLoan?.id} - {user?.firstName} {user?.lastName}
            </h1>

            <div className="flex space-x-4">
              <span className="font-sans px-10 py-3 border border-[#5EB66E] text-[#5EB66E] rounded-lg">
                Reject
              </span>
              <span className="font-sans px-10 py-3 bg-[#5EB66E] text-white rounded-lg">
                Approve
              </span>
            </div>
          </div>):null} */}

          {!showLoanDetails ? (
          <div className="font-sans grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            {/* Borrower's Profile */}
            <div className="font-sans bg-white p-6 rounded-lg shadow border text-left border-[#C4C4C4]">
              <h2 className="font-sans text-[24px] text-[#383838] font-extrabold mb-4">
                Borrower's Profile
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FCFCFC] w-full">
                <div className="flex flex-col">
                  <span className="font-sans font-normal text-[16px] text-[#646464]">
                    Name:
                  </span>
                  <span className="font-sans font-semibold text-[18px] text-[#383838]">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-normal text-[16px] text-[#646464]">
                    Email:
                  </span>
                  <span className="font-sans font-semibold text-[18px] text-[#383838]">
                    {user.email}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-sans font-normal text-[16px] text-[#646464]">
                    Verified:
                  </span>
                  <span className="font-sans font-semibold text-[18px] text-[#383838]">
                    {user.isVerified ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Compliance Checklist */}
            <div className="bg-white p-6 rounded-lg shadow border border-[#C4C4C4]">
              <h2 className="text-[24px] font-sans text-[#383838] font-extrabold mb-4 text-left">
                Compliance Checklist
              </h2>
              <div className="space-y-4 w-full">
                <div className="flex justify-between">
                  <span className="text-[#242424] font-sans text-[14px] font-semibold">
                    KYC
                  </span>
                  <span className="px-5 py-1 font-sans border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-[#242424] text-[14px] font-semibold">
                    Anti-Fraud Checks
                  </span>
                  <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-[#242424] text-[14px] font-semibold">
                    Regulatory Requirements
                  </span>
                  <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>
          ):null}

          {/* Repayment History */}
          {!showLoanDetails ? (
            <div className="mt-6 bg-white p-6 rounded-lg w-full md:w-[65%] shadow border border-[#C4C4C4] ">
              <h2 className="font-sans text-[24px] text-[#383838] font-extrabold mb-4 text-left">
                Repayment History
              </h2>

              <table className="w-full text-left">
                <thead>
                  <tr className="text-[#E2E5E9]">
                    <th className="font-sans py-2 text-[#646464] font-normal text-[16px] w-[20%]">
                      Loan ID
                    </th>
                    <th className="font-sans py-2 text-[#646464] font-normal text-[16px] w-[25%]">
                      Date
                    </th>
                    <th className="font-sans py-2 text-[#646464] font-normal text-[16px]">
                      Amount
                    </th>
                    <th className="font-sans py-2 text-[#646464] font-normal text-[16px] text-right">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {loanData.map((loan) => (
                    <tr key={loan.id} className="border-t">
                      <td className="font-sans py-2 text-[#373D46] font-semibold text-[18px]">
                        {loan.id}
                      </td>
                      <td className="font-sans py-2 text-[#373D46] font-semibold text-[18px]">
                        {new Date(loan.createdAt).toLocaleDateString()}
                      </td>
                      <td className="font-sans py-2 text-[#373D46] font-semibold text-[18px]">
                        ${loan.amount}
                      </td>
                      <td className="font-sans py-2 text-[#373D46] font-semibold text-[18px] text-right">
                        <span className="font-sans border-2 border-[#242424] font-bold text-[16px] text-[#242424] py-1 px-4 rounded-lg">
                          {loan.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
           <UsersLoanDetail selectedLoan={selectedLoan}/>
  
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersLoanList;

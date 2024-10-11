import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import LoanDetail from "../Admin/LoanDetail";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Sample loan data
  const loanData = [
    {
      id: "L001",
      name: "John Doe",
      amount: 1500,
      dueDate: "28-09-2024",
      status1: "Pending",
      status2: "Pending",
    },
    {
      id: "L002",
      name: "Jane Smith",
      amount: 2000,
      dueDate: "15-10-2024",
      status1: "Approved",
      status2: "Pending",
    },
    {
      id: "L003",
      name: "Mark Taylor",
      amount: 1200,
      dueDate: "02-11-2024",
      status1: "Pending",
      status2: "Approved",
    },
  ];

  // Function to navigate to loan details page
  const handleCardClick = (id) => {
    navigate(`/loan/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="font-sans flex flex-grow">
        {/* Sidebar - taking up 20% of the width on large screens, hidden on small screens */}
        {/* <div className="hidden md:block w-1/6">
          <Sidebar />
        </div> */}

        {/* Main Content Area - full width on small screens, 80% on large screens */}
        <div className="w-full md:w-full bg-[#ffff] p-12">
          {/* Content Area */}

          <div className="font-sans flex flex-row items-center justify-between mb-6">
            {/* Left-aligned heading */}
            <h2 className="text-left text-xl md:text-[32px] font-bold font-sans ">
              Loan Management
            </h2>

            {/* Right-aligned dropdown */}
            <select className="px-2 py-3 border-2 border-[#000000] p-2 rounded-lg font-bold text-black mr-[2%]">
              <option value="all" className="font-bold font-sans ">
                All
              </option>
              <option value="pending" className="font-bold font-sans">
                Pending
              </option>
              <option value="approved" className="font-bold font-sans">
                Approved
              </option>
            </select>
          </div>

          {/* Loan Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanData.map((loan) => (
              <div
                key={loan.id}
                className="bg-[#F8F8F8] p-6 rounded-lg shadow border border-[#E5E5E5] min-h-[150px] cursor-pointer"
                onClick={() => handleCardClick(loan.id)}
              >
                <div className="font-sans flex justify-between">
                  <div className="flex flex-col text-left">
                    <h3 className="font-sanstext-lg font-semibold mb-1">
                      {loan.id}
                    </h3>
                    <p className="font-sans text-gray-600 mb-1">{loan.name}</p>
                    <p className="font-sans text-gray-800 mb-1">
                      ${loan.amount}
                    </p>
                    <p className="font-sans text-gray-500 mb-1">
                      Due Date : {loan.dueDate}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 justify-end">
                    <span className="font-sans border-2 border-black font-bold text-black py-1 px-4 rounded-lg">
                      {loan.status1}
                    </span>
                    {/* <button className="border-2 border-black font-bold text-black py-1 px-4 rounded-lg">
                      {loan.status2}
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

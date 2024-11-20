import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const UsersLoanDetail = ({selectedLoan}) => {
  const location = useLocation();

  const [showLoanDetails,setShowLoanDetails]=useState(false);

console.log("selectedLoan",selectedLoan);

const loanData = [
    {
      id: 12345,
      amount: 1200,
      status: "Approved",
      interestRate: 5.5,
      loanDate: "2024-01-15",
      approvedDate: "2024-01-20",
      dueDate: "2025-01-15",
      amountPending: 400,
      repaymentHistory: [
        { date: "2024-02-15", amountPaid: 200, emiDate: "2024-02-15", status: "Paid" },
        { date: "2024-03-15", amountPaid: 200, emiDate: "2024-03-15", status: "Paid" },
        { date: "2024-04-15", amountPaid: 200, emiDate: "2024-04-15", status: "Paid" },
        { date: "2024-05-15", amountPaid: 200, emiDate: "2024-05-15", status: "Pending" },
        { date: "2024-06-15", amountPaid: 200, emiDate: "2024-06-15", status: "Pending" },
      ],
    },
    {
      id: 67890,
      amount: 1500,
      status: "Rejected",
      interestRate: 6.2,
      loanDate: "2024-02-10",
      approvedDate: "2024-02-12",
      dueDate: "2025-02-10",
      amountPending: 500,
      repaymentHistory: [
        { date: "2024-03-10", amountPaid: 250, emiDate: "2024-03-10", status: "Paid" },
        { date: "2024-04-10", amountPaid: 250, emiDate: "2024-04-10", status: "Paid" },
        { date: "2024-05-10", amountPaid: 250, emiDate: "2024-05-10", status: "Pending" },
        { date: "2024-06-10", amountPaid: 250, emiDate: "2024-06-10", status: "Pending" },
      ],
    },
   
  ];



  return (
    <div className="font-sans flex flex-col min-h-screen">
    

      <div className="font-sans flex flex-col md:flex-row min-h-screen bg-[#ffff]">
     

        {/* Main Content Area */}
        <div className="font-sans w-full md:w-[95%] md:p-6 p-4">

       
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            {/* Loan ID and Borrower's Name */}
            <h1 className="text-[32px] text-left font-bold mb-4 font-sans">
              Loan ID: {selectedLoan?.id} 
            </h1>

            {/* Approve/Reject Buttons */}
            <div className="flex space-x-4">
              <span className="font-sans px-10 py-3 border border-[#5EB66E] text-[#5EB66E] rounded-lg">
                Reject
              </span>
              <span className="font-sans px-10 py-3 bg-[#5EB66E] text-white rounded-lg">
                Approve
              </span>
            </div>
          </div>

          <div className="font-sans grid grid-cols-1 lg:grid-cols-2 gap-6 mt-3">
            {/* Bank Information */}
<div className="font-sans bg-white p-6 rounded-lg shadow border text-left border-[#C4C4C4]">
  <h2 className="font-sans text-[24px] text-[#383838] font-extrabold mb-4">
    Bank Information
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FCFCFC] w-full">
    <div className="flex flex-col">
      <span className="font-sans font-normal text-[16px] text-[#646464]">
        Bank Name:
      </span>
      <span className="font-sans font-semibold text-[18px] text-[#383838]">
        {selectedLoan?.bankName || "N/A"}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="font-sans font-normal text-[16px] text-[#646464]">
        Branch:
      </span>
      <span className="font-sans font-semibold text-[18px] text-[#383838]">
        {selectedLoan?.branch || "N/A"}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="font-sans font-normal text-[16px] text-[#646464]">
        Account Number:
      </span>
      <span className="font-sans font-semibold text-[18px] text-[#383838]">
        {selectedLoan?.accountNumber || "N/A"}
      </span>
    </div>
    <div className="flex flex-col">
      <span className="font-sans font-normal text-[16px] text-[#646464]">
        IFSC Code:
      </span>
      <span className="font-sans font-semibold text-[18px] text-[#383838]">
        {selectedLoan?.ifscCode || "N/A"}
      </span>
    </div>
  </div>
</div>


            {/* Amount detail */}
        
            <div className="bg-white p-6 rounded-lg shadow border border-[#C4C4C4]">
  <h2 className="text-[24px] font-sans text-[#383838] font-extrabold mb-4 text-left">
    Amount Details
  </h2>
  <div className="space-y-4 w-full">
    <div className="flex justify-between">
    <span className="font-sans font-normal text-[16px] text-[#646464]">
        Loan Amount
      </span>
      <span className="px-5 py-1 font-sans border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
        ${selectedLoan?.amount || "N/A"}
      </span>
    </div>
    <div className="flex justify-between">
       <span className="font-sans font-normal text-[16px] text-[#646464]">
        Interest Rate
      </span>
      <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
      {selectedLoan?.interestRate ? `${selectedLoan?.interestRate}%` : "N/A"}   
      </span>
    </div>
    <div className="flex justify-between">
       <span className="font-sans font-normal text-[16px] text-[#646464]">
        Amount Paid
      </span>
      <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
      {selectedLoan?.amountPaid ? `$${selectedLoan?.amountPaid}` : "N/A"} 
      </span>
    </div>
    <div className="flex justify-between">
       <span className="font-sans font-normal text-[16px] text-[#646464]">
        Amount Pending
      </span>
      <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
      {selectedLoan?.amountPending ? `$${selectedLoan.amountPending}` : "N/A"}
      </span>
    </div>
    <div className="flex justify-between">
       <span className="font-sans font-normal text-[16px] text-[#646464]">
        Due Date
      </span>
      <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
        {new Date(selectedLoan?.dueDate).toLocaleDateString() || "N/A"}
      </span>
    </div>
    <div className="flex justify-between">
       <span className="font-sans font-normal text-[16px] text-[#646464]">
        Payment Deduction Date
      </span>
      <span className="font-sans px-5 py-1 border-2 font-bold rounded-lg text-[#242424] border-[#242424]">
        {selectedLoan?.deductionDate ? new Date(selectedLoan.deductionDate).toLocaleDateString() : "N/A"}
      </span>
    </div>
  </div>
</div>

        
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default UsersLoanDetail;

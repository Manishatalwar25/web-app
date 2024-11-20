import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from "../assets/images/logo.png";
import Loader from "../Components/Loader";

const LoanConfirmation = () => {
  const { state } = useLocation();  // Get the state passed from navigate
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const loanId = state?.loanId;  // Extract loanId from state
  const BASE_URL = process.env.REACT_APP_BASE_URL;  
  useEffect(() => {
    const fetchLoanStatus = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await fetch(`${BASE_URL}/api/loans/${loanId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        if (data.success) {
          setStatus(data.loan.status);
        } else {
          console.error('Failed to fetch loan status:', data.message);
          setStatus('Error');
        }
      } catch (error) {
        console.error('Error fetching loan status:', error);
        setStatus('Error');
      } finally {
        setLoading(false);
      }
    };

    if (loanId) {
      fetchLoanStatus();
    }
  }, [loanId]);

  if (loading) {
    return <Loader />;
  }

  let message;
  let bgColorClass;
  let textColorClass;

  // Set message, background color, and text color based on loan status
  switch (status) {
    case 'Approved':
      message = (
        <>
          <h1 className="font-sans text-2xl font-bold mb-2">Loan Approved!</h1>
          <p className="font-sans text-[15px]">Congratulations! Your loan has been approved. We will contact you with the next steps.</p>
        </>
      );
      bgColorClass = 'bg-green-50'; // Green background for approved
      textColorClass = 'text-[#5EB66E]'; // Green text for approved
      break;

    case 'Rejected':
      message = (
        <>
          <h1 className="font-sans text-2xl font-bold mb-2 text-red-500">Loan Rejected</h1>
          <p className="font-sans text-[15px] text-red-500">We regret to inform you that your loan application has been rejected. Please feel free to contact us for further assistance.</p>
        </>
      );
      bgColorClass = 'bg-red-50'; // Red background for rejected
      textColorClass = 'text-[#DC2626]'; // Red text for rejected
      break;

    case 'Pending':
    default:
      message = (
        <>
          <h1 className="font-sans text-2xl font-bold mb-2 text-yellow-500">Loan Request Submitted!</h1>
          <p className="font-sans text-[15px] text-yellow-500">We will review your application and get back to you shortly.</p>
        </>
      );
      bgColorClass = 'bg-yellow-50'; // Yellow background for pending
      textColorClass = 'text-yellow-500'; // Yellow text for pending
      break;
  }

  return (
    <div className="font-sans flex justify-center items-center min-h-screen bg-gray-100">
      <div className="font-sans bg-white shadow-md w-full max-w-md min-h-screen flex flex-col justify-center items-center">
        <div className="flex justify-center items-center mb-4">
          <img src={Logo} alt="logo" className="w-24 h-24" />
        </div>

        {/* Dynamically set background color and text color based on loan status */}
        <div className={`p-6 rounded-md text-center w-4/5 ${bgColorClass} ${textColorClass}`}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoanConfirmation;

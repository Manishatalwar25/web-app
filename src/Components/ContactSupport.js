import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BiLogOutCircle } from "react-icons/bi";
import Swal from 'sweetalert2';

const ContactSupport = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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

  const handleSubmit = () => {
    if (!message.trim()) {
      setError("Please enter a message before sending.");
      return;
    }

    Swal.fire("Message Sent!", "Your message has been sent to support.", "success");
    setMessage("");
    setError(""); // Clear error message on successful submission
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md h-full min-h-screen flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="font-sans flex items-center border-b bg-[#0000]">
            <button onClick={() => navigate('/')} className="mr-4 text-[#383838] m-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <h1 className="font-sans text-[18px] font-extrabold text-[#383838]">Contact Support</h1>
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

          <div className="p-4 text-left">
            <p className="font-sans text-[#646464] mb-4 font-bold text-[15px]">
              We are here to help you. Please fill out the form below to contact our support team.
            </p>

            {/* Message Textarea */}
            <div className="mt-4">
              <label htmlFor="message" className="mb-3 block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px]">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`font-sans w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-[#E5E5E5]'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800`}
                rows="5"
                placeholder="Type your message here..."
                maxLength={500}
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full font-sans bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;

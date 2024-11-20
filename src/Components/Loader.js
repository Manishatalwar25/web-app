import React from 'react';
import LoaderImage from '../assets/images/LOADER.png';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        {/* Loader image with pulsing animation */}
        <img
          src={LoaderImage}
          alt="Loading"
          className="w-20 h-20"
          style={{
            animation: 'pulse 1.5s ease-out infinite',
            transformOrigin: 'center',
          }}
        />
      </div>
      <p className="mt-4 text-gray-700">Please Wait</p>

      {/* Internal CSS for the pulse animation */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;

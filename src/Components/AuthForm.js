import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from "../assets/images/logo.png"; 
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch("password");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    
    if (isLogin) {
      // Handling login logic
      console.log("Logging in with:", data.email, data.password);
      alert("Login successful!");
      onLogin();
      setTimeout(() => {
        navigate("/kyc-profile");  // Navigate to KYC profile after login
      }, 2000);
      
    } else {
      // Handling sign-up logic
      console.log("Signing up with:", data.firstName, data.lastName, data.email, data.password);
      alert("Sign Up successful!");
      setTimeout(() => {
        setIsLogin(true);  // Switch to login form after 2 seconds
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center   ">
      {/* Apply the same height to both forms */}
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 h-full min-h-screen ">         <div className="flex justify-center mb-2">
          <img src={Logo} alt="logo" className="w-17 h-17 mt-6" />
        </div>

        {/* Toggle between Sign Up and Login */}
        <div className="flex mb-6 relative mt-8">
          {/* Sign Up Button */}
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`relative  font-normal  text-[16px] flex-1 py-2 ${!isLogin ? 'bg-[#5EB66E] text-white' : 'bg-[#E5E5E5] text-black'} 
            rounded-lg focus:outline-none transition duration-300 z-10`}
            style={{ marginRight: '-10px' }}  // This will make the overlap
          >
            Sign Up
          </button>

          {/* Login Button */}
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`relative text-[16px] flex-1 py-2 ${isLogin ? 'bg-[#5EB66E] text-white' : 'bg-[#E5E5E5] text-black'} 
            rounded-r-lg focus:outline-none transition duration-300 z-0`}
          >
            Login
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          {!isLogin && (
            <>
              {/* First Name */}
              <div className='mt-3'>
                <label htmlFor="firstName" className="block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-1">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                {errors.firstName && <span className="text-red-500 text-[16px]">{errors.firstName.message}</span>}
              </div>

              {/* Last Name */}
              <div className='mt-3'>
                <label htmlFor="lastName" className="block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-1">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
                {errors.lastName && <span className="text-red-500 text-[16px]">{errors.lastName.message}</span>}
              </div>
            </>
          )}

          {/* Email */}
          <div className='mt-3'>
            <label htmlFor="email" className="block text-[16px] text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-1">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.email && <span className="text-red-500 text-[16px]">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="relative mt-3">
            <label htmlFor="password" className="block text-[#8F959E] text-[16px] font-sans text-base leading-[21.82px] text-left mb-1">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-[#C4C4C4]"
            >
              {showPassword ? <IoEyeOffOutline size={25} /> : <IoEyeOutline size={25}/>}
            </button>
            {errors.password && <span className="text-red-500 text-[16px]">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div className="relative mt-3">
              <label htmlFor="confirmPassword" className="text-[16px] block text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-1">Confirm Password</label>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => value === password || "The passwords do not match"
                })}
                className="text-[16px] w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-[#C4C4C4]"
              >
                {showConfirmPassword ? <IoEyeOffOutline size={25} /> : <IoEyeOutline size={25}/>}
              </button>
              {errors.confirmPassword && <span className="text-red-500 text-[16px]">{errors.confirmPassword.message}</span>}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5EB66E] text-white py-2  font-bold rounded-md hover:bg-[5EB66E] transition duration-300 mt-4 text-[16px]"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

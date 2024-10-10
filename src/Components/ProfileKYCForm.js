import React,{useState} from 'react';
import Sidebar from "./Layout/Sidebar";
import { useForm } from 'react-hook-form';
import Logo from "../assets/images/logo.png"; 
import { FiUpload } from "react-icons/fi";
import { CiCamera } from "react-icons/ci";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const ProfileKYCForm = () => {
    const [rangeValue, setRangeValue] = useState(75); 
    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
const password = watch("password");
const navigate = useNavigate();
const onSubmit = (data) => {
    console.log(data);
    
    
  };
  return (
    <div className="flex justify-center ">
 
      <div className="w-full  max-w-md   bg-white shadow-md rounded-lg "> 
       
        <div className="flex p-4 border-b border-[#5EB66E1A] bg-white shadow-md">

        <button className="mr-4 text-[#383838]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-[18px] font-extrabold text-[#383838]">Profile & KYC</h1>
        </div>

        {/* Personal Details Section */}
        <div className=" bg-[#FFFFFF]">
        <h2 className="text-[18px] font-bold tracking-wide text-[#383838] mb-2 bg-[#5EB66E1A] p-4 rounded text-left">Personal Details</h2>

          <form className="space-y-4 p-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="font-normal block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: "Name is required" })}
                className="w-full text-[16px] font-normal   px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.name && <span className="font-normal  text-red-500 text-[16px]">{errors.name.message}</span>}
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2">Date of Birth (DOB)</label>
              <input
                type="date"
                id="dob"
                name="dob"
                {...register("dob", { required: "Date of birth is required" })}
                className="font-normal  w-full px-3 text-[16px]  py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.dob && <span className="font-normal  text-red-500 text-[16px]">{errors.dob.message}</span>}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2">Address</label>
              <input
                id="address"
                name="address"
                rows="3"
                {...register("address", { required: "Address is required" })}
                className="w-full px-3 text-[16px]  py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.address && <span className="font-normal  text-red-500 text-[16px]">{errors.address.message}</span>}
            </div>

            {/* Employment Status */}
            <div>
              <label htmlFor="employment" className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2">Employment Status</label>
              <select
                id="employment"
                name="employment"
                {...register("employment", { required: "Employment status is required" })}
                className="w-full px-3 py-2 text-[16px] font-normal  border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              >
                <option value="">Select</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
              </select>
              {errors.employment && <span className="font-normal  text-red-500 text-[16px]">{errors.employment.message}</span>}
            </div>

            {/* Annual Income */}
            <div>
              <label htmlFor="income" className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2">Annual Income</label>
              <input
                type="number"
                id="income"
                name="income"
                {...register("income", { required: "Annual income is required" })}
                className="w-full text-[16px] font-normal   px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.income && <span className="font-normal  text-red-500 text-[16px]">{errors.income.message}</span>}
            </div>
          </form>
        </div>

        {/* Bank Account Section */}
        <div className=" bg-[#FFFFFF] mt-6">
        <h2 className="text-[18px] font-bold tracking-wide text-[#383838] mb-2 bg-[#5EB66E1A] p-4 rounded text-left">Bank Account</h2>

       <div className='p-4'>
          <button className="w-full bg-[#5EB66E] mt-2  text-white py-3 text-[16px] font-bold rounded-md hover:bg-[#5EB66E] focus:outline-none focus:ring-2 focus:ring-gray-600">
            Connect Bank Account
          </button>
          </div>
        </div>

      
        {/* KYC Verification Section */}
        <div className="mt-6 bg-[#FFFFFF]">

  <h2 className="text-[18px] font-bold tracking-wide text-[#383838] mb-7 bg-[#5EB66E1A] p-4 rounded text-left">KYC Verification</h2>
<div className="p-4" >
  {/* Upload ID Card */}
  <div className="border border-[#E5E5E5] p-4 mb-10 rounded-lg bg-white">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D] text-left">Upload ID Card</h3>
  <p className="text-[16px] text-[#646464] mb-2 text-left">Document size has to be less than 5MB</p>

  {/* Center the "Upload Img or PDF" text and icon in one line */}
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464]  rounded-md hover:bg-gray-50 cursor-pointer">
    <label htmlFor="idCard" className="flex flex-row justify-center items-center cursor-pointer">
      <span className="text-[#0D0D0D] font-semibold mr-2 text-[16px]">Upload Img or PDF</span>
      <FiUpload size={26} color="#0D0D0D" />
      <input
        type="file"
        id="idCard"
        name="idCard"
        {...register("idCard", { required: "ID card upload is required" })}
        className="hidden"
      />
    </label>
  </div>

  {errors.idCard && <span className="text-red-500 text-[16px]">{errors.idCard.message}</span>}
</div>


  {/* Upload Passport */}
  <div className="border border-[#E5E5E5] p-4 mb-10 rounded-lg bg-white">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D] text-left">Upload Passport</h3>
  <p className="text-[16px] text-[#646464] mb-2 text-left">Document size has to be less than 5MB</p>
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464]  rounded-md hover:bg-gray-50 cursor-pointer">
    <label htmlFor="passport" className="flex flex-row justify-center items-center cursor-pointer"> 
      <span className="text-[#0D0D0D] font-semibold mr-2 text-[16px]">Upload Img or PDF</span>
      <FiUpload size={26}  color="#0D0D0D" />
      <input
        type="file"
        id="passport"
        name="passport"
        {...register("passport", { required: "Passport upload is required" })}
        className="hidden"
      />
    </label>
  </div>
  {errors.passport && <span className="text-red-500 text-[16px]">{errors.passport.message}</span>}
</div>

  {/* Take a Selfie */}

  <div className="border border-[#E5E5E5] p-4 rounded-lg bg-white">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D] text-left">Upload ID Card</h3>
  <p className="text-[16px] text-[#646464] mb-2 text-left">Document size has to be less than 5MB</p>

  {/* Center the "Take a Selfie" text and icon in one line */}
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464]  rounded-md hover:bg-gray-50 cursor-pointer">
    <label htmlFor="selfie" className="flex flex-row justify-center items-center cursor-pointer">
      <span className="text-[#0D0D0D] font-semibold text-[16px] mr-2">Take a Selfie</span>
      <CiCamera size={29} color="#0D0D0D" />
      <input
        type="file"
        id="selfie"
        name="selfie"
        {...register("selfie", { required: "Selfie upload is required" })}
        className="hidden"
      />
    </label>
  </div>

  {errors.selfie && <span className="text-red-500 text-[16px]">{errors.selfie.message}</span>}
</div>

  </div>



 

</div>


        {/* Compliance Notice Section */}
        <div className="p-4 pt-1 bg-[#FFFFFF]">
          
          <h2 className="text-[18px] font-bold text-[#383838]  p-2 rounded text-left">Compliance Notice</h2>
          <div className="p-4 bg-[#5EB66E1A] rounded-lg font-medium text-left  text-[16px] text-[#646464]">
          To comply with financial regulations, we require you to complete the KYC verification process. This helps ensure the security and integrity of our platform. The information you will provide will be kept strictly confidential
          & used only for the purpose of assessing your eligibility for microloan.     </div>
        </div>
     
        <div className="p-4">
  <button 
    onClick={() => {
      navigate('/verification');
    }} 
    className="w-full bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]"
  >
    Submit for Verification
  </button>
</div>

</div>

      
    </div>
  );
};

export default ProfileKYCForm;

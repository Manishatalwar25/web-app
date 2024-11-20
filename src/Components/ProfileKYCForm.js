import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../assets/images/logo.png";
import { FiUpload } from "react-icons/fi";
import { CiCamera } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
const ProfileKYCForm = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;  
  const [idCardFileName, setIdCardFileName] = useState("");
  const [passportFileName, setPassportFileName] = useState("");
  const [selfieFileName, setSelfieFileName] = useState("");
  const [rangeValue, setRangeValue] = useState(75);
  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();
  

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5EB66E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "You have been successfully logged out.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        // After the confirmation and success message, navigate to the homepage.
        setTimeout(() => {
          navigate("/");
        }, 2000); // Wait for 2 seconds before navigating
      }
    });
  };


  const onSubmit = async (data) => {
    console.log(data);
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("dob", data.dob);
    formData.append("address", data.address);
    formData.append("employment", data.employment);
    formData.append("income", data.income);

    // Attach files (idCard, passport, selfie)
    if (data.idCard && data.idCard.length > 0) {
      formData.append("idCard", data.idCard[0]);
    }
    if (data.passport && data.passport.length > 0) {
      formData.append("passport", data.passport[0]);
    }
    if (data.selfie && data.selfie.length > 0) {
      formData.append("selfie", data.selfie[0]);
    }

    try {
      const response = await fetch(`${BASE_URL}/kyc/upload`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success(response.message || 'KYC data submitted successfully!');
        setTimeout(() => {
          navigate("/verification");
        }, 2000);
     
  
      } else {
       
        toast.error("Error!", "Something went wrong!");
      }
    } catch (error) {
      toast.error(error.message || "Error!", "Something went wrong!");
    }
  };

  const handleFileChange = (e, setFileName) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Set file name to display below the input
    }
  };

  return (
    <div className="font-sans flex justify-center  ">
      <div className="w-full  max-w-md   bg-white shadow-md rounded-lg ">
        <div className="flex p-4 border-b border-[#5EB66E1A] bg-white shadow-md">
          <button className="mr-4 text-[#383838]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <h1 className="font-sans text-[18px] font-extrabold text-[#383838]">
            Profile & KYC
          </h1>
          <div className="ml-auto relative group">
            <button className="flex items-left" onClick={handleLogout}>
              <BiLogOutCircle size={25} className="text-[#383838]" />
            </button>
            {/* Tooltip */}
            <span className="font-sans absolute top-[30px] right-0 w-max px-2 py-1 text-xs text-white bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Logout
            </span>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="font-sans bg-[#FFFFFF]">
          <h2 className="font-sans text-[18px] font-bold tracking-wide text-[#383838] mb-2 bg-[#5EB66E1A] p-4 rounded text-left">
            Personal Details
          </h2>

          <form className="space-y-4 p-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="font-normal block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                {...register("name", { required: "Name is required" })}
                className="font-sans w-full text-[16px] font-normal   px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.name && (
                <span className="font-sans font-normal !text-left  text-red-500 mt-2 text-[16px] mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label
                htmlFor="dob"
                className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Date of Birth (DOB)
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                {...register("dob", { required: "Date of birth is required" })}
                className="font-normal font-sans w-full px-3 text-[16px]  py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.dob && (
                <span className="font-sans font-normal  text-red-500 mt-2 text-[16px]">
                  {errors.dob.message}
                </span>
              )}
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                rows="3"
                {...register("address", { required: "Address is required" })}
                className="w-full font-sans px-3 text-[16px]  py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.address && (
                <span className="font-sans font-normal  text-red-500 mt-2 text-[16px]">
                  {errors.address.message}
                </span>
              )}
            </div>

            {/* Employment Status */}
            <div>
              <label
                htmlFor="employment"
                className=" font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Employment Status
              </label>
              <select
                id="employment"
                name="employment"
                {...register("employment", {
                  required: "Employment status is required",
                })}
                className="font-sans w-full px-3 py-2 text-[16px] font-normal  border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              >
                <option value="">Select</option>
                <option value="Employed">Employed</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
              </select>
              {errors.employment && (
                <span className="font-sans font-normal  text-red-500 mt-2 text-[16px]">
                  {errors.employment.message}
                </span>
              )}
            </div>

            {/* Annual Income */}
            <div>
              <label
                htmlFor="income"
                className=" font-normal  block text-[16px]  text-[#8F959E] font-sans text-base leading-[21.82px] text-left mb-2"
              >
                Annual Income
              </label>
              <input
                type="number"
                id="income"
                name="income"
                {...register("income", {
                  required: "Annual income is required",
                })}
                className="w-full font-sans text-[16px] font-normal   px-3 py-2 border border-[#E5E5E5] rounded-md focus:outline-none focus:ring-2 focus:ring-[#E5E5E5]"
              />
              {errors.income && (
                <span className="font-sans font-normal  text-red-500 mt-2 text-[16px]">
                  {errors.income.message}
                </span>
              )}
            </div>
             {/* Bank Account Section */}
        <div className=" bg-[#FFFFFF] mt-6">
          <h2 className="font-sans text-[18px] font-bold tracking-wide text-[#383838] mb-2 bg-[#5EB66E1A] p-4 rounded text-left">
            Bank Account
          </h2>

          <div className="p-4">
            <button className="font-sans w-full bg-[#5EB66E] text-[#ffff] py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E] focus:outline-none focus:ring-2 focus:ring-[#5EB66E]">
              Connect Bank Account
            </button>
          </div>
        </div>

        {/* KYC Verification Section */}
        <div className="mt-6 bg-[#FFFFFF]">
          <h2 className="text-[18px] font-sans font-bold tracking-wide text-[#383838] mb-7 bg-[#5EB66E1A] p-4 rounded text-left">
            KYC Verification
          </h2>
          <div >
            {/* Upload ID Card */}
            {/* ID Card Upload */}
            <div className="border border-[#E5E5E5] p-4 mb-10 rounded-lg bg-white">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D]">Upload ID Card</h3>
  <p className="text-[16px] text-[#646464] mb-2">Document size has to be less than 5MB</p>
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464] rounded-md cursor-pointer">
    <label className="flex justify-center items-center cursor-pointer">
      <span className="mr-2">Upload Img or PDF</span>
      <FiUpload size={26} />
      <input
        type="file"
        id="idCard"
        {...register("idCard", {
          required: "ID card upload is required",
        })}
        onChange={(e) => handleFileChange(e, setIdCardFileName)}
        className="hidden"
      />
    </label>
  </div>
  {idCardFileName && <p className="text-green-500 mt-2 text-center">{idCardFileName}</p>}
  {errors.idCard && (
    <span className="text-red-500 mt-2 text-center ">{errors.idCard.message}</span>
  )}
</div>

{/* Passport Upload */}
<div className="border border-[#E5E5E5] p-4 mb-10 rounded-lg bg-white ">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D]">Upload Passport</h3>
  <p className="text-[16px] text-[#646464] mb-2">Document size has to be less than 5MB</p>
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464] rounded-md cursor-pointer">
    <label className="flex justify-center items-center cursor-pointer">
      <span className="mr-2">Upload Img or PDF</span>
      <FiUpload size={26} />
      <input
        type="file"
        id="passport"
        {...register("passport", {
          required: "Passport upload is required",
        })}
        onChange={(e) => handleFileChange(e, setPassportFileName)}
        className="hidden"
      />
    </label>
  </div>
  {passportFileName && <p className="text-green-500 mt-2 text-center">{passportFileName}</p>}
  {errors.passport && (
    <span className="text-red-500 mt-2 text-center">{errors.passport.message}</span>
  )}
</div>

{/* Selfie Upload */}
<div className="border border-[#E5E5E5] p-4 rounded-lg bg-white">
  <h3 className="text-[17px] font-semibold text-[#0D0D0D]">Take a Selfie</h3>
  <div className="border-2 border-dashed border-[#5EB66E] py-4 px-4 text-[#646464] rounded-md cursor-pointer">
    <label className="flex justify-center items-center cursor-pointer">
      <span className="mr-2">Take a Selfie</span>
      <CiCamera size={29} />
      <input
        type="file"
        id="selfie"
        {...register("selfie", {
          required: "Selfie upload is required",
        })}
        onChange={(e) => handleFileChange(e, setSelfieFileName)}
        className="hidden"
      />
    </label>
  </div>
  {selfieFileName && <p className="text-green-500 mt-2 text-center">{selfieFileName}</p>}
  {errors.selfie && (
    <span className="text-red-500 mt-2 text-center">{errors.selfie.message}</span>
  )}
</div>

          </div>
        </div>
          {/* Compliance Notice Section */}
          <div className="pt-1 bg-[#FFFFFF]">
          <h2 className="text-[18px] font-sans font-bold text-[#383838]  p-2 rounded text-left">
            Compliance Notice
          </h2>
          <div className="p-4 font-sans bg-[#5EB66E1A] rounded-lg font-medium text-left  text-[16px] text-[#646464]">
            To comply with financial regulations, we require you to complete the
            KYC verification process. This helps ensure the security and
            integrity of our platform. The information you will provide will be
            kept strictly confidential & used only for the purpose of assessing
            your eligibility for microloan.{" "}
          </div>
        </div>

        <div className="p-4">
        <button
                type="submit"
                className="w-full bg-[#5EB66E] text-white py-3 text-[16px] font-semibold rounded-md hover:bg-[#469F5E]"
              >
                Submit for Verification
              </button>
        </div>
          </form>
        </div>

       

      
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ProfileKYCForm;

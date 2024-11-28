import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import imghptl from "../../../assets/img/image copy 4.png";
import HospitalRegistrationForm from "../../../components/forms/registration/HospitalRegistrationForm";

function HospitalRegistrationPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalAddress: "",
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorMessage(""); // Clear error when user makes changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.hospitalName ||
      !formData.hospitalAddress ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Basic password validation (at least 6 characters)
    if (formData.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      return;
    }

    // Clear the error message and submit
    setErrorMessage("");
    console.log("Form Data:", formData);
    navigate("/registration/hospital/success");
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4 mt-20 ">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Welcome to Blood and Tissue Supply <br /> Chain Management System
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <h2 className="text-2xl text-black font-bold mb-6 text-center md:text-left">
              Register as Hospital
            </h2>
            <HospitalRegistrationForm
              formData={formData}
              handleChange={handleChange}
              errorMessage={errorMessage}
              onSubmit={handleSubmit}
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <img
              src={imghptl}
              alt="Hospital Registration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalRegistrationPage;

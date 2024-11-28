import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import {
  AccountInfoStep,
  ContactInfoStep,
  LocationStep,
  PersonalInfoStep,
} from "../../../components/forms/registration/RegistrationSteps";

function IndividualRegistrationPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    fatherName: "",
    grandFatherName: "",
    sex: "",
    dateOfBirth: "",
    occupation: "",
    phone: "",
    email: "",
    city: "",
    subCity: "",
    woreda: "",
    kebele: "",
    password: "",
    confirmPassword: "",
  });

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        if (
          !formData.title ||
          !formData.firstName ||
          !formData.fatherName ||
          !formData.grandFatherName ||
          !formData.sex ||
          !formData.dateOfBirth ||
          !formData.occupation
        ) {
          setError("Please fill in all required fields");
          return false;
        }
        break;
      case 2:
        if (
          !formData.city ||
          !formData.subCity ||
          !formData.woreda ||
          !formData.kebele
        ) {
          setError("Please fill in all required fields");
          return false;
        }
        break;
      case 3:
        if (!formData.phone || !formData.email) {
          setError("Please fill in all required fields");
          return false;
        }
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          setError("Please enter a valid email address");
          return false;
        }
        break;
      case 4:
        if (!formData.password || !formData.confirmPassword) {
          setError("Please fill in all required fields");
          return false;
        }
        // Basic password validation (at least 6 characters)
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters long");
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords do not match");
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < 4) {
        setCurrentStep(currentStep + 1);
        setError("");
      } else {
        // Submit the form
        console.log("Form submitted:", formData);
        navigate("/registration/individual/success");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError("");
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 2:
        return (
          <LocationStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 3:
        return (
          <ContactInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      case 4:
        return (
          <AccountInfoStep
            formData={formData}
            setFormData={setFormData}
            error={error}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      {/* Header Section */}
      <div className="container mx-auto px-4 pt-28 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to Blood and Tissue Supply Chain Management System
        </h1>
        <p className="text-gray-600 mb-8">
          Please complete all the required information to register as a donor
        </p>
      </div>

      {/* Registration Form */}
      <div className="flex-1 container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step === currentStep
                      ? "bg-red-500 text-white"
                      : step < currentStep
                      ? "bg-green-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {step < currentStep ? "✓" : step}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Personal</span>
              <span>Location</span>
              <span>Contact</span>
              <span>Account</span>
            </div>
          </div>

          {/* Form Steps */}
          <div className="mb-8">{renderStep()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className={`px-6 py-2 rounded ${
                currentStep === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              {currentStep === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualRegistrationPage;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing the navigate function from react-router-dom
import schedule from "./../../Component/Header/img/donate-blood-vector-1547245.jpg";
import NavBar from "../Common/NavBar";

const countryCodes = [
  { code: "+1", label: "USA" },
  { code: "+44", label: "UK" },
  { code: "+91", label: "India" },
  { code: "+251", label: "Ethiopia" },
  // Add more country codes as needed
];

const Schedule = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1"); // default to USA

  const navigate = useNavigate(); // Initialize the useNavigate hook for redirection

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && email && phone) {
      // Handle the appointment data
      const appointment = {
        date,
        time,
        email,
        phone: `${countryCode} ${phone}`, // Combine country code and phone
      };

      // After submitting, clear the form and redirect to the home page
      setDate("");
      setTime("");
      setEmail("");
      setPhone("");
      setCountryCode("+1"); // Reset to default

      alert("Form submitted successfully!");
      navigate("/Donerinfo");  // Redirect to the home page
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <div className="flex justify-around">
      <NavBar />
      <div className="max-w-md mt-20 mx-auto p-6 ml-32 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Schedule an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="date"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="time"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <label
              className="block text-sm font-medium text-gray-700 mr-2"
              htmlFor="countryCode"
            >
              Country Code
            </label>
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border border-gray-300 rounded-md p-2 mr-2"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.label} ({country.code})
                </option>
              ))}
            </select>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-500 transition"
          >
            Schedule
          </button>
        </form>
      </div>
      <div className="mt-20">
        <img src={schedule} alt="" className="w-[40rem] ml-24 h-[31rem]" />
      </div>
    </div>
  );
};

export default Schedule;

/* eslint-disable no-unused-vars */
// src/components/Schedule.jsx
import React, { useState, useEffect } from "react";
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
  const [appointments, setAppointments] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAppointments, setShowAppointments] = useState(false); // State to manage visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && time && email && phone) {
      const appointment = {
        date,
        time,
        email,
        phone: `${countryCode} ${phone}`,
      }; // combine country code and phone
      setAppointments([...appointments, appointment]);
      setDate("");
      setTime("");
      setEmail("");
      setPhone("");
      setCountryCode("+1"); // reset to default
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      appointments.forEach((appointment) => {
        const appointmentDate = new Date(
          `${appointment.date}T${appointment.time}`
        );
        if (
          now >= appointmentDate &&
          now < appointmentDate.setMinutes(appointmentDate.getMinutes() + 1)
        ) {
          setAlertMessage(
            `Reminder: You have an appointment scheduled for ${appointment.date} at ${appointment.time}. We will notify you via email at ${appointment.email} and phone at ${appointment.phone}.`
          );
          sendNotifications(appointment.email, appointment.phone);
          setAppointments((prev) => prev.filter((a) => a !== appointment));
        }
      });
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [appointments]);

  const sendNotifications = (email, phone) => {
    console.log(`Sending email to: ${email}`);
    console.log(`Sending SMS to: ${phone}`);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
    }
  };

  const toggleAppointments = () => {
    setShowAppointments((prev) => !prev); // Toggle visibility
  };

  return (
    <div className="flex justify-around">
      <div className="max-w-md mx-auto p-6 ml-32 bg-white rounded-lg shadow-md">
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
        <button
          onClick={toggleAppointments}
          className="mt-4 w-full bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 transition"
        >
          {showAppointments ? "Hide" : "Show"} Scheduled Appointments
        </button>
        {showAppointments && (
          <>
            <h3 className="mt-6 text-xl font-semibold">
              Scheduled Appointments
            </h3>
            <ul className="mt-2">
              {appointments.map((appointment, index) => (
                <li key={index} className="border-b py-2">
                  {appointment.date} at {appointment.time} - {appointment.email}{" "}
                  - {appointment.phone}
                </li>
              ))}
            </ul>
          </>
        )}
        {alertMessage && (
          <div className="mt-4 p-2 bg-yellow-200 text-yellow-800 rounded">
            {alertMessage}
          </div>
        )}
      </div>
      <div className="">
        <img src={schedule} alt="" className="w-[40rem] ml-24 h-[31rem]" />
      </div>
    </div>
  );
};

export default Schedule;

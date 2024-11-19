import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

const QualificationForm = () => <div>Qualification Form Page</div>;

const Dashboard = () => {
  const [donor, setDonor] = useState({
    firstName: "John",
    middleName: "Doe",
    surName: "Smith",
    occupation: "Teacher",
    city: "New York",
    subcity: "Brooklyn",
    zone: "Zone 1",
    woreda: "Woreda 1",
    kebele: "Kebele 1",
    telephone: "123456789",
    email: "john.doe@example.com",
    medicalHistory: "None",
  });

  const [editField, setEditField] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const [donationHistory, setDonationHistory] = useState([
    { date: "2024-11-01", type: "Blood Donation", amount: "500ml" },
    { date: "2024-10-15", type: "Blood Donation", amount: "450ml" },
  ]);

  const [scheduledAppointments, setScheduledAppointments] = useState([
    { date: "2024-12-01", time: "10:00 AM", status: "Scheduled" },
    { date: "2024-12-10", time: "11:00 AM", status: "Scheduled" },
  ]);

  const [activeSection, setActiveSection] = useState("donorInfo");

  const handleEdit = (field, currentValue) => {
    setEditField(field);
    setEditedValue(currentValue);
  };

  const handleSaveEdit = (field) => {
    setDonor({ ...donor, [field]: editedValue });
    setEditField(null);
  };

  const Sidebar = () => (
    <div className="w-64 h-screen bg-white p-4 pt-24 fixed overflow-y-auto">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <span className="font-semibold text-lg">Kumneger</span>
      </div>
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Dashboards
      </div>
      <ul>
        <li
          onClick={() => setActiveSection("donorInfo")}
          className={`mb-2 flex items-center ${activeSection === "donorInfo" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 rounded-full cursor-pointer`}
        >
          <HiOutlineViewGrid className="mr-3" /> Manage Account
        </li>
        <li
          onClick={() => setActiveSection("donationHistory")}
          className={`mb-2 flex items-center ${activeSection === "donationHistory" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 cursor-pointer`}
        >
          <FaHistory className="mr-3" /> Donation History
        </li>
        <li
          onClick={() => setActiveSection("schedule")}
          className={`mb-2 flex items-center ${activeSection === "schedule" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 cursor-pointer`}
        >
          <FaHistory className="mr-2" /> Schedule
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2 cursor-pointer">
          <Link to="/QualificationForm" className="flex items-center">
            <FaHistory className="mr-2" /> Qualification
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        <div className="bg-white p-4 shadow-md fixed w-full top-0 left-64 z-10">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <div className="p-6 mt-16">
          {activeSection === "donorInfo" && (
            <>
              <h3 className="text-xl font-semibold text-red-500 mb-6 ml-10">Donor Information</h3>
              <div className="space-y-4 ml-8">
                {Object.keys(donor).map((field, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-[150px] font-medium">{field.replace(/([A-Z])/g, " $1")}</span>
                    {editField === field ? (
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={editedValue}
                          onChange={(e) => setEditedValue(e.target.value)}
                          className="p-2 border border-gray-300 rounded flex-1"
                        />
                        <button
                          onClick={() => handleSaveEdit(field)}
                          className="bg-green-500 text-white py-1 px-4 rounded"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 flex-1">
                        <span className="flex-1">{donor[field]}</span>
                        <button
                          onClick={() => handleEdit(field, donor[field])}
                          className="bg-red-100 text-red-600 px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {activeSection === "donationHistory" && (
            <>
              <h3 className="text-xl font-semibold text-red-500 mb-6 ml-10">Donation History</h3>
              <div className="overflow-x-auto ml-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-red-500 text-white">
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Donation Type</th>
                      <th className="py-2 px-4 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donationHistory.map((donation, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4">{donation.date}</td>
                        <td className="py-2 px-4">{donation.type}</td>
                        <td className="py-2 px-4">{donation.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeSection === "schedule" && (
            <>
              <h3 className="text-xl font-semibold text-red-500 mb-6 ml-10">Scheduled Appointments</h3>
              <div className="ml-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-red-500 text-white">
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Time</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduledAppointments.map((appointment, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4">{appointment.date}</td>
                        <td className="py-2 px-4">{appointment.time}</td>
                        <td className="py-2 px-4">{appointment.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/QualificationForm" element={<QualificationForm />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

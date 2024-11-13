import React from "react";
import { FaCog, FaHistory, FaEnvelope } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

const HospitalProfile = ({ activeTab, setActiveTab, generateReport, viewNotifications }) => {
  return (
    <div className="w-64 h-screen bg-white p-4 pt-6 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-12 h-12 mr-3"
        />
        <span className="font-semibold text-2xl">Hospital</span>
      </div>

      {/* Navigation Section */}
      <ul className="mb-8">
        <li
          className={`mb-2 flex items-center ${activeTab === "overview" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 rounded-full cursor-pointer`}
          onClick={() => setActiveTab("overview")}
        >
          <HiOutlineViewGrid className="mr-3" />
          Overview
        </li>

        <li
          className={`mb-2 flex items-center ${activeTab === "viewReport" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 cursor-pointer`}
          onClick={generateReport}
        >
          <BsChevronRight className="mr-1" />
          View Report
        </li>

        <li
          className={`mb-2 flex items-center ${activeTab === "sendRequest" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 cursor-pointer`}
          onClick={() => setActiveTab("sendRequest")}
        >
          <BsChevronRight className="mr-1" />
          Send Request
        </li>

        {/* Add View Notifications Tab */}
        <li
          className={`mb-2 flex items-center ${activeTab === "viewNotifications" ? "bg-red-100 text-red-500" : "text-gray-700"} p-2 cursor-pointer`}
          onClick={viewNotifications}
        >
          <BsChevronRight className="mr-1" />
          View Notifications
        </li>
      </ul>

      {/* Pages Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3"></div>
      
    </div>
  );
};

export default HospitalProfile;

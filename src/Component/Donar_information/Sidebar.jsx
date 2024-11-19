// Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaCog, FaHistory, FaEnvelope } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white p-4 pt-24 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <span className="font-semibold text-lg">Kumneger</span>
      </div>

      {/* Dashboards Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">Dashboards</div>
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full cursor-pointer">
          <Link to="/manage-account">
            <HiOutlineViewGrid className="mr-3" /> Manage Account
          </Link>
        </li>
        
        <li className="mb-2 flex items-center text-gray-700 p-2 cursor-pointer">
          <Link to="/donation-history">
            <FaHistory className="mr-3" /> Donation History
          </Link>
        </li>
        
        <li className="mb-2 flex items-center text-gray-700 p-2 cursor-pointer">
          <Link to="/schedule">
            <FaCog className="mr-2" /> Schedule
          </Link>
        </li>
        
        <li className="mb-2 flex items-center text-gray-700 p-2 cursor-pointer">
          <Link to="/notification">
            <FaEnvelope className="mr-3" /> Notification
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

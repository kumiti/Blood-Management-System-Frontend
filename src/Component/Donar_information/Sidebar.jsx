// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsChevronRight } from "react-icons/bs";

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

      {/* Favorites and Recently */}

      {/* Manage Account Section */}

      {/* Dashboards Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Dashboards
      </div>
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
          <HiOutlineViewGrid className="mr-3" /> Overview
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaCog className="mr-3" /> Manage Account
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaHistory className="mr-3" /> Donation History
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaEnvelope className="mr-3" />{" "}
          Contact
        </li>
      </ul>

      {/* Pages Section */}

      <ul>
        {/* First Page Link (Expanded) */}
        <li className="mb-2">
          
          {/* Sub-links */}
         
        </li>

        {/* Other Page Links (Collapsed) */}

        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaCog className="mr-2" /> Schedule
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <FaCog className="mr-2" /> Notification
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;

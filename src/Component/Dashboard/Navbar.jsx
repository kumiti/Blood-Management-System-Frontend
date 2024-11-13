// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaSearch, FaFilter, FaHistory, FaBell } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow p-4 fixed z-10 w-full pr-72">
      {/* Left: Dashboard Text */}
      <div className="flex items-center space-x-2">
        <MdDashboard size={20} />
        <FaRegStar size={20} />
        <span>
          <span className="text-[#999]">Dashboards</span> / Default
        </span>
      </div>

      {/* Right: Search bar, history, and bell icon */}
      <div className="flex items-center ml-auto space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-10 py-1 border border-gray-300 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-2 top-2 text-gray-500" />
          <FaFilter className="absolute right-2 top-2 text-gray-500" />
        </div>
        <FaHistory size={20} />
        <FaBell size={20} />
      </div>
    </nav>
  );
};

export default Navbar;

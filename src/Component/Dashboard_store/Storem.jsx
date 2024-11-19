// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import {  BsChevronRight } from "react-icons/bs";

const Storem = () => {
  return (
    <div className="w-64 h-screen bg-white p-2 pt-4 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center ">
      <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10 mr-3"
        />
        <span className="font-semibold text-xl ">Store manager</span>
      </div>

     

      {/* Dashboards Section */}
      <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
        Dashboards
      </div>
      <ul className="mb-8">
        <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
          <HiOutlineViewGrid className="mr-3" /> Overview
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />view report
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
          <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
          view order
        </li>
        <li className="mb-2 flex items-center text-gray-700 p-2">
        <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />{" "}
        send request
        </li>
        
      
      </ul>

      
     
      <ul>
        {/* First Page Link (Expanded) */}
        <li className="mb-2">
          <div className="flex items-center text-gray-700 p-2">
            <BsChevronRight className="mr-2" />{" "}
            <FaEnvelope className="mr-2 text-xl" /> View  notification
          </div>
          {/* Sub-links */}
         
        </li>
       


      </ul>
    </div>
  );
};

export default Storem;

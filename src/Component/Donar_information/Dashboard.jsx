// eslint-disable-next-line no-unused-vars
import React from "react";


import { BsChevronDown } from "react-icons/bs";
import Sidebar from './Sidebar';
import Navbar from "../Dashboard/Navbar";

const DonerInformation = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        {/* Navbar */}
        <Navbar/>

        {/* Page Content */}
        <div className="p-6 mt-16">
          {/* Overview and Today Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="flex items-center text-lg">
              <span>Today</span>
              <BsChevronDown className="ml-2" />
            </div>
          </div>

          {/* Donor Information Title */}
          <h3 className="text-xl font-semibold text-red-500 mb-6 ml-10">
            Donor Information
          </h3>

          {/* Donor Information Fields */}
          <div className="space-y-4 ml-8">
            {[
              "First Name",
              "Middle Name",
              "Sur Name",
              "Occupation",
              "City",
              "Subcity/Region",
              "Zone",
              "Woreda",
              "Kebele",
              "Telephone",
              "E-mail",
              "Medical History",
            ].map((field, index) => (
              <div key={index} className="flex items-center">
                <span className="w-[100px] mr-10">{field}</span>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded ml-4">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonerInformation;

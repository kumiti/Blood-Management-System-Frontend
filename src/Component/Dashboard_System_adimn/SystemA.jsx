// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { HiOutlineViewGrid } from "react-icons/hi";

const SystemA = ({ setSelectedAccountType }) => {
  // State to track active link and toggle for collapsible menu
  const [activeLink, setActiveLink] = React.useState(null);
  const [isManageAccountOpen, setIsManageAccountOpen] = React.useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleManageAccount = () => {
    setIsManageAccountOpen(!isManageAccountOpen);
  };

  return (
    <div className="w-64 h-screen bg-white p-4 pt-8 fixed overflow-y-auto">
      {/* Profile Section */}
      <div className="flex items-center">
        <span className="font-semibold text-2xl text-red-600">System Admin</span>
      </div>
      <ul className="mb-8 pt-4">
        {/* Overview Section */}
        <li
          className={`mb-2 flex items-center p-2 rounded-full ${activeLink === "overview" ? "bg-red-100 text-red-500" : "text-gray-700"}`}
          onClick={() => handleLinkClick("overview")}
        >
          <HiOutlineViewGrid className="mr-1" /> Overview
        </li>
      </ul>

      {/* Pages Section */}
      <ul>
        {/* Manage Account (Expandable) */}
        <li className="mb-2">
          <div
            className={`flex items-center text-gray-700 p-2 cursor-pointer ${activeLink === "manage_account" ? "bg-red-100 text-red-500" : ""}`}
            onClick={() => {
              handleLinkClick("manage_account");
              toggleManageAccount();
            }}
          >
            <HiOutlineViewGrid className="mr-2" /> Manage account
            <BsChevronDown className={`ml-auto ${isManageAccountOpen ? "rotate-180" : ""}`} />
          </div>
          {/* Sub-links for Manage account */}
          {isManageAccountOpen && (
            <ul className="pl-6">
              <li
                className={`text-gray-700 p-2 ${activeLink === "donor" ? "bg-red-100 text-red-500" : ""}`}
                onClick={() => {
                  setSelectedAccountType("donor");
                  handleLinkClick("donor");
                }}
              >
                Donor Accounts
              </li>
              <li
                className={`text-gray-700 p-2 ${activeLink === "staff" ? "bg-red-100 text-red-500" : ""}`}
                onClick={() => {
                  setSelectedAccountType("staff");
                  handleLinkClick("staff");
                }}
              >
                Staff Accounts
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SystemA;

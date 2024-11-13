// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import SystemA from "./SystemA"; // Sidebar component
import Navbar from "../Dashboard/Navbar"; // Navbar component

const MixsyNav = () => {
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  // Staff List State (including email)
  const [staffList, setStaffList] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Manager",
      username: "johndoe",
      password: "password123",
      email: "johndoe@example.com",
      active: true,
    },
  ]);

  // Donor List State (including email)
  const [donorList, setDonorList] = useState([
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      password: "password456",
      email: "janesmith@example.com",
      active: false,
    },
  ]);

  // Create New Staff / Donor form toggle
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showCreateDonorForm, setShowCreateDonorForm] = useState(false);

  // New Staff and Donor Form State
  const [newStaff, setNewStaff] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    email: "",
    role: "Laboratorist", // Default role
  });

  const [newDonor, setNewDonor] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  // Staff Role Options
  const [staffRoleOptions] = useState([
    "Laboratorist",
    "Store Manager",
    "Collector",
    "Manager",
  ]);

  const toggleStaffActiveStatus = (id) => {
    setStaffList((prevList) =>
      prevList.map((staff) =>
        staff.id === id ? { ...staff, active: !staff.active } : staff
      )
    );
  };

  const toggleDonorActiveStatus = (id) => {
    setDonorList((prevList) =>
      prevList.map((donor) =>
        donor.id === id ? { ...donor, active: !donor.active } : donor
      )
    );
  };

  // Handle input changes for staff
  const handleInputChangeStaff = (e) => {
    const { name, value } = e.target;
    setNewStaff((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle input changes for donor
  const handleInputChangeDonor = (e) => {
    const { name, value } = e.target;
    setNewDonor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Staff Form Submission
  const handleFormSubmitStaff = (e) => {
    e.preventDefault();
    const newStaffMember = {
      id: staffList.length + 1, // simple way to assign a new ID
      name: `${newStaff.firstName} ${newStaff.middleName} ${newStaff.lastName}`,
      role: newStaff.role,
      username: `${newStaff.firstName.toLowerCase()}${newStaff.lastName.toLowerCase()}`,
      password: "defaultpassword",
      email: newStaff.email,
      active: true,
    };
    setStaffList([...staffList, newStaffMember]);
    setShowCreateForm(false); // Hide form after submission
  };

  // Handle Donor Form Submission
  const handleFormSubmitDonor = (e) => {
    e.preventDefault();
    const newDonorAccount = {
      id: donorList.length + 1,
      name: newDonor.name,
      username: newDonor.username,
      password: newDonor.password,
      email: newDonor.email,
      active: true,
    };
    setDonorList([...donorList, newDonorAccount]);
    setShowCreateDonorForm(false); // Hide form after submission
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <SystemA setSelectedAccountType={setSelectedAccountType} />

      {/* Main Content */}
      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 mt-16">
          {/* Overview and Today Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
          </div>

          {/* Staff Accounts */}
          {selectedAccountType === "staff" && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Staff Accounts</h3>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2 px-4">Name</th>
                    <th className="border-b py-2 px-4">Role</th>
                    <th className="border-b py-2 px-4">Username</th>
                    <th className="border-b py-2 px-4">Password</th>
                    <th className="border-b py-2 px-4">Email</th>
                    <th className="border-b py-2 px-4">Status</th>
                    <th className="border-b py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staffList.map((staff) => (
                    <tr key={staff.id}>
                      <td className="border-b py-2 px-4">{staff.name}</td>
                      <td className="border-b py-2 px-4">{staff.role}</td>
                      <td className="border-b py-2 px-4">{staff.username}</td>
                      <td className="border-b py-2 px-4">{staff.password}</td>
                      <td className="border-b py-2 px-4">{staff.email}</td>
                      <td className="border-b py-2 px-4">
                        {staff.active ? "Active" : "Inactive"}
                      </td>
                      <td className="border-b py-2 px-4">
                        <button
                          onClick={() => toggleStaffActiveStatus(staff.id)}
                          className="bg-blue-500 text-white py-1 px-4 rounded"
                        >
                          {staff.active ? "Deactivate" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Create Account Button for Staff only */}
              {selectedAccountType === "staff" && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="mt-4 bg-green-500 text-white py-2 px-6 rounded"
                >
                  Create Staff Account
                </button>
              )}

              {/* Create Staff Form */}
              {showCreateForm && (
                <div className="mt-8 p-6 border border-gray-300 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">
                    Create New Staff
                  </h4>
                  <form onSubmit={handleFormSubmitStaff}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={newStaff.firstName}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        name="middleName"
                        value={newStaff.middleName}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={newStaff.lastName}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={newStaff.gender}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={newStaff.email}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={newStaff.role}
                        onChange={handleInputChangeStaff}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                      >
                        {staffRoleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-6 rounded"
                      >
                        Create Staff
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* Donor Accounts */}
          {selectedAccountType === "donor" && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Donor Accounts</h3>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2 px-4">Name</th>
                    <th className="border-b py-2 px-4">Username</th>
                    <th className="border-b py-2 px-4">Password</th>
                    <th className="border-b py-2 px-4">Email</th>
                    <th className="border-b py-2 px-4">Status</th>
                    <th className="border-b py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {donorList.map((donor) => (
                    <tr key={donor.id}>
                      <td className="border-b py-2 px-4">{donor.name}</td>
                      <td className="border-b py-2 px-4">{donor.username}</td>
                      <td className="border-b py-2 px-4">{donor.password}</td>
                      <td className="border-b py-2 px-4">{donor.email}</td>
                      <td className="border-b py-2 px-4">
                        {donor.active ? "Active" : "Inactive"}
                      </td>
                      <td className="border-b py-2 px-4">
                        <button
                          onClick={() => toggleDonorActiveStatus(donor.id)}
                          className="bg-blue-500 text-white py-1 px-4 rounded"
                        >
                          {donor.active ? "Deactivate" : "Activate"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MixsyNav;

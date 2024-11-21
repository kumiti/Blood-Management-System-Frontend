import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '../Dashboard/Navbar';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const inventory = [
  { bloodType: 'A+', stockLevel: 50 },
  { bloodType: 'O-', stockLevel: 30 },
  { bloodType: 'B+', stockLevel: 40 },
  { bloodType: 'AB-', stockLevel: 20 },
  { bloodType: 'A-', stockLevel: 60 },
  { bloodType: 'B-', stockLevel: 25 },
  { bloodType: 'O+', stockLevel: 70 },
  { bloodType: 'AB+', stockLevel: 10 },
];

const bloodTypes = inventory.map(item => item.bloodType);
const stockLevels = inventory.map(item => item.stockLevel);

const lineChartData = {
  labels: bloodTypes,
  datasets: [
    {
      label: 'Stock Levels',
      data: stockLevels,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
};

const pieChartData = {
  labels: bloodTypes,
  datasets: [
    {
      data: stockLevels,
      backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff7f7f', '#b3b3ff', '#ffb366', '#ff9966'],
      hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff7f7f', '#b3b3ff', '#ffb366', '#ff9966']
    }
  ]
};

const Manager = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [denialReason, setDenialReason] = useState('');
  const [denialRequestId, setDenialRequestId] = useState(null);
  const [denialHospitalId, setDenialHospitalId] = useState(null);
  const [hospitalRegistrations, setHospitalRegistrations] = useState([
    { id: 1, name: 'City Hospital', location: 'Downtown', status: 'Approved' },
    { id: 2, name: 'General Hospital', location: 'Uptown', status: 'Pending' }
  ]);

  const [bloodRequests, setBloodRequests] = useState([
    { id: 1, hospitalName: 'City Hospital', bloodType: 'A+', unitsRequested: 10, status: 'Pending', reason: '' },
    { id: 2, hospitalName: 'General Hospital', bloodType: 'O-', unitsRequested: 5, status: 'Pending', reason: '' }
  ]);
    
  const staffList = [
    { id: 1, name: 'John Doe', title: 'collector' },
    { id: 2, name: 'Jane Smith', title: 'collector' },
    { id: 3, name: 'Emily Johnson', title: 'storemanager'},
    { id: 4, name: 'Michael Brown', title: 'collector'},
    { id: 5, name: 'Sarah Davis', title: 'collector'},
  ];

  const handleApproveRegistration = (id) => {
    setHospitalRegistrations((prev) =>
      prev.map((hospital) =>
        hospital.id === id ? { ...hospital, status: 'Approved' } : hospital
      )
    );
  };

  const handleApproveBloodRequest = (id) => {
    setBloodRequests((prev) =>
      prev.map((request) =>
        request.id === id ? { ...request, status: 'Approved' } : request
      )
    );
  };

  const handleDenyBloodRequest = (id) => {
    setDenialRequestId(id);
  };

  const handleDenyHospitalRegistration = (id) => {
    setDenialHospitalId(id);
  };

  const handleDenialSubmit = (e) => {
    e.preventDefault();
    if (denialRequestId !== null) {
      setBloodRequests((prev) =>
        prev.map((request) =>
          request.id === denialRequestId ? { ...request, status: 'Denied', reason: denialReason } : request
        )
      );
    }

    if (denialHospitalId !== null) {
      setHospitalRegistrations((prev) =>
        prev.map((hospital) =>
          hospital.id === denialHospitalId ? { ...hospital, status: 'Denied' } : hospital
        )
      );
    }

    setDenialRequestId(null);
    setDenialHospitalId(null);
    setDenialReason('');
  };

  const handleSectionChange = (section) => setActiveSection(section);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white p-4 fixed overflow-y-auto">
        <div className="flex items-center mb-6">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 mr-3"
          />
          <span className="font-semibold text-xl">Manager</span>
        </div>
        <ul className="mb-8">
          <li
            className={`mb-2 flex items-center p-2 rounded-full ${activeSection === 'dashboard' ? 'bg-blue-100 text-blue-500' : 'text-gray-700'}`}
            onClick={() => handleSectionChange('dashboard')}
          >
            <HiOutlineViewGrid className="mr-3" /> Overview
          </li>
          <li
            className={`mb-2 flex items-center p-2 rounded-full ${activeSection === 'tasks' ? 'bg-blue-100 text-blue-500' : 'text-gray-700'}`}
            onClick={() => handleSectionChange('tasks')}
          >
            <FaClipboardList className="mr-3" /> Tasks
          </li>
          <li>
            <button
              onClick={() => handleSectionChange('approved-hospitals')}
              className="mb-2 flex items-center p-2 rounded-full text-gray-700"
            >
              View Approved Hospitals
            </button>
          </li>
          {/* New Button Added Below */}
          <li>
            <button
              onClick={() => handleSectionChange('pending-hospitals')}
              className="mb-2 flex items-center p-2 rounded-full text-gray-700"
            >
              List of Staff
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 min-h-screen pl-64">
        <Navbar />
        <div className="p-6 mt-16">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {activeSection === 'dashboard' && (
                    <div>
                      <h2 className="text-2xl font-semibold">Overview</h2>

                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Blood Stock Levels (Line Chart)</h3>
                        <div className="h-64">
                          <Line data={lineChartData} />
                        </div>
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Blood Type Distribution (Pie Chart)</h3>
                        <div className="h-64">
                          <Pie data={pieChartData} />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'tasks' && (
                    <div>
                      <h2 className="text-2xl font-semibold">Tasks</h2>

                      {/* Hospital Registration Approvals */}
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold">Approve or Deny Hospital Registrations</h3>
                        <ul className="mt-4">
                          {hospitalRegistrations
                            .filter((hospital) => hospital.status === 'Pending') // Only show pending hospitals
                            .map((hospital) => (
                              <li
                                key={hospital.id}
                                className={`p-4 border rounded-lg mb-2 ${hospital.status === 'Approved' ? 'bg-green-100' : hospital.status === 'Denied' ? 'bg-red-100' : 'bg-red-50'}`}
                              >
                                <div>
                                  <strong>Name:</strong> {hospital.name}
                                </div>
                                <div>
                                  <strong>Location:</strong> {hospital.location}
                                </div>
                                <div>
                                  <strong>Status:</strong> {hospital.status}
                                </div>
                                {hospital.status === 'Pending' && (
                                  <div className="mt-4 mb-1flex gap-4">
                                    <button
                                      onClick={() => handleApproveRegistration(hospital.id)}
                                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 rounded-lg"
                                    >
                                      Approve
                                    </button>
                                    <button
                                      onClick={() => handleDenyHospitalRegistration(hospital.id)}
                                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 ml-10 rounded-lg"
                                    >
                                      Deny
                                    </button>

                                    {denialHospitalId === hospital.id && (
                                      <div>
                                        <textarea
                                          className="w-full mt-4 p-2 border rounded-lg"
                                          placeholder="Enter reason for denial"
                                          value={denialReason}
                                          onChange={(e) => setDenialReason(e.target.value)}
                                        />
                                        <button
                                          onClick={handleDenialSubmit}
                                          className="text-white bg-red-400 px-4 hover:bg-red-500  py-2 rounded-lg mt-2"
                                        >
                                          Submit Denial
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Blood Requests */}
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold">Approve or Deny Blood Requests</h3>
                        <ul className="mt-4">
                          {bloodRequests
                            .filter((request) => request.status === 'Pending')
                            .map((request) => (
                              <li
                                key={request.id}
                                className={`p-4 border rounded-lg mb-10 ${request.status === 'Approved' ? 'bg-green-100' : request.status === 'Denied' ? 'bg-red-100' : 'bg-red-50'}`}
                              >
                                <div>
                                  <strong>Hospital:</strong> {request.hospitalName}
                                </div>
                                <div>
                                  <strong>Blood Type:</strong> {request.bloodType}
                                </div>
                                <div>
                                  <strong>Units Requested:</strong> {request.unitsRequested}
                                </div>
                                <div>
                                  <strong>Status:</strong> {request.status}
                                </div>
                                {request.status === 'Pending' && (
                                  <div className="mt-4 flex gap-4">
                                    <button
                                      onClick={() => handleApproveBloodRequest(request.id)}
                                      className="text-white bg-red-400 px-4 hover:bg-red-500  py-2 mt-14 rounded-lg"
                                    >
                                      Approve
                                    </button>
                                    <button
                                      onClick={() => handleDenyBloodRequest(request.id)}
                                      className="text-white bg-red-400 px-4 hover:bg-red-500 py-2 mt-14 ml-10  rounded-lg"
                                    >
                                      Deny
                                    </button>

                                    {denialRequestId === request.id && (
                                      <div>
                                        <textarea
                                          className="w-full mt-4 p-2 border rounded-lg"
                                          placeholder="Enter reason for denial"
                                          value={denialReason}
                                          onChange={(e) => setDenialReason(e.target.value)}
                                        />
                                        <button
                                          onClick={handleDenialSubmit}
                                          className="text-white bg-red-400 px-4 hover:bg-red-500  py-2 rounded-lg mt-2"
                                        >
                                          Submit Denial
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Approved Hospitals Section */}
                  {activeSection === 'approved-hospitals' && (
                    <div>
                      <h2 className="text-2xl font-semibold">Approved Hospitals</h2>
                      <table className="mt-8 w-full table-auto border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Location</th>
                            <th className="border px-4 py-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hospitalRegistrations
                            .filter((hospital) => hospital.status === 'Approved')
                            .map((hospital) => (
                              <tr key={hospital.id}>
                                <td className="border px-4 py-2">{hospital.name}</td>
                                <td className="border px-4 py-2">{hospital.location}</td>
                                <td className="border px-4 py-2">{hospital.status}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                    {activeSection === 'pending-hospitals' && (
  <div>
    <h2 className="text-2xl font-semibold">Staff</h2>
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{staff.name}</td>
                <td className="border border-gray-300 px-4 py-2">{staff.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

                  </div>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Manager;

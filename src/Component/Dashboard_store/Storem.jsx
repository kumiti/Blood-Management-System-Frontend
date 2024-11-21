// // // // eslint-disable-next-line no-unused-vars
// // // import React from "react";
// // // import { FaCog, FaHistory, FaEnvelope, FaChevronRight } from "react-icons/fa";
// // // import { HiOutlineViewGrid } from "react-icons/hi";
// // // import {  BsChevronRight } from "react-icons/bs";

// // // const Storem = () => {
// // //   return (
// // //     <div className="w-64 h-screen bg-white p-2 pt-4 fixed overflow-y-auto">
// // //       {/* Profile Section */}
// // //       <div className="flex items-center ">
// // //       <img
// // //           src="https://via.placeholder.com/40"
// // //           alt="Profile"
// // //           className="rounded-full w-10 h-10 mr-3"
// // //         />
// // //         <span className="font-semibold text-xl ">Store manager</span>
// // //       </div>

     

// // //       {/* Dashboards Section */}
// // //       <div className="text-gray-500 uppercase text-xs font-semibold mb-3">
// // //         Dashboards
// // //       </div>
// // //       <ul className="mb-8">
// // //         <li className="mb-2 flex items-center bg-red-100 text-red-500 p-2 rounded-full">
// // //           <HiOutlineViewGrid className="mr-3" /> Overview
// // //         </li>
// // //         <li className="mb-2 flex items-center text-gray-700 p-2">
// // //           <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />view report
// // //         </li>
// // //         <li className="mb-2 flex items-center text-gray-700 p-2">
// // //           <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" />{" "}
// // //           view order
// // //         </li>
// // //         <li className="mb-2 flex items-center text-gray-700 p-2">
// // //         <BsChevronRight className="mr-1" /> <FaCog className="mr-3" />{" "}
// // //         send request
// // //         </li>
        
      
// // //       </ul>

      
     
// // //       <ul>
// // //         {/* First Page Link (Expanded) */}
// // //         <li className="mb-2">
// // //           <div className="flex items-center text-gray-700 p-2">
// // //             <BsChevronRight className="mr-2" />{" "}
// // //             <FaEnvelope className="mr-2 text-xl" /> View  notification
// // //           </div>
// // //           {/* Sub-links */}
         
// // //         </li>
       


// // //       </ul>
// // //     </div>
// // //   );
// // // };

// // export default Storem;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Navbar from '../Dashboard/Navbar';
// import { HiOutlineViewGrid } from 'react-icons/hi';
// import { FaClipboardList } from 'react-icons/fa';
// import { Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const inventory = [
//   { bloodType: 'A+', stockLevel: 50 },
//   { bloodType: 'O-', stockLevel: 30 },
//   { bloodType: 'B+', stockLevel: 40 },
//   { bloodType: 'AB-', stockLevel: 20 }
// ];

// const bloodTypes = inventory.map(item => item.bloodType);
// const stockLevels = inventory.map(item => item.stockLevel);

// const lineChartData = {
//   labels: bloodTypes,
//   datasets: [
//     {
//       label: 'Stock Levels',
//       data: stockLevels,
//       fill: false,
//       borderColor: 'rgb(75, 192, 192)',
//       tension: 0.1
//     }
//   ]
// };

// const pieChartData = {
//   labels: bloodTypes,
//   datasets: [
//     {
//       data: stockLevels,
//       backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
//       hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56']
//     }
//   ]
// };

// // Main Manager Component
// const Manager = () => {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [denialReason, setDenialReason] = useState('');
//   const [denialRequestId, setDenialRequestId] = useState(null);
//   const [denialHospitalId, setDenialHospitalId] = useState(null);
//   const [hospitalRegistrations, setHospitalRegistrations] = useState([
//     { id: 1, name: 'City Hospital', location: 'Downtown', status: 'Pending' },
//     { id: 2, name: 'General Hospital', location: 'Uptown', status: 'Pending' }
//   ]);

//   const [bloodRequests, setBloodRequests] = useState([
//     { id: 1, hospitalName: 'City Hospital', bloodType: 'A+', unitsRequested: 10, status: 'Pending', reason: '' },
//     { id: 2, hospitalName: 'General Hospital', bloodType: 'O-', unitsRequested: 5, status: 'Pending', reason: '' }
//   ]);

//   const handleApproveRegistration = (id) => {
//     setHospitalRegistrations((prev) =>
//       prev.map((hospital) =>
//         hospital.id === id ? { ...hospital, status: 'Approved' } : hospital
//       )
//     );
//   };

//   const handleApproveBloodRequest = (id) => {
//     setBloodRequests((prev) =>
//       prev.map((request) =>
//         request.id === id ? { ...request, status: 'Approved' } : request
//       )
//     );
//   };

//   const handleDenyBloodRequest = (id) => {
//     setDenialRequestId(id);
//   };

//   const handleDenyHospitalRegistration = (id) => {
//     setDenialHospitalId(id);
//   };

//   const handleDenialSubmit = (e) => {
//     e.preventDefault();
//     if (denialRequestId !== null) {
//       setBloodRequests((prev) =>
//         prev.map((request) =>
//           request.id === denialRequestId ? { ...request, status: 'Denied', reason: denialReason } : request
//         )
//       );
//     }

//     if (denialHospitalId !== null) {
//       setHospitalRegistrations((prev) =>
//         prev.map((hospital) =>
//           hospital.id === denialHospitalId ? { ...hospital, status: 'Denied' } : hospital
//         )
//       );
//     }

//     setDenialRequestId(null);
//     setDenialHospitalId(null);
//     setDenialReason('');
//   };

//   const handleSectionChange = (section) => setActiveSection(section);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-64 h-screen bg-white p-4 fixed overflow-y-auto">
//         <div className="flex items-center mb-6">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="Profile"
//             className="rounded-full w-10 h-10 mr-3"
//           />
//           <span className="font-semibold text-xl">Manager</span>
//         </div>
//         <ul className="mb-8">
//           <li
//             className={`mb-2 flex items-center p-2 rounded-full ${activeSection === 'dashboard' ? 'bg-blue-100 text-blue-500' : 'text-gray-700'}`}
//             onClick={() => handleSectionChange('dashboard')}
//           >
//             <HiOutlineViewGrid className="mr-3" /> Overview
//           </li>
//           <li
//             className={`mb-2 flex items-center p-2 rounded-full ${activeSection === 'tasks' ? 'bg-blue-100 text-blue-500' : 'text-gray-700'}`}
//             onClick={() => handleSectionChange('tasks')}
//           >
//             <FaClipboardList className="mr-3" /> Tasks
//           </li>
//           <li>
//             {/* Link to the approved hospitals page */}
//             <Link
//               to="/approved-hospitals"
//               className={`mb-2 flex items-center p-2 rounded-full text-gray-700`}
//             >
//               View Approved Hospitals
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50 min-h-screen pl-64">
//         <Navbar />
//         <div className="p-6 mt-16">
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <div>
//                   {activeSection === 'dashboard' && (
//                     <div>
//                       <h2 className="text-2xl font-semibold">Overview</h2>

//                       <div className="mt-8">
//                         {/* Line Chart for Blood Stock Levels */}
//                         <h3 className="text-xl font-semibold mb-4">Blood Stock Levels (Line Chart)</h3>
//                         <div className="h-64">
//                           <Line data={lineChartData} />
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         {/* Pie Chart for Blood Type Distribution */}
//                         <h3 className="text-xl font-semibold mb-4">Blood Type Distribution (Pie Chart)</h3>
//                         <div className="h-64">
//                           <Pie data={pieChartData} />
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   {activeSection === 'tasks' && (
//                     <div>
//                       <h2 className="text-2xl font-semibold">Tasks</h2>

//                       {/* Hospital Registrations */}
//                       <div className="mt-8">
//                         <h3 className="text-xl font-semibold">Approve or Deny Hospital Registrations</h3>
//                         <ul className="mt-4">
//                           {hospitalRegistrations.map((hospital) => (
//                             <li
//                               key={hospital.id}
//                               className={`p-4 border rounded-lg mb-2 ${
//                                 hospital.status === 'Approved'
//                                   ? 'bg-green-100'
//                                   : hospital.status === 'Denied'
//                                   ? 'bg-red-100'
//                                   : 'bg-yellow-100'
//                               }`}
//                             >
//                               <div>
//                                 <strong>Name:</strong> {hospital.name}
//                               </div>
//                               <div>
//                                 <strong>Location:</strong> {hospital.location}
//                               </div>
//                               <div>
//                                 <strong>Status:</strong> {hospital.status}
//                               </div>
//                               {hospital.status === 'Pending' && (
//                                 <div className="mt-4 flex gap-4">
//                                   <button
//                                     onClick={() => handleApproveRegistration(hospital.id)}
//                                     className="text-white bg-blue-500 px-4 py-2 rounded-lg"
//                                   >
//                                     Approve
//                                   </button>
//                                   <button
//                                     onClick={() => handleDenyHospitalRegistration(hospital.id)}
//                                     className="text-white bg-red-500 px-4 py-2 rounded-lg"
//                                   >
//                                     Deny
//                                   </button>

//                                   {/* Denial Reason Form for Hospital */}
//                                   {denialHospitalId === hospital.id && (
//                                     <form
//                                       className="ml-4 p-4 border rounded-lg bg-white shadow"
//                                       onSubmit={handleDenialSubmit}
//                                     >
//                                       <textarea
//                                         className="w-full p-2 border rounded-lg"
//                                         rows="3"
//                                         value={denialReason}
//                                         onChange={(e) => setDenialReason(e.target.value)}
//                                         placeholder="Write your reason for denying this registration..."
//                                         required
//                                       />
//                                       <button
//                                         type="submit"
//                                         className="mt-4 text-white bg-red-500 px-4 py-2 rounded-lg"
//                                       >
//                                         Submit Denial
//                                       </button>
//                                     </form>
//                                   )}
//                                 </div>
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               }
//             />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ApprovedHospitals Component
// const ApprovedHospitals = () => {
//   const [hospitalRegistrations, setHospitalRegistrations] = useState([
//     { id: 1, name: 'City Hospital', location: 'Downtown', status: 'Approved' },
//     { id: 2, name: 'General Hospital', location: 'Uptown', status: 'Approved' }
//   ]);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold">Approved Hospitals</h2>
//       <table className="mt-8 w-full table-auto border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Location</th>
//             <th className="border px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {hospitalRegistrations
//             .filter((hospital) => hospital.status === 'Approved')
//             .map((hospital) => (
//               <tr key={hospital.id}>
//                 <td className="border px-4 py-2">{hospital.name}</td>
//                 <td className="border px-4 py-2">{hospital.location}</td>
//                 <td className="border px-4 py-2">{hospital.status}</td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // App Component with Router
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Manager />} />
//         <Route path="/approved-hospitals" element={<ApprovedHosp

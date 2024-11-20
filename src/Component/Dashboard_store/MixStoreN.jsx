import React, { useState } from 'react';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { FaCog, FaHistory, FaEnvelope } from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { Line, Pie } from 'react-chartjs-2'; // Import Line and Pie charts
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Navbar from '../Dashboard/Navbar';

// Register Chart.js components
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

const MixStoreN = () => {
  const [activeSection, setActiveSection] = useState('overview'); // Track active section
  const [inventory, setInventory] = useState([
    { bloodType: 'A+', stockLevel: 30, expirationDate: '2024-12-15', barcode: '12345' },
    { bloodType: 'B+', stockLevel: 45, expirationDate: '2024-12-18', barcode: '12346' },
    { bloodType: 'AB+', stockLevel: 20, expirationDate: '2024-12-10', barcode: '12347' },
    { bloodType: 'O+', stockLevel: 50, expirationDate: '2024-12-20', barcode: '12348' },
    { bloodType: 'A-', stockLevel: 25, expirationDate: '2024-12-22', barcode: '12349' },
    { bloodType: 'B-', stockLevel: 15, expirationDate: '2024-12-25', barcode: '12350' },
    { bloodType: 'AB-', stockLevel: 10, expirationDate: '2024-12-30', barcode: '12351' },
    { bloodType: 'O-', stockLevel: 60, expirationDate: '2024-12-05', barcode: '12352' },
  ]);

  const [reports, setReports] = useState([
    { donorName: 'John Doe', collectionDate: '2024-11-15', barcode: '12345', bloodType: 'A+' },
    { donorName: 'Jane Smith', collectionDate: '2024-11-16', barcode: '12346', bloodType: 'B+' },
    { donorName: 'Mark Lee', collectionDate: '2024-11-17', barcode: '12347', bloodType: 'AB+' },
    { donorName: 'Emily White', collectionDate: '2024-11-18', barcode: '12348', bloodType: 'O+' },
    { donorName: 'Chris Brown', collectionDate: '2024-11-19', barcode: '12349', bloodType: 'A-' },
    { donorName: 'Nina Green', collectionDate: '2024-11-20', barcode: '12350', bloodType: 'B-' },
    { donorName: 'Samuel Black', collectionDate: '2024-11-21', barcode: '12351', bloodType: 'AB-' },
    { donorName: 'Lisa Yellow', collectionDate: '2024-11-22', barcode: '12352', bloodType: 'O-' },
  ]);

  const [orders, setOrders] = useState([
    { hospitalName: 'City Hospital', bloodType: 'A+', unitsRequested: 10, orderDate: '2024-11-18' },
    { hospitalName: 'General Hospital', bloodType: 'B+', unitsRequested: 5, orderDate: '2024-11-19' },
    { hospitalName: 'County Hospital', bloodType: 'O-', unitsRequested: 20, orderDate: '2024-11-20' },
    { hospitalName: 'St. Mary\'s Hospital', bloodType: 'AB+', unitsRequested: 15, orderDate: '2024-11-21' },
    { hospitalName: 'Children\'s Hospital', bloodType: 'A-', unitsRequested: 8, orderDate: '2024-11-22' },
  ]);

  const handleSectionChange = (section) => setActiveSection(section);

  const handleIncrease = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory[index].stockLevel += 1;
    setInventory(updatedInventory);
  };

  const handleDecrease = (index) => {
    const updatedInventory = [...inventory];
    if (updatedInventory[index].stockLevel > 0) {
      updatedInventory[index].stockLevel -= 1;
    }
    setInventory(updatedInventory);
  };

  // Prepare data for the Line chart and Pie chart
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
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff9f40', '#4bc0c0', '#f44336', '#9c27b0'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff9f40', '#4bc0c0', '#f44336', '#9c27b0']
      }
    ]
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white p-2 pt-4 fixed overflow-y-auto">
        {/* Profile Section */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 mr-3"
          />
          <span className="font-semibold text-xl">Store Manager</span>
        </div>

        {/* Dashboards Section */}
        <div className="text-gray-500 uppercase text-xs font-semibold mb-3">Dashboards</div>
        <ul className="mb-8">
          <li
            className={`mb-2 flex items-center p-2 rounded-full ${
              activeSection === 'overview' ? 'bg-red-100 text-red-500' : 'text-gray-700'
            }`}
            onClick={() => handleSectionChange('overview')}
          >
            <HiOutlineViewGrid className="mr-3" /> Overview
          </li>
          <li
            className={`mb-2 flex items-center p-2 ${
              activeSection === 'report' ? 'bg-red-100 text-red-500' : 'text-gray-700'
            }`}
            onClick={() => handleSectionChange('report')}
          >
            <BsChevronRight className="mr-1" /> <FaCog className="mr-3" /> View Report
          </li>
          <li
            className={`mb-2 flex items-center p-2 ${
              activeSection === 'viewOrders' ? 'bg-red-100 text-red-500' : 'text-gray-700'
            }`}
            onClick={() => handleSectionChange('viewOrders')}
          >
            <BsChevronRight className="mr-1" /> <FaHistory className="mr-3" /> View Orders
          </li>
          <li
            className={`mb-2 flex items-center p-2 ${
              activeSection === 'checkInventory' ? 'bg-red-100 text-red-500' : 'text-gray-700'
            }`}
            onClick={() => handleSectionChange('checkInventory')}
          >
            <BsChevronRight className="mr-1" /> <FaEnvelope className="mr-3" /> Check Inventory
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        <Navbar />
        <div className="p-6 mt-16">
          {activeSection === 'overview' && (
            <div>
              <h2 className="text-2xl font-semibold">Overview</h2>

              <div className="mt-8">
                {/* Line Chart for Blood Stock Levels */}
                <h3 className="text-xl font-semibold mb-4">Blood Stock Levels (Line Chart)</h3>
                <div className="h-64">
                  <Line data={lineChartData} />
                </div>
              </div>

              <div className="mt-8">
                {/* Pie Chart for Blood Type Distribution */}
                <h3 className="text-xl font-semibold mb-4">Blood Type Distribution (Pie Chart)</h3>
                <div className="h-64">
                  <Pie data={pieChartData} />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'checkInventory' && (
            <div>
              <h2 className="text-2xl font-semibold">Check Inventory</h2>
              <table className="min-w-full table-auto mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Blood Type</th>
                    <th className="px-4 py-2">Stock Level</th>
                    <th className="px-4 py-2">Expiration Date</th>
                    <th className="px-4 py-2">Barcode</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{item.bloodType}</td>
                      <td className="border px-4 py-2">{item.stockLevel}</td>
                      <td className="border px-4 py-2">{item.expirationDate}</td>
                      <td className="border px-4 py-2">{item.barcode}</td>
                      <td className="border px-4 py-2">
                        <button onClick={() => handleDecrease(index)} className="mr-2 text-red-500">Decrease</button>
                        <button onClick={() => handleIncrease(index)} className="text-green-500">Increase</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSection === 'report' && (
            <div>
              <h2 className="text-2xl font-semibold">View Report</h2>
              <table className="min-w-full table-auto mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Donor Name</th>
                    <th className="px-4 py-2">Collection Date</th>
                    <th className="px-4 py-2">Barcode</th>
                    <th className="px-4 py-2">Blood Type</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{report.donorName}</td>
                      <td className="border px-4 py-2">{report.collectionDate}</td>
                      <td className="border px-4 py-2">{report.barcode}</td>
                      <td className="border px-4 py-2">{report.bloodType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeSection === 'viewOrders' && (
            <div>
              <h2 className="text-2xl font-semibold">View Orders</h2>
              <table className="min-w-full table-auto mt-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Hospital Name</th>
                    <th className="px-4 py-2">Blood Type</th>
                    <th className="px-4 py-2">Amount of Blood Units</th>
                    <th className="px-4 py-2">Order Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">{order.hospitalName}</td>
                      <td className="border px-4 py-2">{order.bloodType}</td>
                      <td className="border px-4 py-2">{order.unitsRequested}</td>
                      <td className="border px-4 py-2">{order.orderDate}</td>
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

export default MixStoreN;

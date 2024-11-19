import React, { useState, useEffect, useRef } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import Chart from 'chart.js/auto';
import Navbar from '../Dashboard/Navbar';
import Storem from './Storem';

const MixStoreN = () => {
  const [activeSection, setActiveSection] = useState('overview'); // Track active section (overview, report, inventory)
  const [inventory, setInventory] = useState([
    { bloodType: 'A+', stockLevel: 30, expirationDate: '2024-12-15', barcode: '12345' },
    { bloodType: 'B+', stockLevel: 45, expirationDate: '2024-12-18', barcode: '12346' },
    { bloodType: 'AB+', stockLevel: 20, expirationDate: '2024-12-10', barcode: '12347' },
    { bloodType: 'O+', stockLevel: 50, expirationDate: '2024-12-20', barcode: '12348' },
  ]);
  const [donors, setDonors] = useState([
    { name: 'John Doe', barcode: '12345', collectionDate: '2024-11-01', bloodType: 'A+' },
    { name: 'Jane Smith', barcode: '12346', collectionDate: '2024-11-05', bloodType: 'B+' },
    { name: 'Tom Brown', barcode: '12347', collectionDate: '2024-10-20', bloodType: 'O+' },
  ]);

  const pieChartRef = useRef(null); // Reference for pie chart
  const barChartRef = useRef(null); // Reference for bar chart

  useEffect(() => {
    // Create Pie Chart
    const pieChart = new Chart(pieChartRef.current, {
      type: 'pie',
      data: {
        labels: inventory.map((item) => item.bloodType),
        datasets: [
          {
            label: 'Blood Stock Levels',
            data: inventory.map((item) => item.stockLevel),
            backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ff8000'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    // Create Bar Chart
    const barChart = new Chart(barChartRef.current, {
      type: 'bar',
      data: {
        labels: inventory.map((item) => item.bloodType),
        datasets: [
          {
            label: 'Blood Stock Levels',
            data: inventory.map((item) => item.stockLevel),
            backgroundColor: '#4CAF50',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy charts when component unmounts or updates
    return () => {
      pieChart.destroy();
      barChart.destroy();
    };
  }, [inventory]);

  // Toggle active section
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Handle adding blood to stock
  const handleAddBlood = (bloodType) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.bloodType === bloodType
          ? { ...item, stockLevel: item.stockLevel + 1 }
          : item
      )
    );
  };

  // Generate report for expired blood donations
  const expiredBlood = inventory.filter((item) => new Date(item.expirationDate) < new Date());

  return (
    <div className="flex">
      {/* Sidebar */}
      <Storem />

      {/* Main Content */}
      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-6 mt-16">
          {/* Buttons to switch between sections */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => handleSectionChange('overview')}
              className={`px-4 py-2 rounded-lg ${activeSection === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Overview
            </button>
            <button
              onClick={() => handleSectionChange('report')}
              className={`px-4 py-2 rounded-lg ${activeSection === 'report' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              View Report
            </button>
            <button
              onClick={() => handleSectionChange('inventory')}
              className={`px-4 py-2 rounded-lg ${activeSection === 'inventory' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Check Inventory
            </button>
          </div>

          {/* Section: Overview (Chart Display) */}
          {activeSection === 'overview' && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <div className="w-full max-w-2xl mx-auto mb-8 bg-white shadow-md p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-center mb-4">Blood Stock Levels (Pie Chart)</h3>
                  <canvas ref={pieChartRef}></canvas>
                </div>
                <div className="w-full max-w-2xl mx-auto mb-8 bg-white shadow-md p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-center mb-4">Blood Stock Levels (Bar Chart)</h3>
                  <canvas ref={barChartRef}></canvas>
                </div>
              </div>
            </>
          )}

          {/* Section: Report (Donor Table) */}
          {activeSection === 'report' && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Donor Information</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Name</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Barcode</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Collection Date</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Blood Type</th>
                  </tr>
                </thead>
                <tbody>
                  {donors.map((donor) => (
                    <tr key={donor.barcode} className="border-t">
                      <td className="px-4 py-2 text-gray-700">{donor.name}</td>
                      <td className="px-4 py-2 text-gray-700">{donor.barcode}</td>
                      <td className="px-4 py-2 text-gray-700">{donor.collectionDate}</td>
                      <td className="px-4 py-2 text-gray-700">{donor.bloodType}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => alert('Generating report...')}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                Generate Report
              </button>
            </div>
          )}

          {/* Section: Inventory (Blood Type and Stock Levels) */}
          {activeSection === 'inventory' && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Blood Inventory</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Blood Type</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Stock Level</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item) => (
                    <tr key={item.barcode} className="border-t">
                      <td className="px-4 py-2 text-gray-700">{item.bloodType}</td>
                      <td className="px-4 py-2 text-gray-700">{item.stockLevel}</td>
                      <td className="px-4 py-2 text-gray-700">
                        <button
                          onClick={() => handleAddBlood(item.bloodType)}
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                          Add Blood
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Expired Blood Report */}
          {expiredBlood.length > 0 && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Expired Blood Donations</h3>
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Blood Type</th>
                    <th className="px-4 py-2 text-sm font-medium text-gray-600">Barcode</th>
                  </tr>
                </thead>
                <tbody>
                  {expiredBlood.map((item) => (
                    <tr key={item.barcode} className="border-t">
                      <td className="px-4 py-2 text-gray-700">{item.bloodType}</td>
                      <td className="px-4 py-2 text-gray-700">{item.barcode}</td>
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

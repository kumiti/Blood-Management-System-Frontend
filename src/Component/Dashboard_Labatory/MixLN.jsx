import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const MixLN = () => {
  const [activeContent, setActiveContent] = useState("notifications");

  // Sample donor list with initial data (bloodType is empty initially)
  const [donors, setDonors] = useState([
    { id: 1, name: "Alice Johnson", bloodBarcode: "B123456", collectionDate: "2024-11-18", bloodType: "" },
    { id: 2, name: "Bob Smith", bloodBarcode: "B123457", collectionDate: "2024-11-19", bloodType: "" },
    { id: 3, name: "Charlie Brown", bloodBarcode: "B123458", collectionDate: "2024-11-20", bloodType: "" }
  ]);

  const [editableDonorId, setEditableDonorId] = useState(null);
  const [updatedBloodType, setUpdatedBloodType] = useState("");
  const [generatedReport, setGeneratedReport] = useState(null);
  const [reportGenerated, setReportGenerated] = useState(false); // Track if the report is generated

  const handleInputChange = (e) => {
    setUpdatedBloodType(e.target.value);
  };

  const handleEditBloodType = (donorId, currentBloodType) => {
    setEditableDonorId(donorId);
    setUpdatedBloodType(currentBloodType || ""); // If no blood type, set as empty
  };

  const handleSaveBloodType = (donorId) => {
    const updatedDonors = donors.map((donor) =>
      donor.id === donorId ? { ...donor, bloodType: updatedBloodType } : donor
    );
    setDonors(updatedDonors); // Update the donor list
    setEditableDonorId(null); // Exit the editing state
    setUpdatedBloodType(""); // Reset the updated blood type
    alert("Blood type updated successfully!");
  };

  const handleGenerateReport = () => {
    // Create a report with the edited blood types
    const report = donors.map((donor) => ({
      name: donor.name,
      bloodBarcode: donor.bloodBarcode,
      collectionDate: donor.collectionDate,
      bloodType: donor.bloodType || "Not provided", // Show "Not provided" if no blood type is set
    }));
    setGeneratedReport(report); // Store the generated report
    setReportGenerated(true); // Mark the report as generated
  };

  const handleSendReport = () => {
    alert("Report sent successfully!");
    // Logic to send the report (e.g., API call or email)
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 pt-8 fixed left-0 top-0 h-full shadow-lg">
        <div className="flex items-center mb-8">
          <span className="font-semibold text-2xl text-red-600">Lab Technician Dashboard</span>
        </div>
        <div className="mb-8">
          <button
            onClick={() => setActiveContent("notifications")}
            className="bg-red-500 text-white py-2 px-6 rounded-full mb-4"
          >
            View Notifications
          </button>
        </div>
        <div className="mb-8">
          <button
            onClick={() => setActiveContent("generateReport")}
            className="bg-red-500 text-white py-2 px-6 rounded-full mb-4"
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 p-6 bg-[#fffbfb]">
        {/* Page Content */}
        <div className="p-6 mt-16">
          {activeContent === "notifications" && (
            <div>
              <h2 className="text-2xl font-semibold text-red-500 mb-6">Notification Reports</h2>
              {/* List of notifications from the collector */}
              <div className="space-y-4">
                {donors.map((donor) => (
                  <div
                    key={donor.id}
                    className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                  >
                    <div>
                      <span className="text-lg font-semibold">{`Donor: ${donor.name}`}</span>
                      <div className="text-sm text-gray-500">{`Blood Barcode: ${donor.bloodBarcode}`}</div>
                      <div className="text-sm text-gray-500">{`Collection Date: ${donor.collectionDate}`}</div>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span>{`Blood Type: ${donor.bloodType || "N/A"}`}</span>
                      {/* Editable blood type field */}
                      {editableDonorId === donor.id ? (
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            value={updatedBloodType}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded"
                            placeholder="Enter Blood Type"
                          />
                          <button
                            onClick={() => handleSaveBloodType(donor.id)}
                            className="bg-green-500 text-white py-1 px-4 rounded"
                          >
                            Save
                          </button>
                        </div>
                      ) : null}
                    </div>
                    {/* Edit button */}
                    <button
                      onClick={() => handleEditBloodType(donor.id, donor.bloodType)}
                      className="bg-blue-500 text-white py-1 px-4 rounded"
                    >
                      {editableDonorId === donor.id ? "Cancel" : "Edit"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeContent === "generateReport" && (
            <div>
              <h2 className="text-2xl font-semibold text-red-500 mb-6">Generated Report</h2>
              {/* Display the generated report as a table */}
              {generatedReport && (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                      <tr className="bg-red-500 text-white">
                        <th className="py-2 px-4 text-left">Donor Name</th>
                        <th className="py-2 px-4 text-left">Blood Barcode</th>
                        <th className="py-2 px-4 text-left">Collection Date</th>
                        <th className="py-2 px-4 text-left">Blood Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {generatedReport.map((report, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="py-2 px-4">{report.name}</td>
                          <td className="py-2 px-4">{report.bloodBarcode}</td>
                          <td className="py-2 px-4">{report.collectionDate}</td>
                          <td className="py-2 px-4">{report.bloodType}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Buttons under the table */}
              <div className="mt-6 flex justify-between">
                {/* Display both buttons after the report is generated */}
                <button
                  onClick={handleGenerateReport}
                  className="bg-green-500 text-white py-2 px-6 rounded-full"
                >
                  Generate Report
                </button>
                <button
                  onClick={handleSendReport}
                  className="bg-blue-500 text-white py-2 px-6 rounded-full"
                >
                  Send Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MixLN;

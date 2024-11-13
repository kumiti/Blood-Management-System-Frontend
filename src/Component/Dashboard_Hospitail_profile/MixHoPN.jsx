import React, { useState } from "react";
import HospitalProfile from "./HospitalProfile";
import Navbar from "../Dashboard/Navbar";

// Report Section (Display All Requests)
const ReportSection = ({ requests }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">All Requests Report</h2>
      {requests.length === 0 ? (
        <p className="text-gray-500">No requests have been made yet.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          <h4 className="font-semibold">Requests Summary:</h4>
          {requests.map((request, index) => (
            <div key={index} className="mt-4 p-4 border bg-gray-100">
              <ul>
                <li><strong>Hospital Name:</strong> {request.patientName}</li>
                <li><strong>Blood Types Requested:</strong> {request.bloodTypes.join(", ")}</li>
                <li><strong>Units Needed:</strong>
                  {Object.keys(request.unitsNeeded).map((bloodType) => (
                    <div key={bloodType}>{bloodType}: {request.unitsNeeded[bloodType]}</div>
                  ))}
                </li>
                <li><strong>Additional Notes:</strong> {request.question}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Notifications Section (Display Notifications)
const NotificationsSection = ({ notifications }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p className="text-gray-500">You have no new notifications.</p>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          {notifications.map((notification, index) => (
            <div key={index} className="mt-4 p-4 border bg-gray-100">
              <h4 className="font-semibold">{notification.title}</h4>
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Overview Section
const OverviewSection = ({ hospitalDetails, requests }) => {
  // A quick summary of the hospital's blood requests
  const pendingRequests = requests.filter((req) => req.status === "pending").length;
  const completedRequests = requests.filter((req) => req.status === "completed").length;
  const totalRequests = requests.length;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Hospital Overview</h2>

      {/* Hospital Info */}
      <div className="mb-6 p-4 border bg-gray-100">
        <h4 className="font-semibold">Hospital Information:</h4>
        <p><strong>Name:</strong> {hospitalDetails.name}</p>
        <p><strong>Contact:</strong> {hospitalDetails.contact}</p>
        <p><strong>Address:</strong> {hospitalDetails.address}</p>
      </div>

      {/* Blood Request Stats */}
      <div className="p-4 border bg-gray-100">
        <h4 className="font-semibold">Blood Request Summary:</h4>
        <ul>
          <li><strong>Total Requests:</strong> {totalRequests}</li>
          <li><strong>Pending Requests:</strong> {pendingRequests}</li>
          <li><strong>Completed Requests:</strong> {completedRequests}</li>
        </ul>
      </div>
    </div>
  );
};

const MixHoPN = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [requests, setRequests] = useState([]); // Store all requests made by the hospital
  const [notifications, setNotifications] = useState([ // Example Notifications
    { title: "Blood Request Status", message: "Your request for O+ blood has been approved." },
    { title: "Request Update", message: "AB+ blood is now available for your request." },
  ]);

  const [hospitalDetails] = useState({
    name: "City Hospital",
    contact: "123-456-789",
    address: "123 Main Street, City, Country",
  });

  const [requestData, setRequestData] = useState({
    patientName: "",
    bloodTypes: [],
    unitsNeeded: {},
    question: "",
    isRequestSent: false,
  });

  // Handle input changes for form fields
  const handleChange = (e, bloodType = null) => {
    const { name, value, type, checked } = e.target;

    if (name === "bloodTypes") {
      if (checked) {
        setRequestData((prevData) => ({
          ...prevData,
          bloodTypes: [...prevData.bloodTypes, value],
        }));
      } else {
        setRequestData((prevData) => ({
          ...prevData,
          bloodTypes: prevData.bloodTypes.filter((type) => type !== value),
        }));
      }
    } else if (name === "unitsNeeded" && bloodType) {
      setRequestData((prevData) => ({
        ...prevData,
        unitsNeeded: { ...prevData.unitsNeeded, [bloodType]: value },
      }));
    } else {
      setRequestData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequests([...requests, { ...requestData, status: "pending" }]);
    setRequestData({
      patientName: "",
      bloodTypes: [],
      unitsNeeded: {},
      question: "",
      isRequestSent: true,
    });
  };

  // Reset form for another request
  const resetForm = () => {
    setRequestData({
      patientName: "",
      bloodTypes: [],
      unitsNeeded: {},
      question: "",
      isRequestSent: false,
    });
  };

  const generateReport = () => {
    setActiveTab("viewReport");
  };

  const viewNotifications = () => {
    setActiveTab("viewNotifications");
  };

  return (
    <div className="flex">
      <HospitalProfile
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        generateReport={generateReport}
        viewNotifications={viewNotifications}
      />

      <div className="flex-1 bg-[#fffbfb] min-h-screen pl-64">
        <Navbar />
        <div className="p-6 mt-16">
          {/* Active Tab Content */}
          {activeTab === "overview" && (
            <OverviewSection hospitalDetails={hospitalDetails} requests={requests} />
          )}

          {activeTab === "viewReport" && (
            <ReportSection requests={requests} />
          )}

          {activeTab === "viewNotifications" && (
            <NotificationsSection notifications={notifications} />
          )}

          {activeTab === "sendRequest" && (
            <div className="bg-white p-6 rounded shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Send Blood Request</h2>
              {requestData.isRequestSent ? (
                <div>
                  <h3 className="text-xl font-semibold text-green-500">Request Sent Successfully</h3>
                  <p>Your request has been sent to the blood bank.</p>
                  <button onClick={resetForm} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Form Fields for Send Request */}
                  <div className="mb-4">
                    <label className="block text-gray-700">Hospital Name:</label>
                    <input
                      type="text"
                      name="patientName"
                      value={requestData.patientName}
                      onChange={handleChange}
                      className="mt-2 p-2 border rounded w-full"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Blood Types Needed:</label>
                    <div className="mt-2 space-y-2">
                      {["A+", "B+", "O+", "AB+", "O-", "A-"].map((bloodType) => (
                        <label key={bloodType} className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="bloodTypes"
                            value={bloodType}
                            checked={requestData.bloodTypes.includes(bloodType)}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-red-600"
                          />
                          <span className="ml-2 text-gray-700">{bloodType}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Units Needed for each Type:</label>
                    {requestData.bloodTypes.map((bloodType) => (
                      <div key={bloodType} className="mb-2 flex items-center">
                        <span className="mr-2">{bloodType}:</span>
                        <input
                          type="number"
                          name="unitsNeeded"
                          value={requestData.unitsNeeded[bloodType] || 1}
                          onChange={(e) => handleChange(e, bloodType)}
                          className="p-2 border rounded w-24"
                          min="1"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700">Your Request or Question to the Blood Bank:</label>
                    <textarea
                      name="question"
                      value={requestData.question}
                      onChange={handleChange}
                      className="mt-2 p-2 border rounded w-full"
                      placeholder="Describe your request here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MixHoPN;

import React, { useState } from "react";

const Collector = () => {
  const [donorList, setDonorList] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      username: "alicejohnson",
      password: "secure123",
      email: "alice@example.com",
      bloodBarcode: "B123456",
      collectionDate: "2024-11-18",
    },
  ]);

  const [activeContent, setActiveContent] = useState("list");
  const [newDonor, setNewDonor] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    city: "",
    title: "",
    dateOfBirth: "",
    gender: "",
    bloodBarcode: "",
    collectionDate: "",
  });

  const [editBarcode, setEditBarcode] = useState(null);
  const [editedBarcode, setEditedBarcode] = useState("");

  const handleInputChangeDonor = (e) => {
    const { name, value } = e.target;
    setNewDonor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmitDonor = (e) => {
    e.preventDefault();
    const newDonorAccount = {
      id: donorList.length + 1,
      name: `${newDonor.firstName} ${newDonor.middleName} ${newDonor.lastName}`,
      username: newDonor.username,
      password: newDonor.password,
      email: newDonor.email,
      bloodBarcode: newDonor.bloodBarcode,
      collectionDate: newDonor.collectionDate,
    };
    setDonorList([...donorList, newDonorAccount]);
    setActiveContent("list");
  };

  const handleSendReport = () => {
    alert("Report sent successfully!");
  };

  const handleEditBarcode = (id, currentBarcode) => {
    setEditBarcode(id);
    setEditedBarcode(currentBarcode);
  };

  const handleSaveBarcode = (id) => {
    setDonorList((prevList) =>
      prevList.map((donor) =>
        donor.id === id ? { ...donor, bloodBarcode: editedBarcode } : donor
      )
    );
    setEditBarcode(null);
    setEditedBarcode("");
  };

  const handleCancelEdit = () => {
    setEditBarcode(null);
    setEditedBarcode("");
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white p-4 pt-8 fixed left-0 top-0 h-full shadow-lg">
        <div className="flex items-center mb-8">
          <span className="font-semibold text-2xl text-red-600">Collector Dashboard</span>
        </div>
        <div className="mb-8">
          <button
            onClick={() => setActiveContent("list")}
            className="bg-red-500 text-white py-2 px-6 rounded-full mb-4"
          >
            Donor Account List
          </button>
        </div>
        <div className="mb-8">
          <button
            onClick={() => setActiveContent("report")}
            className="bg-red-500 text-white py-2 px-6 rounded-full mb-4"
          >
            Generate Report
          </button>
        </div>
        <div className="mb-8">
          <button
            onClick={() => setActiveContent("createDonor")}
            className="bg-red-500 text-white py-2 px-6 rounded-full"
          >
            Create Donor Account
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow ml-64 p-6 bg-gray-100">
        {activeContent === "list" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Donor Accounts</h2>
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4">Name</th>
                  <th className="border-b py-2 px-4">Blood Barcode</th>
                  <th className="border-b py-2 px-4">Collection Date</th>
                  <th className="border-b py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donorList.map((donor) => (
                  <tr key={donor.id}>
                    <td className="border-b py-2 px-4">{donor.name}</td>
                    <td className="border-b py-2 px-4">
                      {editBarcode === donor.id ? (
                        <input
                          type="text"
                          value={editedBarcode}
                          onChange={(e) => setEditedBarcode(e.target.value)}
                          className="p-2 w-full border border-gray-300 rounded"
                        />
                      ) : (
                        donor.bloodBarcode
                      )}
                    </td>
                    <td className="border-b py-2 px-4">{donor.collectionDate}</td>
                    <td className="border-b py-2 px-4">
                      {editBarcode === donor.id ? (
                        <>
                          <button
                            onClick={() => handleSaveBarcode(donor.id)}
                            className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="bg-gray-500 text-white py-1 px-3 rounded"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleEditBarcode(donor.id, donor.bloodBarcode)}
                          className="bg-blue-500 text-white py-1 px-3 rounded"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeContent === "report" && (
          <div className="mt-4 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Donor Report</h3>
            <p>Total Donors: {donorList.length}</p>
            <table className="min-w-full border-collapse mt-4">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4">Name</th>
                  <th className="border-b py-2 px-4">Blood Barcode</th>
                  <th className="border-b py-2 px-4">Collection Date</th>
                </tr>
              </thead>
              <tbody>
                {donorList.map((donor) => (
                  <tr key={donor.id}>
                    <td className="border-b py-2 px-4">{donor.name}</td>
                    <td className="border-b py-2 px-4">{donor.bloodBarcode}</td>
                    <td className="border-b py-2 px-4">{donor.collectionDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={handleSendReport}
              className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full"
            >
              Send Report
            </button>
          </div>
        )}

        {activeContent === "createDonor" && (
          <div className="mt-4 p-6 bg-white border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Create Donor Account</h3>
            <form onSubmit={handleFormSubmitDonor}>
            <div className="grid grid-cols-2 gap-4">
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
      value={newDonor.firstName}
      onChange={handleInputChangeDonor}
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
      value={newDonor.middleName}
      onChange={handleInputChangeDonor}
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
      value={newDonor.lastName}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="username"
      className="block text-sm font-medium text-gray-700"
    >
      Username
    </label>
    <input
      type="text"
      id="username"
      name="username"
      value={newDonor.username}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    />
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
      value={newDonor.email}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="password"
      className="block text-sm font-medium text-gray-700"
    >
      Password
    </label>
    <input
      type="password"
      id="password"
      name="password"
      value={newDonor.password}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="city"
      className="block text-sm font-medium text-gray-700"
    >
      City
    </label>
    <input
      type="text"
      id="city"
      name="city"
      value={newDonor.city}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
    />
  </div>
  <div className="mb-4">
    <label
      htmlFor="title"
      className="block text-sm font-medium text-gray-700"
    >
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={newDonor.title}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
    />
  </div>

  <div className="mb-4">
    <label
      htmlFor="dateOfBirth"
      className="block text-sm font-medium text-gray-700"
    >
      Date of Birth
    </label>
    <input
      type="date"
      id="dateOfBirth"
      name="dateOfBirth"
      value={newDonor.dateOfBirth}
      onChange={handleInputChangeDonor}
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
      value={newDonor.gender}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    >
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div className="mb-4">
    <label
      htmlFor="bloodBarcode"
      className="block text-sm font-medium text-gray-700"
    >
      Blood Barcode
    </label>
    <input
      type="text"
      id="bloodBarcode"
      name="bloodBarcode"
      value={newDonor.bloodBarcode}
      onChange={handleInputChangeDonor}
      className="mt-1 p-2 w-full border border-gray-300 rounded"
      required
    />
  </div>
  
                <div className="mb-4">
                  <label
                    htmlFor="collectionDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Collection Date
                  </label>
                  <input
                    type="date"
                    id="collectionDate"
                    name="collectionDate"
                    value={newDonor.collectionDate}
                    onChange={handleInputChangeDonor}
                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                    required
                  />
                </div>
                {/* Other fields... */}
              
</div>        
              <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded-full">
                Create Donor
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collector;

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import imghptl from '../Header/img/image copy 4.png'
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from '../Header/Search';

function Hospitailrgtr() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    hospitalName: '',
    hospitalAddress: '',
    email: '',
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.hospitalName || !formData.hospitalAddress || !formData.email || !formData.username || !formData.password) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage(''); // Clear success message if there are errors
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');
    setSuccessMessage('Registered successfully as a hospital.');

    console.log('Form Data:', formData);
    
    // Navigate to the next page
    // navigate('/Staffsubmit');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2 z-10">
        <img src={p1} alt="Logo" className="h-16" />
        <nav className="text-black md:text-sm ml-1 md:ml-52 flex flex-wrap font-semibold space-x-5 items-center justify-center mt-2 md:mt-0">
          <Link to='/' className="hover:text-red-600">Home</Link>
          <Link to='/' className="hover:text-red-600">About</Link>
          <Link to='/' className="hover:text-red-600">Blood</Link>
          <Link to='/' className="hover:text-red-600">Contact Us</Link>
          <Link to='/' className="hover:text-red-600">Awareness</Link>
        </nav>
        <div className="flex md:space-x-4 flex-row space-x-2">
          <div className="relative">
            <SearchBar />
          </div>
          <button className="p-2 mr-2 w-28 text-base rounded-md bg-white border hover:bg-slate-200 border-gray-300">Log In</button>
          <button className="p-2 w-28 text-base rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
        </div>
      </header>
<div className="flex">
      <div className="flex-row">
        <h1 className="text-2xl font-semibold ml-1 mt-[5rem] px-32 pb-2">
          Welcome to blood and tissue supply <br /> chain management system
        </h1>

        <div className="flex justify-center mt-2">
          <h1 className="text-2xl text-black font-bold  ml-[10rem] -mt-3 ">Register as Hospital</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg -ml-[11rem] rounded-lg mt-4 p-2 space-y-1 w-96"
          >
            <div>
              <label className="block text-gray-700">Hospital Name</label>
              <input
                type="text"
                name="hospitalName"
                value={formData.hospitalName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Hospital Address</label>
              <input
                type="text"
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {errorMessage && (
              <div className="text-red-500">{errorMessage}</div>
            )}

            {successMessage && (
              <div className="text-green-600">{successMessage}</div>
            )}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div className=" -mt-[37rem] ml-[48rem]"><img src={imghptl} alt="" /></div>
    </div>
  );
}

export default Hospitailrgtr;
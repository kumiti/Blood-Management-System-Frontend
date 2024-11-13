/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';

function Staffsubmit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone: '',
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
    if (!formData.email || !formData.username || !formData.password || !formData.phone) {
      setErrorMessage('Please fill in all fields.');
      setSuccessMessage(''); // Clear success message if there are errors
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');
    setSuccessMessage('Register successfully as staff');

    // Here you can handle form submission (e.g., sending data to an API)
    console.log('Form Data:', formData);
    
    // Navigate to the next page (you can change '/cityF' to your desired route)
    // Uncomment the line below if you want to navigate after submission
    navigate('/Staffsubmit');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2 z-10">
        <img src={p1} alt="Logo" className="h-16" />
        <nav className="text-black md:text-sm ml-1 md:ml-52 flex flex-wrap font-semibold space-x-5 items-center justify-center mt-2 md:mt-0">
          <Link to='/'> <a className="hover:text-red-600" href="#">Home</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">About</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">Blood</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">Contact Us</a></Link>
          <Link to='/'> <a className="hover:text-red-600" href="#">Awareness</a></Link>
        </nav>
        <div className="flex md:space-x-4 flex-row space-x-2">
          <div className="relative">
            <SearchBar />
          </div>
          <button className="p-2 mr-2 w-28 text-base rounded-md bg-white border hover:bg-slate-200 border-gray-300">Log in</button>
          <button className="p-2 w-28 text-base rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
        </div>
      </header>

      <div className="flex-row">
        <div className=''>
          <h1 className="text-2xl font-semibold ml-1 mt-[5.5rem] px-36 pb-3">
            Welcome to blood and tissue supply <br /> chain management system
          </h1>
          <ul className='flex space-x-28 -mt-4 ml-[32rem] text-2xl'>
            <span className='flex-row '><span className=''>step</span><FaCheck className='rounded-full w-12 p-3 h-12 bg-red-300 text-center' /></span>
            <span className='flex-row '><span className=''>step</span><FaCheck  className='  rounded-full w-12 p-3 h-12  bg-red-300 text-center' /></span>
            <span className='flex-row '><span className=''>step</span><FaCheck  className='  rounded-full w-12 p-3 h-12  bg-red-300 text-center' /></span>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <h1 className="text-3xl text-black font-bold -mt-2 pb-2">Register as staff</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg -ml-[7rem] rounded-lg mt-7 p-2 space-y-1 w-96"
          >
            <div>
              <label className="block text-gray-700">Email</label>
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
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
  );
}

export default Staffsubmit;
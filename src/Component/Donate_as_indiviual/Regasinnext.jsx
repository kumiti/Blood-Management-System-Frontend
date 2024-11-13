/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import p1 from '../Header/img/image copy.png';
import { useNavigate } from 'react-router-dom';
import {  FaCheck  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';
function Nextindivual() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    dob: '',
    age: '',
    sex: '',
    occupation: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.title || !formData.dob || !formData.age || !formData.sex || !formData.occupation) {
      setErrorMessage('Please fill in all fields.');
      return; // Prevent form submission
    }

    // Clear the error message
    setErrorMessage('');

    console.log('Form Data:', formData);
    
    // Navigate to the next page
    navigate('/cityF');
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <header className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2 z-10">
        <img src={p1} alt="Logo" className="h-16" />
        <nav className="text-black  md:text-sm ml-1 md:ml-52 flex flex-wrap font-semibold space-x-5 items-center justify-center mt-2 md:mt-0">
        <Link to='/'>  <a  className="hover:text-red-600" href="#">Home</a></Link>  
                <Link to='/'>     <a className="hover:text-red-600" href="#">About</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Blood</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Contact Us</a></Link>  
        </nav>
        <div className="flex md:space-x-4 flex-row space-x-2">
          <div className="relative">
          <SearchBar/>
          </div>
          <button className="p-2 mr-2 w-28 text-base rounded-md bg-white border hover:bg-slate-200 border-gray-300">Sign Up</button>
          <button className="p-2 w-28 text-base rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
        </div>
      </header>
<div className="flex">
      <div className=''>
          <h1 className="text-4xl font-semibold -ml-10 mt-36 px-56 pb-3">
            Welcome to blood and <br />tissue  supply   chain <br /> management system
          </h1>
          <ul className='flex space-x-20  ml-[5rem] mt-6 text-2xl'>
        <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>
        <li className="rounded-full w-12 p-2 text-center bg-slate-300">2</li>
        <li className="rounded-full w-12 p-2 text-center bg-slate-300">3</li>
        <li className="rounded-full w-12 p-2 text-center bg-slate-300">4</li>
        
      </ul>
          </div>
          <div className="flex justify-center  ">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-lg -ml-[7rem] rounded-lg mt-32 p-2  space-y-3 w-96"
            >
              <div>
                <label className="block text-gray-700">Title</label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="" disabled>Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700">Sex</label>
                <select
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="" disabled>Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              {errorMessage && (
                <div className="text-red-500">{errorMessage}</div>
              )}

              <div className="flex justify-between -mt-[20rem]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
                >
                  Back
                </button>
                <button onClick={handleChange}
                  type="submit"
                  className="w-28 bg-red-300 text-black py-1 rounded-md hover:bg-red-700 transition"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
          </div>
    </div>
  );
}

export default Nextindivual;
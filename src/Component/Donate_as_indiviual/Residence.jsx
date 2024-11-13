/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import g2 from '../Header/img/grainet.png';
import p1 from '../Header/img/image copy.png';
import { useNavigate } from 'react-router-dom';
import {  FaCheck  } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';
function Teleregi() {
    const navigate = useNavigate();
    const [residence, setResidence] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!residence || !cellPhone || !organization) {
            setError('Please fill in all required fields.');
            return;
        }

        // Handle form submission logic here (e.g., save data)

        // Navigate to the next page
        navigate('/email'); // Change '/next-page' to your desired route
    };

    return (
        <div className="flex flex-col bg-white min-h-screen">
            <div className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2 z-10">
                <img src={p1} alt="Logo" className="h-14" />

                <div className="text-black text-xl ml-2 md:ml-52 flex flex-wrap font-normal space-x-4 items-center justify-center mt-2 md:mt-0">
                <Link to='/'>  <a  className="hover:text-red-600" href="#">Home</a></Link>  
                <Link to='/'>     <a className="hover:text-red-600" href="#">About</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Blood</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Contact Us</a></Link>  
                </div>

                <div className="flex md:space-x-4 flex-row space-x-4">
                    <div className="relative">
                    <SearchBar/>
                    </div>
                    <button className="p-2 mr-5 w-28 text-xl rounded-md bg-white border hover:bg-slate-200 border-gray-300">Sign Up</button>
                    <button className="p-2 w-28 text-xl rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
                </div>
            </div>

                <h1 className="text-2xl md:text-3xl font-semibold text-center mt-20 ">
                    Welcome to Blood and Tissue Supply  <br />Chain Management  System
                </h1>
                <div className="">
                        <ul  className='flex space-x-28  mt-5 ml-[20rem]  text-2xl'>
                      <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>
                        <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>
                        <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>

<li className="rounded-full w-12 p-[0.6rem] text-center  bg-slate-300">4</li>
</ul>
                        </div>
        
                <div className="flex items-center justify-center   mt-3">
                    <form className="bg-white p-6 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="residence">
                                Residence (Telephone)
                            </label>
                            <input
                                type="text"
                                id="residence"
                                value={residence}
                                onChange={(e) => setResidence(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your residence phone"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="cellPhone">
                                Cell Phone
                            </label>
                            <input
                                type="text"
                                id="cellPhone"
                                value={cellPhone}
                                onChange={(e) => setCellPhone(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your cell phone"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="organization">
                                Organization
                            </label>
                            <input
                                type="text"
                                id="organization"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your organization"
                                required
                            />
                        </div>

                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={() => navigate(-1)} // Go back to the previous page
                                className="bg-red-200 text-black rounded px-4 py-2 hover:bg-red-900 transition"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-red-200 text-black rounded px-4 py-2 hover:bg-red-900 transition"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    ) 
}

export default Teleregi;
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import p1 from '../Header/img/image copy.png';
import ind from '../Header/img/image copy 3.png';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../Header/Search';

function Regesterstaff() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState(''); // Added state for gender
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleNext = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Basic validation
        if (!firstName || !surname || !gender) {
            setError('Please fill in all required fields.');
            return;
        }

        // If validation passes, navigate to the next page
        navigate('/Nextstaff');
    };

    return (
        <>
            <div className="flex bg-white">
                <div className=''>
                    <div className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2">
                        <img src={p1} alt="Logo" className="h-14" />

                        <div className="text-black text-lg ml-52 flex flex-wrap font-semibold space-x-4 md:ml-52 items-center justify-center mt-2 md:mt-0">
                            <Link to='/' className="hover:text-red-600">Home</Link>
                            <Link to='/about' className="hover:text-red-600">About</Link>
                            <Link to='/blood' className="hover:text-red-600">Blood</Link>
                            <Link to='/contact' className="hover:text-red-600">Contact Us</Link>
                        </div>

                        <div className="flex md:space-x-4 flex-row space-x-4 border-black">
                            <div className="relative">
                            <SearchBar/>
                            </div>
                            <button className="p-1 w-28 text-xl rounded-md bg-white border hover:bg-slate-200 border-gray-300">Sign Up</button>
                            <button className="p-1 w-28 text-xl mr-2 rounded-md bg-red-600 hover:bg-red-900 text-white">Sign In</button>
                        </div>
                    </div>

                    <div className="flex flex-col mt-2 pt-16 pb-12">
                        <p className="text-wrap text-2xl font-semibold ml-56 mt-6">
                            Welcome to Blood and Tissue Supply <br /> Chain Management System
                        </p>
                    </div>

                    <ul className='flex space-x-28 -mt-10 ml-[10rem] text-2xl'>
                        <span className='flex-row'><span className=''>step</span><li className="rounded-full w-12 p-2 text-center bg-slate-300">1</li></span>
                        <span className='flex-row'><span className=''>step</span><li className="rounded-full w-12 p-2 text-center bg-slate-300">2</li></span>
                        <span className='flex-row'><span className=''>step</span><li className="rounded-full w-12 p-2 text-center bg-slate-300">3</li></span>
                    </ul>
                </div>

                <div className="flex">
                    <div className="flex items-center font-semibold justify-center min-h-screen bg-white">
                        <form className="bg-white mt-64 space-y-1 -ml-[32rem] max-w-sm">
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <h1 className="-ml-14 text-2xl p-3 font-bold">Register as staff</h1>
                            <div className="-ml-9 flex">
                                <label className="text-gray-700 w-full">First Name:</label>
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        setError(''); // Clear error on change
                                    }}
                                    className="mt-1 px-36 py-2 border border-gray-300 rounded w-full"
                                    required
                                />
                            </div>

                            <div className="-ml-14 flex">
                                <label className="w-full text-gray-700 pr-1">Middle Name:</label>
                                <input
                                    type="text"
                                    value={middleName}
                                    onChange={(e) => {
                                        setMiddleName(e.target.value);
                                        setError(''); // Clear error on change
                                    }}
                                    className="mt-1 px-36 py-2 border border-gray-300 rounded w-full"
                                />
                            </div>

                            <div className="-ml-10 flex">
                                <label className="w-full text-gray-700 pr-1">Surname:</label>
                                <input
                                    type="text"
                                    value={surname}
                                    onChange={(e) => {
                                        setSurname(e.target.value);
                                        setError(''); // Clear error on change
                                    }}
                                    className="mt-1 px-36 py-2 border border-gray-300 rounded w-full"
                                    required
                                />
                            </div>

                            <div className="-ml-10 flex">
                                <label className="w-full text-gray-700 pr-3">Gender:</label>
                                <input
                                    type="text"
                                    value={gender}
                                    onChange={(e) => {
                                        setGender(e.target.value);
                                        setError(''); // Clear error on change
                                    }}
                                    className="px-36 py-2 border border-gray-300 rounded w-full"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleNext}
                                className="ml-56 bg-red-200 text-black-700 px-6 py-1 -mt-1 text-2xl rounded hover:bg-red-300"
                            >
                                Next
                            </button>
                        </form>
                    </div>

                    <div className="">
                        <img src={ind} className='mt-[1rem] pt-40 ml-[8rem] w-[28rem] h-[33rem] max-w-xs md:max-w-md' alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Regesterstaff;
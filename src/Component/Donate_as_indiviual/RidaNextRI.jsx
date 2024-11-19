// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../Header/img/image copy.png';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';
import NavBar from "../Common/NavBar";

function RidaNextRI() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [poBox, setPoBox] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password || !username || !poBox || !bloodType || !medicalHistory) {
            setError('Please fill in all required fields.');
            return;
        }

        // Handle form submission logic here (e.g., save data)

        // Set success message
        setSuccess('Registration successful!');

        // Navigate to dashboard after a brief delay (optional)
        setTimeout(() => {
            navigate('/'); // Change '/dashboard' to your desired route
        }, 2000);
    };

    return (
        

            <div className="flex flex-1">
                 <NavBar />
                <div className="flex items-center -mt-7 -ml-7 mt-20 justify-center w-1/2 ">
                    <h1 className="text-2xl md:text-3xl space-y-3 mb-40 font-semibold text-left">
                        Welcome to Blood and Tissue <br /> Supply Chain Management <br /> System
                        <br /><br /> <br />
                        <ul className='flex space-x-16 ml-[1rem] text-2xl'>
                            <li className="rounded-full w-12 p-3 bg-red-300 text-center"><FaCheck className='justify-center' /></li>
                            <li className="rounded-full w-12 p-3 bg-red-300 text-center"><FaCheck className='justify-center' /></li>
                            <li className="rounded-full w-12 p-3 bg-red-300 text-center"><FaCheck className='justify-center' /></li>
                            <li className="rounded-full w-12 p-3 bg-red-300 text-center"><FaCheck className='justify-center' /></li>
                        </ul>
                        <span className='font-bold text-3xl text-red-600 ml-40 scroll-pt-7'>Register As Individual</span>  
                    </h1>
                </div>

                <div className="flex items-center justify-center -ml-24 w-1/2 p-2">
                    <form className="bg-white p-6 mt-28 -ml-12 rounded shadow-md fixed w-full max-w-md" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        {success && <p className="text-green-500 mb-4">{success}</p>}

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1" htmlFor="username">User Name</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border border-gray-300 rounded w-full p-2"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="mb-12">
                            <label className="block text-gray-700 mb-2" htmlFor="poBox">P.O. Box</label>
                            <input
                                type="text"
                                id="poBox"
                                value={poBox}
                                onChange={(e) => setPoBox(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your P.O. Box"
                                required
                            />
                        </div>

                        
                       

                        <div className="flex justify-between font-bold -mt-2 mb-6">
                            <button
                                type="button"
                                onClick={() => navigate(-1)} // Go back to the previous page
                                className="bg-red-200 text-black rounded px-9 py-2 hover:bg-red-900"
                            >
                                Back
                            </button>
                            <button
                                type="submit"
                                className="bg-red-200 text-black rounded px-7 py-1 hover:bg-red-900"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default RidaNextRI;
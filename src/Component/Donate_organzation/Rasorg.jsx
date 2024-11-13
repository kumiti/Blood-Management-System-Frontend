// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import p1 from '../Header/img/image copy.png';
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';
function Rasorg() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [organizationAddress, setOrganizationAddress] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password || !username || !organizationName || !organizationAddress) {
            setError('Please fill in all required fields.');
            return;
        }

        // Simulate successful registration
        setSuccess('Register successfully!');

        // Wait for 2 seconds and then navigate to home page
        setTimeout(() => {
            navigate('/'); // Change '/' to your desired home route
        }, 2000);
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

            <div className="flex flex-1">
                <div className="flex items-center justify-center w-1/2 p-4">
                    <h1 className="text-2xl md:text-3xl font-semibold ml-12 text-left">
                        Welcome to Blood and Tissue <br /> Supply Chain Management <br /> System
                        <br /><br /> <br />
                        <span className='font-bold text-4xl ml-28 text-red-500'>Register As Organization</span>  
                    </h1>
                </div>

                <div className="flex items-center justify-center w-1/2 p-2">
                    <form className="bg-white p-6 mt-28 -ml-12 rounded shadow-md fixed w-full max-w-md" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        {success && <p className="text-green-500 mb-4">{success}</p>}

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="organizationName">
                                Organization Name
                            </label>
                            <input
                                type="text"
                                id="organizationName"
                                value={organizationName}
                                onChange={(e) => setOrganizationName(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your organization name"
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="organizationAddress">
                                Organization Address
                            </label>
                            <input
                                type="text"
                                id="organizationAddress"
                                value={organizationAddress}
                                onChange={(e) => setOrganizationAddress(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your organization address"
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="email">
                                Email Address
                            </label>
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
                            <label className="block text-gray-700 mb-1" htmlFor="username">
                                User Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border border-gray-300 rounded w-full p-1"
                                placeholder="Enter your username"
                                required
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-gray-700 mb-1" htmlFor="password">
                                Password
                            </label>
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

                        <div className="flex justify-between font-bold mt-3 mb-6">
                            <button
                                type="submit"
                                className="bg-red-200 ml-80 text-black rounded-md px-2 py-2 hover:bg-red-900"
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

export default Rasorg;
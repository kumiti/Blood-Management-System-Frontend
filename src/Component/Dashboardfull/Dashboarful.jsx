/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaListUl } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { MdOutlineLensBlur } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { TbPlaneDeparture } from "react-icons/tb";
import mama from '../Header/img/10004 (1) copy.png';

import mama12 from '../Header/img/10001 (2).png';

function Dashboarful() {

    const [mama1, setProfileImage] = useState('path/to/default/image.jpg'); // Default image path

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <ul className='pl-4 bg'>
            <li className="text-3xl text-[#6772e5] font-bold ml-8 flex">
              <TbLayoutDashboardFilled className='mr-4 mt-3' />
              <p className="text-4xl">argon</p>
            </li>
          </ul>
          <div className="mt-16 space-y-4">
            <ul className="ml-5">
              <li className='flex'><RiComputerLine className='text-[#6772e5] mt-1 mr-5' /><p className="text-slate-600">dashboard</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><TbWorld className='text-[#6772e5] mt-1 mr-5' /><p className="text-slate-600">icons</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><FiMapPin className='text-[#fb6340] mt-1 mr-5' /><p className="text-slate-600">Maps</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><FaUser className='text-[#ffd600] mt-1 mr-5' /><p className="text-slate-600">user profile</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><FaListUl className='text-red-500 mt-1 mr-5' /><p className="text-slate-600">Tables</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><CiLogin className='text-blue-600 mt-1 mr-5' /><p className="text-slate-600">Login</p></li>
            </ul>
            <ul className="ml-5 mb-7">
              <li className='flex'><FaUser className='text-[#ff5e00] mt-1 mr-5' /><p className="text-slate-600">Register</p></li>
            </ul>
          </div>

          <hr className="border-l-0 border-slate-300 my-4  " />
          <div className="space-y-4">
            <h3 className='text-slate-500 ml-2 mt-3'>DOCUMENTATION</h3>
        
            <ul className="ml-5">
              <li className='flex'><TbPlaneDeparture className='text-blue-600 mt-1 mr-5' /><p className="text-slate-600">Getting started</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><IoIosColorPalette className='text-blue-600 mt-1 mr-5' /><p className="text-slate-600">Foundation</p></li>
            </ul>
            <ul className="ml-5">
              <li className='flex'><MdOutlineLensBlur className='text-blue-600 mt-1 mr-5' /><p className="text-slate-600">Components</p></li>
            </ul>
          </div>
        </div>
        <img src={mama} className='w-[79rem] -mr-6 -ml-9  h-screen bg-cover bg-center relative ' alt="" />
        <div className="relative -ml-[63.5rem] opacity-90 h-screen bg-cover inset-0   bg-[#202449] w-full">
            <div className="flex justify-between">
          <h3 className="text-white p-7">USER PROFILE</h3>
          <input
      className="border-b-4   rounded-full pl-8 mt-7  py-1 w-60 focus:outline-none"
      type="text"
      placeholder="Search"
    />

    <CiSearch
      size={25}
      className="absolute right-4 top-2.5 mt-7 hover:bg-red-200 text-black"
    />
</div>
          <h4 className="text-white text-4xl p-4 mt-10">Hello Jesse</h4>
          <h5 className="text-[#959aa9] text-xs pl-4">
            This is your profile page. You can see the progress you have made with <br />
            your work and manage your projects or assigned tasks
          </h5>
          <button className="bg-[#11cdef] text-white rounded-md p-1 ml-16 mt-5">Edit profile</button>

          <div className="flex">
            <div className="w-[40rem] m-5 -mb-[15rem] rounded-md h-[35rem] bg-slate-100">  
                 <div className="text-slate-800  justify-between  flex"><h3 className='ml-4 mt-2'>  My account</h3>  <button className="  mt-2 mr-4 bg-blue-800 p-1 rounded-md text-white">Setting</button></div>
            <div className="text-xs">User INFORMATION</div>
            <div className="flex space-x-4 p-1 ">
        <div className="flex-1">
          <label htmlFor="username">Username</label>
          <input
          
            type="text"
            id="username"
            placeholder="lucky jess"
            // value={username}
            // onChange={handleUsernameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="jesse@example.com"
            // value={email}
            // onChange={handleEmailChange}
            className="border rounded-md p-1 w-full"
          />
        </div>

        
      </div>
      <div className="flex space-x-4 p-2">
        <div className="flex-1">
          <label htmlFor="firstName">First Name</label>
          <input
           placeholder="jessy"
            type="text"
            id="firstName"
            // value={firstName}
            // onChange={handleFirstNameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName">Last Name</label>
          <input
           placeholder="lucky"
            type="text"
            id="lastName"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
      </div>
      <hr className="border-l-0 border-slate-300 my-4" />
      <div className=""><h3 className="-mt-3">contact information</h3>
      <div className="flex-1 p-2">
          <label htmlFor="lastName">Address</label>
          <input
           placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
            type="text"
            id="lastName"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="border rounded-lg p-1 w-full"
          />
        </div>

        <div className="flex space-x-4 p-2">
        <div className="flex-1">
          <label htmlFor="firstName">city</label>
          <input
           placeholder="new york"
            type="text"
            id="firstName"
            // value={firstName}
            // onChange={handleFirstNameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName">country</label>
          <input
           placeholder="united state"
            type="text"
            id="lastName"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName">postal code</label>
          <input
           placeholder="postal code"
            type="number"
            id="lastName"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="border rounded-md p-1 w-full"
          />
        </div>
        </div>
        <hr className="border-l-0 border-slate-300 my-4" />
        <div className=""><p className="text-slate-500 pb-2">About Me</p>
        
        
        <div className="">
          <label htmlFor="about me" className='text-black'>About me</label>
          <input
           placeholder="A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
            type="text"
            id="lastName"
            // value={lastName}
            // onChange={handleLastNameChange}
            className="border rounded-s-lg p-5  w-full"
          />
        </div>

        </div>
      </div>  
    
            </div>
            <div className="w-[20rem] m-5 -mb-[15rem] rounded-md h-[35rem] bg-slate-100">

            <div className="text-slate-800">
            <div className="flex justify-between">
                <button className="mt-2 ml-4 bg-blue-800 p-1 rounded-md text-white">Connect</button>
                <button className="mt-2 mr-4 bg-blue-800 p-1 rounded-md text-white">Message</button>
            </div>
            {/* <label htmlFor="file-input">
                <img
                placeholder={mama1}
                    src={mama1}
                    className="w-36S h-36 p-1 object-cover ml-24 -mt-24 rounded-full cursor-pointer"
                    alt="Profile"
                />
            </label> */}
            <li>
            {/* <img src={mama} alt=""/> */}
            <img
                placeholder={mama1}
                    src={mama12}
                    className="w-36S h-36 p-1 object-cover ml-24 -mt-24 rounded-full cursor-pointer"
                    alt="Profile"
                />
            <input
                id="file-input"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              
            /> 
            </li>
            <div className="flex flex-row items-center justify-between p-4 ml-11 space-x-6">
                <a href="">
                    22 <br />
                    <span>friends</span>
                </a>
                <a href="">
                    22 <br />
                    <span>photos</span>
                </a>
                <a href="" className="flex-1">
                    8 <br />
                    <span>friends</span>
                </a>
            </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Dashboarful;
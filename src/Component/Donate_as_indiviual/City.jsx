/* eslint-disable no-unused-vars */
import React from 'react';
import p1 from '../Header/img/image copy.png';
import g2 from '../Header/img/grainet.png';
import {  FaCheck  } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchBar from '../Header/Search';
function City() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <>
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
                <div className="">
                <div className="flex items-center mt-7 ml-5  justify-center  ">
                    <h1 className="text-2xl md:text-3xl  mt-28 ml-14 space-y-3 font-semibold text-left">
                        Welcome to Blood and Tissue <br /> Supply Chain Management <br /> System </h1>
                        <br /><br /> <br /> 
                    
                      </div>

                      <div className="">
                        <ul  className='flex space-x-16  mt-16 ml-[5rem]  text-2xl'>
                      <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>
                        <li className="rounded-full w-12 p-3  bg-red-300 text-center ">   <FaCheck  className='justify-center' /></li>
<li className="rounded-full w-12 p-2 text-center  bg-slate-300">3</li>
<li className="rounded-full w-12 p-[0.6rem] text-center  bg-slate-300">4</li>
</ul>
                        </div>
        


                      </div>


          <div className="mt-48 space-y-3   md:mx-0">
            {['City', 'Sub City/Region', 'Zone', 'Woreda', 'Kebele'].map((label, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center">
                <label className="font-medium text-gray-900 w-60 ml-[5rem] ">{label}:</label>
                <input
                  type="text"
                  className="p-2 border -ml-20 border-gray-600 rounded-md focus:outline-none px-32 focus:ring-2 focus:ring-red-500 w-full md:w-2/3"
                />
              </div>
            ))}
             <div className="flex justify-around space-x-48 ml-28  mt-32]">
        <button
          type="button"
          onClick={() => navigate(-1)} // Go back to the previous page
          className="w-28 ml-[13rem] bg-red-300 text-white py-1 mt-5 rounded-md hover:bg-red-700 transition"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => navigate('/citynex')} // Change '/citynex' to your desired next page route
          className="w-28 ml-16 mx-2 mt-5 bg-red-300 text-white py-1 rounded-md hover:bg-red-700 transition"
        >
          Next
        </button>
      </div>
          </div>
          
        </div>
        
      </div>

     
   

    </>
  );
}

export default City;
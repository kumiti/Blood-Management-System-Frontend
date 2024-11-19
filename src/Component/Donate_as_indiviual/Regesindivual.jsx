/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import p1 from "../Header/img/image copy.png";
import ind from "../Header/img/reasind.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Header/Search";
import NavBar from "../Common/NavBar";
function Regesindivual() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    // Basic validation
    if (!firstName || !surname) {
      setError("Please fill in all required fields.");
      return;
    }

    // If validation passes, navigate to the next page
    //   navigate('/next-page') // Change '/next-page' to your desired route

    navigate("/register2");
  };

  return (
    <>
      <div className="flex bg-white">
        <div className="">
          <NavBar/>

          <div className="flex flex-col  mt-6 pt-16 pb-12">
            <p className="text-wrap text-2xl font-semibold  ml-56 mt-6 ">
              Welcome to Blood and Tissue <br /> Supply Chain Management <br />
              System
            </p>
          </div>
          <ul className="flex space-x-20  -mt-2 ml-[12rem] text-2xl">
            <li className="rounded-full w-12 p-2 text-center  bg-slate-300">
              1
            </li>
            <li className=" rounded-full w-12 p-2 text-center  bg-slate-300">
              2
            </li>
            <li className="rounded-full w-12 p-2 text-center  bg-slate-300">
              3
            </li>
            <li className="rounded-full w-12 p-2 text-center  bg-slate-300">
              4
            </li>
          </ul>
        </div>

        <div className="flex ">
          <div className="flex items-center font-semibold justify-center min-h-screen bg-white">
            <form className="bg-white mt-72  space-y-3 -ml-[36rem] max-w-sm">
              {error && <p className="text-red-500 mb-4">{error}</p>}

              <div className="-ml-9 flex ">
                <label className="  text-gray-700 w-full">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setError(""); // Clear error on change
                  }}
                  className="mt-1 px-36  py-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>

              <div className="-ml-10 flex">
                <label className="w-full text-gray-700 pr-1">Middle Name</label>
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                    setError(""); // Clear error on change
                  }}
                  className="mt-1 px-36  py-2 border border-gray-300 rounded w-full"
                />
              </div>

              <div className="-ml-10 flex">
                <label className="w-full text-gray-700 pr-3">Surname</label>
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => {
                    setSurname(e.target.value);
                    setError(""); // Clear error on change
                  }}
                  className=" px-36  py-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handleNext}
                className=" ml-56 bg-red-200  text-black-700 px-6 py-1  mt-11  text-2xl rounded hover:bg-red-300 "
              >
                Next
              </button>
            </form>
          </div>

          <div className="">
            <img
              src={ind}
              className="mt-[1rem] pt-40  w-[28rem] h-[33rem] max-w-xs md:max-w-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Regesindivual;

// eslint-disable-next-line no-unused-vars
import React from "react";
import p1 from "../Header/img/image copy.png";
import hello from "../Header/img/hello.png";
import SearchBar from "../Header/Search";
import { Link } from "react-router-dom";
function Registersion() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="">
          <div className="bg-red-100 w-full border fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2">
            <img src={p1} alt="Logo" className="h-14" />

            <div className="text-black text-lg ml-0 md:ml-52 flex flex-wrap font-semibold space-x-2 md:space-x-4 items-center justify-center mt-2 md:mt-0">
              <a className="hover:text-red-600" href="#">
                Home
              </a>
              <a className="hover:text-red-600" href="#">
                About
              </a>
              <a className="hover:text-red-600" href="#">
                Blood
              </a>
              <a className="hover:text-red-600" href="#">
                Contact Us
              </a>
              <a className="hover:text-red-600" href="#">
                Awareness
              </a>
            </div>

            <div className="flex flex-row space-x-2 md:space-x-4 border-black">
              <div className="relative">
                <SearchBar />
              </div>
              <Link to="/">
                <button className=" mr-5 p-2  w-28 h-11 text-xl rounded-md bg-white border hover:bg-slate-200 border-gray-300">
                  Log In
                </button>
              </Link>
              <button className="p-2 w-24 text-sm md:text-xl rounded-md bg-red-600 hover:bg-red-900 text-white">
                Sign Up
              </button>
            </div>
          </div>

          <div className="flex flex-col pt-20 pb-14 px-4 md:px-0">
            <p className="text-wrap font-semibold ml-[1rem] text-center mt-[0.2rem] -mb-4 text-lg md:text-2xl md:text-center">
              Welcome to Blood and Tissue Supply <br /> Chain Management System
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={hello}
              alt=""
              className="w-11/12  -ml-[1rem] md:w-[26rem] h-auto -mt-11"
            />
            <a
              href=""
              className="text-red-500 text-2xl md:text-3xl -mt-24 md:ml-5 font-extrabold mr-[65rem]"
            >
              Register as
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-around mt-0">
            <Link to="/Donersubmit">
              <button className="bg-red-100 text-2xl text-black font-bold border-2 border-black rounded-lg mx-5 mb-2 md:mb-0 px-8 py-[0.4rem] hover:bg-red-400 transition">
                As Donor
              </button>
            </Link>
            <Link to="/regsterstaff">
              {" "}
              <button className="bg-red-100 text-black font-bold text-xl border-2 border-black mx-5 mb-2 md:mb-0 px-14  py-[0.4rem] rounded-lg hover:bg-red-400 transition">
                As Staff
              </button>{" "}
            </Link>
          </div>

          <div className="flex justify-center ">
            <Link to="/hostpitalsubmit">
              <button className="bg-red-100 text-black py-[0.3rem] font-bold text-2xl border-2 border-black  px-16 rounded-lg hover:bg-red-400 transition">
                As Hospital
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registersion;

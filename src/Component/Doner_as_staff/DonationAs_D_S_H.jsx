// eslint-disable-next-line no-unused-vars
import React from "react";
import p1 from "../Header/img/image copy.png";
import hello from "../Header/img/hello.png";
import SearchBar from "../Header/Search";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar";
function Registersion() {
  return (
    <>
      <div className="flex flex-col bg-white">
        <div className="">
          
          <NavBar/>


            

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

          <div className="">
            <Link to="/Donersubmit">
              <button className="bg-red-100 text-2xl text-black font-bold border-2 border-black rounded-lg mx-5 mb-2 md:mb-0 px-8 py-[0.4rem] hover:bg-red-400 transition">
                As Donor
              </button>
            </Link>
            
          </div>

          <div className="">
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

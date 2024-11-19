import React, { useState } from "react";
import logo from "../Header/img/image copy.png";
import home from "../Header/img/blood heart.png";
import { Link } from "react-router-dom";
import SearchBar from "../Header/Search";

function NavBar() {
  return (
    <div className=" bg-red-100 shadow-md w-full border  fixed border-white flex flex-col md:flex-row items-center justify-between p-2 px-16">
      <img src={logo} alt="Logo" className="h-14" />

      <div className="text-black text-sx ml-52 flex flex-wrap font-semibold space-x-4 items-center justify-center mt-2 md:mt-0">
        <a className="hover:text-red-600" href="/#home">
          Home
        </a>
        <a className="hover:text-red-600" href="/#contact-us">
          About
        </a>
        <a className="hover:text-red-600" href="/#blood">
          Blood
        </a>
        <a className="hover:text-red-600" href="/#contact-us">
          Contact Us
        </a>
        <a className="hover:text-red-600" href="/Awareness">
          Awareness
        </a>
      </div>
      <div className="flex space-x-2 border-black">
        <div className="relative ">
          <SearchBar />
        </div>
        <Link to="/login">
          <button className=" p-2 w-20 text-md rounded-md bg-white border hover:bg-red-50 border-red-300">
            Log In
          </button>
        </Link>

        <Link to="/registerion ">
          <button className="p-2 w-20 text-md rounded-md bg-red-600 hover:bg-red-900 text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

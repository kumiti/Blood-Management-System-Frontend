import React, { useState } from "react";
import NavBar from "../Common/NavBar";

const LogIn = () => {
  //   const [formData, setFormData] =
  //     useState <
  //     FormData >
  //     {
  //       userName: "",
  //       password: "",
  //     };

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted:", formData);
  //     // Add your form submission logic here (e.g., API call)
  //   };

  return (
    // <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
    <div>
      <NavBar />
      <div className="my-auto h-screen flex flex-col justify-center">
        <form className="mx-auto  p-8 flex flex-col gap-4 shadow-xl border border-red-300 rounded w-1/2 my-auto ">
          <h2>Log In</h2>
          <p></p>

          <input
            type="username"
            name="username"
            placeholder="username"
            // value={formData.username}
            // onChange={handleChange}
            required
            className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-2/3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            required
            className="p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-2/3"
          />
          <button
            type="submit"
            className="p-2 mr-5 w-36 text-2xl rounded-md bg-red-600 text-white border border-gray-300"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

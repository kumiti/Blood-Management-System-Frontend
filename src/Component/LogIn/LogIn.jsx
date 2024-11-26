import React from "react";
import NavBar from "../Common/NavBar";

const LogIn = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <NavBar />

      {/* Login Section */}
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-md bg-white shadow-lg border border-red-200 rounded-lg p-8 space-y-6">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-red-600">
            Log In to Your Account
          </h2>
          <p className="text-center text-gray-600">
            Access our platform to save lives and manage blood bank operations.
          </p>

          {/* Username Input */}
          <div className="flex flex-col">
            <label htmlFor="username" className="text-gray-700 font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
              className="p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-bold text-lg hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>

          {/* Additional Links */}
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>
              Don’t have an account?{" "}
              <a href="/registerion" className="text-red-500 font-semibold hover:underline">
                Sign Up
              </a>
            </p>
            <p>
              Forgot your password?{" "}
              <a href="/reset-password" className="text-red-500 font-semibold hover:underline">
                Reset it here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

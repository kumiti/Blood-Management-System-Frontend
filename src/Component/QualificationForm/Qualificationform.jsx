/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import p1 from "../Header/img/image copy.png";
import NavBar from "../Common/NavBar";

const Qualificationform = () => {
  const [healthCondition, setHealthCondition] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [medications, setMedications] = useState("");
  const [allergies, setAllergies] = useState("");

  return (
    <>
      <NavBar />
      <div className="flex flex-col bg-white min-h-screen">
        <div className="flex flex-col mt-28 mb-2 top-16 w-full z-10">
          <p className="text-wrap font-semibold ml-72 text-center md:text-left text-2xl md:text-3xl max-w-2xl">
            Welcome to Blood and Tissue Supply <br /> Chain Management System
          </p>
        </div>

        <div className="flex mt-9">
          <form className="bg-white w-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Donor Qualification Form
            </h2>

            <div className="mb-2 -ml-28 w-[48rem]">
              <label
                className="block text-gray-700 mb-2 font-bold text-2xl"
                htmlFor="healthCondition"
              >
                1. What is your health condition today?
              </label>
              <textarea
                id="healthCondition"
                name="healthCondition"
                value={healthCondition}
                onChange={(e) => setHealthCondition(e.target.value)}
                className=" p-4 border rounded-lg w-full text-gray-600 h-16"
                placeholder="Describe your health condition..."
                required
              />
            </div>

            <div className="mb-2 -ml-28 w-[48rem]">
              <label
                className="block text-gray-700 mb-2 font-bold text-2xl"
                htmlFor="bloodPressure"
              >
                2. What is your current blood pressure?
              </label>
              <input
                id="bloodPressure"
                name="bloodPressure"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                className="border p-4 border-gray-400 rounded-xl w-full text-gray-600 "
                placeholder="Enter your blood pressure..."
                required
              />
            </div>

            <div className="mb-2 -ml-28 w-[48rem]">
              <label
                className="block text-gray-700 mb-2 font-bold text-2xl"
                htmlFor="medications"
              >
                3. Are you currently taking any medications?
              </label>
              <textarea
                id="medications"
                name="medications"
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                className="border p-4 border-gray-400 rounded-xl w-full text-gray-600 h-16"
                placeholder="List any medications..."
                required
              />
            </div>

            <div className="mb-2 -ml-28 w-[48rem]">
              <label
                className="block text-gray-700 mb-2 font-bold text-2xl"
                htmlFor="allergies"
              >
                4. Do you have any allergies?
              </label>
              <textarea
                id="allergies"
                name="allergies"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="border p-4 border-gray-400 rounded-xl w-full text-gray-600 h-16"
                placeholder="Describe any allergies..."
                required
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-red-200 rounded-xl py-3 mb-3 px-8 hover:bg-red-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Qualificationform;

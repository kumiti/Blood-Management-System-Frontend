import React, { useState } from "react";
import BloodHeart from "../Header/img/awareness.picture.jpg";
import p1 from "../Header/img/image copy.png";
import SearchBar from "../Header/Search";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar";

// Array of blood types with details
const bloodTypes = [
  {
    id: 1,
    bloodType: "A+",
    compatibility: "Can donate to A+ and AB+; receive from A+, A-, O+, O-",
    info:
      "Common blood type. Preferred for emergencies due to compatibility with A and AB.",
  },
  {
    id: 2,
    bloodType: "B+",
    compatibility: "Can donate to B+ and AB+; receive from B+, B-, O+, O-",
    info:
      "Ideal for patients with B and AB blood types. In demand for rare procedures.",
  },
  {
    id: 3,
    bloodType: "O+",
    compatibility: "Can donate to all positives; receive from O+ and O-",
    info:
      "Most common blood type. Essential for trauma and emergency transfusions.",
  },
  {
    id: 4,
    bloodType: "AB+",
    compatibility: "Universal recipient; can receive from all types",
    info: "Universal recipient, highly versatile in emergencies.",
  },
  {
    id: 5,
    bloodType: "A-",
    compatibility: "Can donate to A+, A-, AB+, AB-; receive from A- and O-",
    info:
      "Less common. Important for compatible recipients due to Rh-negative factor.",
  },
  {
    id: 6,
    bloodType: "O-",
    compatibility:
      "Universal donor; can donate to all blood types, receive from O- only",
    info:
      "Critical for emergencies as a universal donor, though compatible with O- only.",
  },
];

const Awareness = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bloodTypes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bloodTypes.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col">
      {/* Navbar Section */}
      <NavBar />

      {/* Awareness Section */}
      <section className="bg-white dark:bg-gray-900 mt-10">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Give blood ,Give plasma ,Share life,Share often.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              A simple act of kindness can make a world of difference. Donate
              blood and help save lives. Your donation can help patients
              battling cancer, accidents, and surgeries. Every drop counts. Roll
              up your sleeve and be a hero.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
            >
              Donate
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <img
            className="w-full h-[26rem]"
            src={BloodHeart}
            alt="Blood donation awareness image"
          />
        </div>
      </section>

      {/* Benefits of Blood Donation */}
      <div className="flex flex-col items-center gap-8" id="blood">
        <h1 className="text-3xl font-bold text-red-700">
          Use of Blood Donation
        </h1>
        <div className="grid grid-cols-3 gap-6 px-8">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-center font-bold text-2xl">
              Improve cardiovascular health
            </h1>
            <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
              Donating blood can help lower your risk of heart attack and
              stroke. Studies show that donors can experience an 88% lower risk
              of acute myocardial infarction compared to non-donors.
            </h5>
          </div>

          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Reduce risk of cancer</h1>
            <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
              Some studies have shown that regular donors have a lower risk of
              certain types of cancer, such as liver and colon cancer.
            </h5>
          </div>

          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Free health screening</h1>
            <h5 className="text-slate-500 ml-10 mb-4 text-sm text-justify">
              When you donate blood, you will receive a free health screening,
              which includes checking your blood pressure, temperature, pulse,
              and iron levels.
            </h5>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Peace of mind</h1>
            <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
              Knowing that you have helped save lives can give you a sense of
              satisfaction and peace of mind.
            </h5>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Improves skin aging</h1>
            <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
              Donating blood can reduce iron deposits and promote collagen
              re-synthesis, which can improve skin aging.
            </h5>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h1 className="font-bold text-2xl">Research and development</h1>
            <h5 className="text-slate-500 ml-10 mt-5 text-sm text-justify">
              Blood donations contribute to medical research that leads to
              advancements in treatments, diagnostics methods, and the
              understanding of various diseases.
            </h5>
          </div>
        </div>
      </div>

      {/* Blood Donation Eligibility Criteria */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
            Blood Donation Eligibility Criteria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Age</h3>
              <p className="text-gray-600 mt-2">
                Donors should be between 17 and 65 years old. Donors under 18
                may need parental consent in some regions.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Weight</h3>
              <p className="text-gray-600 mt-2">
                Donors should weigh at least 110 pounds (50 kg).
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Health Status</h3>
              <p className="text-gray-600 mt-2">
                Donors must be in generally good health and free from illness.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Hemoglobin Level</h3>
              <p className="text-gray-600 mt-2">
                A minimum hemoglobin level of 12.5 g/dL is required for blood donation.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Frequency of Donation</h3>
              <p className="text-gray-600 mt-2">
                Whole blood can be donated once every 8 weeks, while platelets and plasma
                can be donated more frequently.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Medications</h3>
              <p className="text-gray-600 mt-2">
                Certain medications may prevent donation. It's important to consult with a
                healthcare provider.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Pregnancy</h3>
              <p className="text-gray-600 mt-2">
                Women who are pregnant or recently gave birth should not donate blood.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Tattoos</h3>
              <p className="text-gray-600 mt-2">
                Donors who have had a tattoo in the last 12 months may not be eligible.
              </p>
            </div>

            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">Blood Pressure</h3>
              <p className="text-gray-600 mt-2">
                Donors with uncontrolled high blood pressure should not donate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blood Type Slider */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            maxWidth: "800px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "2rem",
          }}
        >
          <button
            style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#b71c1c",
              color: "#fff",
              border: "none",
              padding: "1rem",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handlePrev}
          >
            &lt;
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#b71c1c",
                marginBottom: "1rem",
              }}
            >
              {bloodTypes[currentIndex].bloodType}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                textAlign: "center",
                color: "#555",
                marginBottom: "1rem",
                padding: "0 1rem",
              }}
            >
              {bloodTypes[currentIndex].compatibility}
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#777",
                textAlign: "center",
                padding: "0 1rem",
              }}
            >
              {bloodTypes[currentIndex].info}
            </p>
          </div>
          <button
            style={{
              position: "absolute",
              right: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "#b71c1c",
              color: "#fff",
              border: "none",
              padding: "1rem",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awareness;

import React, { useState } from "react";
import logo from "./img/image copy.png";
import home from "./img/blood heart.png";
import Footer from "./Footer";
import CarouselPage from "./CarouselPage"; // Ensure correct file path
import Colabration from "./Colabration";
import p1 from "./img/10009 copy 2.png";
import p2 from "./img/10001 copy.png";
import p3 from "./img/10002 copy.png";
import p4 from "./img/10007.jpg";
import p5 from "./img/10008.jpg";
import p6 from "./img/10006.jpg";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="bg-white" id="home">
        <Navbar />
        {/* Hero Section */}
        <div>
          {" "}
          <div className="flex flex-wrap items-center justify-around py-16 px-8 bg-red-50">
            {/* Left Content */}
            <div className="flex flex-col space-y-8 max-w-lg">
              <h1 className="text-4xl font-extrabold text-gray-800">
                Welcome to Blood and Tissue Supply Chain Management System
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Join us at Blood and Tissue Supply Chain Management System and
                help save lives by donating blood or finding the nearest blood
                bank with our seamless management system.
              </p>
              <Link to="/registerion">
                <button
                  className="bg-red-500 hover:bg-red-400 transition-colors text-white text-lg font-semibold py-3 px-6 rounded-md"
                  aria-label="Register for the Blood Donation System"
                >
                  Register Now
                </button>
              </Link>
            </div>

            {/* Right Content */}
            <div className="w-full max-w-md">
              <img
                src={home}
                alt="A heart-shaped blood donation symbol"
                className="object-cover w-full rounded-xl"
              />
            </div>
          </div>
          <p className="px-56 text-xl">
            The Blood Bank service in Ethiopia was initiated in 1969 by the
            Ethiopian Red Cross Society in Addis Ababa . Initially, it operated
            through 12 regional blood banks, catering to the need of 52% of the
            countrys hospitals April 2012, the Federal Ministry of Health (MOH)
            decided to transfer the responsibility from the Ethiopian Red In
            Cross Society to a government-managed service under the MOH. This
            change aimed to enhance efficiency and integrate the Blood Bank
            Service into the mainstream healthcare system. One of the primary
            objectives of the EBBS is to ensure the availability of safe blood
            and blood products nationwide.`
          </p>
        </div>

        {/* Carousel Section */}
        <div className="py-16 bg-white">
          <CarouselPage />
        </div>

        {/* Blood Donation Process */}
        <div className="py-16 px-8 bg-white" id="blood">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">
              Our Blood Donation Process
            </h2>
            <p className="text-gray-600 mt-4">
              A streamlined journey from donation to saving lives.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Process Step 1 */}
            <div className="text-center group relative">
              <h3 className="text-3xl font-bold">1. Donate Blood</h3>
              <p className="text-gray-600 mt-2">
                Schedule your donation at one of our locations and help save
                lives.
              </p>
              <img
                src={p1}
                alt="Illustration of a person donating blood"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 text-gray-800 text-sm rounded-lg p-4 shadow-lg hidden group-hover:block">
                Visit our donation centers or participate in local blood drives
                to contribute.
              </div>
            </div>
            {/* Process Step 2 */}
            <div className="text-center">
              <h3 className="text-3xl font-bold">2. Blood Processing</h3>
              <p className="text-gray-600 mt-2">
                Blood is processed, tested, and stored safely in our facilities.
              </p>
              <img
                src={p2}
                alt="Illustration of blood processing equipment"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
            </div>
            {/* Process Step 3 */}
            <div className="text-center">
              <h3 className="text-3xl font-bold">3. Deliver Blood</h3>
              <p className="text-gray-600 mt-2">
                Safely delivered to hospitals for patient care.
              </p>
              <img
                src={p3}
                alt="A vehicle delivering blood supplies"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold">4.Controlling Blood Stock</h3>
              <p className="text-gray-600 mt-2">
                Real time monitoring ensures accurate blood control.{" "}
              </p>
              <img
                src={p4}
                alt="Illustration of blood processing equipment"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
            </div>
            {/* Process Step  */}
            <div className="text-center">
              <h3 className="text-3xl font-bold">5.Analyizing& Reporting</h3>
              <p className="text-gray-600 mt-2">
                Insights and analytics for efficient management.
              </p>
              <img
                src={p5}
                alt="A vehicle delivering blood supplies"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
            </div>
            <div className="text-center group relative">
              <h3 className="text-3xl font-bold">6.user management </h3>
              <p className="text-gray-600 mt-2">
                secure user administration and management tools.
              </p>
              <img
                src={p6}
                alt="Illustration of a person donating blood"
                className="w-full h-64 object-cover rounded-lg mt-6"
              />
              <div className="absolute bottom-0 left-0 bg-white bg-opacity-90 text-gray-800 text-sm rounded-lg p-4 shadow-lg hidden group-hover:block">
                Visit our donation centers or participate in local blood drives
                to contribute.
              </div>
            </div>
          </div>
        </div>

        {/* Collaborations Section */}
        <div className="py-16 px-8 bg-white">
          <h2 className="text-center text-4xl font-bold mb-8">
            Our Collaborations
          </h2>
          <Colabration />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default Header;

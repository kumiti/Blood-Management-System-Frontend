// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import logo from "./img/image copy.png";
import home from "./img/blood heart.png";
// import p1 from './img/10002.jpg'

import p1 from "./img/10009 copy 2.png";
import Footer from "./Footer";
import CarouselPage from "./Carasol";
import Colabration from "./Colabration";
import p2 from "./img/10001 copy.png";
import p3 from "./img/10002 copy.png";
import p4 from "./img/10007.jpg";
import p5 from "./img/10008.jpg";
import p6 from "./img/10006.jpg";

import { Link } from "react-router-dom";
import SearchBar from "./Search";
import Navbar from "../Common/Navbar";

function Header() {
  return (
    <>
      <div className="bg-white " id="home">
        <Navbar />
        <div className="flex justify-around p-40 mb-2 ">
          <div className="fljex flex-col space-y-10 pr-5">
            <p className="text-wrap font-bold  text-3xl">
              Welcome to Blood and Tissue <br /> Supply Chain Management System
            </p>
            <p className="text-2xl mb-0">
              Join us at Blood and Tissue Supply Chain <br /> Management System
              and help save lives <br />
              by donating blood or finding the nearest <br /> blood bank with
              our seamless management system.
            </p>
            <Link to="/registerion">
              <button className="bg-[#f72828fe] w-[200px]   rounded-md px-5 h-14 text-white hover:bg-red-400 text-2xl text-bold mt-[3rem]">
                Register
              </button>
            </Link>
          </div>
          <div className=" p-16 h-48 flex items-center justify-center">
            <img
              src={home}
              alt=""
              className="w-full h-[34rem]   pt-[8rem] object-cover"
            />
          </div>
        </div>
        <div className="bg-red-100 w-full flex justify-center items-center min-h-screen py-16 px-4">
          <p className=" text-black text-2xl ">
            The Blood Bank service in Ethiopia was initiated in 1969 by the
            Ethiopian Red Cross Society in Addis Ababa .<br />
            Initially, it operated through 12 regional blood banks, catering to
            the need of 52% of the countrys hospitals
            <br />
            April 2012, the Federal Ministry of Health (MOH) decided to transfer
            the responsibility from the Ethiopian Red <br />
            In Cross Society to a government-managed service under the MOH. This
            change aimed to enhance efficiency <br />
            and integrate the Blood Bank Service into the mainstream healthcare
            system. One of the primary objectives <br />
            of the EBBS is to ensure the availability of safe blood and blood
            products nationwide.
            <br />
          </p>
        </div>
        <div className="bg-red-100 h-[28rem] showindictor">
          <CarouselPage />
        </div>

        <div className="" id="blood">
          <div className="flex mb-16 mt-5 justify-around ">
            <div className="">
              <h1 className=" font-bold text-4xl m-5 mb-4">1 Donate Blood</h1>
              <h5 className="text-slate-500 ml-10 mb-4">
                {" "}
                Schedule your donation at one of <br />
                our locations and help save lives.
              </h5>
              <img
                src={p1}
                className="w-full rounded-2xl mb-10 group    transition-transform duration-300 transform group-hover:scale-150 "
              />
              <h5 className="text-slate-500 ml-10">
                Schedule your blood donation at one of our <br /> convenient
                locations. Your generous <br /> contribution can save lives and
                is the first <br />
                step in our life-saving journey.
              </h5>
            </div>

            <div className="text-center">
              <h1 className=" font-bold text-4xl mb-4 m-5">
                2 Blood Processing
              </h1>
              <h5 className="text-slate-500 ml-10 mb-4">
                Bood is processed, tested,and <br /> stored safely in our
                facilities.{" "}
              </h5>
              <img
                src={p2}
                className="ml-10 w-[24rem] rounded-2xl mb-12 "
                alt=""
              />
              <h5 className="text-slate-500 ml-10">
                After donation, the blood is carefully <br />
                processed,tested,andstored in our state-
                <br />
                of-the-art facilities to ensure it meets the <br /> highest
                safety standards before being <br />
                distributed to hospitals.
              </h5>
            </div>

            <div className="text-center">
              <h1 className=" font-bold text-4xl m-5 mb-4">3 Deliver Blood</h1>
              <h5 className="text-slate-500 ml-10 mb-4">
                Safely delivered to hospitals for <br /> patient care.
              </h5>
              <img
                src={p3}
                className="ml-10 w-[24rem]  mb-12 rounded-2xl"
                alt=""
              />
              <h5 className="text-slate-500 ml-10">
                The processed blood is promptly delivered <br />
                to hospitals,where it is provided to medical <br /> carers to
                administer to patients in need,
                <br />
                ensuring timely and effective care.
              </h5>
            </div>
          </div>

          <div className="flex justify-around">
            <div className="">
              <h1 className=" font-bold text-4xl ">
                4 Controlling <br /> Blood Stock
              </h1>
              <h5 className="text-slate-500 ml-10 mt-5">
                Our system ensures accurate blood <br />
                control through real-time monitoring
              </h5>
              <img src={p4} className=" w-[24rem] rounded-2xl mt-10" alt="" />
            </div>
            <div className="">
              <h1 className=" font-bold text-4xl ">
                5 Analayiting And <br /> Reporting
              </h1>
              <h5 className="text-slate-500 ml-10 mt-5">
                Our system goes beyond basic blood <br />
                bank management; it empowers with <br />
                insightful data analytics
              </h5>
              <img src={p5} className=" w-[24rem] mt-6  rounded-2xl" alt="" />
            </div>
            <div className="">
              <h1 className=" font-bold text-4xl ">6 User Mangment</h1>
              <h5 className="text-slate-500 ml-10 mt-5">
                The system manges user security <br /> and include powerful user
                administ <br />
                ration mechanism
              </h5>
              <img src={p6} className=" w-[24rem] rounded-2xl mt-14 " alt="" />
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="justify-center text-center pt-32 font-semibold text-5xl">
            Our colabrations
          </h1>
        </div>
        <div className=" bg-red-100 h-[15rem] mb-36 mt-10 ">
          <Colabration />
        </div>
        {/* <ImageCarousel/> */}
        <div id="contact-us">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Header;

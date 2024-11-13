// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from './img/image copy.png';
import { FaTelegram,FaFacebook,FaEnvelope,FaPhone,FaMailBulk} from 'react-icons/fa';
const Footer = () => {
  return (

    <>
      <footer className="bg-[#fa5555] text-white h-[36rem] ">
     
        <div className="container  ">
          {/* Column 1: Logo and Paragraph */}
          <div className="flex flex-col items-start">
            <div className='flex'>
              <img src={logo} alt="Logo" className="h-16 mb-2" />
              <p className='mt-11'>blood and tissue supply chain management system</p>
            </div>
            </div>
<div className=" flex justify-between p-5 ">
            <div className=' '>
              <h1 className='font-normal ml-16  text-4xl'>About Us</h1>
            </div>
 
 <div className=""><h3 className="font-normal mr-24 text-4xl">contact Us</h3></div>

 </div>


<div className="flex justify-around">

<div className="text-2xl"><p> committed to saving lives <br /> through efficient blood <br /> management. Our state-of <br />-the-art blood bank <br /> management system ensures <br /> a seamless process from <br /> donor registration to blood <br /> transfusion</p></div>



<div className="text-2xl"><p>dedicated blood bank committed <br /> to providing a reliable and efficient blood <br /> supply to the community. Our advanced <br /> blood bank management system is <br /> designed to streamline operations, improve <br />blood inventory management, and enhance <br /> patient safety.</p></div>





<div className="flex">
<div className="flex-col  ">
<a 
          href="https://www.facebook.com/www.facebook.bloodbankeethiopia.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-blue-400 space-y-3 hover:text-blue-800"
        >
          <FaFacebook size={30} className="mr-2 rounded-full bg-white" />
          <span>Follow us on Facebook</span>
        </a>
        
        <a 
      href="https://t.me/joinchat/www.nbbs.gov.et" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center space-y-3 text-blue-400 hover:text-blue-700"
    >
      <FaTelegram size={30} className='mr-2 bg-white  rounded-full' /> 
      <span>Join telegram</span>{/* Adjust the size as needed */}
    </a>

      <a 
          href="mailto:your-email@example.com" 
          className="flex items-center text-blue-400 space-y-3 hover:text-blue-800"
        >
          <FaEnvelope size={30} className="mr-2  rounded-md  bg-white" />
          <span>Email Us</span>
        </a>


<div className="">

        <a
          href="tel:+1234567890"  
          className="flex items-center text-blue-400 space-y-3 hover:text-blue-800"
        >
          <FaPhone size={30} className="mr-2  rounded-full" />
          <span>Call Us: +251118271902 HR office  </span>
        </a>

        {/* Postal Address */}

        <a 
      href=""
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center  text-blue-400 space-y-3 rounded-full hover:text-blue-600"
    >
      <FaMailBulk size={30}  className='bg-white  rounded-md' /> {/* Adjust the size as needed */}
    </a>
        </div>

        </div>

        </div>
      </div>
</div>
      </footer>


<div className="bg-white flex-row  ">
<div className="flex flex-col  ml-64  ">
            <div className='flex'>
              <img src={logo} alt="Logo" className="h-36 " />
              <p className='mt-11 text-red-500 text-3xl font-bold'>Blood Bank Mangagment System</p>
            </div>
            </div>
<div className="flex text-slate-600 ml-80">

  <p className='-mt-[3.5rem] ml-24'>© 2025  A product of Hope Enterprise University College</p>
  
</div>



</div>
     
    </>
  );
};

export default Footer;







// eslint-disable-next-line no-unused-vars
import React from 'react'
import p1 from '../Header/img/image copy.png'
import gre from '../Header/img/greeting.png'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../Header/Search';
import { Link } from 'react-router-dom';
function Indivdualdash() {
  const navigate = useNavigate();

  const Choose = () => {
    navigate('/register1');
  };
  return (
 

<>
<div className=" bg-white ">

{/* <div className="  ">
  <img src={p1}  className=' h-12  w-44 ml-[3rem] ' alt="" />
</div> */}


<div className=''>
      <div className=" bg-red-100 w-full border  fixed border-white rounded-full flex flex-col md:flex-row items-center justify-between p-2">
        <img src={p1} alt="Logo" className="h-14" />

        <div className="text-black text-xl ml-52  flex flex-wrap font-semibold space-x-4 items-center justify-center mt-2 md:mt-0">
   <Link to='/'>  <a  className="hover:text-red-600" href="#">Home</a></Link>  
                <Link to='/'>     <a className="hover:text-red-600" href="#">About</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Blood</a></Link>  
                <Link to='/'>    <a className="hover:text-red-600" href="#">Contact Us</a></Link> 
                <Link to='/'>    <a className="hover:text-red-600" href="#">Awareness</a></Link> 
</div>
        <div className="flex flex-row space-x-4 border-black">
  <div className="relative ">
  <SearchBar/>

  </div>
  <Link to='/'>
  <button className=" mr-5 p-2  w-28 h-11 text-xl rounded-md bg-white border hover:bg-slate-200 border-gray-300">
    Sign Up
  </button>
  </Link>

<Link to='/registerion '>
  <button   className="p-2  w-28 text-xl rounded-md bg-red-600 hover:bg-red-900 text-white">
    Sign In
  </button>
  </Link>
</div>
      </div>

      <div className="flex flex-col  pt-32 pb-12 fixed">
      <p className="text-wrap font-semibold  ml-96 text-3xl">Welcome to Blood   and  Tissue  <br />  Supply Chain  Management  <br />System</p>
      </div>

      <div className="flex justify-between ">
        <button  onClick={Choose} className="bg-red-100 mt-[19rem] ml-[7rem] text-black font-bold border-2 border-black text-2xl rounded-lg   px-14  py-2 hover:bg-red-400 transition">
As Indivdual
          </button>
          <button  onClick={()=> navigate('/regsterorganation')} className="bg-red-100 mt-[19rem] text-black  font-bold text-2xl border-2   border-black  px-14 py-2 ml-[29rem]  rounded-lg  mr-[6rem] hover:bg-red-400 transition">
          As Organaztion
          </button>
          </div>

     

</div>

  
<div className="">
    <img src={gre} className='w-1/3 ml-[26rem] -mt-40' alt="" />
</div> 


</div>







 


</>
  )
}

export default Indivdualdash
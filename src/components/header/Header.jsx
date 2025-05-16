import React from "react";
import { LINKS } from "../../static";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./style.css";
import toast from "react-hot-toast";
import Headrhero from "../headerhero/Headrhero";

const Header = () => {
  const handleClick = () => {
    toast.success("salom")
  }
  return (
    <>
    
    <header className="bg-blue-500">
      <nav className="container mx-auto flex justify-between h-[80px] items-center text-white">
        <h2 className="text-[22px] font-extrabold">SAMSUNG</h2>
        <ul className="flex gap-6 collection">
          {LINKS?.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
          <div className="flex">

          <div onClick={handleClick}>
            <FaRegUserCircle className="text-2xl text-yellow-500" />
          </div>
          <div className="bg-white flex items-center justify-center rounded-2xl" onClick={()=> toast.error("xato", {position: "bottom-right"})}>
            <FaSearch className="text-[20px] text-gray-400" />
            <input className="rounded-2xl text-[#000]" placeholder="hello world" type="text"  />
          </div>
          <div>
            <IoCartOutline className="text-2xl text-yellow-500" />
          </div>
          </div>
     
      </nav>
      
    </header>
      <Headrhero/>
    </>
  );
};

export default Header;

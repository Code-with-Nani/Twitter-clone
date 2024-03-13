import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PiBell } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { RiFileList2Line } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import img from "../assets/images/myimg.jpg"

const First = () => {
  return (
    <div className="main regular  mt-1 select-none sticky top-0 ">
      <div className="logo text-[30px] w-fit mx-auto xl:-translate-x-[62px]  cursor-pointer hover:bg-[#181818] text-center md:pl-3 md:pr-4 rounded-full py-[12px] ">
        <RiTwitterXLine className="" />
      </div>

      <div className="sidebar  flex justify-center md:translate-x-8 ">
        <ul className="flex flex-col text-[20px] ">
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  bold ">
            <MdHomeFilled className="text-3xl" /> <span className="hidden lg:block">Home</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <IoSearch className="text-[26px]" /> <span className="hidden lg:block">Explore</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <PiBell className="text-[26px]" /> <span className="hidden lg:block">Notifications</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <MdOutlineMail className="text-[26px]" /> <span className="hidden lg:block">Messages</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <MdOutlineIndeterminateCheckBox className="text-[26px]" />
            <span className="hidden lg:block">Grok</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <RiFileList2Line className="text-[26px]" /> <span className="hidden lg:block">Lists</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <FaRegBookmark className="text-[26px]" /><span className="hidden lg:block"> Bookmarks</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <AiOutlineUsergroupAdd className="text-[26px]" />
           <span className="hidden lg:block">Communities</span>  
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <RiTwitterXLine className="text-[26px]" />
            <span className="hidden lg:block">Premium</span> 
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <RiAccountCircleLine className="text-[26px]" />
           <span className="hidden lg:block">Profile</span>  
          </li>
          <li className="flex justify-start items-center gap-3  cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px]  ">
            <CgMoreO className="text-[26px]" />
            <span className="hidden lg:block">More</span> 
          </li>
          <li className="cursor-pointer hidden lg:block bg-[#4198fc] hover:bg-[#1D9BF0] delay-150 w-fit mx-auto px-24 rounded-full py-[8px] medium mt-4">
           
            Post
          </li>

          <li className="lg:flex justify-start hidden  items-center gap-3  cursor-pointer hover:bg-[#181818] w-fit md:pl-3 md:pr-5 rounded-full py-[10px] mt-4 ">
          <img className='h-10 rounded-full w-10 object-cover' src={img} alt="" />
          <div className="">
              <h4 className='bold text-[18px]'>Muhammad Hanan</h4><h2 className='text-sm text-[#737679] regular pl-3'>@HananUsman82357</h2>
              </div>
            
           
          </li>
        </ul>
      </div>
    </div>
  );
};

export default First;

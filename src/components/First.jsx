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

const First = () => {
  return (
    <div className="main regular  mt-1 select-none ">
      <div className="logo text-[30px] w-fit mx-auto -translate-x-[62px] cursor-pointer hover:bg-[#181818]  pl-3 pr-4 rounded-full py-[12px] ">
        <RiTwitterXLine className="" />
      </div>

      <div className="sidebar  flex justify-center  ">
        <ul className="flex flex-col text-[20px] ">
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  bold ">
            <MdHomeFilled className="text-3xl" /> Home
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <IoSearch className="text-[26px]" /> Explore
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <PiBell className="text-[26px]" /> Notifications
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <MdOutlineMail className="text-[26px]" /> Messages
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <MdOutlineIndeterminateCheckBox className="text-[26px]" />
            Grok
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <RiFileList2Line className="text-[26px]" /> Lists
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <FaRegBookmark className="text-[26px]" /> Bookmarks
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <AiOutlineUsergroupAdd className="text-[26px]" />
            Communities
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <RiTwitterXLine className="text-[26px]" />
            Premium
          </li>
          <li className="flex justify-start items-center gap-3 cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <RiAccountCircleLine className="text-[26px]" />
            Profile
          </li>
          <li className="flex justify-start items-center gap-3  cursor-pointer hover:bg-[#181818] w-fit pl-3 pr-5 rounded-full py-[10px]  ">
            <CgMoreO className="text-[26px]" />
            More
          </li>
        </ul>
      </div>
    </div>
  );
};

export default First;

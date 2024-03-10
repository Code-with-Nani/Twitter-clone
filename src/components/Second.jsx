import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import img from "../assets/images/myimg.jpg"
import { IoMdGlobe } from "react-icons/io";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineBallot } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Second = () => {
  return (
    <div className='main '>

     <div className="top flex ">
        <div className="left w-full  text-center medium text-[17px] py-4 cursor-pointer hover:bg-[#181818]"><span className='border-b-4 border-[#1D9BF0] py-4 rounded-sm '>For You</span></div>
        <div className="center w-full text-center regular py-4 cursor-pointer hover:bg-[#181818] text-[#71767b] ">Following</div>
        <div className="center text-xl py-4 px-5 cursor-pointer hover:bg-[#181818] rounded-full"><IoSettingsOutline /></div>
        </div>
        <div className="w-full h-[1px] bg-[#2F3336]"></div>

     <div className="what's happening">
        <div className="dp flex gap-2 pl-4 pt-3">
             <img className='h-10 rounded-full w-10 object-cover' src={img} alt="" />
             <input type="text" placeholder='What is happening?!' className='bg-black regular text-[20px] outline-none text-[#e7e9ea]'/>
        </div>

        <div className="post px-[50px]">
            <div className="upper flex justify-start items-center text-[#1D9BF0] medium gap-1 px-4 py-4"><IoMdGlobe className='text-[19px]'/>Everyone can reply</div>
            <div className="line w-full h-[1px] bg-[#2F3336]"></div>
            <div className="lower flex justify-between items-center text-[#1D9BF0] medium gap-3 px-4 py-4">
                <div className="icon flex justify-center items-center gap-3">
                    <GoFileMedia className='text-[19px] cursor-pointer'/> 
                <MdOutlineGifBox  className='text-[22px] cursor-pointer'/>
                <MdOutlineBallot className='text-[22px] cursor-pointer'/>
                <BsEmojiSmile className='text-[19px] cursor-pointer' />
                <MdOutlinePendingActions className='text-[19px] cursor-pointer'/>
                <IoLocationOutline className='text-[19px] text-[#367ba8] cursor-pointer'/></div>
                <div className="btn bg-[#0E4E78] w-fit text-gray-400 medium px-3 py-[2px] rounded-full "><button>Post</button></div>
               </div>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336]"></div>
        <div className=" text-center text-[#1D9BF0] medium  py-3 hover:bg-[#282829] hover:bg-opacity-20 cursor-pointer">Show 275 posts</div>
        <div className="line w-full h-[1px] bg-[#2F3336]"></div>

     </div>

    </div>
  )
}

export default Second

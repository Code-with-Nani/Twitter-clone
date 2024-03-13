import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import img from "../assets/images/myimg.jpg";
import { IoMdGlobe } from "react-icons/io";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlineBallot } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import post1 from "../assets/images/post1.jpeg";
import post2 from "../assets/images/post2.jpeg";
import post3 from "../assets/images/post3.jpeg";
import post4 from "../assets/images/post4.jpeg";
import { BiMessageRounded } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { BiBarChart } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { LuShare } from "react-icons/lu";

const Second = () => {
  return (
    <div className="main overflow-hidden">
      <div className="top flex">
        <div className="left w-full  text-center medium text-[17px] py-4 cursor-pointer hover:bg-[#181818]">
          <span className="border-b-4 border-[#1D9BF0] py-4 rounded-sm ">
            For You
          </span>
        </div>
        <div className="center w-full text-center regular py-4 cursor-pointer hover:bg-[#181818] text-[#71767b] ">
          Following
        </div>
        <div className="center text-xl py-4 px-5 cursor-pointer hover:bg-[#181818] rounded-full">
          <IoSettingsOutline />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#2F3336]"></div>

      <div className="what's happening">
        <div className="dp flex gap-2 pl-4 pt-3">
          <img
            className="h-10 rounded-full w-10 object-cover"
            src={img}
            alt=""
          />
          <input
            type="text"
            placeholder="What is happening?!"
            className="bg-black regular text-[20px] outline-none text-[#e7e9ea]"
          />
        </div>

        <div className="post px-[50px]">
          <div className="upper flex justify-start items-center text-[#1D9BF0] medium gap-1 px-4 py-4">
            <IoMdGlobe className="text-[19px]" />
            Everyone can reply
          </div>
          <div className="line w-full h-[1px] bg-[#2F3336]"></div>
          <div className="lower flex justify-between items-center text-[#1D9BF0] medium gap-3 px-4 py-4">
            <div className="icon flex justify-center items-center gap-3">
              <GoFileMedia className="text-[19px] cursor-pointer" />
              <MdOutlineGifBox className="text-[22px] cursor-pointer" />
              <MdOutlineBallot className="text-[22px] cursor-pointer" />
              <BsEmojiSmile className="text-[19px] cursor-pointer" />
              <MdOutlinePendingActions className="text-[19px] cursor-pointer" />
              <IoLocationOutline className="text-[19px] text-[#367ba8] cursor-pointer" />
            </div>
            <div className="btn bg-[#0E4E78] w-fit text-gray-400 medium px-3 py-[2px] rounded-full ">
              <button>Post</button>
            </div>
          </div>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336]"></div>
        <div className=" text-center text-[#1D9BF0] medium  py-3 hover:bg-[#282829] hover:bg-opacity-20 cursor-pointer">
          Show 275 posts
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336]"></div>
      </div>
      <div className="all-posts ">
        <div className="post pl-4 pt-3 flex ">
          <img
            className="img h-10 rounded-full w-10 object-cover"
            src={img}
            alt=""
          />
          <h2 className="pl-2 bold text-[15px]">Muhammad Hanan</h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b]">
            @HananUsman82357
          </h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b] hidden lg:block">
            . 5h{" "}
          </h2>
        </div>
        <div className="text pl-16 md:-translate-y-4 regular">
          The new OpenAI logo is really on point
        </div>
        <div className="content border border-[#2F3336] ml-16 mr-6 rounded-xl">
          <img className="h-[300px] pl-12 object-contain" src={post1} alt="" />
        </div>
        <div className="icons ml-[68px] my-3 cursor-pointer text-[#71767b] flex items-center justify-between mr-4">
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <BiMessageRounded />
            2.7k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiRepost className="text-xl" />
            2.5k
          </span>
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <CiHeart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiBarChart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-3">
            <BsBookmark />
            <LuShare />
          </span>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336] "></div>

        <div className="post pl-4 pt-3 flex ">
          <img
            className="img h-10 rounded-full w-10 object-cover"
            src={img}
            alt=""
          />
          <h2 className="pl-2 bold text-[15px]">Muhammad Hanan</h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b]">
            @HananUsman82357
          </h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b] hidden lg:block">
            . 5h{" "}
          </h2>
        </div>
        <div className="text pl-16 md:-translate-y-4 regular">
          Astro Db is 100% TypeScript
        </div>
        <div className="content border border-[#2F3336] ml-16 mr-6 rounded-xl">
          <img
            className="h-[300px] w-full rounded-xl object-cover"
            src={post4}
            alt=""
          />
        </div>
        <div className="icons ml-[68px] my-3 cursor-pointer text-[#71767b] flex items-center justify-between mr-4">
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <BiMessageRounded />
            2.7k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiRepost className="text-xl" />
            2.5k
          </span>
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <CiHeart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiBarChart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-3">
            <BsBookmark />
            <LuShare />
          </span>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336] "></div>

        <div className="post pl-4 pt-3 flex ">
          <img
            className="img h-10 rounded-full w-10 object-cover"
            src={img}
            alt=""
          />
          <h2 className="pl-2 bold text-[15px]">Muhammad Hanan</h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b]">
            @HananUsman82357
          </h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b] hidden lg:block">
            . 5h{" "}
          </h2>
        </div>
        <div className="text pl-16 md:-translate-y-4 regular">
          The new look of Google login page
        </div>
        <div className="content border border-[#2F3336] ml-16 mr-6 rounded-xl">
          <img
            className="h-[300px] rounded-xl object-contain"
            src={post3}
            alt=""
          />
        </div>
        <div className="icons ml-[68px] my-3 cursor-pointer text-[#71767b] flex items-center justify-between mr-4">
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <BiMessageRounded />
            2.7k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiRepost className="text-xl" />
            2.5k
          </span>
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <CiHeart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiBarChart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-3">
            <BsBookmark />
            <LuShare />
          </span>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336] "></div>

        <div className="post pl-4 pt-3 flex ">
          <img
            className="img h-10 rounded-full w-10 object-cover"
            src={img}
            alt=""
          />
          <h2 className="pl-2 bold text-[15px]">Muhammad Hanan</h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b]">
            @HananUsman82357
          </h2>
          <h2 className="pl-2 regular text-[15px] text-[#71767b] hidden lg:block">
            . 5h{" "}
          </h2>
        </div>
        <div className="text pl-16 md:-translate-y-4 regular">
          ChatGPT x Grok
        </div>
        <div className="content border border-[#2F3336] ml-16 mr-6 rounded-xl">
          <img className="h-[300px] pl-12 object-contain" src={post2} alt="" />
        </div>
        <div className="icons ml-[68px] my-3 cursor-pointer text-[#71767b] flex items-center justify-between mr-4">
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <BiMessageRounded />
            2.7k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiRepost className="text-xl" />
            2.5k
          </span>
          <span className="flex justify-center cursor-pointer items-center gap-1">
            <CiHeart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-1">
            <BiBarChart className="text-xl" />
            3.4k
          </span>
          <span className="flex justify-center  cursor-pointeritems-center gap-3">
            <BsBookmark />
            <LuShare />
          </span>
        </div>
        <div className="line w-full h-[1px] bg-[#2F3336] "></div>
      </div>
    </div>
  );
};

export default Second;

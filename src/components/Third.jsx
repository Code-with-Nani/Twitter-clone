import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import img from "../assets/images/myimg.jpg";

const Third = () => {
  return (
    <div className="main mt-1 ml-7 sticky top-0 hidden lg:block">
      <div className="search flex justify-start items-center  regular ">
        <div className="bg-[#202327] rounded-l-full pl-6  py-[13px] text-[#abadb1] ">
          <IoSearch className=" mt-[2px]" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-[#202327] w-[70%] rounded-r-full pl-3 py-[10px]"
        />
      </div>

      <div className="trends bg-[#202327] w-[80%] rounded-xl  mt-4 pt-2">
        <h2 className="medium text-[20px] font-[1000] pl-4 mb-3">
          Trends For You
        </h2>

        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-4 ">
          <h2 className="text-sm text-[#737679] regular flex justify-between">
            Politics . Trending <IoIosMore className="text-[22px]" />
          </h2>
          <h4 className="bold text-[18px]">Muslim</h4>
          <h2 className="text-sm text-[#737679] regular">250k posts</h2>
        </div>

        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-4 ">
          <h2 className="text-sm text-[#737679] regular flex justify-between">
            Trending in Pakistan <IoIosMore className="text-[22px]" />
          </h2>
          <h4 className="bold text-[18px]">Muhammad Hanan</h4>
          <h2 className="text-sm text-[#737679] regular">1749 posts</h2>
        </div>

        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-4 ">
          <h2 className="text-sm text-[#737679] regular flex justify-between">
            Politics . Trending <IoIosMore className="text-[22px]" />
          </h2>
          <h4 className="bold text-[18px]">Pak Army</h4>
          <h2 className="text-sm text-[#737679] regular">202k posts</h2>
        </div>

        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-4 ">
          <h2 className="text-sm text-[#737679] regular flex justify-between">
            Trending in Pakistan <IoIosMore className="text-[22px]" />
          </h2>
          <h4 className="bold text-[18px]">Muhammad Usman</h4>
          <h2 className="text-sm text-[#737679] regular">249k posts</h2>
        </div>

        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-4 rounded-b-xl">
          <h2 className="text-sm text-[#737679] regular flex justify-between">
            Trending in Pakistan
            <IoIosMore className="text-[22px]" />
          </h2>
          <h4 className="bold text-[18px]">Burhan</h4>
          <h2 className="text-sm text-[#737679] regular">653 posts</h2>
        </div>
      </div>

      <div className="follow bg-[#202327] w-[80%] rounded-xl  mt-4 pt-2">
        <h2 className="medium text-[20px] font-[1000] pl-4 mb-3">
          Who to follow
        </h2>

        <div className="item py-2 hover:bg-[#2f3135] pl-4 pr-1  cursor-pointer">
          <div className="regular flex justify-start items-center gap-1">
            <img
              className="h-10 rounded-full w-10 object-cover"
              src={img}
              alt=""
            />
            <h4 className="bold text-[18px]">Muhammad Hanan</h4>
          </div>
          <div className="btn flex justify-between items-center">
            <h2 className="text-sm text-[#737679] regular pl-3">
              @HananUsman82357
            </h2>
            <div className="btn bg-[#D7DBDC] w-fit text-black medium px-3 py-[2px] rounded-full xl:block hidden">
              <button>Follow</button>
            </div>
          </div>
        </div>
        <div className="item cursor-pointer py-2 hover:bg-[#2f3135] px-5 rounded-b-xl">
          <h2 className="text-[#1d9bf0] regular flex justify-between">
            Show more
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Third;

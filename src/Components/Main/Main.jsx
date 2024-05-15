import React from "react";
import { MdOutlineReadMore } from "react-icons/md";

const Main = () => {
  return (
    <div className="">
      <p className="text-[25px]">Vishnoi Handlooms</p>
      <h1 className="text-[65px] text-[#006769] font-extrabold  uppercase">
        Build Your Home, Sweet Home
      </h1>
      <p className="text-[18px] text-white mt-[20px]">
        Welcome to Vishnoi Handlooms, where finding your perfect furniture for
        your home is just a few clicks away.
      </p>
      <div className="bg-white backdrop-filter p-3 mt-[30px] flex gap-[80px] items-center justify-around  backdrop-blur-sm  bg-opacity-50 rounded-full relative z-10">
        <button className="text-[22px] text-[#006769] font-semibold">
          Cushions
        </button>
        <button className="text-[22px] text-[#006769] font-semibold">
          Carpets
        </button>
        <button className="text-[22px] text-[#006769] font-semibold">
          Diwan Sets
        </button>
        <button className="text-[22px] text-[#006769] font-semibold">
          Table Covers
        </button>
        <div className="flex justify-center items-center cursor-pointer  text-[40px] bg-[#006769] rounded-full text-white p-2">
          <MdOutlineReadMore />
        </div>
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import "./trust.css";
import image from "../../assets/trust.avif";
import "../Main/Main.css";

const Trust = () => {
  return (
    <>
      <div className="flex justify-center flex-col lg:flex-row lg:gap-[100px] lg:px-[100px] bg-white p-[20px] items-center akash">
        <div>
          <div className="h-[400px] w-[400px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={image}
            />
          </div>
        </div>
        <div className="text-[#006769] p-[20px] mt-[30px] flex justify-center  items-center">
          <div className="flex flex-col ">
            <p className="text-[25px]">TRUST US NOW</p>
            <h1 className="text-[45px]">
              Why choose our home furnishing items
            </h1>
            <p className="text-[20px]">
              Beyond offering premium products, we are dedicated to fostering
              sustainable practices and supporting the artisan community
            </p>
            <ul className="trust_li">
              <li>Flexible Timing</li>
              <li>Perfect Work</li>
              <li>Client Priority</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trust;

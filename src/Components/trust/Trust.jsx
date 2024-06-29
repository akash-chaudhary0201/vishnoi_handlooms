import React from "react";
import "./trust.css";
import image from "../../assets/trust.avif";

const Trust = () => {
  return (
    <>
      <div className="flex justify-center flex-col bg-white p-[20px] items-center">
        <div>
          <div className="h-[400px] w-[400px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={image}
            />
          </div>
        </div>
        <div className="text-[#006769] p-[20px] mt-[30px] flex justify-center  items-center">
          <div>
            <p>TRUST US NOW</p>
            <h1 className="text-[45px]">
              Why choose our home furnishing items
            </h1>
            <p className="text-[22px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium, sunt.
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

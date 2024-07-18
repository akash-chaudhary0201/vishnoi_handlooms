import React from "react";
import img from "../../assets/consim.avif";
import "../Main/Main.css";

const ConImg = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1627296345489-faf81a8f15ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
      className="h-[50vh] akash bg-cover flex justify-center items-center relative bg-center bg-no-repeat bg-fixed"
    >
      <div className="bg-white backdrop-filter flex flex-col items-center justify-around rounded-lg backdrop-blur-sm bg-opacity-50 relative z-10 text-center w-[90%] max-w-[500px] md:w-[50%] md:max-w-[600px] h-auto p-6 text-[#006467]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Business Queries</h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          For any queries regarding products and business queries
        </p>
        <button className="bg-[#006467] text-white px-4 py-2 mb-4 rounded-md text-base md:text-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ConImg;

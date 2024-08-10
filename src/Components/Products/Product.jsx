import React from "react";
import ak from "../../assets/akk.avif";
import Swiper from "../swiper/Swiper";

const Product = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${ak})` }}
        className="h-[80vh] bg-cover flex justify-center items-center relative bg-center bg-no-repeat bg-fixed"
      >
        <h1 className="bg-white flex justify-center items-center backdrop-filter backdrop-blur-sm mt-[20px]  bg-opacity-50 p-[10px] w-[250px] text-[40px] rounded-lg text-[#006769]">
          Collection
        </h1>
      </div>

      <div className="flex justify-center text-center mt-[40px] overflow-hidden">
        <div className="w-full px-4">
          {" "}
          {/* Added padding to avoid overflow */}
          <h1 className="text-[#006769] text-[30px] mb-[30px]">
            Choose what you want to buy
          </h1>
          <Swiper />
        </div>
      </div>
    </>
  );
};

export default Product;

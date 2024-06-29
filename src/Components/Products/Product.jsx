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
        <h1 className="text-center bg-[#006769] px-[50px] py-[20px] rounded-sm text-white">
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

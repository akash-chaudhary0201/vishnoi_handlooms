import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDiv = () => {
  return (
    <>
      <div className="m-10 bg-gradient-to-b from-[#86adaf] to-[#a6cacb] rounded-lg px-[30px] py-[30px] shadow-lg">
        <Skeleton circle={true} height={200} width={200} />
        <h1 className="mt-[10px] text-white text-[30px]">
          <Skeleton />
        </h1>
      </div>
    </>
  );
};

export default SkeletonDiv;

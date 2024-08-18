import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDiv = () => {
  return (
    <>
      <div className="m-10 bg-gradient-to-b from-[#F1F1F1]  rounded-lg px-[30px] py-[30px] shadow-lg">
        <Skeleton height={200} width={200} />
        <h3 className="mt-[10px] text-white text-[30px]">
          <Skeleton />
        </h3>
      </div>
    </>
  );
};

export default SkeletonDiv;

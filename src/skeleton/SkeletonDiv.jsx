import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDiv = () => {
  return (
    <>
      <div className="rounded-lg px-[30px] pb-[30px] ">
        <Skeleton height={250} width={250} />
        <h3 className="mt-[30px] text-white text-[30px]">
          <Skeleton />
        </h3>
        <h5 className="mt-[10px] text-white text-[30px]">
          <Skeleton />
        </h5>
      </div>
    </>
  );
};

export default SkeletonDiv;

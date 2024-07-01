import React from "react";
import Marquee from "react-fast-marquee";
import "../Main/Main.css";

const Cate = () => {
  return (
    <>
      <div className="p-[20px] akash">
        <Marquee>
          <div>
            <ul className="flex">
              <li className="mr-[50px] text-[40px] text-[#006769] font-extrabold">
                Cushions
              </li>
              <li className="mr-[50px] text-[40px] text-[#006769] font-extrabold">
                Pillow
              </li>
              <li className="mr-[50px] text-[40px] text-[#006769] font-extrabold">
                BedSheets
              </li>
            </ul>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Cate;

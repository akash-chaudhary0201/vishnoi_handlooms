import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerItems = ["Home", "About", "Products", "Contact"];

  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[#006467] pt-[20px]">
        <div className=" flex lg:gap-[200px] sm:gap-[60px] md:gap-[100px] gap-[30px] w-auto">
          {footerItems.map((item) => (
            <div>
              <p className="text-white text-[20px]">{item}</p>
            </div>
          ))}
        </div>
        <hr className="border-white w-full mt-[-10px]" />
        <div className="flex justify-center items-center text-white flex-col">
          <div className="flex justify-center items-center flex-col">
            <h1>Vishnoi Handlooms</h1>
            <p>COPYRIGHT 2024 | ALL RIGHT RESERVED</p>
          </div>
          <div className="flex justify-center items-center">
            <ul className="flex gap-[100px]">
              <li className="text-[22px]">
                <FaFacebook />
              </li>
              <li className="text-[22px]">
                <AiFillInstagram />
              </li>
              <li className="text-[22px]">
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

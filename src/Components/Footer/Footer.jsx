import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import "../Main/Main.css";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col bg-[#006467] pt-[20px] akash">
        \{" "}
        <div className="flex justify-center items-center text-white flex-col lg:flex-row lg:gap-[200px]">
          <div className="flex justify-center items-center flex-col">
            <h1>Vishnoi Handloom</h1>
            <p>COPYRIGHT 2024 | ALL RIGHT RESERVED</p>
          </div>
          <div className="flex flex-col gap-[20px] justify-center items-center">
            <button class="flex items-center space-x-2">
              <IoMail class="text-xl" />
              <span>
                <a
                  className="text-white decoration-transparent"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                >
                  vishnoihandloom012@gmail.com
                </a>
              </span>
            </button>
            <button class="flex items-center space-x-2">
              <IoMail class="text-xl" />
              <span>
                <a
                  className="text-white decoration-transparent"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                >
                  manojvishnoi012@gmail.com
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Map from "./Mapp/Map";
import Footer from "../Footer/Footer";
import "../Main/Main.css";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
  return (
    <>
      <div className="pt-[100px] akash flex justify-center items-center flex-col md:flex-row ">
        s
        <Map />
        <div className="bg-[#EEEDEB] p-[20px] rounded-xl h-[800px] md:h-[800px]">
          <p className="text-[22px] text-[#006467]">Get in Touch</p>
          <h1>
            Let's Chat, <span className="text-[#006467]">Reach Out</span> to Us
          </h1>
          <p>
            Have a question or feedback? We're here to help. Send us a message,
            and we'll respond back.
          </p>
          <hr />
          <div>
            <form>
              <label htmlFor="" className="text-[23px]">
                First Name
              </label>{" "}
              <br />
              <input
                required
                type="text"
                className="p-[10px] w-full outline-none rounded-lg text-[#006467]"
                placeholder="First Name"
              />{" "}
              <br />
              <label className="text-[23px]" htmlFor="">
                Last Name
              </label>{" "}
              <br />
              <input
                className="p-[10px] w-full outline-none rounded-lg text-[#006467]"
                type="text"
                placeholder="Last Name"
              />{" "}
              <br />
              <label className="text-[23px]" htmlFor="">
                Mobile Number
              </label>{" "}
              <br />
              <input
                className="p-[10px] w-full outline-none rounded-lg text-[#006467]"
                type="text"
                placeholder="Mobile Number"
              />{" "}
              <br />
              <label htmlFor="message" className="text-[23px]">
                Message
              </label>{" "}
              <br />
              <textarea
                className="p-[10px] w-full outline-none rounded-lg text-[#006467]"
                id="message"
                name="message"
                cols="35"
                rows="4"
                placeholder="Enter your message here"
              ></textarea>
            </form>
            <h2>You can connect with us :- </h2>
            <ul>
              <li className="flex items-center text-[20px] text-[#006467]">
                <IoIosCall className="mr-2" /> 9897353646
              </li>
              <li className="flex items-center text-[20px] text-[#006467] mt-[20px]">
                <IoLogoWhatsapp className="mr-2" /> 9897353646
              </li>
              <li className="flex items-center text-[20px] text-[#006467] mt-[20px]">
                <IoMdMail className="mr-2" /> manoj@vishnoihandloom.in,
                manojvishnoi012@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

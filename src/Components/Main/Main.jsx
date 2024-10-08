import React from "react";
import "./Main.css";
import main from "../../assets/main.jpg";
import Cate from "../Categories/Cate";
import Trust from "../trust/Trust";
import Achie from "../ach/Achie";
import ConImg from "../Contact/ConImg";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden akash">
        <img
          src={main}
          className="absolute inset-0 object-cover w-full h-full "
          alt=""
        />
        <div className="akash">
          <div className="absolute flex  justify-center items-center pt-[250px] pl-[20px] lg:px-[200px] lg:pt-[220px]">
            <div>
              <h1 className="text-[55px] text-[#006769] lg:text-[80px]">
                Build Your Home Sweet Home
              </h1>
              {/* <h1>{window.innerWidth}</h1> */}
              <p className="text-[20px] main_para ml-[20px] mt-[20px] lg:text-[30px] text-white">
                Welcome to Vishnoi Handloom, where finding your perfect
                furnishing elements for your home is just a few clicks away
              </p>
              <Link to={"/products"}>
                <button className="bg-white backdrop-filter backdrop-blur-sm mt-[20px]  bg-opacity-50 p-[10px] w-[200px] text-[20px] rounded-lg text-[#006769]">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Cate />
      </div>
      <div>
        <Achie />
      </div>
      <div>
        <Trust />
      </div>
      <ConImg />
      <Footer />
    </>
  );
};

export default Main;

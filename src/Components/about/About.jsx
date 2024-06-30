import React from "react";
import "./about.css";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="pt-[100px] min-h-screen bg-[#006467] ">
        <div className="flex flex-col  justify-center items-center ">
          <div>
            <div className=" px-[10px]">
              <h1 className="text-center akash">About Us</h1>
              <div className="bg-white flex justify-center items-center text-center p-[20px] mt-[40px] text-[#006467] text-[20px] rounded-lg shadow-xl">
                <p>
                  Our mission is to make our home a sanctuary of comfort and
                  beauty. With a focuson quality craftsmanship and innovative
                  design, we provide furnishing that cater to your every need
                  and style preference.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center mt-[20px] pb-[200px]">
          <div className="h-[300px] w-[300px] mt-[10px] text-center">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1532009877282-3340270e0529?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h1>Uncle's name</h1>
            <p className="text-[#006467] text-[20px]">
              A little bit information about Vishnoi Handlooms Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quis beatae animi
              accusantium sequi quia totam fugiat dolore accusamus dignissimos
              hic.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

import React from "react";
import "./about.css";
import Footer from "../Footer/Footer";
import uncle from "../../assets/uncle.png";

const About = () => {
  return (
    <>
      <div className="pt-[100px] akash">
        <div className="flex flex-col justify-center items-center px-[20px] ">
          <h1 className="text-[45px] text-[#006476] text-center">About Us</h1>
          <div className="flex justify-center items-center lg:flex-row flex-col lg:gap-[100px] lg:px-[250px]">
            <div>
              <h1 className="text-[40px] text-center">
                Vishnoi Handlooms: Tradition, <br /> Quality, and Style
              </h1>
              <p className="text-center lg:mt-[40px] text-[#006467]">
                Transform your living space into a heaven of elegance with
                Vishnoi Handlooms. Our traditional yet contemporary designs
                bring timeless beauty to every corner of your home.
              </p>
            </div>
            <div className="mt-[20px] mb-[20px]">
              <img
                src={uncle}
                alt=""
                className="rounded-full lg:h-[350px] lg:w-[700px] lg:object-cover"
              />
            </div>
          </div>
          <div className="lg:px-[250px] flex gap-[100px]">
            <div>
              <p className="">
                At Vishnoi Handloom, we take pride in crafting exquisite home
                textiles that add comfort, style, and elegance to your living
                spaces. Established with a passion for quality craftsmanship and
                a dedication to excellence, we specialize in the manufacturing
                of a wide range of premium bedding and home decor essentials,
                including bedsheets, sofa covers, mattress covers, pillow
                covers, and cushion covers.
              </p>

              <p>
                Our journey began with a vision to redefine the standards of
                home textiles by blending traditional artistry with modern
                innovation. Each piece in our collection is meticulously crafted
                by skilled artisans, utilizing premium quality materials and
                intricate designs to ensure utmost comfort, durability, and
                aesthetic appeal.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

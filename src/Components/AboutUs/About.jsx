import React from "react";
import "./about.css";
import blob from "../../assets/blob.png";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="pt-[100px] akash">
        <div className="flex flex-col justify-center items-center px-[20px] gap-[40px]">
          <h1 className="text-[45px] text-[#006476] text-center">About Us</h1>
          <div className="flex justify-center items-center flex-col gap-[30px]">
            <h1 className="text-[40px] text-center">
              Vishnoi Handlooms: Tradition, Quality, and Style
            </h1>
            <div>
              <img src={blob} alt="" />
            </div>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              officia dolorum aliquam alias soluta, eveniet quaerat commodi?
              Molestias ut accusamus dolorum amet porro ex eum cumque, ipsum,
              culpa iusto pariatur! Maxime aliquam iusto dolorem corrupti sint,
              corporis labore a reiciendis modi, fugit eos illo mollitia omnis
              accusantium perspiciatis? Harum illo mollitia earum dolores id,
              omnis totam! Tenetur obcaecati dolore possimus recusandae velit
              doloribus autem officiis doloremque? Quasi consequuntur cumque
              mollitia optio, vitae fugiat nobis quos at unde atque tenetur
              minima minus recusandae libero explicabo temporibus molestias eos,
              nulla reiciendis totam velit consequatur excepturi! Cum corporis
              ipsa molestiae! Voluptatem, cupiditate hic.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;

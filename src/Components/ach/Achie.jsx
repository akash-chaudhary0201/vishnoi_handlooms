import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../Main/Main.css";

const Achie = () => {
  const [counterOn, setCounterOn] = useState(false);
  const achArr = [
    {
      num: "17000",
      title: "Happy Customers",
    },
    {
      num: 5,
      title: "States",
    },
    {
      num: "20",
      title: "Categories",
    },
  ];

  return (
    <>
      <div className="bg-[#006769] p-[20px]  flex-col lg:flex-row lg:gap-[100px]   gap-[20px] flex justify-center items-center akash">
        {achArr.map((item) => (
          <div className="bg-white backdrop-filter  flex items-center justify-around rounded-lg  backdrop-blur-sm  bg-opacity-50 relative z-10 text-center w-[200px] h-[120px]">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div>
                <p className="text-[40px] text-white">
                  {counterOn && (
                    <CountUp start={0} end={item.num} duration={2} delay={0} />
                  )}
                </p>
                <h1 className="text-[20px]">{item.title}</h1>
              </div>
            </ScrollTrigger>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achie;

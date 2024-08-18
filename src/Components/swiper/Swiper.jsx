import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./swiper.css";

const Swiper = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch(
        "https://vishnoi-handloom-cms.vercel.app/api/resources/categories"
      );
      let data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const settings = {
    dots: true, // Enables the dots
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true, // Enables the prev/next arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden pb-10">
      <Slider {...settings} key={categories.length}>
        {categories.map((c) => (
          <div key={c.id} className=" rounded-sm p-[20px] overflow-hidden">
            <div className="flex border-2 border-purple-200 h-56 w-56 rounded-full justify-center m-auto items-center">
              <img
                src={c.imageUrl}
                className="h-56 p-2 w-56 m-auto object-cover rounded-full"
                alt={c.name}
              />
            </div>
            <div>
              <h1 className="text-black text-[20px] mt-1">{c.name}</h1>
              <Link to={`/category/${c.id}`}>
                <button className="bg-[#006467] px-10 text-white py-2 mt-2 rounded-lg">
                  See Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Swiper;

// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";

// const Swiper = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     let fectCategories = async () => {
//       let response = await fetch(
//         "https://vashnoi-handloom-cms.vercel.app/api/resources/categories"
//       );
//       let data = await response.json();
//       setCategories(data);
//     };
//     fectCategories();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//       <div>
//         <Slider {...settings}>
//           {categories.map((c) => (
//             <div
//               key={c.id}
//               className="bg-gradient-to-b from-[#3d6c6e] to-white rounded-sm p-[20px]"
//             >
//               <div className="flex  justify-center m-auto items-center">
//                 <img
//                   src={c.imageUrl}
//                   className="h-44 w-44 m-auto object-cover rounded-full "
//                   alt={c.name}
//                 />
//               </div>
//               <div className="">
//                 <h1 className="text-black text-[20px] mt-1">{c.name}</h1>
//                 <Link to={`/category/${c.id}`}>
//                   <button className="bg-[#006467] px-10 text-white py-2 mt-6 rounded-lg">
//                     See Products
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Swiper;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Swiper = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let response = await fetch(
        "https://vashnoi-handloom-cms.vercel.app/api/resources/categories"
      );
      let data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div className="overflow-hidden">
      <Slider {...settings}>
        {categories.map((c) => (
          <div
            key={c.id}
            className="bg-gradient-to-b from-[#3d6c6e] to-white rounded-sm p-[20px] overflow-hidden"
          >
            <div className="flex justify-center m-auto items-center">
              <img
                src={c.imageUrl}
                className="h-44 w-44 m-auto object-cover rounded-full"
                alt={c.name}
              />
            </div>
            <div>
              <h1 className="text-black text-[20px] mt-1">{c.name}</h1>
              <Link to={`/category/${c.id}`}>
                <button className="bg-[#006467] px-10 text-white py-2 mt-6 rounded-lg">
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

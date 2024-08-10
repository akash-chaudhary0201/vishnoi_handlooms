import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDiv from "../../skeleton/SkeletonDiv";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let fetchProducts = async () => {
        let response = await fetch(
          `https://vashnoi-handloom-cms.vercel.app/api/resources/products?categoryId=${id}`
        );
        let data = await response.json();
        setProducts(data);
        setIsLoading(false);
      };
      fetchProducts();
    }, 500);
  }, []);

  return (
    <>
      <div className="pt-[100px] flex justify-center items-center text-center">
        <div>
          <h1>Products :- </h1>
          <SkeletonTheme highlightColor="#a6cacb">
            <div className="flex flex-wrap justify-center items-center ">
              {isLoading ? (
                <>
                  <SkeletonDiv />
                  <SkeletonDiv />
                  <SkeletonDiv />
                  <SkeletonDiv />
                </>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="m-10 bg-gradient-to-b from-[#3d6c6e]  px-[30px] py-[30px] rounded-lg "
                  >
                    <div className="">
                      <img
                        className="h-[200px] w-[200px] rounded-full"
                        src={product.images[0].url}
                        alt=""
                      />
                    </div>
                    <h1 className="mt-[10px] text-[#006467] text-[30px]">
                      {product.name}
                    </h1>
                  </div>
                ))
              )}
            </div>
          </SkeletonTheme>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

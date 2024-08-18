import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDiv from "../../skeleton/SkeletonDiv";
import Modal from "../modal/Modal"; // Import the modal component

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for the selected product
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
    });
  }, [id]);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

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
                    className="m-10 bg-gradient-to-b from-[#d3d2d2]  px-[20px] py-[20px] rounded-lg "
                  >
                    <div className="">
                      <img
                        className="h-[160px] w-[160px] rounded-full"
                        src={product.images[0].url}
                        alt={product.name}
                      />
                    </div>
                    <h1 className="mt-[10px] text-[#006467] text-[30px]">
                      {product.name}
                    </h1>
                    {/* <button
                      onClick={() => handleShowModal(product)}
                      className="mt-4 px-4 py-2 bg-[#006467] text-white rounded"
                    >
                      About this product
                    </button> */}
                    <p>{product.description}</p>
                  </div>
                ))
              )}
            </div>
          </SkeletonTheme>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </>
  );
};

export default ProductDetails;

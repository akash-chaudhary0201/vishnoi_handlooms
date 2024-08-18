import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDiv from "../../skeleton/SkeletonDiv";
import Modal from "../modal/Modal";
import "./pr.css";

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
          `https://vishnoi-handloom-cms.vercel.app/api/resources/products?categoryId=${id}`
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
      <div className="pt-[100px] akash flex justify-center items-center">
        <div>
          <h1 className="text-center">Products :- </h1>
          <SkeletonTheme highlightColor="#F6F5F2">
            <div className="flex flex-wrap justify-center items-center">
              {isLoading ? (
                <>
                  <SkeletonDiv />
                  <SkeletonDiv />
                  <SkeletonDiv />
                  <SkeletonDiv />
                </>
              ) : (
                products.map((product) => (
                  <div className="m-3">
                    <div className="w-[300px] h-[400px] relative overflow-hidden">
                      <div className="relative overflow-hidden h-[250px] w-[250px]">
                        <img
                          onClick={() => handleShowModal(product)}
                          className="transition-transform duration-700 transform hover:scale-105 cursor-pointer"
                          src={product.images[0].url}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="font-normal mb-1 text-[]">
                          {product.name}
                        </h3>

                        <h5 className=" font-normal text-[#a1a0a0]">
                          {product.description}
                        </h5>
                        <h4 className="font-bold mb-1">Rs. 100</h4>
                      </div>
                    </div>
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

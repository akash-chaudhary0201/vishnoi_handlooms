import React from "react";

const Modal = ({ show, onClose, product }) => {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={handleOutsideClick}
      >
        <div className="flex">
          <div className="h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px]">
            <img
              src={product.images[0].url}
              className=" sm:h-full sm:w-full lg:h-full lg:w-full "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

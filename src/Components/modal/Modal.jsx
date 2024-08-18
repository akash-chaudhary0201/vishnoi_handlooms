import React from "react";

const Modal = ({ show, onClose, product }) => {
  if (!show) return null;
  return (
    <>
      <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white flex justify-center text-center items-center w-[300px] p-6 rounded-lg shadow-lg">
          <div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-lg mb-4">{product.description}</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#006467] text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

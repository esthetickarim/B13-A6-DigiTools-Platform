import React from "react";

const ProductCartToggle = ({ view, setView, cartCount }) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      
      {/* Products Button */}
      <button
        onClick={() => setView("products")}
        className={`px-5 py-2 rounded-full font-medium transition ${
          view === "products"
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Products
      </button>

      {/* Cart Button */}
      <button
        onClick={() => setView("cart")}
        className={`px-5 py-2 rounded-full font-medium transition ${
          view === "cart"
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
};

export default ProductCartToggle;
import { useState } from "react";

const ProductCard = ({ product, handleAddToCart }) => {

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);
  };

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-100 p-4 relative">

      {/* Tag Badge */}
      {product.tagType && (
        <span className="absolute top-3 right-3 text-xs px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
          {product.tagType}
        </span>
      )}

      {/* Icon */}
      <div className="flex justify-start mb-2">
        <img src={product.icon} alt={product.name} className="w-10 h-10" />
      </div>

      <div className="card-body p-0">

        {/* Name */}
        <h2 className="card-title text-lg font-semibold">
          {product.name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold mt-2">
          ${product.price}
          <span className="text-sm text-gray-400"> / {product.period}</span>
        </p>

        {/* Features */}
        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          {product.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={handleClick}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          {added ? "Added ✔" : "Buy Now"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;



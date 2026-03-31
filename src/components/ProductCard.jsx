import { useState } from "react";


const ProductCard = ({ product, handleAddToCart }) => {

  const [added, setAdded] = useState(false);

  const handleClick = () => {
    handleAddToCart(product);
    setAdded(true);
  };

  return (
    <div className="card bg-base-100 shadow-xl">

      <figure>
        <img src={product.icon} className="w-16 mt-4" />
      </figure>

      <div className="card-body">

        <h2 className="card-title">{product.name}</h2>

        <p>{product.description}</p>

        <p className="font-bold text-primary">
          ${product.price} / {product.period}
        </p>

        <ul className="text-sm">
          {product.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>

        <button
          onClick={handleClick}
          className="btn btn-primary mt-3"
        >
          {added ? "Added ✔" : "Buy Now"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
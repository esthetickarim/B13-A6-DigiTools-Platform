const ProductCard = ({ product, handleAddToCart, added }) => {
  return (
    <div className="card bg-base-100 shadow-xl border">
      <div className="card-body">
        <div className="flex items-center gap-3">
          <img src={product.icon} alt={product.name} className="w-12 h-12" />
          <div>
            <h2 className="card-title">{product.name}</h2>
            <div className={`badge ${product.tagType}`}>{product.tag}</div>
          </div>
        </div>

        <p className="text-gray-500 mt-3">{product.description}</p>

        <h3 className="text-2xl font-bold mt-2">
          ${product.price}
          <span className="text-sm font-normal text-gray-500"> / {product.period}</span>
        </h3>

        <ul className="mt-4 space-y-2 text-sm">
          {product.features.map((feature, idx) => (
            <li key={idx}>✔ {feature}</li>
          ))}
        </ul>

        <div className="card-actions mt-6">
          <button
            onClick={() => handleAddToCart(product)}
            className="btn btn-primary w-full"
          >
            {added ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
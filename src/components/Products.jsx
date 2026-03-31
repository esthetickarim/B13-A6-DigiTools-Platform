

import products from "../data/products";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";



const Products = ({ cart, setCart }) => {

  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast.warning("Already added!");
      return;
    }

    setCart([...cart, product]);
    toast.success("Added to cart!");
  };

  return (
    <section className="py-12 px-4 md:px-10">

      {/*  Heading Section ONLY */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/*  Product Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

    </section>
  );
};

export default Products;
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
    <div className="grid md:grid-cols-3 gap-8">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;



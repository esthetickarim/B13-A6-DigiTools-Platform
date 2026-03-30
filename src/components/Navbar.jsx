import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-10 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-2xl font-bold text-primary">DigiTools</a>
      </div>
      <div className="hidden md:flex gap-6 font-medium">
        <a href="#products">Products</a>
        <a href="#steps">How It Works</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="flex-none ml-4 relative">
        <ShoppingCart className="w-7 h-7 text-primary" />
        <span className="badge badge-primary absolute -top-2 -right-2">
          {cartCount}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
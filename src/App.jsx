import { useState } from "react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCartToggle from "./components/ProductCartToggle";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [view, setView] = useState("products");
  const [cart, setCart] = useState([]);

  return (
    <>
      {/* Navbar */}
      <Navbar cartCount={cart.length} />

      {/* Banner */}
      <Banner />

      {/* Stats */}
      <Stats />

      {/* Product / Cart Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Premium Digital Tools
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Choose from our curated collection of premium digital products
              designed to boost your productivity and creativity.
            </p>
          </div>

          {/* Toggle Buttons */}
          <ProductCartToggle
            view={view}
            setView={setView}
            cartCount={cart.length}
          />

          {/* Products OR Cart */}
          <div className="mt-10">
            {view === "products" ? (
              <Products cart={cart} setCart={setCart} />
            ) : (
              <Cart cart={cart} setCart={setCart} />
            )}
          </div>

        </div>
      </section>

      {/* Steps Section */}
      <Steps />

      {/* Pricing */}
      <Pricing />

      {/* Workflow */}
      <Workflow setView={setView} />

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer />
    </>
  );
}

export default App;




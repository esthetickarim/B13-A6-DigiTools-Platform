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
      <Navbar cartCount={cart.length} />

      <Banner />
      <Stats />

      {/* Toggle Buttons */}
      <ProductCartToggle
        view={view}
        setView={setView}
        cartCount={cart.length}
      />

      {/* Product / Cart Section */}
      {view === "products" ? (
        <Products cart={cart} setCart={setCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}

      <Steps />
      <Pricing />

      {/*  Workflow Section (NOW CONNECTED) */}
      <Workflow setView={setView} />

      {/* Pricing Section (for scroll) */}
      

      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
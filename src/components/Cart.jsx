import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Removed!");
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setCart([]);
    toast.success("Checkout done!");
  };

  if (cart.length === 0) {
    return <p className="text-center p-6">🛒 Cart is empty</p>;
  }

  return (
    <div className="p-6">
      {cart.map(item => (
        <div key={item.id} className="flex justify-between border p-3 mb-3">

          <div className="flex gap-3 items-center">
            <img src={item.icon} className="w-8" />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          </div>

          <button onClick={() => handleRemove(item.id)} className="text-red-500">
            Remove
          </button>

        </div>
      ))}

      <h2 className="font-bold mt-4">Total: ${total}</h2>

      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
const CartItem = ({ item, handleRemove }) => {
  return (
    <div className="flex items-center justify-between bg-base-100 shadow p-4 rounded-xl">
      <div className="flex items-center gap-4">
        <img src={item.icon} alt={item.name} className="w-12 h-12" />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-500">${item.price}</p>
        </div>
      </div>
      <button onClick={() => handleRemove(item.id)} className="btn btn-error btn-sm text-white">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
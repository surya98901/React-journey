import { CDN_URL } from "../utils/constants";

const CartListItems = ({ item, count }) => {
  const itemPrice = item.price / 100 || item.defaultPrice / 100; // Calculate individual item price
  const totalPrice = itemPrice * count; // Calculate total price for the item

  return (
    <div className="flex p-4 rounded-lg shadow-lg"> 
        <div className="w-1/2 cart-item my-2 bg-white  ">
        <img
          className="w-2/2 rounded-2xl object-cover shadow-lg"
          src={CDN_URL + item?.imageId}
        ></img>
      </div>
      <div className=" w-1/2 cart-item my-2 bg-white p-2 ">
        <h2 className="font-bold text-xl"> {item.name}</h2>
        <p>Price (per item): ₹{Math.floor(itemPrice)}</p>
        <p>Quantity: {count}</p>
        <p>Total Price: ₹{Math.floor(totalPrice)}</p>{" "}
        {/* Display total price */}
      </div>
    </div>
  );
};

export default CartListItems;

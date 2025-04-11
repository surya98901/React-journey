import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";




const ItemCard = (props) => {

  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addItem(item));
  }
  const { items } = props;
  const { name, imageId, itemAttribute, ratings, description } =
    items.card.info;
  console.log(items.card.info);

  const [btnCount, SetbtnCount] = useState(0);

  return (
    <div
      id="ItemCard"
      className="p-2 mb-2 bg-white flex rounded-lg justify-between shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out "
    >
      <div className=" px-2 mt-1 w-7/10">
        <div className="flex w-full">
          <div className="w-full flex justify-between">
            <h1 className="mb-0 font-bold text-2xl">{name}</h1>
            <h2 className=" my-1 bg-green-700 text-white p-2 m-2 rounded-full">
              {" "}
              ✦{ratings.aggregatedRating.rating}
            </h2>
          </div>
          <p className="text-3xl">{itemAttribute.vegClassifier === "NONVEG" ? "🍗" : "🥦" }</p>
        </div>
        <h2 className="mt-0 font-bold font-serif my-2">
          ₹ {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
        </h2>

        <h2 className=" text-gray-500 line-clamp-3 font-serif">
          {description}
        </h2>
      </div>
      <div className="relative w-2/10 mx-4 my-4">
        <img
          className="w-2/2 rounded-2xl object-cover shadow-lg"
          src={CDN_URL + imageId}
        ></img>
        <div className="absolute flex justify-between w-1/2 border-2 border-lime-600 rounded-lg bg-white bottom-1 left-1/2 transform -translate-x-1/2">
          <button
            className="w-2/5 border-2 font-bold bg-green-700 text-white rounded-lg text-xl p-1"
            onClick={() => {
              SetbtnCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Decrement safely
            }}
          >
            -
          </button>
          <h2 className="text-xl mt-1">{btnCount}</h2>
          <button
            className="w-2/5 border-2 font-bold bg-green-700 text-white rounded-lg text-xl p-1"
            onClick={() => {
              SetbtnCount((prevCount) => prevCount + 1); // Increment safely
              addItemToCart(items.card.info); // Add item to cart
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

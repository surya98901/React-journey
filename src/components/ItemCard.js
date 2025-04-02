import { CDN_URL } from "../utils/constants";
const ItemCard = (props) => {
  const { items } = props;
  const { name, imageId, itemAttribute, ratings, description } =
    items.card.info;
  console.log(items.card.info);

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
      <div className="w-2/10 mx-4 my-4">
        <img
          className=" relative w-2/2  rounded-2xl object-cover shadow-lg "
          src={CDN_URL + imageId}
        ></img>
        <button className=" absolute border-2 border-green-700 bg-white rounded-lg text-sm p-1 mouser-pointer-hover:scale-105">
          {" "}
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import useResMenuFetch from "../utils/useResMenuFetch";
import MenuCategory from "./MenuCategory";
import { useState } from "react";


const Restaurent = () => {
  const { resid } = useParams();
  const [indexState, setindexState] = useState(null);

  const menu = useResMenuFetch(resid);
  if (menu.length === 0) {
    return <Shimmer />;
  }

  const menuItems = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const { name, avgRatingString } = menu?.cards?.[2]?.card?.card?.info;

  return (
    <div>
      <div className=" w-6/12 mx-auto">
        <div id="Resturent details " className="w-full flex justify-between ">
          <h1 className=" font-bold text-3xl my-5">{name}</h1>
          <h5 className=" my-6 bg-green-700 text-white p-2 m-2 rounded-full">
            {" "}
            ✦ {avgRatingString}
          </h5>
        </div>
      </div>
      <div className=" w-6/12 mx-auto items-center justify-center flex flex-col">
        <h1 className=" text-green-800 p-2 m-2 text-2xl">
          {"୧‿̩͙ ˖︵ Menu ︵˖ ‿̩͙୨"}
        </h1>
        {menuItems.map((cat, index) => {
          if (
            cat.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return (
              <MenuCategory
                key={cat.card.card.title}
                data={cat}
                showItems={index === indexState ? true : false}
                setindexState={() => setindexState(index)}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Restaurent;

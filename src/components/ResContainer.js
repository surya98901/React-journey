import { RESTAURANT_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import ResCard, { withLable } from "./ResCards";
import useOnline from "../utils/useOnline";
import FilterContainer from "./FilterContainer";
import ItemsWidget from "./ItemsWidgat";


const ResContainer = () => {
  const [resList1, setresList1] = useState([]);
  const [Itemlist, setItemlist] = useState([]);
  const [filresList1, setfilresList1] = useState([]);

  const RescardWithLable = withLable(ResCard);
  useEffect(() => {
    fetchinfo();
  }, []);

  const fetchinfo = async () => {
    const info = await fetch(RESTAURANT_URL);
    const json = await info.json();
    console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info[0].imageId);
    setresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setItemlist(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
  };

  const onlinestatus = useOnline();

  if (onlinestatus === false) return <h1>Sad!! Dude check Your connection</h1>;

  if (resList1.length === 0) {
    return <Shimmer />;
  }
  const HigerRated = resList1.filter(
    (res) => res.info.avgRating > 4.5
  );

  return (
    <div className="body">
      
      <FilterContainer resList1 = {resList1} setfilresList1 = {setfilresList1} />
      <ItemsWidget itemList={Itemlist} />
      <div className="w-6/8 mx-auto flex justify-items-center">
        <h1 className="px-2 mx-2 mt-10 mb-5 text-2xl font-bold"> Top restaurant chains</h1>
      </div>
      <div className="w-6/8 mx-auto flex justify-items-center overflow-x-scroll">
        {HigerRated.map((res)=>(
          <Link to={"/menu/" + res.info.id} key={res.info.id}>
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
      <div className="w-6/8 mx-auto flex justify-items-center">
        <h1 className="px-2 mx-2 mt-10 mb-5 text-2xl font-bold">Restaurants with online food delivery in Your Location </h1>
      </div>
      <div className="w-6/8 mx-auto flex justify-items-center">
        <div className=" w-full mx-auto flex flex-wrap justify-space-evenly">
          {filresList1.map((res) => (
            <Link to={"/menu/" + res.info.id} key={res.info.id}>
              {res.info.aggregatedDiscountInfoV3 ? (
                <RescardWithLable resData={res} />
              ) : (
                <ResCard resData={res} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResContainer;

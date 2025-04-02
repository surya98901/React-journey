import { RESTAURANT_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import ResCard, { withLable } from "./ResCards";
import useOnline from "../utils/useOnline";

const ResContainer = () => {
  const [resList1, setresList1] = useState([]);
  const [filresList1, setfilresList1] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");
  const RescardWithLable = withLable(ResCard);

  useEffect(() => {
    fetchinfo();
  }, []);

  const fetchinfo = async () => {
    const info = await fetch(RESTAURANT_URL);
    const json = await info.json();
    setresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnline();

  if (onlinestatus === false) return <h1>Sad!! Dude check Your connection</h1>;

  if (resList1.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchTxt}
          onChange={(event) => {
            setsearchTxt(event.target.value);
          }}
        />
        <button
          id="search-btn"
          className="filter-btn"
          onClick={() => {
            const filteredRes = resList1.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt)
            );
            setfilresList1(filteredRes);
          }}
        >
          search
        </button>

        <button
          id="top-rated"
          className="filter-btn"
          onClick={() => {
            const filteredList = resList1.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilresList1(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="px-10 pr-10 mx=10 ml-5">
        <div className=" flex flex-wrap justify-space-evenly">
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

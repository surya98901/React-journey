import { CDN_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Shimmer } from "./Shimmer";

const ResCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId}></img>
      <div className="res-card-text">
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>{avgRating} starts </h4>
      </div>
    </div>
  );
};
const ResContainer = () => {
  const [resList1, setresList1] = useState([]);
  const [filresList1, setfilresList1] = useState([]);
  const [searchTxt, setsearchTxt] = useState("");

  useEffect(() => {
    fetchinfo();
  }, []);

  const fetchinfo = async () => {
    const info = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await info.json();
    setresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilresList1(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
      <div className="res-container">
        {filresList1.map((res) => (
          <ResCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default ResContainer;

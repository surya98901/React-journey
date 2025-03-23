import { CDN_URL, RESTAURANT_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  console.log(resList1);
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
          <Link to= {"/menu/" + res.info.id}  key={res.info.id}><ResCard  resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};
export default ResContainer;

import { useState } from "react";
const FilterContainer = (props) => {
  const [searchTxt, setsearchTxt] = useState("");
  const { resList1, setfilresList1 } = props;
  return (
    <div className="filter justify-center">
      <div
        id="search bar"
        className="w-6/8 mx-auto px-2  flex justify-items-center bg-lime-600 shadow-md  rounded-t-2xl "
      >
        <input
          type="text"
          className="rounded-lg pl-2 m-2 w-9/10 bg-white"
          value= {searchTxt}
          onChange={(event) => {
            setsearchTxt(event.target.value);
          }}
        />
        <button
          id="search-btn"
          className="bg-white w-1/10 py-2 my-2 ml-0 text-xl text-lime-700 rounded-lg"
          onClick={() => {
            const filteredRes = resList1.filter((res) =>
              res.info.name.toLowerCase().includes(searchTxt)
            );
            setfilresList1(filteredRes);
          }}
        >
          Search
        </button>
      </div>
      
      <div className="w-6/8 mx-auto p-2 flex justify-evenly bg-lime-600 shadow-md  ">
      <button className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"> Filter </button>
        <button
          id="top-rated"
          className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"
          onClick={() => {
              const filteredList = resList1.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilresList1(filteredList);
          }}
        >
          Ratings 4.0+
        </button>
        <button className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"> Sort By</button>
        <button className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"> Pure veg</button>
        <button className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"> Offers</button>
        <button className="bg-white w-1/10 py-1 my-1  text-l text-lime-700 rounded-lg"> New </button>
      </div>
    </div>
  );
};

export default FilterContainer;

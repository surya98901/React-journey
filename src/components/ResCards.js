import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="w-80 h-80 shadow-lg p-4 m-4 flex flex-col hover:shadow-2xl rounded-2xl">
      <img
        className="h-3/4 w-2/2 rounded-2xl object-cover shadow-lg "
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div>
        <h2 className="w-2/2 px-2 mt-1 font-bold text-xl truncate">{name}</h2>
        <div className="flex justify-items-normal">
          <h4 className="px-2"> ✦ {avgRating}</h4>
          <p> ● </p>
          <h4 className="px-2">{sla.slaString}</h4>
        </div>
        <h5 className="w-2/2 px-2 mt-1 font-bold text-gray-500 truncate font-serif">
          {cuisines.join(",")}
        </h5>
      </div>
    </div>
  );
};

export const withLable = (Rescard) => {
  return (props) => {
    const { resData } = props;
    const { header, subHeader } = resData?.info.aggregatedDiscountInfoV3;
    return (
      <div>
        <label className=" absolute bg-green-700 text-white p-1 m-1">
          {header + " " + subHeader}
        </label>
        <Rescard {...props} />
      </div>
    );
  };
};
export default ResCard;

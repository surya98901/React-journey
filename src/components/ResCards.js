import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  return (
    <div className="w-80 h-100 shadow-lg p-4 m-4 flex flex-col hover:shadow-2xl rounded-2xl">
      <img
        className="h-3/4 w-2/2 rounded-2xl object-cover shadow-lg"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div>
        <h2 className="w-2/2 px-2 mt-1 font-bold text-xl truncate">{name}</h2>
        <h5 className="w-2/2 px-2 mt-1 font-bold text-gray-500 truncate font-serif" >{cuisines.join(",")}</h5>
        <div className="flex justify-items-normal">
        <h4 className="px-2"> ✦ {avgRating}</h4>
        <h4 className="px-2">{sla.deliveryTime} mins</h4>
        </div>
      </div>
    </div>
  );
};
export default ResCard;

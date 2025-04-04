import { SHIMMER_URL } from "../utils/constants";
export const Shimmer = () => {
  return (
    <div className=" mx-auto mb-100 justify-center flex flex-col items-center ">
        <img className="w-100 h-100" src= {SHIMMER_URL} ></img>
    </div>
  );
};

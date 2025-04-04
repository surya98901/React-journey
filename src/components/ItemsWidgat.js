import { CDN_URL } from "../utils/constants";
const ItemsWidget = (props) => {
const { itemList } = props;
    return(
        <div className="w-6/8 mx-auto py-2 shadow-md rounded-b-2xl">
            <h1 className="px-2 mx-2 text-xl font-bold"> What's on your mind ?</h1>
            <div className=" mx-auto py-2 flex justify-evenly shadow-md  overflow-x-scroll">
            {itemList.map((item)=>{
                return(
                    <img className="w-50 h-50 " key ={item.id} src={CDN_URL + item.imageId} ></img>
                )
            })}
        </div>
        </div>
    )
}
export default ItemsWidget;
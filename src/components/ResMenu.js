import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";
const ResMenu = () => {
  const [menu, setMenu] = useState([]);
  const { resid } = useParams();

  const fetchMenu = async () => {
    const menuinfo = await fetch(MENU_URL + resid );
    const json = await menuinfo.json();
    setMenu(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

    if (menu.length === 0) {
      return <Shimmer />;
    }

  const  menuItems  = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const {name, cuisines, costForTwoMessage} = menu?.cards?.[2]?.card?.card?.info;
  console.log(menuItems);
  return (
    <div>
      <h1>{name}</h1>
      <h5>{cuisines}</h5>
      <h5>{costForTwoMessage}</h5>
      <h1>Menu</h1>
      <div className="menu" >
        {menuItems.map((items)=>(
          <li key = {items.card.info.id}>
            {items.card.info.name} - Rs{items.card.info.price/100 || items.card.info.defaultPrice/100}
            </li>
          ))}
      </div>
    </div>
  );
};

export default ResMenu;

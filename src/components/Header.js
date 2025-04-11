import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, Header } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux";



export const Header = () => {
  const [logtxt, setlogtxt] = useState("Login");
  const {UserName} = useContext(UserContext);
  // subscribe to the Redux store in order to get the latest state using a hook called useSelector
  // useSelector takes a function as an argument that receives the entire store state and returns the part of the state you want to access.
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between shadow-lg mb-2">
      <div className="logo w-4/10 mx-auto flex" >
        <img className="w-30 h-30" src={LOGO_URL}></img>
        <h1 className="absolute py-5 m-6 px-20 font-bold text-2xl text-lime-700 ">Grub Express</h1>
      </div>
      <div className="w-4/10 nav-btns mx-auto flex">
        <ul className="flex py-6 m-6 justify-between text-xl">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2 flex">
            <Link to="/Cart">Cart</Link>
            <div className=" bg-lime-700 text-white rounded-full px-1.5 mx-0.5 " >{cartItems.length}</div>
          </li>
          <li className="px-2"> {UserName}</li>
        </ul>
        <button
          className="login-btn px-2 my-9 mr-2 bg-lime-700 text-white rounded"
          onClick={() => {
            logtxt === "Login" ? setlogtxt("Logout") : setlogtxt("Login");
          }}
        >
          {logtxt}
        </button>
        
      </div>
    </div>
  );
};
export default Header;

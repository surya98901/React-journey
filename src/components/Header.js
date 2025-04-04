import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, Header } from "../utils/constants";
import UserContext from "../utils/UserContext";


export const Header = () => {
  const [logtxt, setlogtxt] = useState("Login");
  const {UserName} = useContext(UserContext);
  return (
    <div className="header flex justify-between shadow-lg mb-2">
      <div className="logo w-4/10 ml-20 pl-20 flex" >
        <img className="w-30 h-30" src={LOGO_URL}></img>
        <h1 className="absolute py-5 m-6 px-20 font-bold text-2xl text-lime-600 ">Grub Express</h1>
      </div>
      <div className="w-4/10 nav-btns flex">
        <ul className="flex py-6 m-6 justify-between">
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
          <li className="px-2"> {UserName}</li>
        </ul>
        <button
          className="login-btn px-2 my-9 mr-2 bg-green-600 text-white rounded"
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

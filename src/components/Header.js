import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL, Header } from "../utils/constants";


export const Header = () => {
  const [logtxt, setlogtxt] = useState("Login");

  return (
    <div className="header flex justify-between shadow-lg mb-2">
      <div className="logo w-30 ml-2 flex" >
        <img src={LOGO_URL}></img>
        <h1 className="py-3 my-6 font-bold">Grub Express</h1>
      </div>
      <div className="nav-btns flex">
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

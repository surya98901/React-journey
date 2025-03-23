import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  const [logtxt, setlogtxt] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div className="nav-btns">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <button
          className="login-btn"
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

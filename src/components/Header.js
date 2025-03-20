import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
export const Header = () => {
  const [logtxt, setlogtxt] = useState("Login");

  return (<div className="header">
    <div className="logo">
      <img src={LOGO_URL}></img>
    </div>
    <div className="nav-btns">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <button className="login-btn"
      onClick={()=>{
        (logtxt === "Login")?setlogtxt("Logout"):setlogtxt("Login");
      }}>{logtxt}</button>
    </div>
  </div>);
};
export default Header;

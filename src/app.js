import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import ResContainer from "./components/ResContainer";


const MainContainer = () => (
  <div className="mainContainer">
    <Header />
    <ResContainer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(MainContainer());
 
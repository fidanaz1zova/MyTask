import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="intropart">
        <h5 className="title-1">SPRING/ SUMMER COLLECTION 2017</h5>
        <h1 className="title-2">Get up to 30% Off New Arrivals</h1>
        <button className="shopnow">SHOP NOW</button>
      </div>
      <div className="classes">
        <div className="class-1">
          <button className="womenbtn">WOMEN'S</button>
        </div>
        <div className="class-2">
          <button className="accbtn">ACCESSORIES'S</button>
        </div>
        <div className="class-3">
          <button className="menbtn">MEN'S</button>
        </div>
      </div>
      <div className="bodypart">
        <h3 className="title-3">New Arrivals</h3>
        <div className="line"></div>
        <div className="classes-2">
          <button className="all">ALL</button>
          <button className="womenbutton">WOMEN'S</button>
          <button className="accbutton">ACCESSORIES'S</button>
          <button className="menbutton">MEN'S</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Description.css";
const Description = (props) => {
  console.log("dom manipulated in inside where I am working");
  
  return (
    <>
      <div className="box1">
        <div className="box1a">
          <h1>{props.h1title}</h1>
          <h3>{props.desc}</h3>
        </div>
        <div className="box1b">
          <span>Home</span>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>
          <span>Women Fashion</span>
        </div>
      </div>
      <div class="box2" id="x1"></div>
    </>
  );
};

export default Description;

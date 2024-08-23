import React from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import useFetch from "../../Hooks/FetchApiHook";
import "./CategoryComponent.css";

const CategoryComponent = ({ title, data }) => {
  return (
    <div className="container">
      <div className="BagComp">{title}</div>

      <div className="box4">
        {data &&
          data.map((item, index) => <SingleProduct key={index} sp={item} />)}
      </div>
    </div>
  );
};

export default CategoryComponent;

import React from "react";
import "./SingleProduct.css";
import { Link } from "react-router-dom";

const SingleProduct = ({ sp }) => {
  return (
    <>
      <div className="b41">
        <div className="inner1">
          <Link to={`/productdetails/${sp._id}`}>
            <img src={sp.productImg} alt />
          </Link>
          <div className="cart-info">
            <div className="circle">
              <i className="fa-regular fa-eye" />
            </div>
            <div className="circle">
              <i className="fa-regular fa-heart" />
            </div>
            <div className="circle">
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </div>
        </div>
        <div className="inner2">
          <p>{sp.name}</p>
        </div>
        <div className="inner3">
          <div className="i1">$ {sp.new_price}</div>
          <div className="i2">
            <del>$ {sp.old_price}</del>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

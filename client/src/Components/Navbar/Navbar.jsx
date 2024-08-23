import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="secondbar">
        <div className="b1">
          <Link to="/">
            <img src="https://themewagon.github.io/eiser/img/logo.png" alt="" />
          </Link>
        </div>
        <div className="b2">
          <ul>
            <Link className="reactLink" to="/">
              <li>Home</li>
            </Link>
            <Link className="reactLink" to="/product">
              <li>Shop</li>
            </Link>
            <Link className="reactLink" to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="b3">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span>
            <i className="fa-solid fa-address-book"></i>
          </span>
          <span>
            <i className="fa-regular fa-heart"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;

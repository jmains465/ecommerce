import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import SingleProduct from "../SingleProduct/SingleProduct";
import useFetch from "../../Hooks/FetchApiHook";

const HeroSection = () => {
  const productUrl = `http://localhost:5000/products/random`;
  const categoryUrl = `http://localhost:5000/products/categories`;
  const subcategoryUrl = `http://localhost:5000/products/subcategories`;

  const { data: product } = useFetch(productUrl);
  const { data: categories } = useFetch(categoryUrl);
  const { data: subcategories } = useFetch(subcategoryUrl);
  console.log(
    `categories: ${
      subcategories && subcategories.map((sc) => sc.subcategory).join(", ")
    }`
  );

  return (
    <>
      <div>
        <div className="box2" id="x1" />
        <div className="container">
          <div className="leftbox">
            <div className="leftb1">
              <div className="title">
                <h2>Browse Category</h2>
              </div>
              {categories &&
                categories.map((category, index) => (
                  <div className="option" key={index}>
                    <input
                      type="radio"
                      id={`option${index}`}
                      name="option"
                      value={category}
                    />
                    <label htmlFor={`option${index}`}>{category}</label>
                  </div>
                ))}
            </div>

            <div className="leftb1">
              <div className="title">
                <h2>Product Sub Categories</h2>
              </div>
              {subcategories &&
                subcategories.map((category, index) => (
                  <div className="option" key={index}>
                    <input
                      type="radio"
                      id={`option${index}`}
                      name="option"
                      value={category.subcategory}
                    />
                    <label htmlFor={`option${index}`}>
                      {category.subcategory}
                    </label>
                  </div>
                ))}
            </div>

            <div className="leftb1">
              <div className="title">
                <h2>Price Filter</h2>
              </div>
              <label htmlFor="rangeInput">price</label>
              <input
                type="range"
                id="rangeInput"
                min={0}
                max={100}
                defaultValue={50}
                oninput="updateValueDisplay(this.value)"
              />
              <div id="valueDisplay">50</div>
            </div>
          </div>
          <div className="rightbox">
            <div className="box3">
              <div className="default">
                <select className="default1" id name>
                  <option value=" Default Sorting">Default Sorting</option>
                  <option value="Defualt Sorting 01">Defualt Sorting 01</option>
                  <option value="Default Sorting 02">Default Sorting 02</option>
                </select>
              </div>
              <div className="default">
                <select className="sort12" id name>
                  <option value=" sort 12">sort 12</option>
                  <option value="sort 14">sort 14</option>
                  <option value="sort 16">sort 16</option>
                </select>
              </div>
              <div className="show12" />
            </div>
            <div className="box4">
              {product &&
                product.map((item, index) => (
                  <SingleProduct key={index} sp={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

//  {
//    data.map((item, index) => <SingleProduct key={index} product={item} />);
//  }

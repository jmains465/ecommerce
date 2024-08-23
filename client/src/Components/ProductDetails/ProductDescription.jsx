import React from "react";
import "./ProductDescription.css";
const ProductDescription = ({ item }) => {
  return (
    <>
      {item && (
        <div className="main">
          <div className="main1">
            <div className="main11">
              <img src={item.productImg} alt="" />
            </div>
          </div>
          <div className="main1">
            <div className="innermain1">
              <h2>{item.name}</h2>
              <br />
              <h2>$ {item.new_price}.00</h2>
              <br />
              <div className="innermain2">
                <div className="innermain22">
                  <p>Category</p>
                  <br />
                  <p>Availibility</p>
                  <br />
                  <div className="innermain23">
                    <p>: {item.category}</p>
                    <br />
                    <p>:In stock</p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="line1">
                <p>{item.description}</p>
                <br />
                <br />
                <br />
              </div>
              <div className="quantity">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="0"
                  max="100"
                  value="1"
                />
                <br />
                <br />
                <br />
              </div>
              <div className="cart">
                <div className="s1">
                  <button type="submit">Add to Cart</button>
                </div>
                <div className="s2">
                  <i className="fa-solid fa-diamond"></i>
                </div>
                <div className="s2">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;

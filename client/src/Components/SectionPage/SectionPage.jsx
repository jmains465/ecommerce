import React from "react";
import "./SectionPage.css";
import { Link } from "react-router-dom";

function SectionPage() {
  return (
    <section className="section-page">
      <div className="section-container d-flexs">
        <div className="text-image">
          <h3>MEN COLLECTION</h3>
          <h1>
            {" "}
            <span>Show</span> Your <br /> Personal <span>Style</span>
          </h1>
          <p>Fowl saw dry which a above together place.</p>
          <div className="collection">
            <Link to="/product">
              <button>view collection</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPage;

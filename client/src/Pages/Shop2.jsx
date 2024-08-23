import React from "react";
import ProductDescription from "./../Components/ProductDetails/ProductDescription";
import Header from "../Components/TopHeader/Header";
import Navbar from "../Components/Navbar/Navbar";
import Description from "../Components/Description/Description";
import Footer from "../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/FetchApiHook";

const Shop2 = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/products/id/${id}`;
  const { data: singleproduct } = useFetch(url);
  console.log(singleproduct);
  return (
    <>
      <Header />
      <Navbar />
      <Description
        h1title={"Product Details"}
        desc={"Very us move be blessed multiply night"}
      />
      <ProductDescription item={singleproduct} />
      <Footer />
    </>
  );
};

export default Shop2;

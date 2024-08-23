import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/TopHeader/Header";
import Description from "../Components/Description/Description";
import Footer from "../Components/Footer/Footer";
import HeroSection from "../Components/HeroSection/HeroSection";
const Shop1 = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Description
        h1title={"Shop Categories"}
        desc={"Very us move be blessed multiply night"}
      />
      <HeroSection />
      <Footer />
    </div>
  );
};
export default Shop1;

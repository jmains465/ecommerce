import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/TopHeader/Header";
import Footer from "../Components/Footer/Footer";
import SectionPage from "../Components/SectionPage/SectionPage";
import CategoryComponent from "../Components/BagComponent/CategoryComponent";
import useFetch from "../Hooks/FetchApiHook";
const HomePage = () => {
  const bagurl = `http://localhost:5000/products/category/bag`;
  const watchurl = `http://localhost:5000/products/category/watches`;
  const mensjeansurl = `http://localhost:5000/products/category/Men%20Jeans`;
  const { data: Bag } = useFetch(bagurl);
  const { data: Watches } = useFetch(watchurl);
  const { data: MensJeans } = useFetch(mensjeansurl);
  console.log(Bag);
  return (
    <div>
      <Header />
      <Navbar />
      <SectionPage />
      <CategoryComponent title={"Bag Component"} data={Bag} />
      <CategoryComponent title={"Watch Component"} data={Watches} />
      <CategoryComponent title={"Mens Jeans"} data={MensJeans} />

      <Footer />
    </div>
  );
};
export default HomePage;

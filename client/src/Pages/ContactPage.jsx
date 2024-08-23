import React from "react";
import Header from "../Components/TopHeader/Header";
import Navbar from "../Components/Navbar/Navbar";
import ContactComp from "../Components/ContactPage/ContactComp";
import Footer from "../Components/Footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default ContactPage;

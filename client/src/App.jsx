import React from "react";
import "./App.css";
import Shop2 from "./Pages/Shop2";
import Shop1 from "./Pages/Shop1";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Shop1 />} />
        <Route path="/productdetails/:id" element={<Shop2 />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};
export default App;
//r->react af->arrow function c->component e->export

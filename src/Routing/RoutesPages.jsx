import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import React from "react";
// --------------------Handel Lazy----------------------------
const Home = React.lazy(() => import("./../Pages/Home"));
const ProductDetails = React.lazy(() => import("../Pages/ProductDetails"));
const ContactUs = React.lazy(() => import("../Pages/ContactUs"));
const Categories = React.lazy(() => import("../Pages/Categories"));

// --------------------Body of Component----------------------------
const RoutesPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesPages;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import ProductDetailMap from "../components/ProductDetailMap";
import ErrorPage from "../components/ErrorPage";

import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<ProductDetailMap />} path="/products/:id" />
          <Route element={<ErrorPage />} path="*" />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;

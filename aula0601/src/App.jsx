import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Header } from "./Header";
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Product } from "./Product";
import { ProductCustom } from "./ProductCustom";
import { ProductDescription } from "./ProductDescription";
import { ProductReview } from "./ProductReview";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id/" element={<Product />}>
          <Route path="" element={<ProductDescription />} />
          <Route path="review" element={<ProductReview />} />
          <Route path="custom" element={<ProductCustom />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

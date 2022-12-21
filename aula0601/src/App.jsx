import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Header } from "./Header";
import { NotFound } from "./NotFound";
import { Login } from "./Login";
import { Product } from "./Product";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

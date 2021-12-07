import { Route, Routes } from "react-router";
import React from "react";
import { Header, Footer } from "./components";
import {
  Home,
  Products,
  CreateProductPage,
  Product,
  EditProductPage,
} from "./pages";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/product/:id" element={<Product />} exact />
          <Route path="/products/:id/edit" element={<EditProductPage />} exact />
          <Route path="/products/create" element={<CreateProductPage />} exact />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

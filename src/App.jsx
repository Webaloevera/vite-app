import { Route, Routes } from "react-router";
import React, { useEffect, useState } from "react";
import { Header, Footer } from "./components";
import { Home, Products, CreateProductPage, Product, EditProductPage } from "./pages";
import axios from "axios";
import "./styles/app.css";

function App() {

  const [appState, setAppState] = useState();
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:3001/products/")
        .then((res) => {
          const allCards = res.data;
          setAppState(allCards);
        })
        .catch((err) => {
          alert(err);
        });
    };
    getData();
  }, [appState]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home store={appState} />} exact />
          <Route path="/products" element={<Products store={appState} />} exact/>
          <Route path="/product/:id" element={<Product />} exact />
          <Route path="/products/:id/edit" element={<EditProductPage />} exact />
          <Route path="/products/create" element={<CreateProductPage/>} exact />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

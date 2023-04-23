import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import ProductPage from "../src/pages/ProductPage";
import React from "react";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="h-100 d-flex flex-column">
      <BrowserRouter>
        <Header />
        <div className="h-100">
          <Routes>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/" element={<ProductPage />} />
            <Route path="*" element={<div style={{ height: "100%" }}></div>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

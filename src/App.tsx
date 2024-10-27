import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/Index.scss";
import Layout from "./Layout";
import React from "react";
import HomePage from "./pages/HomePage";
import OurBrands from "./pages/OurBrands";
import Contact from "./pages/Contact";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/vara-marken" element={<OurBrands />} />
            <Route path="/kontakt" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

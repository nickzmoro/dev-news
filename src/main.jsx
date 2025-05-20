import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/header/index.jsx";
import "./styles/styles.css";
import Footer from "./components/footer/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);

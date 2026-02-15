import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import Home from "./components/home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <Footer />
  </React.StrictMode>
);



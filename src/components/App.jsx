import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import "./styles.css";
import MyApp from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Header />
      <MyApp />
      <Footer />
    </div>
  );
}

import React from "react";
import LoginButton from "./components/LoginButton";
import Header from "./components/presentation/Header";
import Slide from "./components/presentation/Slide";
import Footer from "./components/presentation/Footer";

const App = () => {
  return (
    <div className="bg-slate-100">
      <Header />
      <Slide />
      <Footer />
    </div>
  );
};

export default App;

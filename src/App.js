import React from "react";
import LoginButton from "./components/LoginButton";
import Header from "./components/presentation/Header";
import Slide from "./components/presentation/Slide";
import Footer from "./components/presentation/Footer";
import SlidesList from "./components/presentation/SlidesList";

const App = () => {
  return (
    <div className="bg-slate-100 h-full">
      <Header />
      <div className="flex">
        <SlidesList />
        <div className="w-full">
          <Slide />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

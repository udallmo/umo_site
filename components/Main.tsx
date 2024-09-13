import React from "react";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import Learning from "./Learning";
import Footer from "./Footer";

function Main() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <Experience />
      <Project />
      <Learning />
      <Footer />
    </div>
  );
}

export default Main;

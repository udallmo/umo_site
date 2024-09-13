import React from "react";
import Footer from "./Footer";
import HeroB from "./HeroB";
import Cooking from "./Cooking";
import Model from "./Model";
import Learning from "./Learning";

function Back() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <HeroB />
      <Cooking />
      <Model />
      <Learning />
      <Footer />
    </div>
  );
}

export default Back;

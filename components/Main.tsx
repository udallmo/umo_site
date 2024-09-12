import React from "react";
import { Path } from "../utils/constant";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import Learning from "./Learning";

type Props = {
  path: Path;
};

function Main({ path }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Experience />
      <Project />
      <Learning />
    </div>
  );
}

export default Main;

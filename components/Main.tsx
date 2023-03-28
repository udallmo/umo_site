import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Path } from "../utils/constant";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";

type Props = {
  path: Path;
};

function Main({ path }: Props) {
  return (
    <div className="h-5/6 flex flex-col items-center justify-center">
      {path === Path.Hero && <Hero />}
      {path === Path.Exp && <Experience />}
      {path === Path.Project && <Project />}
      {path === Path.Contact && <Contact />}
    </div>
  );
}

export default Main;

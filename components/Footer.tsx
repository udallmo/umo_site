import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="absolute bottom-0 p-10 justify-start flex space-x-4">
      <a
        href="https://www.linkedin.com/in/udall-mo-a13b17127/"
        className="text-2xl hover:opacity-50"
      >
        <GrLinkedinOption />
      </a>
      <a
        href="https://github.com/udallmo"
        className="text-2xl hover:opacity-50"
      >
        <AiFillGithub />
      </a>
    </footer>
  );
}

export default Footer;

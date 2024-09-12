import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFileAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="fixed flex-col right-0 bottom-0 p-5 justify-end flex space-y-4 mt-auto text-gray-400">
      <a
        href="/udall_mo_resume.pdf" target="_blank" download="udall_mo_resume.pdf"
        className="text-2xl hover:text-white"
      >
        <FaFileAlt />
      </a>

      <a
        href="mailto: udall_mo@outlook.com"
        target="_blank"
        className="text-2xl hover:text-white"
      >
        <MdAlternateEmail />
      </a>

      <a
        href="https://www.linkedin.com/in/udall-mo-a13b17127/"
        target="_blank"
        className="text-2xl hover:text-white"
      >
        <GrLinkedinOption />
      </a>
      <a
        href="https://github.com/udallmo"
        target="_blank"
        className="text-2xl hover:text-white"
      >
        <AiFillGithub />
      </a>
    </footer>
  );
}

export default Footer;

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Path } from "../utils/constant";

type Props = {
  switchRenders: (path: Path) => void;
  colors: { start: string; middle: string; end: string };
};

const Header = ({ switchRenders, colors }: Props) => {
  return (
    <header className="top-0 p-5 flex justify-between">
      <div
        onClick={() => switchRenders(Path.Hero)}
        className={`text-white ml-0 h-10 bg-gradient-to-r ${colors.start} ${colors.middle} ${colors.end} w-10 background-animate p-2 rounded-full flex justify-center text-center mb-4`}
      >
        <div className=" h-6 w-6 bg-gray-800 rounded-full flex justify-center text-center top-0"></div>
      </div>
      <div className="flex flex-row justify-between px-2 space-x-3">
        <div className="headerIcon" onClick={() => switchRenders(Path.Exp)}>
          Experience
        </div>
        <div className="headerIcon" onClick={() => switchRenders(Path.Project)}>
          Projects
        </div>
        <div className="headerIcon" onClick={() => switchRenders(Path.Contact)}>
          Contact
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Path } from "../utils/constant";
import {Link} from 'react-scroll';


type Props = {
  isHome: boolean;
  toggleHome: () => void;
  colors: { start: string; middle: string; end: string };
};

const Header = ({ isHome, colors, toggleHome }: Props) => {
  return (
    <header className="top-0 p-5 flex justify-between lowercase tracking-widest text-gray-400">
      <div
        className={`text-white ml-0 h-10 bg-gradient-to-r ${colors.start} ${colors.middle} ${colors.end} w-10 background-animate p-2 rounded-full flex justify-center text-center mb-4`}
      >
        <div className=" h-6 w-6 bg-gray-800 rounded-full flex justify-center text-center top-0"></div>
      </div>
      <div className="flex flex-row justify-between px-2 space-x-3">
        <Link className="headerIcon" to="section1" smooth={true} duration={500}>
        {isHome ? 'Timeline' : 'Cooking'}
        </Link>

        <Link className="headerIcon" to="section2" smooth={true} duration={500}>
        {isHome ? 'Projects' : 'Models'}
        </Link>
        <Link className="headerIcon" to="section3" smooth={true} duration={500}>
          Learnings
        </Link>
        {/* <Link className="headerIcon" to="" onClick={toggleHome}  smooth={true} duration={500}>
          {isHome ? 'B-side' : 'A-side'}
        </Link> */}
      </div>
    </header>
  );
};

export default Header;

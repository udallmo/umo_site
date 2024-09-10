import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { END, MID, Path, PRE } from "../../utils/constant";

export default function Home() {
  const [destination, setDestination] = useState<Path>(Path.Hero);
  
  const switchRenders = (path: Path) => {
    setDestination(path);
  };
  
  const getColors = () => {
    let start = "blue-500";
    let middle = "purple-500";
    let end = "indigo-500";
    
    return {
      start: PRE + start,
      middle: MID + middle,
      end: END + end,
    };
  };

  const colors = getColors();
  return (
    <div
      className={`text-white bg-gradient-to-r ${colors.start} ${colors.middle} ${colors.end} w-full background-animate py-3`}
    >
      <div className=" h-full w-full bg-gray-800">
        <Header switchRenders={switchRenders} colors={colors} />
        <Main path={destination} />
        <Footer />
      </div>
    </div>
  );
}

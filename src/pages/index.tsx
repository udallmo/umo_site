import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { END, MID, Path, PRE } from "../../utils/constant";
import Back from "../../components/Back";

export default function Home() {
  const [isHome, setIsHome] = useState<boolean>(true);
  
  
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
  
  console.log('isHome', isHome)
  return (
    <div
      className={`text-white bg-gradient-to-r ${colors.start} ${colors.middle} ${colors.end} w-full background-animate py-3`}
    >
      <div className=" h-full w-full bg-gray-800">
        <Header isHome={isHome} toggleHome={() => setIsHome(!isHome)} colors={colors} />
        { isHome ? <Main /> : <Back />}
      </div>
    </div>
  );
}

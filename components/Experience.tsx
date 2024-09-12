import React, { useState } from "react";
import { COMPANYDATA, COMPANYLIST } from "../utils/test_data";
import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-components/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  const oddExperience = COMPANYDATA.filter(company => company.id%2 === 0)
  const evenExperience = COMPANYDATA.filter(company => company.id%2 !== 0)

  const [hideOld, setHideOld] = useState<boolean>(true)
  // TODO: Add Animations for showing the old
  return (
    <div id="section1" className="w-full mb-2">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center justify-center"
    >
    <div className="flex flex-col mb-20 top-24 text-center justify-center items-center">
      <h3 className="lowercase tracking-[20px] text-gray-500 text-2xl">
        timeline
      </h3>
      <p className="mt-5 text-gray-400 tracking-wider w-3/4">
      the history of me.
      </p>
    </div>
      <div className="flex flex-row px-20 w-full h-2/3">
      <div className="flex flex-col w-1/2">
        {oddExperience.map(exp => {
          return        <>
          <ExperienceCard data={exp} hideOld={hideOld}/>
          <div className="pt-2"></div>
          </> 
        })}
      </div>
<motion.div className="border-l-2 border-dashed h-23"></motion.div>
<div className="flex flex-col w-1/2">
{evenExperience.map(exp => {
          return        <>
          <div className="pt-7"></div>
          <ExperienceCard data={exp} hideOld={hideOld}/>
          </> 
        })}
      </div>
      </div>
      <div
      onClick={() => setHideOld(!hideOld)} 
      className="hover:text-white hover:cursor-pointer text-gray-400 text-sm tracking-widest p-3 my-5">{hideOld ? "show more" : 'show less'}</div>
    </motion.div>
    </div>
  );
}

export default Experience;

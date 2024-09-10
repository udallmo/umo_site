import React, { useState } from "react";
import { COMPANYDATA, COMPANYLIST } from "../utils/test_data";
import { motion } from "framer-motion";
import { ExperienceCard } from "./experience-components/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  const oddExperience = COMPANYDATA.filter(company => company.id%2 === 0)
  const evenExperience = COMPANYDATA.filter(company => company.id%2 !== 0)

  return (
    <div className="w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col items-center justify-center"
    >
      <h3 className="uppercase mb-20 top-24 tracking-[20px] text-gray-500 text-2xl">
        Timeline
      </h3>
      <div className="flex flex-row px-10 w-full h-2/3">
      <div className="flex flex-col w-1/2">
        {oddExperience.map(exp => {
          return        <>
          <ExperienceCard data={exp}/>
          <div className="pt-2"></div>
          </> 
        })}
      </div>
<div className="border-l-2 border-dashed h-23"></div>
<div className="flex flex-col w-1/2">
{evenExperience.map(exp => {
          return        <>
          <div className="pt-7"></div>
          <ExperienceCard data={exp} />
          </> 
        })}
      </div>
      </div>
      {/* <div>Show more</div> */}
    </motion.div>
    </div>
  );
}

export default Experience;

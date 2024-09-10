import React, { useState } from "react";
import { COMPANYDATA, COMPANYLIST } from "../utils/test_data";
import { motion } from "framer-motion";

type Props = {};

function Experience({}: Props) {
  const [current, setCurrent] = useState(0);
  const data = COMPANYDATA[current];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center"
    >
      <h3 className="uppercase mb-20 top-24 tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex flex-row w-1/3 px-10 h-2/3">
        <div className="w-1/3">
          <div className="h-40 overflow-y-scroll px-2 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-indigo-500">
            <ul>
              {COMPANYLIST.map((company, index) => (
                <li
                  key={company}
                  className={`companyListItem ${
                    index === current ? "activeCompany" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                >
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/3 px-10">
          <h1 className="text-xl">{data.role}</h1>
          <h1 className="text-xl text-slate-500">{data.company}</h1>
          <ul className="flex row space-x-3">
            {data.stack.map((code) => (
              <div
                className="p-2 mt-2 rounded-xl bg-gray-700 text-xs hover:bg-gray-400"
                key={code}
              >
                {code}
              </div>
            ))}
          </ul>
          <ul>
            {data.exp.map((exp) => (
              <li key={exp} className="experienceListItem">
                {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;

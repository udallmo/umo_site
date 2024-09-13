import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { COOKINGDATA } from "../utils/cooking_data";
import { CookingCard } from "./cooking-components/CookingCard";

type Props = {};

function Model({}: Props) {
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
        models
      </h3>
      <p className="mt-5 text-gray-400 tracking-wider w-3/4">
      the things I made.
      </p>
    </div>
    <div className="flex flex-row gap-10 px-20"> 
        {COOKINGDATA.map(data  => <CookingCard key={data.id} data={data}/>)}
      </div> 
    </motion.div>
    </div>
  );
}

export default Model;

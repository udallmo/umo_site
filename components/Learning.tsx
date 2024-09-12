import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Learning({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center w-full mt-20 px-20"
      id="section3"
    >
    <div className="flex flex-col mb-20 top-24 text-center justify-center items-center">
      <h3 className="lowercase tracking-[20px] text-gray-500 text-2xl">
        Learnings
      </h3>
      <p className="mt-10 text-gray-400 tracking-wider w-3/4">
      a showcase of study materials, case studies, and technical documentation I have written. 
      This is typically used as a form of self-learning about technology and the industry
      </p>
    </div>
    {/* <div className="self-start w-full mb-10">
        <div>
            <h4 className="tracking-[5px] text-lg">articles</h4>
            <div className="grid grid-cols-8 w-full tracking-widest text-gray-400 my-4">
                <div className="col-span-3">title</div>
                <div className="col-span-4">description</div>
                <div>link</div>
            </div>
            <div className="grid grid-cols-8 w-full tracking-widest text-gray-400 mb-2">
                <div className="col-span-3">this is a title</div>
                <div className="col-span-4">incoming description about some aritcle</div>
                <div>link</div>
            </div>
        </div>
    </div>

    <div className="self-start w-full">
        <div>
            <h4 className="tracking-[5px] text-lg">case studies</h4>
            <div className="grid grid-cols-8 w-full tracking-widest text-gray-400 my-4">
                <div className="col-span-3">title</div>
                <div className="col-span-4">description</div>
                <div>link</div>
            </div>
            <div className="grid grid-cols-8 w-full tracking-widest text-gray-400 mb-2">
                <div className="col-span-3">this is a title</div>
                <div className="col-span-4">incoming description about some aritcle</div>
                <div>link</div>
            </div>
        </div>
    </div> */}
    </motion.div>
  );
}

export default Learning;

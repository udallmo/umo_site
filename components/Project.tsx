import React from "react";
import { motion } from "framer-motion";
import { PROJECTDATA } from "../utils/test_data";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { VscLinkExternal } from "react-icons/vsc";

type Props = {};

function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center w-full"
    >
      <h3 className="uppercase mb-20 top-24 tracking-[20px] text-gray-500 text-2xl">
        Project
      </h3>
      <div className="flex-row w-full px-20 md:px-1/2 lg:px-1/2 h-full overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-orange-600 snap-y snap-mandatory object-center">
        {PROJECTDATA.map((project) => (
          <div key={project.id} className="projectListItem">
            <h1 className="text-xl font-bold">{project.name}</h1>
            <p className="text-gray-400">{project.desc}</p>
            <div className="h-1/2 justify-center w-full flex py-4">
              <a href={project.link} className="hover:opacity-50 h-full">
                <Image
                  src={project.image}
                  alt=""
                  width="400"
                  height="75"
                  className="rounded-sm "
                />
              </a>
            </div>
            <div className="flex flex-row space-x-5 justify-center mt-8">
              <a href={project.git} className="text-2xl hover:opacity-50">
                <AiFillGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;

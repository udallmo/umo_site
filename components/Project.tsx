import React from "react";
import { motion } from "framer-motion";
import { PROJECTDATA } from "../utils/test_data";
import { ProjectCard } from "./project-components/ProjectCard";

type Props = {};

function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center w-full my-2"
      id="section2"
    >
    <div className="flex flex-col mb-20 top-24 text-center justify-center items-center">
      <h3 className="lowercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <p className="mt-5 text-gray-400 tracking-wider w-3/4">
      the things I have built.
      </p>
    </div>
      <div className="flex flex-row gap-2 px-20"> 
        {PROJECTDATA.map(project => <ProjectCard key={project.id}  data={project}/>)}
      </div> 
    </motion.div>
  );
}

export default Project;

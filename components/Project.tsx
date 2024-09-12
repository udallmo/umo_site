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
      <h3 className="uppercase mb-20 top-24 tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="flex flex-row gap-2 px-20"> 
        {PROJECTDATA.map(project => <ProjectCard key={project.id}  data={project}/>)}
      </div> 
    </motion.div>
  );
}

export default Project;

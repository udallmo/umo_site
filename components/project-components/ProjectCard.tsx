import { motion } from "framer-motion";
import { ProjectInput } from "../../utils/test_data"
import { FaRegFolder, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

type Props = {
    data: ProjectInput
}

export const ProjectCard: React.FC<Props> = ({data}: Props) => {
    const {name, desc, link, stack, git} = data
    return <motion.div
        whileHover={{translateY: -10}}
        className="bg-slate-600 w-1/2 p-4 rounded h-[250px] flex flex-col group">
        <div className="flex flex-row justify-between group-hover:text-blue-400">
            <FaRegFolder size={25}/>
            <div className="flex flex-row gap-3">
                {git && <a href={git} target="_blank">
                    <FaGithub size={22}/>
                </a>}

                {link && <a href={link} target="_blank">
                    <FaExternalLinkAlt size={20}/>
                </a>}
            </div>
        </div>
        <h3 className="tracking-widest my-3 group-hover:text-blue-400">
            {name}
        </h3>
        <p className="pt-2 text-gray-400 text-sm tracking-wider">
            {desc}</p>
        <div className="flex flex-row gap-3 text-sm mt-auto">
            {stack.map(s => <div key={s}>{s}</div>)}
        </div>
    </motion.div>
}
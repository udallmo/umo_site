import { CompanyInput } from "../../utils/test_data";
import {motion} from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
    data: CompanyInput
    hideOld: boolean,
}

export const ExperienceCard: React.FC<Props> = ({data, hideOld}:Props) => {
    const {role, company, description, stack, year, id, link} = data

    const isHidden = hideOld ? id > 4: false
    
    return <motion.a href={link} target="_blank" className="group"
    initial={{ opacity: 0 }}
    animate={{ opacity: isHidden ? 0 : 1 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
    <div className="p-5 m-2 group hover:bg-slate-700 hover:cursor-pointer rounded" hidden={isHidden}>
    <div className="flex justify-between">
      <div className="group-hover:text-blue-400 tracking-widest flex flex-row justify-center items-center gap-2">
        <div>
            {role} | {company}
            </div>
            <div className="text-blue-400 invisible group-hover:visible">
        <FaExternalLinkAlt />
            </div>
            </div>
      <div className="text-gray-400 tracking-widest">{year}</div>
    </div>
      
      <p className="pt-2 text-gray-400 text-sm tracking-wider">
        {description}
      </p>

      <div className="flex flex-row gap-3 text-sm mt-2 tracking-wider">
        {stack.map(s => <div key={s}>{s}</div>)}
      </div>
    </div>
    </motion.a>
  };
  

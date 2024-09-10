import { CompanyInput } from "../../utils/test_data";

type Props = {
    data: CompanyInput
    hideOld: boolean,
}

// TODO: link out to the company
export const ExperienceCard: React.FC<Props> = ({data, hideOld}:Props) => {
    const {role, company, description, stack, year, id} = data

    const isHidden = hideOld ? id > 4: false
    return <div className="p-5 m-2 group hover:bg-slate-700 hover:cursor-pointer rounded" hidden={isHidden}>
    <div className="flex justify-between">
      <div className="group-hover:text-blue-400 tracking-widest">{role} | {company}</div>
      <div className="text-gray-400 tracking-widest">{year}</div>
    </div>
      
      <p className="pt-2 text-gray-400 text-sm tracking-wider">
        {description}
      </p>

      <div className="flex flex-row gap-3 text-sm mt-2 tracking-wider">
        {stack.map(s => <div key={s}>{s}</div>)}
      </div>
    </div>
  };
  

import { CompanyInput } from "../../utils/test_data";

type Props = {
    data: CompanyInput
}

export const ExperienceCard: React.FC<Props> = ({data}:Props) => {
    const {role, company, description, stack, year} = data
    return <div className="p-5 m-2 group hover:bg-slate-700 hover:cursor-pointer rounded">
    <div className="flex justify-between">
      <div className="group-hover:text-blue-400">{role} | {company}</div>
      <div className="text-gray-400">{year}</div>
    </div>
      
      <p className="pt-2 text-gray-400 text-sm">
        {description}
      </p>

      <div className="flex flex-row gap-3 text-sm mt-2">
        {stack.map(s => <div key={s}>{s}</div>)}
      </div>
    </div>
  };
  

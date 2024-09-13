import { motion } from "framer-motion";
import { CookingInput } from "../../utils/cooking_data";
import Image from "next/image";

type Props = {
    data: CookingInput
}

export const CookingCard: React.FC<Props> = ({data}: Props) => {
    const {name, imageLink} = data
    return <motion.div
        initial={{scale: 1}}
        whileHover={{scale: 1.1}}
        className="flex flex-col group justify-center items-center py-2">
            <Image 
                src={imageLink}
                alt=""
                width="400"
                height="75"
                className="rounded-sm"
            />
        <h3 className="text-sm text-gray-400 tracking-wider p-2 lowercase">{name}</h3>
    </motion.div>
}
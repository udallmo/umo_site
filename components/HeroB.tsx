import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import arrowAnimation from "./arrow.json";
import {Link} from 'react-scroll';

type Props = {};

const wordList = [`hi, the name's Udall`, "a software engineer", "a casual creator"];

function HeroB({}: Props) {
  const [text, count] = useTypewriter({
    words: wordList,
    loop: true,
    delaySpeed: 2000,
  });

  const options = {
    animationData: arrowAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className="h-screen">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center"
    >
      <h1 className="uppercase text-5xl lg:6xl font-semibold px-10 tracking-widest">
        Showcase
      </h1>
      <p className="px-20 py-5 text-gray-400 xl:mx-40 text-sm tracking-widest">
      A fun showcase of the things I do outside of software development
      </p>

    </motion.div>
    </div>
  );
}

export default HeroB;

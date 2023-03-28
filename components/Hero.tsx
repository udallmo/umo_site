import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

const wordList = [`Hi, the name's Udall`, "A Software Engineer", "A Casual Creator"];

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: wordList,
    loop: true,
    delaySpeed: 2000,
  });

  // INSERT LOTTIE HERE
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-5/6 flex flex-col items-center justify-center"
    >
      <div
        className={`text-white h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 w-20 background-animate p-2 rounded-full flex justify-center text-center mb-4`}
      >
        <div className=" h-16 w-16 bg-gray-800 rounded-full flex justify-center text-center top-0"></div>
      </div>
      <h1 className="text-5xl lg:6xl font-semibold px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="#6366f1" />
      </h1>
      <h2 className="text-sm uppercase text-gray-500 pb-2 pt-2 tracking-[15px]">
        software Engineer
      </h2>
      <p className="p-5 text-gray-400 xl:mx-40">
        Hello, I am Udall, a software engineer with 4 years of experience in the
        tech industry. I graduated from the University of Waterloo with
        a degree in Computer Engineering, and since then, I have been passionately
        pursuing growth, being challenged, and nurturing my curiosity. My career
        has been marked by my constant pursuit of knowledge and my ability to
        tackle difficult problems with creativity and innovation. I am always
        eager to learn and take on new challenges that stretch my skills and
        push me out of my comfort zone. My goal as a software engineer is to
        continue growing and evolving with the fast-paced tech industry, always
        striving to improve my abilities and make a meaningful impact in the
        world of software development.
      </p>
    </motion.div>
  );
}

export default Hero;

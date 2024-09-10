import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import arrowAnimation from "./arrow.json";

type Props = {};

const wordList = [`Hi, the name's Udall`, "A Software Engineer", "A Casual Creator"];

function Hero({}: Props) {
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
      <p className="px-20 py-5 text-gray-400 xl:mx-40">
      Currently, I&apos;m part of the engineering team at Maple work on building the next workforce management suite for nurses and long-care facility workers. Previously, I was a Software Engineer at Varicent <br /><br />
      As a software developer, I&apos;m passionate about creating and designing seamless, user-centered experiences by integrating business, marketing, and UX/UI principles. My focus is on delivering intuitive and efficient solutions that enhance customer satisfaction when interacting with online products and services
      </p>
      {View}
    </motion.div>
  );
}

export default Hero;

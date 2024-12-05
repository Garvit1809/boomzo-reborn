"use client";

import { FC, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";
import Particles from "./particles";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]

  });
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start end", "end end"],
  // });
  
  // const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]); // Map scroll progress to path length
  // const arrowPosition = useTransform(scrollYProgress, [0, 1], [0, 1]);
  

  const words = text.split(" ");
  // const transition = { duration: 2, yoyo: Infinity, ease: "easeInOut" }

  return (
    <div ref={targetRef} className={cn("relative z-0 overflow-y-visible w-full h-[200vh]", className)}>
{/*      
        <div className="absolute inset-0 -z-10 opacity-100">
        <svg
         width="100%" height="100%" viewBox="0 0 334.5 128.389" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path id="Vector" d="M0 127.389C60.4169 2.97092 93.7751 99.4723 142.5 75.5002C191.225 51.528 181.65 34.8751 211 31.5001C240.35 28.1251 246.9 69.8751 273.5 62.0001C300.1 54.125 333.5 0 333.5 0" fill="none" stroke-width="8" stroke="#00FF00" stroke-linecap="round" stroke-linejoin="round" transform="translate(0.5 0.5)" 
            // initial={{ pathLength: 0 }} 
            // animate={{ pathLength: 1 }}
            pathLength={pathLength}
            transition={transition}
          />
         
        </svg>
      </div> */}
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] overflow-clip  max-w-6xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
       
        <p
          className={
            "flex flex-wrap p-5 text-5xl  font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-6xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} word={word} progress={scrollYProgress1} range={[start, end]} />
            );
          })}
        </p>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={"#6435bd"}
        size={1.2}
        refresh
      />
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={"#ff9100"}
        size={1.5}
        refresh
      />
    </div>
  );
};

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  // Check if the word is in the list of specific words
  const isSpecialWord = ["sales", "marketing", "earn!"].includes(word.toLowerCase());
  const specialWordStyle = isSpecialWord ? "text-transparent bg-gradient-to-r from-[#542daf] via-purple-500 to-[#ff9100] bg-clip-text " : "text-black";

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{word}</span>
      <motion.span
        style={{ opacity: opacity }}
        transition={{ type: "spring" }}
        className={cn(specialWordStyle)}
      >
        {word}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;

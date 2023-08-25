import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaVuejs,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiWix,
  SiSquarespace, 
  SiShopify,
  SiMailchimp
} from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key=""/>,
          <FaCss3 key="" />,
          <FaJs key=""/>,
          <FaReact key=""/>,
          <SiNextdotjs key=""/>,
          <SiFramer key=""/>,
          <FaWordpress key=""/>,
          <FaVuejs key=""/>,
          <FaNodeJs key=""/>,
          <FaAngular key=""/>
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="" />, <SiAdobexd key=""/>, <SiWix key=""/>, <SiSquarespace key=""/>, <SiShopify key=""/>, <SiMailchimp key=""/>],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Web Development",
        stage: "2020-2021",
      },
      {
        title: "React Developer",
        stage: "2021 - 2022",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Frontend Developer Internship -HNG",
        stage: "2021 - 2023",
      },
      {
        title: "Web Developer - Freelancing",
        stage: "2020 - present",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Computer Science and Engineering - OAU, Ile-Ife",
        stage: "2020",
      },
      {
        title: "Certified React Developer - YouAccel",
        stage: "2021",
      },
      {
        title: "Certified Graphic Designer - A",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:text-[40px] font-semibold text-[20px]"
          >
            Crafting <span className="text-accent">Digital Experience</span> with Codes and Creativity
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] text-[13px] md:text-[15px] mx-auto xl:mx-0 md:mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I amm Adedokun Femi, a frontend engineer. I am a student at Obafemi Awolowo University (OAU) studying Computer Science and Mathematics.When i amm not coding, i enjoy reading, watching animes. <br />
            <br />
            I am a Front-End Developer aspiring to be a Fullstack Developer and with 3 years of experience in tech and design, equipped with knowledge of various technologies to solve problems by building efficient solutions.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"  
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 items-center justify-center">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} /> +  
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfaced clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:bg-accent after:w-[100%] after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="https://drive.google.com/file/d/1JYEfNBBF0sP90chdJfqnwCVxPSFlUeCB/view?usp=drive_link"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="bg-accent p-1 md:p-3 text-[13px] md:text-[15px] hover:bg-white hover:text-accent transition-all rounded">View Resume</button>
          </a>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
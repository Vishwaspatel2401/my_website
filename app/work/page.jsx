"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Jarvis Voice-Controlled Virtual Assistant",
    title: "Voice-Controlled Virtual Assistant",
    description:
      "Engineered an advanced voice-controlled assistant utilizing cutting-edge speech recognition and text-to-speech libraries, enabling fluid voice interaction. Enhanced system performance by 30% through optimization of voice recognition algorithms and cloud integration.",
    stack: [
      { name: "Python" }, 
      { name: "Speech Recognition" }, 
      { name: "pyttsx3" }
    ],
    image: "/assets/work/jarvis.png",
    live: "",
    github: "https://github.com/Vishwaspatel2401/Jarvis-Assistant",
  },
  {
    num: "02",
    category: "Garden Simulator",
    title: "Garden Simulator",
    description:
      "Developed an interactive Java-based Garden Simulation System that allows users to create and manage a virtual garden with dynamic environmental controls, real-time monitoring, and intelligent pest management. Leveraged JavaFX for the user interface and implemented features such as automated watering, plant-specific behaviors, and a live activity log. Integrated a modular architecture to support extensibility for various plant types and environmental conditions, ensuring scalability and maintainability.",
    stack: [{ name: "Java" }, { name: "JavaFX" }, { name: "IntelliJ IDEA" }],
    image: "/assets/work/Garden_Simlator.png",
    live: "",
    github: "https://github.com/Vishwaspatel2401/Garden_Managment_system",
  },
  {
    num: "03",
    category: "RedWatch SOC Platform",
    title: "RedWatch SOC Platform",
    description:
      "Built a full-stack Security Operations Center platform that enables security teams to upload and analyze web proxy, server, and application logs using AI. Leveraged GPT-4o-mini for automated threat detection, anomaly alerts, and analyst summaries. Supports multiple log formats (ZScaler, Apache/Nginx, JSON) and optional VirusTotal integration for threat intelligence enrichment.",
    stack: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "Docker" },
    ],
    image: "/assets/work/redwatch.png",
    live: "https://redwatch-soc.vercel.app",
    github: "https://github.com/Vishwaspatel2401/Redwatch-SOC",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex items-center overflow-hidden"
    >
      <div className="container mx-auto h-full overflow-hidden">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[#232329]">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain p-4"
                          alt={project.title}
                          priority
                          quality={100}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent/80 w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-2xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

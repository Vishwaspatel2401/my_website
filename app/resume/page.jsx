"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython, 
  FaUniversity,
  FaGraduationCap,
  FaJava,
  FaGithub,
  FaLinux,
  FaDocker,
  
} from "react-icons/fa";

import { SiFastapi } from "react-icons/si";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { MdSchool } from "react-icons/md";
import Image from "next/image";

// about data
const about = {
  title: "About me",
  description:
    "Master's student in Computer Science at Santa Clara University with expertise in full-stack development, machine learning, and cloud technologies. Experienced in building scalable applications and implementing efficient data processing solutions.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vishwas Patel",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 669-340-8432",
    },
    // {
    //   fieldName: "Experience",
    //   fieldValue: "2+ Years",
    // },
    {
      fieldName: "Location",
      fieldValue: "Santa Clara, CA",
    },
    // {
    //   fieldName: "Nationality",
    //   fieldValue: "Indian",
    // },
    {
      fieldName: "Email",
      fieldValue: "vishwaspatel2401@gmail.com",
    },
    // {
    //   fieldName: "Freelance",
    //   fieldValue: "Available",
    // },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Gujarati",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "Shaip",
      position: "Software Developer Intern",
      duration: "Aug 2023 - Feb 2024",
      location: "Ahmedabad, Gujarat, India"
    },
    {
      company: "Santa Clara University",
      position: "Data Science Intern",
      duration: "Feb 2023 - Apr 2023",
      location: "Ahmedabad, Gujarat, India"
    }
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "Santa Clara University",
      degree: "Master of Science in Computer Science",
      duration: "2024 - 2026",
      location: "Santa Clara, CA, USA",
      gpa: "3.5/4",
      coursework: "Computer Architecture, Object Oriented Programming, Database Management Systems, Machine Learning, Design Patterns"
    },
    {
      institution: "Gujarat Technological University",
      degree: "Bachelor of Engineering in Computer Engineering",
      duration: "2019 - 2023",
      location: "Gandhinagar, Gujarat, India",
      gpa: "3.74/4",
      coursework: "Data Structures & Algorithms, Theory of Computation, Operating Systems, Computer Networks, Computer Organization and Architecture, Software Engineering, Python for Data Science"
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  // description:
  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <DiMysql />,
      name: "mysql",
    },
    {
      icon: <DiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiFastapi />,
      name: "fastapi",
    },
    {
      icon: <FaLinux />,
      name: "linux",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="h-screen flex items-center justify-center py-12 xl:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full overflow-hidden">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="border-b-2 border-transparent data-[state=active]:border-accent">Experience</TabsTrigger>
            <TabsTrigger value="education" className="border-b-2 border-transparent data-[state=active]:border-accent">Education</TabsTrigger>
            <TabsTrigger value="skills" className="border-b-2 border-transparent data-[state=active]:border-accent">Skills</TabsTrigger>
            <TabsTrigger value="about" className="border-b-2 border-transparent data-[state=active]:border-accent">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full overflow-hidden">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex flex-col items-center lg:items-start gap-1">
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                            <p className="text-white/40 text-sm">{item.location}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] p-8 rounded-xl flex flex-col gap-6"
                        >
                          {/* Duration */}
                          <span className="text-accent text-lg">{item.duration}</span>

                          {/* Degree */}
                          <h3 className="text-2xl font-semibold leading-tight">
                            {item.degree}
                          </h3>

                          {/* Institution and Location */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-gray-400 text-lg">{item.institution}</p>
                            </div>
                            <p className="text-gray-500 text-base">{item.location}</p>
                          </div>
                          
                          {/* GPA and Coursework */}
                          <div className="space-y-4">
                            <p className="text-accent text-lg font-semibold">GPA: {item.gpa}</p>
                            <div>
                              <p className="text-gray-400 text-lg mb-2">Key Coursework:</p>
                              <p className="text-gray-500 text-base leading-relaxed">{item.coursework}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

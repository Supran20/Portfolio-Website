"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDavinciresolve,
  SiDjango,
  SiNextdotjs,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "I am Supran Maharjan, a passionate AI/ML enthusiast and full-stack developer. I love creating innovative solutions that blend technology and creativity. With a strong foundation in both front-end and back-end development, I enjoy building seamless user experiences and intelligent systems. My goal is to leverage AI to solve real-world problems and make a positive impact through technology.",
  info: [
    { fieldName: "Name", fieldValue: "Supran Maharjan" },
    { fieldName: "Phone", fieldValue: "+977 9801234567" },
    { fieldName: "Experience", fieldValue: "Fresher" },
    { fieldName: "Nationality", fieldValue: "Nepalese" },
    { fieldName: "Email", fieldValue: "msupran17@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "Nepali, Newari, English" },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "My professional journey includes hands-on experience in software development and technology innovation. I'm eager to contribute my skills and continue growing in the field.",
  items: [
    {
      company: "Cloco Inc.",
      position: "Fellowship",
      duration: "June-August 2025",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "My academic background has provided me with a strong foundation in computer science and engineering principles, preparing me for challenges in software development and AI.",
  items: [
    {
      institution: "DAV School, Lalitpur",
      degree: "SEE",
      duration: "2012 - 2018",
    },
    {
      institution: "Xavier International College, Kathmandu",
      degree: "+2 Science",
      duration: "2018 - 2020",
    },
    {
      institution: "Himalaya College of Engineering, Lalitpur",
      degree: "B.E. Computer Engineering",
      duration: "2020 - 2025 April",
    },
  ],
};

// training
const training = {
  icon: "/assets/resume/reward.png",
  title: "My Training",
  description:
    "I've completed various training programs and courses to enhance my technical skills and stay updated with the latest technologies in web development, AI, and content creation.",
  items: [
    {
      tech: "MERN",
      institution: "Broadway Infosys",
      duration: "2023 Jun - 2023 Jul",
    },
    {
      tech: "Python",
      institution: "YouTube - Code with Harry",
      duration: "2022 Sep - 2022 Oct",
    },
    {
      tech: "Machine Learning",
      institution: "Coursera - Andrew Ng",
      duration: "2023 Jan - 2023 Feb",
    },
    {
      tech: "Video Editing",
      institution: "YouTube - AkashKRavi",
      duration: "2023 Dec - 2024 Jan",
    },
  ],
};

// skills
const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My Skills",
  description:
    "A comprehensive toolkit of modern technologies and frameworks that I use to build robust, scalable applications and create engaging digital content.",
  skillSet: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiDavinciresolve />, name: "DaVinci Resolve" },
    { icon: <SiMongodb />, name: "Mongodb" },
    { icon: <SiPostgresql />, name: "Postgresql" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="space-y-6">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-400"></span>
                            <p className="text-white/60">{item.company}</p>
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
                  <ul className="space-y-6">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-400"></span>
                            <p className="text-white/60">{item.institution}</p>
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
                  {skills.skillSet.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-emerald-400 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-emerald-400 text-black font-semibold border-none">
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

            {/* training */}
            <TabsContent value="training" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{training.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {training.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="space-y-6">
                    {training.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-400">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.tech}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
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

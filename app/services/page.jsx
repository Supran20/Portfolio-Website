"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "Crafting dynamic and responsive web applications using modern frameworks like React, Next.js, Django, and MERN to deliver seamless user experiences.",
    href: "https://github.com/Supran20/Bill-Splitter-App",
  },
  {
    num: "02",
    title: "Machine Learning",
    description:
      "Developing intelligent systems that analyze data, recognize patterns, and make predictions to drive informed decision-making.",
    href: "https://github.com/Supran20/Major-Project",
  },
  {
    num: "03",
    title: "Video Editing",
    description:
      "Creating engaging visual content with tools like Adobe Premiere Pro and After Effects to tell compelling stories.",
    href: "https://drive.google.com/drive/folders/1R532qOBF6dDi2KNERUKwf2uiF6qBRMBJ",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-400 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-[#1c1c22] text-3xl" />
                </Link>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold group-hover:text-emerald-400 transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70">{service.description}</p>

              {/* Line */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

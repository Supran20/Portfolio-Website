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
import WorkSliderBtns from "../../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "AI/ML",
    title: "Virtual Lens Try on with Dynamic Price Optimization",
    description:
      "For my major project, I developed an eyewear website using MERN stack that includes a secure user authentication system and an admin panel for managing inventory and user data. The platform also features a face shape classification system using Haar Cascade for face detection and a Swin Transformer model for accurate face shape recognition, enabling personalized eyewear recommendations.",
    stack: [
      { name: "MERN" },
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "OpenCv" },
      { name: "NumPy" },
    ],
    image: "/assets/work/tryon.mp4",
    live: "https://drive.google.com/file/d/1IooUy7EBf8mbaoByMZmfYPSjFLZVH-yo/view?usp=sharing",
    github: "https://github.com/Supran20/Major-Project",
  },
  {
    num: "02",
    category: "Full Stack Development",
    title: "Bill Splitter App",
    description:
      "The Bill Splitter app, built using Django and Next.js, simplifies shared expenses by tracking who paid and who owes. Users can split costs equally or unevenly, add notes, and view balances. Ideal for trips, outings, or shared living, it ensures fairness, transparency, and hassle-free group settlements.",
    stack: [{ name: "Django" }, { name: "NextJs" }],
    image: "/assets/work/BillSplit.mp4",
    live: "",
    github: "https://github.com/Supran20/Bill-Splitter-App",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Movie App",
    description:
      "Developed a movie website using a public API to fetch and display movie data. Gained hands-on experience with React fundamentals, including components, state management, and React Hooks. Implemented custom hooks to handle data fetching and reusable logic, enhancing code modularity and maintainability. This project deepened my understanding of how React renders UI and manages dynamic content efficiently.",
    stack: [{ name: "React" }],
    image: "/assets/work/movie-app.mp4",
    live: "",
    github: "https://github.com/Supran20/React-Movie-Website",
  },
  {
    num: "04",
    category: "AI/ML",
    title: "Stock Price Prediction",
    description:
      "This project is a web-based stock price predictor built using LSTM neural networks and Streamlit. It takes historical stock data and forecasts future trends using deep learning. The application allows users to input a stock symbol and visualize price trends alongside moving averages and predictions.",
    stack: [
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "NumPy" },
      { name: "tensorflow" },
    ],
    image: "/assets/work/Stock.mp4",
    live: "",
    github: "https://github.com/Supran20/Stock-Market-Price-Predictor",
  },
  {
    num: "05",
    category: "AI/ML",
    title: "Customer Churn Predictor",
    description:
      "Developed a Flask-based web application for customer churn prediction using a Random Forest model, incorporating feature encoding and scaling for accurate results. Built an interactive front-end for users to input data and receive real time predictions with confidence scores.",
    stack: [
      { name: "Flask" },
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "tensorflow" },
      { name: "NumPy" },
    ],
    image: "/assets/work/Churn.mp4",
    live: "",
    github: "https://github.com/Supran20/Customer-Churn-Predictor",
  },
  {
    num: "06",
    category: "AI/ML",
    title: "Food Delivery Time Prediction",
    description:
      "Developed a food delivery time prediction model using XGBoost. Conducted data analysis, handled missing values, and performed feature engineering to improve accuracy. Optimized the model for strong predictive performance.",
    stack: [
      { name: "Streamlit" },
      { name: "Python" },
      { name: "scikit-learn" },
      { name: "NumPy" },
    ],
    image: "/assets/work/food_time.mp4",
    live: "",
    github: "https://github.com/Supran20/Food-Delivery-Time-Prediction",
  },
  {
    num: "07",
    category: "Video Editing",
    title: "Sample Videos",
    description:
      "I'm skilled in video editing with DaVinci Resolve, focusing on cuts, subtitles, and keyframing. I've edited professional-quality content for several YouTube channels.",
    stack: [{ name: "DaVinci Resolve" }],
    image: "Transition_Foods.mp4",
    live: "https://drive.google.com/drive/folders/1R532qOBF6dDi2KNERUKwf2uiF6qBRMBJ",
    github:
      "https://drive.google.com/drive/folders/1R532qOBF6dDi2KNERUKwf2uiF6qBRMBJ",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-20 xl:px-0"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row xl:gap-[50px] items-center">
          <motion.div
            key={project.num}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full xl:w-[50%] flex flex-col gap-8 order-2 xl:order-none mb-8 xl:mb-0"
          >
            <div className="flex flex-col gap-6">
              {/* Project number with enhanced styling */}
              <div className="flex items-center gap-4">
                <div className="text-7xl md:text-8xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 stroke-emerald-400">
                  {project.num}
                </div>
                <div className="h-[2px] flex-1 bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
              </div>

              {/* Category badge */}
              <div className="inline-flex w-fit">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/10 to-emerald-600/10 border border-emerald-400/20 text-emerald-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Project title */}
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-white group-hover:text-emerald-400 transition-all duration-500">
                {project.title}
              </h2>

              {/* Project description with better formatting */}
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack with enhanced pills */}
              <div>
                <h3 className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                    >
                      {item.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action buttons with better styling */}
              <div className="flex items-center gap-4 pt-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group/btn w-[70px] h-[70px] rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border-2 border-emerald-400/20 flex justify-center items-center hover:border-emerald-400 hover:bg-emerald-400/20 transition-all duration-300 backdrop-blur-sm">
                        <BsArrowUpRight className="text-emerald-400 text-3xl group-hover/btn:scale-110 transition-transform duration-300" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-emerald-400 text-black font-semibold border-none">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group/btn w-[70px] h-[70px] rounded-full bg-gradient-to-br from-white/5 to-white/10 border-2 border-white/20 flex justify-center items-center hover:border-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                        <BsGithub className="text-white text-3xl group-hover/btn:scale-110 transition-transform duration-300" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-black font-semibold border-none">
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image slider with enhanced container */}
          <div className="w-full xl:w-[50%] order-1 xl:order-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[600px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="h-[400px] xl:h-[600px] relative group rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/0 to-emerald-600/0 group-hover:from-emerald-400/10 group-hover:to-emerald-600/10 transition-all duration-500 z-10"></div>

                    {/* Border effect */}
                    <div className="absolute inset-0 border-2 border-white/5 rounded-2xl z-20 group-hover:border-emerald-400/30 transition-all duration-500"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      {project.image.endsWith(".mp4") ? (
                        <video
                          src={project.image}
                          className="object-cover w-full h-full rounded-2xl "
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <Image
                          src={project.image}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          alt={project.title}
                        />
                      )}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}

              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-6 absolute inset-0 z-30 w-full justify-between items-center px-6 pointer-events-none"
                btnStyles="pointer-events-auto bg-emerald-400/90 hover:bg-emerald-500 text-black text-[26px] w-[56px] h-[56px] rounded-full flex justify-center items-center transition-all duration-300 shadow-xl hover:scale-110 hover:shadow-emerald-400/50"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;

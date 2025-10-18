"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
        }}
        className="relative"
      >
        {/* Outer glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{
            delay: 0.5,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-emerald-600/30 blur-3xl rounded-full scale-110"
        />

        {/* Secondary pulse glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent blur-2xl rounded-full"
        />

        {/* Image container with gradient border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.6, ease: "easeIn" },
          }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] z-10"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-[3px] opacity-50">
            <div className="w-full h-full rounded-full bg-[#1a1a1f]" />
          </div>

          <Image
            src="/assets/pic1.png"
            priority
            quality={100}
            alt="Supran Maharjan"
            fill
            className="object-contain mix-blend-lighten relative z-10"
          />
        </motion.div>

        {/* Primary animated circle */}
        <motion.svg
          className="w-[310px] xl:w-[520px] h-[310px] xl:h-[520px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 520 520"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="260"
            cy="260"
            r="254"
            stroke="url(#gradient1)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Secondary rotating ring with dots */}
        <motion.svg
          className="w-[340px] xl:w-[560px] h-[340px] xl:h-[560px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 560 560"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="280"
            cy="280"
            r="274"
            stroke="#10b981"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8 15"
            initial={{ opacity: 0.4 }}
            animate={{
              rotate: [0, -360],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Third inner rotating ring */}
        <motion.svg
          className="w-[280px] xl:w-[480px] h-[280px] xl:h-[480px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          fill="transparent"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="240"
            cy="240"
            r="234"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 25"
            initial={{ opacity: 0.3 }}
            animate={{
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>

        {/* Orbiting particles */}
        {[0, 60, 120, 180, 240, 300].map((angle, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-2 h-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.div
              animate={{
                rotate: [angle, angle + 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative"
            >
              <div
                className="absolute bg-emerald-400 rounded-full w-2 h-2 shadow-lg shadow-emerald-400/50"
                style={{
                  left: "160px",
                  top: "-1px",
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Decorative corner accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute -top-4 -left-4 w-20 h-20"
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L0 40C0 17.9086 17.9086 0 40 0H0Z"
              fill="url(#corner-gradient)"
              opacity="0.3"
            />
            <defs>
              <linearGradient
                id="corner-gradient"
                x1="0"
                y1="0"
                x2="40"
                y2="40"
              >
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="absolute -bottom-4 -right-4 w-20 h-20 rotate-180"
        >
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L0 40C0 17.9086 17.9086 0 40 0H0Z"
              fill="url(#corner-gradient2)"
              opacity="0.3"
            />
            <defs>
              <linearGradient
                id="corner-gradient2"
                x1="0"
                y1="0"
                x2="40"
                y2="40"
              >
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

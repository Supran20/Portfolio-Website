"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full relative overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
        className="absolute top-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5, delay: 0.4 }}
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-12">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-8"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400/10 to-emerald-600/10 border border-emerald-400/30 text-emerald-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  AI/ML Enthusiast & Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Hello, I'm <br />
                <span className="relative inline-block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 animate-gradient">
                    Supran Maharjan
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-[600px] mx-auto xl:mx-0 mb-10 text-white/70 text-lg leading-relaxed"
            >
              Blending AI, code, and creativity, I build smart, user-friendly
              solutions that make technology feel effortless.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col xl:flex-row items-center gap-6 mb-12"
            >
              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1YG9kYTfF2l6zyeXp4iT54FqbQpcsUsIT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative uppercase flex items-center gap-3 px-8 py-6 border-2 border-emerald-400 text-emerald-400 hover:text-black font-semibold rounded-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-emerald-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    Download CV
                    <FiDownload className="text-xl group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </Button>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-1">
                <span className="text-white/50 text-sm mr-3 hidden xl:block">
                  Follow me:
                </span>
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-12 h-12 border-2 border-emerald-400/30 rounded-full flex justify-center items-center text-emerald-400 text-lg hover:bg-emerald-400 hover:text-black hover:border-emerald-400 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                />
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-3 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center xl:text-left group cursor-default"
                >
                  <div className="relative inline-block">
                    <h3 className="text-4xl xl:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      7+
                    </h3>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                    />
                  </div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-medium">
                    Projects
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center xl:text-left group cursor-default"
                >
                  <div className="relative inline-block">
                    <h3 className="text-4xl xl:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      5+
                    </h3>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                    />
                  </div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-medium">
                    Technologies
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center xl:text-left group cursor-default"
                >
                  <div className="relative inline-block">
                    <h3 className="text-4xl xl:text-5xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                      100%
                    </h3>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
                    />
                  </div>
                  <p className="text-white/60 text-sm uppercase tracking-wider font-medium">
                    Dedication
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div>
            <Photo />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;

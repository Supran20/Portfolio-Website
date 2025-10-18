"use client";

import { Button } from "@/components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+977) 9849967005",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "msupran17@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pulchowk, Lalitpur",
  },
];

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeOut" },
      }}
      className="py-12 xl:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16 text-center xl:text-left"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto xl:mx-0"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="xl:w-[54%] order-2 xl:order-none"
          >
            <div className="flex flex-col gap-6 p-8 xl:p-10 bg-gradient-to-br from-[#27272c] to-[#1f1f23] rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm">
              <div className="mb-2">
                <h3 className="text-3xl xl:text-4xl font-bold text-white mb-3">
                  Let's Work <span className="text-emerald-400">Together</span>
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Have a project in mind or want to discuss opportunities? Drop
                  me a message and I'll get back to you as soon as possible. I'm
                  always excited to collaborate on interesting projects.
                </p>
              </div>

              {/* Name Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Input
                    type="text"
                    placeholder="First name"
                    className="bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 h-12 rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 }}
                >
                  <Input
                    type="text"
                    placeholder="Last name"
                    className="bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 h-12 rounded-lg"
                  />
                </motion.div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 h-12 rounded-lg"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                >
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    className="bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 h-12 rounded-lg"
                  />
                </motion.div>
              </div>

              {/* Service Select */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Select>
                  <SelectTrigger className="w-full bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 h-12 rounded-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#27272c] border-white/10">
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem
                        value="web"
                        className="focus:bg-emerald-400/10 focus:text-emerald-400"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        value="ai"
                        className="focus:bg-emerald-400/10 focus:text-emerald-400"
                      >
                        AI/ML
                      </SelectItem>
                      <SelectItem
                        value="video"
                        className="focus:bg-emerald-400/10 focus:text-emerald-400"
                      >
                        Video Editing
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>

              {/* Message TextArea */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
              >
                <Textarea
                  className="h-[180px] bg-[#1a1a1f] border-white/10 focus:border-emerald-400 transition-all duration-300 rounded-lg resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-8 bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-black font-semibold rounded-lg shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 group"
                >
                  Send Message
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-8 w-full xl:w-auto">
              {info.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#27272c]/50 to-[#1f1f23]/50 border border-white/5 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-400/10">
                      <div className="w-[60px] h-[60px] xl:w-[70px] xl:h-[70px] bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 border border-emerald-400/20 text-emerald-400 rounded-xl flex items-center justify-center text-[28px] xl:text-[32px] group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">
                          {item.title}
                        </p>
                        <h3 className="text-lg xl:text-xl text-white font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                          {item.description}
                        </h3>
                      </div>
                    </div>
                  </motion.li>
                );
              })}

              {/* Additional decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="mt-4 p-6 rounded-2xl bg-gradient-to-br from-emerald-400/5 to-emerald-600/5 border border-emerald-400/10"
              >
                <p className="text-white/60 text-sm leading-relaxed">
                  <span className="text-emerald-400 font-semibold">
                    Quick Response:
                  </span>{" "}
                  I typically respond within 24 hours. For urgent inquiries,
                  feel free to reach out directly via phone.
                </p>
              </motion.div>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacts;

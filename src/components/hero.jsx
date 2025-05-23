import React from "react";
import { motion } from "framer-motion";
import "./styles/hero.css";
import star from "../assets/star.png"; // adjust the path if needed
import paperPlane from "../assets/paper-plane.png";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <motion.img
        src={paperPlane}
        alt="Paper Plane"
        className="absolute w-6 h-6 z-0"
        style={{ top: "50%", right: "20%" }}
        animate={{ scale: [2.2, 1.8, 2.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Blinking Stars */}
      <motion.img
        src={star}
        alt="Star"
        className="absolute w-6 h-6 z-0"
        style={{ top: "12%", left: "25%" }}
        animate={{ scale: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={star}
        alt="Star"
        className="absolute w-6 h-6 z-0"
        style={{ top: "25%", right: "25%" }}
        animate={{ scale: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={star}
        alt="Star"
        className="absolute w-6 h-6 z-0"
        style={{ top: "75%", right: "65%" }}
        animate={{ scale: [1.2, 0.8, 1.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tech Founders tag */}
      <motion.div
        className="absolute left-60 top-110 z-20 flex items-center space-x-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="48" viewBox="0 0 24 24"><path fill="#3B8DE0" stroke="#3B8DE0" stroke-width="4" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path></svg>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#3353bc] tech-founders text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
            Tech Founders
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto z-10">
        <div className="text-left flex flex-col gap-[2px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            <div className="hero-center-text flex items-center">
              <div className="inline-block bg-[#5d64e6] text-[#5d64e6] text-4xl px-6 py-3 h-[5.65rem] mb-4">
                .
              </div>
              <div className="inline-block bg-gradient-to-r from-[#262b7d] px-6 py-3 mb-4 h-[90px] text-white font-medium items-center">
              Exis Media
              </div>
            </div>
            <div className="flex hero-center-text items-center">
              <div className="inline-block bg-[#895b5b] text-[#895b5b] text-4xl px-6 py-3 h-[4.65rem] mb-4">
                .
              </div>
              <div className="inline-block bg-gradient-to-r from-[#593737] px-6 py-3 mb-4 h-[4.65rem] text-white text-[3rem] font-medium items-center">
              Influence. Beyond. Boundaries.
              </div>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 max-w-3xl text-sm hero-subtext font-semibold leading-relaxed mt-20"
          >
            Exis Media is a next-gen influencer marketing agency pushing boundaries in digital engagement. Known for its dynamic campaigns and data-driven strategies, Exis has successfully partnered with over 100 influencers across the globe — ranging from nano creators to mega celebrities with followings spanning from under 10K to over 1 million+.
          </motion.p>
        </div>
      </div>

      {/* General Partners tag */}
      <motion.div
        className="absolute right-20 top-42 z-10 flex items-center space-x-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="#F9E384"
            stroke="#F9E384"
            strokeWidth="1.25"
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
          />
        </svg>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-[#F9E384] general-partners text-black px-4 py-1 rounded-full text-sm font-semibold shadow-md whitespace-nowrap">
            General Partners
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

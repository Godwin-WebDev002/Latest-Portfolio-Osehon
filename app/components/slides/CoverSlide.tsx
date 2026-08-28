"use client";

import React from "react";
import { PortfolioData } from "@/app/data/portfolioData";

interface CoverSlideProps {
  data: PortfolioData;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col items-center justify-center overflow-hidden p-8">
      {/* Decorative Top Right Soft Peach Arc / Ring */}
      <svg
        className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none text-[#FDE6DC] translate-x-12 -translate-y-12"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 400 100 C 250 100 100 250 100 400"
          stroke="currentColor"
          strokeWidth="35"
        />
        <path
          d="M 400 20 C 180 20 20 180 20 400"
          stroke="currentColor"
          strokeWidth="15"
          opacity="0.6"
        />
      </svg>

      {/* Decorative Left Thin & Thick Orange Arc Line */}
      <svg
        className="absolute -left-32 -bottom-24 sm:-left-40 sm:-bottom-32 w-[600px] h-[600px] pointer-events-none text-[#F2561D]"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M 50 0 C 450 150 450 450 50 600"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M 0 50 C 350 180 350 420 0 550"
          stroke="#FDE6DC"
          strokeWidth="20"
          opacity="0.8"
        />
      </svg>

      {/* Decorative Solid Orange Bottom-Right Circle Crop */}
      <div className="absolute -bottom-28 -right-28 w-80 h-80 sm:w-96 sm:h-96 bg-[#F2561D] rounded-full pointer-events-none" />

      {/* Decorative Bottom Left 3 Orange Dots */}
      <div className="absolute bottom-10 left-12 flex space-x-2.5 z-10">
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 max-w-2xl px-2">
        <h1 className="text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-[0.15em] sm:tracking-[0.25em] text-[#1A1A1A] uppercase font-heading">
          PORTFOLIO
        </h1>
        <p className="text-xl sm:text-3xl font-light text-[#2C2C2C] tracking-wide font-heading">
          {data.person.name}
        </p>
        <div className="pt-16 sm:pt-24 text-sm sm:text-base font-normal tracking-[0.6em] text-[#555] font-heading">
          {data.person.year.split("").join(" ")}
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { Globe, Zap, Cpu } from "lucide-react";

interface CoverSlideProps {
  data: PortfolioData;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-auto min-h-[580px] sm:min-h-[620px] md:min-h-[660px] bg-white flex flex-col items-center justify-center overflow-hidden p-4 sm:p-8 lg:p-12">
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
          d="M 500 0 C 450 150 450 450 50 600"
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
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-12 flex space-x-2.5 z-10 hidden sm:flex">
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
      </div>

      {/* Remote & Availability Top Left Pill */}
      <div className="sm:absolute sm:top-8 sm:left-8 md:top-10 md:left-12 z-20 flex items-center space-x-2 bg-gray-50/95 border border-gray-200/80 px-3.5 py-1.5 rounded-full shadow-xs mb-4 sm:mb-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] sm:text-xs font-semibold text-gray-700 tracking-wide font-heading">
          {data.person.location}
        </span>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4 max-w-4xl px-2">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.1em] sm:tracking-[0.2em] text-[#1A1A1A] uppercase font-heading leading-tight break-words">
          PORTFOLIO
        </h1>

        <div className="space-y-1 pt-1">
          <p className="text-lg sm:text-2xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-wide font-heading">
            {data.person.name}
          </p>
          <p className="text-xs sm:text-base md:text-xl font-bold text-[#F2561D] font-heading tracking-wide">
            {data.person.role}
          </p>
        </div>

        {/* Core Competencies Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100/90 border border-gray-200 rounded-full text-[11px] sm:text-xs font-medium text-gray-700">
            <Zap className="w-3.5 h-3.5 text-[#F2561D]" />
            Sub-Second Load Times
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100/90 border border-gray-200 rounded-full text-[11px] sm:text-xs font-medium text-gray-700">
            <Cpu className="w-3.5 h-3.5 text-[#F2561D]" />
            FastAPI & Next.js Architecture
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-100/90 border border-gray-200 rounded-full text-[11px] sm:text-xs font-medium text-gray-700">
            <Globe className="w-3.5 h-3.5 text-[#F2561D]" />
            Core Web Vitals & Technical SEO
          </span>
        </div>

        <div className="pt-8 sm:pt-12 text-xs sm:text-sm font-semibold tracking-[0.5em] text-[#666] font-heading">
          {data.person.year.split("").join(" ")}
        </div>
      </div>
    </div>
  );
};

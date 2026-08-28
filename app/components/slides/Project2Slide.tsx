"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface Project2SlideProps {
  data: PortfolioData;
}

export const Project2Slide: React.FC<Project2SlideProps> = ({ data }) => {
  const p2 = data.projects.project2;

  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col justify-between p-6 sm:p-12 overflow-hidden">
      {/* Top Right Peach Background Ring */}
      <svg
        className="absolute -top-20 -right-20 w-96 h-96 pointer-events-none text-[#FDE6DC]"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M 400 100 C 250 100 100 250 100 400"
          stroke="currentColor"
          strokeWidth="45"
        />
      </svg>

      {/* Top Left Title & Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Title */}
        <div className="md:col-span-4 pl-4 sm:pl-8">
          <h2 className="text-5xl sm:text-6xl font-black text-[#1A1A1A] font-heading tracking-tight">
            {p2.title}
          </h2>
        </div>

        {/* Top Right Stadium / Pill Rounded Image */}
        <div className="md:col-span-8 flex justify-end pr-4 sm:pr-8">
          <div className="relative w-full max-w-xl h-56 sm:h-64 rounded-[120px] overflow-hidden shadow-lg border-2 border-white bg-gray-100 group">
            <Image
              src={p2.images[0]}
              alt="Sunroom interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="600px"
            />
          </div>
        </div>
      </div>

      {/* Bottom Layout: Stadium Pill Image on Left, Text on Right */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-6">
        {/* Bottom Left Stadium / Pill Rounded Image */}
        <div className="md:col-span-7 pl-4 sm:pl-8">
          <div className="relative w-full h-64 sm:h-72 rounded-[140px] overflow-hidden shadow-lg border-2 border-white bg-gray-100 group">
            <Image
              src={p2.images[1]}
              alt="Modern wooden kitchen"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="700px"
            />
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className="md:col-span-5 pr-6 sm:pr-12 space-y-4">
          <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
            {p2.description}
          </p>
        </div>
      </div>
    </div>
  );
};

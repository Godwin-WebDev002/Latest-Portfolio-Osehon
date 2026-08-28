"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface Project1SlideProps {
  data: PortfolioData;
}

export const Project1Slide: React.FC<Project1SlideProps> = ({ data }) => {
  const p1 = data.projects.project1;

  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col justify-between p-6 sm:p-10 overflow-hidden">
      {/* Top Right Peach Ring Curve */}
      <svg
        className="absolute -top-16 -right-16 w-80 h-80 pointer-events-none text-[#FDE6DC]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M 300 50 C 150 50 50 150 50 300"
          stroke="currentColor"
          strokeWidth="35"
        />
      </svg>

      {/* Title */}
      <div className="relative z-10 pl-4 sm:pl-8 pt-2">
        <h2 className="text-5xl sm:text-6xl font-black text-[#1A1A1A] font-heading tracking-tight">
          {p1.title}
        </h2>
      </div>

      {/* 3 Vertical Panels Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-8 gap-5 items-stretch my-4 px-4 sm:px-8">
        {/* Center Panel: Blueprints hands and hard hat */}
        <div className="md:col-span-5 relative h-45 sm:h-96 rounded-sm overflow-hidden shadow-md bg-gray-100 group">
          <Image
            src={p1.images[0]}
            alt="Blueprint planning"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="500px"
          />
        </div>

        {/* Right Panel: Corridor Photo + Description Text */}
        <div className="md:col-span-3 flex flex-col justify-between space-y-4">
          <div className="relative h-45 sm:h-56 rounded-sm overflow-hidden shadow-md bg-gray-100 group">
            <Image
              src={p1.images[1]}
              alt="Architectural hallway"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="300px"
            />
          </div>
          <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
            {p1.description}
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface AboutSlideProps {
  data: PortfolioData;
}

export const AboutSlide: React.FC<AboutSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 overflow-hidden">
      {/* Background Sweeping Top Orange Curve */}
      <svg
        className="absolute top-0 right-1/4 w-[700px] h-[700px] pointer-events-none text-[#F2561D] translate-x-32 -translate-y-48"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M 500 0 C 200 150 200 450 500 600"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      {/* Solid Orange Accent Circle Bottom Right */}
      <div className="absolute -bottom-24 -right-12 w-72 h-72 sm:w-96 sm:h-96 bg-[#F2561D] rounded-full pointer-events-none z-0" />
      <svg
        className="absolute bottom-8 right-40 w-48 h-48 pointer-events-none text-[#F2561D]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M 200 50 C 100 50 50 100 50 200"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center space-y-4 max-w-lg pl-4 sm:pl-8">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#1A1A1A] font-heading">
          Hello,
        </h1>
        <div className="space-y-1 pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-heading">
            I’m {data.person.name}
          </h2>
          <p className="text-lg sm:text-xl italic font-light text-[#444] font-heading">
            {data.person.role}
          </p>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-[#555] pt-4 font-light max-w-md">
          {data.person.bio}
        </p>
      </div>

      {/* Right Visual Image Column */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center md:justify-end mt-8 md:mt-0 pr-4 sm:pr-8">
        <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] lg:w-[380px] lg:h-[480px]">
          {/* Arch rounded image mask container */}
          <div className="w-full h-full rounded-t-[180px] rounded-b-[40px] overflow-hidden shadow-xl border-4 border-white relative bg-zinc-100">
            <Image
              src={data.person.avatarUrl}
              alt={data.person.name}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

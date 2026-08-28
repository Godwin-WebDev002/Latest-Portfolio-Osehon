"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface EducationSlideProps {
  data: PortfolioData;
}

export const EducationSlide: React.FC<EducationSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 overflow-hidden">
      {/* Top Right Peach Arc Ring */}
      <svg
        className="absolute -top-12 -right-12 w-80 h-80 pointer-events-none text-[#FDE6DC]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <path
          d="M 300 50 C 150 50 50 150 50 300"
          stroke="currentColor"
          strokeWidth="35"
        />
      </svg>

      {/* Top Right 3 Orange Dots */}
      <div className="absolute top-10 right-14 flex space-x-2.5 z-10">
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
      </div>

      {/* Bottom Right Soft Peach Curve */}
      <svg
        className="absolute -bottom-24 -right-12 w-[600px] h-[300px] pointer-events-none text-[#FDE6DC]"
        viewBox="0 0 600 300"
        fill="none"
      >
        <path
          d="M 0 300 C 250 100 500 100 600 200"
          stroke="currentColor"
          strokeWidth="30"
          opacity="0.8"
        />
      </svg>

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center space-y-6 max-w-lg pl-4 sm:pl-8">
        <h2 className="text-5xl sm:text-6xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Education
        </h2>

        <div className="space-y-6 pt-2">
          {data.education.map((edu, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-sm font-bold text-[#1A1A1A] font-heading tracking-wide">
                {edu.period}
              </span>
              <h3 className="text-xl font-extrabold text-[#1A1A1A] font-heading">
                {edu.institution}
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual Image Collage Column */}
      <div className="relative z-10 w-full md:w-7/12 flex flex-col items-center justify-center mt-8 md:mt-0 pr-4">
        <div className="relative w-full max-w-xl h-[420px] sm:h-[460px]">
          {/* Top main landscape photo */}
          <div className="absolute top-0 right-0 w-[85%] sm:w-[80%] h-48 sm:h-56 rounded-md overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="600px"
            />
          </div>

          {/* Bottom Left angled graduation/diploma photo */}
          <div className="absolute bottom-2 left-6 sm:left-12 w-44 sm:w-52 h-52 sm:h-60 rounded-md overflow-hidden shadow-xl border-2 border-white -rotate-6 bg-gray-50 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
              alt="Graduation degree"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          {/* Bottom Right angled desk laptop photo */}
          <div className="absolute bottom-0 right-4 sm:right-8 w-44 sm:w-52 h-52 sm:h-60 rounded-md overflow-hidden shadow-xl border-2 border-white rotate-6 bg-gray-50 hover:rotate-0 transition-transform duration-500">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Design workstation"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

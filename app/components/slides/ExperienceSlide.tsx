"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface ExperienceSlideProps {
  data: PortfolioData;
}

export const ExperienceSlide: React.FC<ExperienceSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 overflow-hidden">
      {/* Bottom Right Sweeping Orange Arc Line */}
      <svg
        className="absolute -bottom-24 -right-24 w-[600px] h-[600px] pointer-events-none text-[#F2561D]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M 500 150 C 350 350 150 450 0 500"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center space-y-6 max-w-lg pl-4 sm:pl-8">
        <h2 className="text-5xl sm:text-6xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Experience
        </h2>

        <div className="space-y-6 pt-2">
          {data.experience.map((exp, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="text-xl font-bold text-[#1A1A1A] font-heading">
                {exp.company}
              </h3>
              <p className="text-xs sm:text-sm text-[#555] leading-relaxed font-light italic">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Visual Multi-Photo Grid Column */}
      <div className="relative z-10 w-full md:w-7/12 flex items-center justify-center mt-8 md:mt-0 pr-4 sm:pr-6">
        <div className="w-full max-w-lg grid grid-cols-2 gap-3.5">
          {/* Top Span 2 Column: Image + Solid Orange Accent */}
          <div className="col-span-2 grid grid-cols-4 gap-3.5 h-44 sm:h-52">
            <div className="col-span-3 relative rounded-sm overflow-hidden shadow-md bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                alt="Professional woman executive"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="500px"
              />
            </div>
            {/* Solid Orange Rectangle Accent Block */}
            <div className="col-span-1 bg-[#F2561D] rounded-sm shadow-md flex items-center justify-center">
              <span className="w-2.5 h-12 bg-white/30 rounded-full" />
            </div>
          </div>

          {/* Bottom Left Photo */}
          <div className="relative h-48 sm:h-56 rounded-sm overflow-hidden shadow-md bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
              alt="Office team work"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="300px"
            />
          </div>

          {/* Bottom Right Photo */}
          <div className="relative h-48 sm:h-56 rounded-sm overflow-hidden shadow-md bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
              alt="Client consultation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

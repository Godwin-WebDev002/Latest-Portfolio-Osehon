"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";
import { GraduationCap, FileCheck, CheckCircle2 } from "lucide-react";

interface EducationSlideProps {
  data: PortfolioData;
}

export const EducationSlide: React.FC<EducationSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 overflow-hidden">
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
      <div className="absolute top-8 right-10 flex space-x-2.5 z-10 hidden sm:flex">
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
      </div>

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-6/12 flex flex-col justify-center space-y-4 max-w-lg">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2561D]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2561D] font-heading">
              Credentials & Foundation
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] font-heading tracking-tight">
            Education
          </h2>
        </div>

        <div className="space-y-3 pt-1">
          {data.education.map((edu, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50/80 border border-gray-200/80 rounded-xl space-y-1.5 shadow-2xs hover:border-[#F2561D]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F2561D] font-heading">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-gray-500 bg-white px-2 py-0.5 rounded-full border border-gray-200">
                  Accredited
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#1A1A1A] font-heading leading-snug">
                {edu.degree}
              </h3>
              <p className="text-xs font-semibold text-gray-700">
                {edu.institution}
              </p>
              <p className="text-xs text-[#555] leading-relaxed font-normal pt-0.5">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* References Callout */}
        <div className="p-3 bg-[#FDE6DC]/40 border border-[#FDE6DC] rounded-xl flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#F2561D] text-white flex items-center justify-center shrink-0">
            <FileCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-900 font-heading">
              Professional References
            </h4>
            <p className="text-[11px] text-gray-600">
              Available upon request for remote, contract, and freelance engagements.
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual Imagery Column */}
      <div className="relative z-10 w-full md:w-6/12 flex flex-col items-center justify-center mt-6 md:mt-0">
        <div className="relative w-full max-w-md h-56 sm:h-[360px] md:h-[400px]">
          {/* Main Landscape Photo */}
          <div className="absolute top-0 right-0 w-full sm:w-[90%] h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Engineering collaboration and continuous learning"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="500px"
            />
          </div>

          {/* Bottom Angled Desk Photo */}
          <div className="absolute bottom-2 left-4 w-44 sm:w-60 h-36 sm:h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-100 hover:rotate-0 transition-transform duration-500 -rotate-3 hidden sm:block">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop"
              alt="Modern development workspace"
              fill
              className="object-cover"
              sizes="350px"
            />
          </div>

          {/* Floating Credential Pill */}
          <div className="absolute bottom-4 right-2 bg-white/95 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-xl shadow-lg flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-xs font-bold text-gray-800 font-heading">
              Continuous Learning
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

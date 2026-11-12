"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";
import { Zap, ShieldCheck, Gauge, Clock } from "lucide-react";

interface AboutSlideProps {
  data: PortfolioData;
}

export const AboutSlide: React.FC<AboutSlideProps> = ({ data }) => {
  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 overflow-hidden">
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

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-7/12 flex flex-col justify-center space-y-4 max-w-xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-[#FDE6DC] text-[#D9460F] text-xs font-bold rounded-full uppercase tracking-wider font-heading">
            Professional Summary
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
            {data.person.location}
          </span>
        </div>

        <div className="space-y-1">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A1A] font-heading leading-tight">
            I’m {data.person.name}
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-bold text-[#F2561D] font-heading">
            {data.person.role}
          </p>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-[#444] font-normal pt-1 text-left">
          {data.person.bio}
        </p>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
              <Zap className="w-4 h-4 text-[#F2561D]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 font-heading leading-none">Sub-Second</p>
              <p className="text-[11px] text-gray-500 leading-tight">Load Time Target</p>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#F2561D]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 font-heading leading-none">99.9% Uptime</p>
              <p className="text-[11px] text-gray-500 leading-tight">Systems Reliability</p>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
              <Gauge className="w-4 h-4 text-[#F2561D]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 font-heading leading-none">60 FPS Motion</p>
              <p className="text-[11px] text-gray-500 leading-tight">Framer Motion & 3D</p>
            </div>
          </div>

          <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-[#F2561D]" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900 font-heading leading-none">Remote & Contract</p>
              <p className="text-[11px] text-gray-500 leading-tight">Freelance & Async Ownership</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Visual Image Column */}
      <div className="relative z-10 w-full md:w-5/12 flex items-center justify-center md:justify-end mt-6 md:mt-0">
        <div className="relative w-48 h-64 sm:w-64 sm:h-84 md:w-72 md:h-96">
          {/* Arch rounded image mask container */}
          <div className="w-full h-full rounded-t-[140px] rounded-b-[28px] sm:rounded-t-[160px] sm:rounded-b-[36px] overflow-hidden shadow-xl border-4 border-white relative bg-zinc-100">
            <Image
              src={data.person.avatarUrl}
              alt={data.person.name}
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 360px"
              priority
            />
          </div>

          {/* Floating Role Tag */}
          <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 bg-white px-3 py-1.5 rounded-xl shadow-md border border-gray-100 flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2561D]" />
            <span className="text-[11px] sm:text-xs font-bold text-gray-900 font-heading">
              Next.js & FastAPI Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

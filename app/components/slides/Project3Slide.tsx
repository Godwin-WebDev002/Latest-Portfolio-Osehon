"use client";

import React from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { ExternalLink, Radio, Sparkles, Sliders, MousePointer } from "lucide-react";

interface Project3SlideProps {
  data: PortfolioData;
}

export const Project3Slide: React.FC<Project3SlideProps> = ({ data }) => {
  const voltz = data.projects.voltz360;
  const designature = data.projects.designature;

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col justify-between p-4 sm:p-8 lg:p-10 overflow-hidden">
      {/* Decorative Peach Arc */}
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

      {/* Header */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F2561D]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#F2561D] font-heading">
            E-Commerce & 3D Motion
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Web Apps & Interactive Experiences
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl font-light">
          Client-side state architecture with Zustand/Redux, and 60 FPS Framer Motion 3D digital design apps.
        </p>
      </div>

      {/* Two Interactive / E-Commerce Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 items-stretch">
        {/* Project 1: Voltz360 */}
        <div className="bg-gradient-to-b from-gray-50/90 to-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-[#F2561D]/50 transition-all group">
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
                  <Radio className="w-3 h-3" />
                  {voltz.role}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading group-hover:text-[#F2561D] transition-colors">
                  {voltz.title}
                </h3>
              </div>
              <a
                href={voltz.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>{voltz.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {voltz.description}
            </p>

            {/* Architecture Highlights */}
            <div className="bg-white/90 border border-gray-100 rounded-xl p-3 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-gray-800 font-heading gap-1">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#F2561D]" />
                  Zustand & Redux State Management
                </span>
                <span className="text-[10px] sm:text-[11px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full font-bold">
                  AI Drones & Gear
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Built instant multi-criteria filtering across large product catalogs, eliminating rerender latency and layout jank during customer navigation.
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
            {voltz.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 bg-white border border-gray-200/70 text-gray-700 rounded-md shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project 2: DESIGNATURE */}
        <div className="bg-gradient-to-b from-gray-50/90 to-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-[#F2561D]/50 transition-all group">
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
                  <Sparkles className="w-3 h-3" />
                  {designature.role}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading group-hover:text-[#F2561D] transition-colors">
                  {designature.title}
                </h3>
              </div>
              <a
                href={designature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>{designature.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {designature.description}
            </p>

            {/* Architecture Highlights */}
            <div className="bg-white/90 border border-gray-100 rounded-xl p-3 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-gray-800 font-heading gap-1">
                <span className="flex items-center gap-1.5">
                  <MousePointer className="w-3.5 h-3.5 text-[#F2561D]" />
                  Dynamic Cursor & Motion UI
                </span>
                <span className="text-[10px] sm:text-[11px] text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-bold">
                  Fluid 60 FPS
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Crafted interactive 3D digital design space with Framer Motion spring physics, custom interactive cursor mechanics, and tailored Tailwind design tokens.
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
            {designature.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 bg-white border border-gray-200/70 text-gray-700 rounded-md shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Navigation Hint */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-gray-400 border-t border-gray-100 pt-2 gap-2">
        <span>Web Application Engineering & Creative Frontends</span>
        <span className="font-heading font-medium text-gray-600">
          React • Framer Motion • Zustand • Redux • Tailwind CSS
        </span>
      </div>
    </div>
  );
};

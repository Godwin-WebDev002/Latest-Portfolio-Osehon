"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";
import { ExternalLink, Zap, ShieldCheck } from "lucide-react";

interface Project2SlideProps {
  data: PortfolioData;
}

export const Project2Slide: React.FC<Project2SlideProps> = ({ data }) => {
  const maxx = data.projects.maxxWallpaper;
  const putty = data.projects.mrPutty;

  const [activeTab, setActiveTab] = useState<"maxx" | "putty">("maxx");
  const current = activeTab === "maxx" ? maxx : putty;

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col justify-between p-4 sm:p-8 lg:p-10 overflow-hidden">
      {/* Decorative Top Peach Arc */}
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

      {/* Header & Project Switcher */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2561D]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#F2561D] font-heading">
              Full-Stack & Web Performance
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1A1A] font-heading tracking-tight">
            Full-Stack Delivery & Technical SEO
          </h2>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center space-x-1.5 bg-gray-100 p-1 rounded-xl self-start sm:self-auto shadow-2xs">
          <button
            onClick={() => setActiveTab("maxx")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-all ${
              activeTab === "maxx"
                ? "bg-white text-[#F2561D] shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Maxx Wallpaper
          </button>
          <button
            onClick={() => setActiveTab("putty")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-all ${
              activeTab === "putty"
                ? "bg-white text-[#F2561D] shadow-xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Mr. Putty
          </button>
        </div>
      </div>

      {/* Main Project Display */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 my-4 items-center">
        {/* Left Column: Visual Screenshots Collage */}
        <div className="md:col-span-7 flex flex-col space-y-3">
          <div className="relative w-full h-44 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-md border border-gray-200/80 bg-gray-100 group">
            {current.images && current.images[0] && (
              <Image
                src={current.images[0]}
                alt={current.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            )}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-md text-[11px] font-semibold text-white">
              {activeTab === "maxx" ? "Desktop Platform View" : "Sub-Second Responsive UI"}
            </div>
          </div>

          {current.images && current.images[1] && (
            <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden shadow-xs border border-gray-200/80 bg-gray-100 group hidden sm:block">
              <Image
                src={current.images[1]}
                alt={`${current.title} detail`}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="600px"
              />
            </div>
          )}
        </div>

        {/* Right Column: Detailed Project Info */}
        <div className="md:col-span-5 space-y-3 bg-gray-50/90 border border-gray-200/80 p-4 sm:p-5 rounded-2xl">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
              {current.role}
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading">
                {current.title}
              </h3>
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>{current.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            {current.description}
          </p>

          {/* Metric Highlight Box */}
          <div className="p-3 bg-white rounded-xl border border-gray-200/80 flex items-center space-x-3 shadow-2xs">
            <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
              {activeTab === "maxx" ? (
                <ShieldCheck className="w-4 h-4 text-[#F2561D]" />
              ) : (
                <Zap className="w-4 h-4 text-[#F2561D]" />
              )}
            </div>
            <div>
              <p className="text-xs font-extrabold text-gray-900 font-heading">
                {current.metrics}
              </p>
              <p className="text-[11px] text-gray-500">
                {activeTab === "maxx"
                  ? "FastAPI/Python on Vercel, Aiven, Cloudinary & 99.9% uptime"
                  : "Optimized asset delivery & modular UI components"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 bg-white border border-gray-200 text-gray-700 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Hint */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-gray-400 border-t border-gray-100 pt-2 gap-2">
        <span>Click tabs above to toggle between Maxx Wallpaper and Mr. Putty</span>
        <span className="font-heading font-medium text-gray-600">
          Next.js • Tailwind CSS • Performance Budgeting • Core Web Vitals
        </span>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { ExternalLink, Award, CheckCircle, ChevronRight } from "lucide-react";

interface ExperienceSlideProps {
  data: PortfolioData;
}

export const ExperienceSlide: React.FC<ExperienceSlideProps> = ({ data }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeExp = data.experience[selectedIdx] || data.experience[0];

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col justify-between p-4 sm:p-8 lg:p-10 overflow-hidden">
      {/* Background Peach Arch */}
      <svg
        className="absolute -bottom-24 -right-24 w-[600px] h-[600px] pointer-events-none text-[#FDE6DC]/70"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M 500 150 C 350 350 150 450 0 500"
          stroke="currentColor"
          strokeWidth="35"
        />
      </svg>

      {/* Header */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F2561D]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#F2561D] font-heading">
            Track Record & Impact
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Featured Engineering Experience
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl font-light">
          Proven outcomes in backend infrastructure, modern frontend architecture, and performance engineering.
        </p>
      </div>

      {/* Main Two-Column Interactive Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 my-4 items-stretch">
        {/* Role Selector List */}
        <div className="md:col-span-5 flex flex-col space-y-2 overflow-y-auto max-h-[280px] md:max-h-[380px] pr-1 scrollbar-none">
          {data.experience.map((exp, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-[#F2561D]/5 border-[#F2561D] shadow-xs"
                    : "bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
              >
                <div className="space-y-0.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-extrabold text-[#1A1A1A] font-heading">
                      {exp.company}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    {exp.role}
                  </p>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? "text-[#F2561D] translate-x-1" : "text-gray-300"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Detailed Outcome Focus Card */}
        <div className="md:col-span-7 bg-gray-50/90 border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
                  {activeExp.role}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading">
                  {activeExp.company}
                </h3>
              </div>

              {activeExp.url && (
                <a
                  href={activeExp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {activeExp.description}
            </p>

            <div className="pt-1">
              <span className="text-xs font-bold text-gray-900 font-heading block mb-1.5">
                Key Technologies & Outcomes:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeExp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center space-x-1 text-[11px] sm:text-xs px-2.5 py-1 bg-white rounded-md border border-gray-200 font-medium text-gray-700 shadow-2xs"
                  >
                    <CheckCircle className="w-3 h-3 text-[#F2561D]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200/70 mt-3 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5 font-medium text-[11px] sm:text-xs">
              <Award className="w-3.5 h-3.5 text-[#F2561D]" />
              Independent Contributor & Systems Owner
            </span>
            <span className="text-gray-400 text-[11px]">
              {selectedIdx + 1} of {data.experience.length}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-gray-400 border-t border-gray-100 pt-2 gap-2">
        <span>Click any role above to inspect deliverables & architectural outcomes</span>
        <span className="font-heading font-medium text-gray-600">
          Remote, Contract & Freelance Delivery • UTC+1
        </span>
      </div>
    </div>
  );
};

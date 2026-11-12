"use client";

import React from "react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideIndex: number) => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
}) => {
  const indicators = Array.from({ length: totalSlides + 1 }, (_, i) => i);

  const slideLabels = [
    "Cover",
    "About",
    "Skills",
    "Experience",
    "Backend Systems",
    "Frontend & SEO",
    "Web Apps & 3D",
    "Education",
    "Contact",
  ];

  return (
    <>
      {/* Desktop & Tablet Vertical Slide Navigation (md:flex) */}
      <div className="hidden md:flex relative flex-col items-center justify-center py-4 px-2.5 z-30 select-none border-r border-gray-100/60 bg-white/40">
        {/* Sweeping vertical background arc line */}
        <svg
          className="absolute -left-6 top-1/2 -translate-y-1/2 h-[94%] w-16 pointer-events-none text-[#F2561D]/40"
          viewBox="0 0 50 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 45 0 Q -10 200 45 400"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <div className="flex flex-col space-y-1.5 items-center">
          {indicators.map((num) => {
            const isActive = currentSlide === num;
            const label = slideLabels[num] || `Slide ${num}`;

            return (
              <button
                key={num}
                onClick={() => onSelectSlide(num)}
                title={`${num}: ${label}`}
                className={`relative group w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#F2561D] text-white font-bold shadow-md scale-110 ring-2 ring-[#F2561D]/30"
                    : "border border-[#E59374]/70 text-[#333] hover:border-[#F2561D] hover:scale-105 bg-white/90"
                }`}
              >
                <span>{num}</span>

                {/* Hover Tooltip on desktop */}
                <span className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-md">
                  {num}. {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Horizontal Slide Bar (< md) */}
      <div className="flex md:hidden w-full overflow-x-auto py-2 px-3 bg-white/95 border-b border-gray-100 items-center justify-start space-x-1.5 scrollbar-none z-30 sticky top-0">
        {indicators.map((num) => {
          const isActive = currentSlide === num;
          const label = slideLabels[num] || `Slide ${num}`;

          return (
            <button
              key={num}
              onClick={() => onSelectSlide(num)}
              className={`shrink-0 px-2.5 py-1 rounded-full flex items-center space-x-1 text-xs font-semibold transition-all ${
                isActive
                  ? "bg-[#F2561D] text-white shadow-xs ring-2 ring-[#F2561D]/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span>{num}</span>
              <span className="hidden xs:inline text-[10px] opacity-80 font-normal">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

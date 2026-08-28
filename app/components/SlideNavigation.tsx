"use client";

import React from "react";

interface SlideNavigationProps {
  currentSlide: number; // 0 is cover, 1..9 are numbered slides
  totalSlides: number;
  onSelectSlide: (slideIndex: number) => void;
}

export const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  onSelectSlide,
}) => {
  // 0 through 9 slide indicators
  const indicators = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {/* Desktop & Tablet Vertical Slide Navigation (md:flex) */}
      <div className="hidden md:flex relative flex-col items-center justify-center py-6 px-3 z-30 select-none border-r border-gray-100/50">
        {/* Sweeping vertical background arc line */}
        <svg
          className="absolute -left-6 top-1/2 -translate-y-1/2 h-[92%] w-16 pointer-events-none text-[#F2561D]/40"
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

        <div className="flex flex-col space-y-2 items-center">
          {indicators.map((num) => {
            const isActive = currentSlide === num;
            return (
              <button
                key={num}
                onClick={() => onSelectSlide(num)}
                title={num === 0 ? "Cover Slide" : `Slide ${num}`}
                className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-xs lg:text-sm font-medium transition-all duration-300 ${isActive
                    ? "bg-[#F2561D] text-white font-bold shadow-md scale-110 ring-2 ring-[#F2561D]/30"
                    : "border border-[#E59374] text-[#333] hover:border-[#F2561D] hover:scale-105 bg-white/90"
                  }`}
              >
                {num}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Horizontal Slide Bar (< md) */}
      <div className="flex md:hidden w-full overflow-x-auto py-2.5 px-3 bg-white/95 border-b border-gray-100 items-center justify-start space-x-2 scrollbar-none z-30 sticky top-0">
        {indicators.map((num) => {
          const isActive = currentSlide === num;
          return (
            <button
              key={num}
              onClick={() => onSelectSlide(num)}
              className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${isActive
                  ? "bg-[#F2561D] text-white shadow-sm ring-2 ring-[#F2561D]/30 scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {num === 0 ? "0" : num}
            </button>
          );
        })}
      </div>
    </>
  );
};

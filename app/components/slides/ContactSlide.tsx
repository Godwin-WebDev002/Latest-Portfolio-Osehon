"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface ContactSlideProps {
  data: PortfolioData;
}

export const ContactSlide: React.FC<ContactSlideProps> = ({ data }) => {
  const c = data.contact;
  const p = data.person;

  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col md:flex-row items-center justify-between p-6 sm:p-12 overflow-hidden">
      {/* Top Right 3 Orange Dots */}
      <div className="absolute top-10 right-14 flex space-x-2.5 z-10">
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
        <span className="w-3.5 h-3.5 rounded-full bg-[#F2561D]" />
      </div>

      {/* Right Soft Peach Curve Ring */}
      <svg
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none text-[#FDE6DC] translate-x-28 -translate-y-12"
        viewBox="0 0 500 500"
        fill="none"
      >
        <path
          d="M 500 50 C 250 50 50 250 50 500"
          stroke="currentColor"
          strokeWidth="35"
        />
      </svg>

      {/* Left Column: Oval / Arch Framed Photo of Hands with Drafting Compass */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center pl-4 sm:pl-8">
        <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] rounded-t-[180px] rounded-b-[180px] overflow-hidden shadow-xl border-4 border-[#E59374]/30 bg-gray-100 group">
          <Image
            src={c.draftingImageUrl}
            alt="Drafting compass drawing blueprints"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="400px"
          />
        </div>
      </div>

      {/* Right Column: Thank You Title and Contact Information */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center space-y-6 max-w-lg pr-4 sm:pr-8 mt-8 md:mt-0">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black italic text-[#1A1A1A] font-heading tracking-tight">
          {c.thankYouText}
        </h1>

        <div className="space-y-4 pt-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] font-heading tracking-wide">
            {c.heading}
          </h2>

          <div className="space-y-3 pt-2 text-sm sm:text-base text-[#333]">
            <div className="flex items-center space-x-4">
              <span className="w-24 font-bold text-[#1A1A1A] font-heading">
                Phone :
              </span>
              <span className="font-light">{p.phone}</span>
            </div>

            <div className="flex items-start space-x-4">
              <span className="w-24 font-bold text-[#1A1A1A] font-heading">
                Address :
              </span>
              <span className="font-light">{p.address}</span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="w-24 font-bold text-[#1A1A1A] font-heading">
                Email :
              </span>
              <a
                href={`mailto:${p.email}`}
                className="font-light text-[#F2561D] hover:underline"
              >
                {p.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

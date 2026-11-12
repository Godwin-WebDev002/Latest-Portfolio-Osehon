"use client";

import React from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { ExternalLink, Server, Database, Sparkles, Utensils } from "lucide-react";

interface Project1SlideProps {
  data: PortfolioData;
}

export const Project1Slide: React.FC<Project1SlideProps> = ({ data }) => {
  const loft = data.projects.loftIkoyi;
  const gliity = data.projects.gliity;

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col justify-between p-4 sm:p-8 lg:p-10 overflow-hidden">
      {/* Decorative Top Peach Arc */}
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
            Featured Systems Projects
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Backend Architecture & Cloud APIs
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl font-light">
          Scalable FastAPI & Python microservices, Aiven databases, and Cloudinary media pipelines.
        </p>
      </div>

      {/* Two Featured Backend Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 items-stretch">
        {/* Project 1: The Loft Ikoyi */}
        <div className="bg-gradient-to-b from-gray-50/90 to-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-[#F2561D]/50 transition-all group">
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
                  <Utensils className="w-3 h-3" />
                  {loft.role}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading group-hover:text-[#F2561D] transition-colors">
                  {loft.title}
                </h3>
              </div>
              <a
                href={loft.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>{loft.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {loft.description}
            </p>

            {/* Architecture Highlights */}
            <div className="bg-white/90 border border-gray-100 rounded-xl p-3 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-gray-800 font-heading gap-1">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-[#F2561D]" />
                  FastAPI on Vercel + Aiven DB
                </span>
                <span className="text-[10px] sm:text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                  Active Production
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Live dining menu synchronization, automated table reservation tracking, and independent admin portal with role-based access control.
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
            {loft.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2 py-0.5 bg-white border border-gray-200/70 text-gray-700 rounded-md shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project 2: Gliity Jewelries */}
        <div className="bg-gradient-to-b from-gray-50/90 to-white border border-gray-200/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:border-[#F2561D]/50 transition-all group">
          <div className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F2561D] uppercase tracking-wider font-heading">
                  <Sparkles className="w-3 h-3" />
                  {gliity.role}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-gray-900 font-heading group-hover:text-[#F2561D] transition-colors">
                  {gliity.title}
                </h3>
              </div>
              <a
                href={gliity.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 px-3 py-1 bg-white border border-gray-200 hover:border-[#F2561D] text-gray-800 hover:text-[#F2561D] rounded-lg text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>{gliity.displayUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
              {gliity.description}
            </p>

            {/* Architecture Highlights */}
            <div className="bg-white/90 border border-gray-100 rounded-xl p-3 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-semibold text-gray-800 font-heading gap-1">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#F2561D]" />
                  Aiven DB + Cloudinary Pipeline
                </span>
                <span className="text-[10px] sm:text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-bold">
                  Secure Admin API
                </span>
              </div>
              <p className="text-[11px] text-gray-500 leading-normal">
                Engineered secure CRUD services for jewelry catalog inventory alongside integrated appointment scheduling for salon services.
              </p>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
            {gliity.tags.map((tag) => (
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
        <span>Backend Engineering & Systems Architecture</span>
        <span className="font-heading font-medium text-gray-600">
          FastAPI • Python • Aiven • Cloudinary • Vercel
        </span>
      </div>
    </div>
  );
};

"use client";

import React from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import {
  Code2,
  Server,
  Cloud,
  TrendingUp,
  Compass,
  CheckCircle2,
} from "lucide-react";

interface SkillsSlideProps {
  data: PortfolioData;
}

export const SkillsSlide: React.FC<SkillsSlideProps> = ({ data }) => {
  const { skills } = data;

  const categories = [
    {
      title: "Frontend & UI Engineering",
      icon: Code2,
      skills: skills.frontend,
    },
    {
      title: "Backend & API Systems",
      icon: Server,
      skills: skills.backend,
    },
    {
      title: "Database & Cloud Infrastructure",
      icon: Cloud,
      skills: skills.databaseCloud,
    },
    {
      title: "Technical SEO & Analytics",
      icon: TrendingUp,
      skills: skills.seoAnalytics,
    },
    {
      title: "Remote Collaboration & Workflow",
      icon: Compass,
      skills: skills.remoteWorkflow,
    },
  ];

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col justify-between p-4 sm:p-8 lg:p-10 overflow-hidden">
      {/* Decorative Peach Curves */}
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
            Core Competencies
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A] font-heading tracking-tight">
          Remote & Technical Skills
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl font-light">
          Engineered for sub-second UI performance, scalable API infrastructure, and disciplined async delivery.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-4">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;

          return (
            <div
              key={cat.title}
              className={`p-3.5 sm:p-4 rounded-xl border border-gray-100 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center space-x-2.5 pb-2.5 mb-2.5 border-b border-gray-100">
                  <div className="w-7 h-7 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#F2561D]" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900 font-heading leading-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-gray-50 text-gray-700 border border-gray-200/60 hover:border-[#F2561D]/40 transition-colors"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#F2561D] shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Footer Note */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-gray-500 border-t border-gray-100 pt-2.5 gap-2">
        <span>Full-Stack & Systems Architecture</span>
        <span className="font-medium text-[#F2561D]">
          Available for Remote, Contract & Freelance Roles • UTC+1 Timezone
        </span>
      </div>
    </div>
  );
};

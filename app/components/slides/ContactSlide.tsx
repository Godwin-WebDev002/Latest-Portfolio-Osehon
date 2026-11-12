"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";
import { Mail, Phone, Globe, Check, Copy, ExternalLink, Sparkles } from "lucide-react";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

interface ContactSlideProps {
  data: PortfolioData;
}

export const ContactSlide: React.FC<ContactSlideProps> = ({ data }) => {
  const c = data.contact;
  const p = data.person;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(p.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full h-auto min-h-fit md:min-h-[660px] bg-white flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 overflow-hidden">
      {/* Top Right 3 Orange Dots */}
      <div className="absolute top-8 right-10 flex space-x-2.5 z-10 hidden sm:flex">
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

      {/* Left Column: Oval/Arch Framed Photo */}
      <div className="relative z-10 w-full md:w-5/12 flex items-center justify-center">
        <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-t-[140px] rounded-b-[40px] sm:rounded-t-[160px] sm:rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-[#FDE6DC] bg-gray-100 group">
          <Image
            src={p.avatarUrl}
            alt={p.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 360px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <div className="text-white">
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FDE6DC]">
                Remote • Contract • Freelance
              </p>
              <p className="text-xs sm:text-sm font-bold font-heading">
                {p.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Details & CTA */}
      <div className="relative z-10 w-full md:w-7/12 flex flex-col justify-center space-y-4 max-w-xl mt-6 md:mt-0">
        <div className="space-y-1">
          <span className="px-3 py-1 bg-[#FDE6DC] text-[#D9460F] text-xs font-bold rounded-full uppercase tracking-wider font-heading inline-block">
            Let's Collaborate
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic text-[#1A1A1A] font-heading tracking-tight leading-none">
            {c.thankYouText}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-light">
            Available for remote, contract, and freelance roles (Frontend, Full-Stack & Technical SEO).
          </p>
        </div>

        {/* Contact Information List */}
        <div className="space-y-2.5 pt-1">
          {/* Email Item */}
          <div className="flex items-center justify-between p-3 bg-gray-50/90 border border-gray-200/80 rounded-xl hover:border-[#F2561D]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#F2561D]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href={`mailto:${p.email}`}
                  className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#F2561D] transition-colors truncate block"
                >
                  {p.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 text-gray-500 hover:text-[#F2561D] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 shrink-0"
              title="Copy Email"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Item */}
          <div className="flex items-center justify-between p-3 bg-gray-50/90 border border-gray-200/80 rounded-xl hover:border-[#F2561D]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#F2561D]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:${p.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#F2561D] transition-colors"
                >
                  {p.phone}
                </a>
              </div>
            </div>
            <a
              href={`tel:${p.phone.replace(/[^0-9+]/g, "")}`}
              className="text-xs px-2.5 py-1 bg-white border border-gray-200 hover:border-[#F2561D] rounded-lg text-gray-700 font-medium transition-colors shrink-0"
            >
              Call
            </a>
          </div>

          {/* Portfolio Item */}
          <div className="flex items-center justify-between p-3 bg-gray-50/90 border border-gray-200/80 rounded-xl hover:border-[#F2561D]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-[#F2561D]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                  Live Portfolio
                </p>
                <a
                  href={p.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#F2561D] hover:underline truncate block"
                >
                  {p.portfolioUrl.replace("https://", "")}
                </a>
              </div>
            </div>
            <a
              href={p.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-[#F2561D] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 shrink-0"
              title="Open Portfolio Link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub Item */}
          <div className="flex items-center justify-between p-3 bg-gray-50/90 border border-gray-200/80 rounded-xl hover:border-[#F2561D]/40 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#F2561D]/10 flex items-center justify-center shrink-0">
                <GithubIcon className="w-4 h-4 text-[#F2561D]" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                  GitHub Profile
                </p>
                <a
                  href={p.githubUrl || "https://github.com/Godwin-WebDev002"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-gray-900 hover:text-[#F2561D] transition-colors truncate block"
                >
                  {(p.githubUrl || "https://github.com/Godwin-WebDev002").replace("https://", "")}
                </a>
              </div>
            </div>
            <a
              href={p.githubUrl || "https://github.com/Godwin-WebDev002"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-gray-500 hover:text-[#F2561D] hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 shrink-0"
              title="Open GitHub Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* References Callout */}
        <div className="pt-2 flex flex-wrap items-center justify-between text-xs text-gray-500 border-t border-gray-100 gap-2">
          <span className="font-semibold text-gray-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F2561D]" />
            {c.references}
          </span>
          <span className="font-mono text-[11px] text-gray-400">
            UTC+1 • Remote • Contract • Freelance
          </span>
        </div>
      </div>
    </div>
  );
};

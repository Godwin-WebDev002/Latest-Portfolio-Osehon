"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Edit3,
  Layers,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";

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
import { initialPortfolioData, PortfolioData } from "@/app/data/portfolioData";
import { CustomCursor } from "@/app/components/CustomCursor";
import { SlideNavigation } from "@/app/components/SlideNavigation";

import { CoverSlide } from "@/app/components/slides/CoverSlide";
import { AboutSlide } from "@/app/components/slides/AboutSlide";
import { SkillsSlide } from "@/app/components/slides/SkillsSlide";
import { ExperienceSlide } from "@/app/components/slides/ExperienceSlide";
import { Project1Slide } from "@/app/components/slides/Project1Slide";
import { Project2Slide } from "@/app/components/slides/Project2Slide";
import { Project3Slide } from "@/app/components/slides/Project3Slide";
import { EducationSlide } from "@/app/components/slides/EducationSlide";
import { ContactSlide } from "@/app/components/slides/ContactSlide";
import { PortfolioEditorModal } from "@/app/components/PortfolioEditorModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  // Default is now Scroll Mode as requested
  const [viewMode, setViewMode] = useState<"slide" | "scroll">("scroll");
  const [direction, setDirection] = useState<number>(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const totalSlides = 8; // 0: Cover, 1: About, 2: Skills, 3: Experience, 4: Backend, 5: Frontend/SEO, 6: Apps/3D, 7: Education, 8: Contact

  const handleSlideChange = useCallback(
    (newSlideIndex: number) => {
      if (newSlideIndex < 0 || newSlideIndex > totalSlides) return;
      setDirection(newSlideIndex > currentSlide ? 1 : -1);
      setCurrentSlide(newSlideIndex);
    },
    [currentSlide, totalSlides]
  );

  const handleNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      handleSlideChange(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, handleSlideChange]);

  const handlePrev = useCallback(() => {
    if (currentSlide > 0) {
      handleSlideChange(currentSlide - 1);
    }
  }, [currentSlide, handleSlideChange]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEditorOpen) return;
      if (viewMode === "slide") {
        if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          handleNext();
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isEditorOpen, viewMode]);

  // Touch Swipe navigation for Slide Deck mode
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== "slide") return;
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (viewMode !== "slide" || !touchStart) return;
    const touchEnd = e.changedTouches[0].clientY;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const renderSlide = (slideIndex: number) => {
    switch (slideIndex) {
      case 0:
        return <CoverSlide data={portfolioData} />;
      case 1:
        return <AboutSlide data={portfolioData} />;
      case 2:
        return <SkillsSlide data={portfolioData} />;
      case 3:
        return <ExperienceSlide data={portfolioData} />;
      case 4:
        return <Project1Slide data={portfolioData} />;
      case 5:
        return <Project2Slide data={portfolioData} />;
      case 6:
        return <Project3Slide data={portfolioData} />;
      case 7:
        return <EducationSlide data={portfolioData} />;
      case 8:
        return <ContactSlide data={portfolioData} />;
      default:
        return <CoverSlide data={portfolioData} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] flex flex-col justify-between selection:bg-[#F2561D] selection:text-white">
      <CustomCursor />

      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#F2561D] flex items-center justify-center text-white font-extrabold font-heading text-xs sm:text-sm shadow-sm shrink-0">
            OG
          </div>
          <div className="min-w-0">
            <h1 className="font-extrabold text-xs sm:text-sm md:text-base text-gray-900 tracking-wide font-heading leading-tight truncate">
              {portfolioData.person.name}
            </h1>
            <p className="text-[11px] sm:text-xs text-gray-500 font-light truncate">
              {portfolioData.person.role}
            </p>
          </div>
        </div>

        {/* Header Controls */}
        <div className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
          {viewMode === "slide" && (
            <div className="hidden md:flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
              <Sparkles className="w-3.5 h-3.5 text-[#F2561D]" />
              <span>
                Slide {currentSlide} of {totalSlides}
              </span>
            </div>
          )}

          {/* Mode Switcher Toggle */}
          <button
            onClick={() => setViewMode(viewMode === "slide" ? "scroll" : "slide")}
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-bold transition-all shadow-2xs font-heading"
            title="Toggle between Scroll Mode and Slide Deck Mode"
          >
            <Layers className="w-3.5 h-3.5 text-[#F2561D]" />
            <span>
              {viewMode === "scroll" ? "Switch to Slide Deck" : "Switch to Scroll"}
            </span>
          </button>

          {/* GitHub Profile Link */}
          <a
            href={portfolioData.person.githubUrl || "https://github.com/Godwin-WebDev002"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-bold transition-all shadow-2xs font-heading"
            title="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5 text-gray-800" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Customize Drawer Toggle */}
          <button
            onClick={() => setIsEditorOpen(true)}
            className="flex items-center space-x-1.5 px-2.5 sm:px-3 py-1.5 bg-[#F2561D] hover:bg-[#D9460F] text-white rounded-lg text-xs font-bold shadow-sm transition-all font-heading"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-2 sm:p-6 lg:p-8 w-full">
        {viewMode === "scroll" ? (
          /* Scroll Mode View (Default & Mobile First) */
          <div className="w-full max-w-[1366px] space-y-8 sm:space-y-12 py-4 sm:py-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((slideIndex) => (
              <div
                key={slideIndex}
                className="relative w-full h-auto min-h-fit md:min-h-[640px] md:aspect-[16/9] bg-white rounded-xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-200/60 flex flex-col md:flex-row"
              >
                <div className="hidden md:flex w-12 bg-gray-50/80 border-r border-gray-100 items-center justify-center font-bold text-sm text-[#F2561D] font-heading shrink-0 select-none">
                  #{slideIndex}
                </div>
                <div className="flex-1 h-full w-full">
                  {renderSlide(slideIndex)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Slide Deck Mode View */
          <div className="relative w-full max-w-[1366px] flex items-center justify-center">
            {/* Outer Slide Deck Frame */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-auto min-h-[600px] sm:min-h-[660px] md:min-h-[680px] md:aspect-[16/9] bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200/60 flex flex-col md:flex-row"
            >
              {/* Left Vertical / Mobile Horizontal Slide Navigation Bar */}
              <SlideNavigation
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onSelectSlide={handleSlideChange}
              />

              {/* Animated Slide Canvas Viewport */}
              <div className="relative flex-1 h-auto min-h-[600px] sm:min-h-[660px] md:min-h-[680px] overflow-hidden bg-white">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      y: direction > 0 ? 30 : -30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: direction > 0 ? -30 : 30,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    {renderSlide(currentSlide)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slide Controller Buttons (Floating bottom right) */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className="p-1 text-gray-700 hover:text-[#F2561D] disabled:opacity-30 disabled:hover:text-gray-700 transition-colors"
                  title="Previous Slide (Arrow Up / Left)"
                >
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="text-xs font-bold text-gray-600 font-heading px-1">
                  {currentSlide} / {totalSlides}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === totalSlides}
                  className="p-1 text-gray-700 hover:text-[#F2561D] disabled:opacity-30 disabled:hover:text-gray-700 transition-colors"
                  title="Next Slide (Arrow Down / Right)"
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer hint */}
      <footer className="py-3 text-center text-xs text-gray-500 border-t border-gray-200/60 bg-white/50 px-4">
        {viewMode === "scroll"
          ? "Scroll naturally • Remote • Contract • Freelance"
          : "Use Arrow keys or swipe up/down to navigate slides • Remote • Contract • Freelance"}
      </footer>

      {/* Custom Editor Modal */}
      <PortfolioEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={portfolioData}
        onSave={(newData) => setPortfolioData(newData)}
        onReset={() => setPortfolioData(initialPortfolioData)}
      />
    </div>
  );
}

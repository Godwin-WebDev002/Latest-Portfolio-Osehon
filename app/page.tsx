"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Edit3,
  Maximize2,
  Minimize2,
  Layers,
  Sparkles,
} from "lucide-react";
import { initialPortfolioData, PortfolioData } from "@/app/data/portfolioData";
import { CustomCursor } from "@/app/components/CustomCursor";
import { SlideNavigation } from "@/app/components/SlideNavigation";

import { CoverSlide } from "@/app/components/slides/CoverSlide";
import { AboutSlide } from "@/app/components/slides/AboutSlide";
import { EducationSlide } from "@/app/components/slides/EducationSlide";
import { ExperienceSlide } from "@/app/components/slides/ExperienceSlide";
import { Project1Slide } from "@/app/components/slides/Project1Slide";
import { Project2Slide } from "@/app/components/slides/Project2Slide";
import { GallerySlide } from "@/app/components/slides/GallerySlide";
import { ContactSlide } from "@/app/components/slides/ContactSlide";
import { PortfolioEditorModal } from "@/app/components/PortfolioEditorModal";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(initialPortfolioData);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"slide" | "scroll">("slide");
  const [direction, setDirection] = useState<number>(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const totalSlides = 7; // 0 is cover, 1..9 are content slides

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
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, isEditorOpen]);

  // Touch Swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
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
        return <EducationSlide data={portfolioData} />;
      case 3:
        return <ExperienceSlide data={portfolioData} />;
      case 4:
        return <Project1Slide data={portfolioData} />;
      case 5:
        return <Project2Slide data={portfolioData} />;
      case 6:
        return <GallerySlide data={portfolioData} />;
      case 7:
        return <ContactSlide data={portfolioData} />;
      default:
        return <CoverSlide data={portfolioData} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F6] flex flex-col justify-between select-none">
      <CustomCursor />
      {/* Top Floating Control Bar */}

      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200/80 px-4 sm:px-8 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-[#F2561D] flex items-center justify-center text-white font-bold font-heading text-sm shadow-sm">
            OG
          </div>
          <div>
            <h1 className="font-extrabold text-sm sm:text-base text-gray-900 tracking-wide font-heading leading-tight">
              {portfolioData.person.name}
            </h1>
            <p className="text-xs text-gray-500 font-light">
              {portfolioData.person.role} — Slide Deck
            </p>
          </div>
        </div>

        {/* Navigation Info & Controls */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:flex items-center space-x-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700">
            <Sparkles className="w-3.5 h-3.5 text-[#F2561D]" />
            <span>
              Slide {currentSlide} of {totalSlides}
            </span>
          </div>

          {/* Mode Switcher */}
          <button
            onClick={() => setViewMode(viewMode === "slide" ? "scroll" : "slide")}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-semibold transition-colors"
            title="Toggle View Mode"
          >
            <Layers className="w-3.5 h-3.5 text-[#F2561D]" />
            <span className="hidden md:inline">
              {viewMode === "slide" ? "Scroll Mode" : "Slide Deck Mode"}
            </span>
          </button>

          {/* Customize Drawer Toggle */}
          <button
            onClick={() => setIsEditorOpen(true)}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#F2561D] hover:bg-[#D9460F] text-white rounded-lg text-xs font-bold shadow-sm transition-all font-heading"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Customize</span>
          </button>
        </div>
      </header>

      {/* Main Slide Deck Canvas Container */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-6 lg:p-10">
        {viewMode === "slide" ? (
          <div className="relative w-full max-w-[1366px] flex items-center justify-center">
            {/* Outer Slide Deck Frame */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative w-full h-auto min-h-[500px] sm:min-h-[580px] md:min-h-[640px] md:aspect-[16/9] bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200/60 flex flex-col md:flex-row"
            >
              {/* Left Vertical / Mobile Horizontal Slide Navigation Bar */}
              <SlideNavigation
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onSelectSlide={handleSlideChange}
              />


              {/* Animated Slide Canvas Viewport */}
              <div className="relative flex-1 h-full overflow-hidden bg-white">
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
              <div className="absolute bottom-5 right-6 z-30 flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-gray-200">
                <button
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className="p-1.5 text-gray-700 hover:text-[#F2561D] disabled:opacity-30 disabled:hover:text-gray-700 transition-colors"
                  title="Previous Slide (Arrow Up)"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-gray-500 font-heading px-1">
                  {currentSlide} / {totalSlides}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentSlide === totalSlides}
                  className="p-1.5 text-gray-700 hover:text-[#F2561D] disabled:opacity-30 disabled:hover:text-gray-700 transition-colors"
                  title="Next Slide (Arrow Down)"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Scroll Mode View for easy viewing of all slides */
          <div className="w-full max-w-[1366px] space-y-12 py-6">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((slideIndex) => (
              <div
                key={slideIndex}
                className="relative w-full aspect-[16/9] min-h-[500px] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex"
              >
                <div className="w-12 bg-gray-50 border-r border-gray-100 flex items-center justify-center font-bold text-sm text-[#F2561D] font-heading">
                  #{slideIndex}
                </div>
                <div className="flex-1 h-full overflow-hidden">
                  {renderSlide(slideIndex)}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer hint */}
      <footer className="py-2 text-center text-xs text-gray-400">
        Use Keyboard Up/Down or Arrow keys to navigate slides
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

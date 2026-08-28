"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor on desktop only if fine pointer
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if mouse target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "button, a, input, textarea, select, [role='button'], .group"
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 border-[#F2561D] bg-[#F2561D]/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          scale: isClicked ? 0.75 : 1,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
      />

      {/* Inner Solid Terracotta Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#F2561D] rounded-full shadow-sm"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0.5 : isClicked ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 500,
        }}
      />
    </div>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { PortfolioData } from "@/app/data/portfolioData";

interface GallerySlideProps {
  data: PortfolioData;
}

export const GallerySlide: React.FC<GallerySlideProps> = ({ data }) => {
  const g = data.gallery;

  return (
    <div className="relative w-full h-full min-h-[550px] bg-white flex flex-col justify-center p-6 sm:p-10 overflow-hidden">
      {/* Layout: 4-grid on left (cols 8), tall card on right (cols 4) */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch px-4 sm:px-6">
        {/* Left 4-Photo Grid */}
        <div className="md:col-span-8 grid grid-cols-2 gap-4">
          {/* Top Left: Restaurant Atrium */}
          <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-[#E59374]/30 bg-gray-100 group">
            <Image
              src={g.images[0]}
              alt="Restaurant interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="400px"
            />
          </div>

          {/* Top Right: Brick Cafe */}
          <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-[#E59374]/30 bg-gray-100 group">
            <Image
              src={g.images[1]}
              alt="Brick cafe design"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="400px"
            />
          </div>

          {/* Bottom Left: Zen Room */}
          <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-[#E59374]/30 bg-gray-100 group">
            <Image
              src={g.images[2]}
              alt="Zen aesthetic interior"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="400px"
            />
          </div>

          {/* Bottom Right: Slatted Timber Screen */}
          <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-[#E59374]/30 bg-gray-100 group">
            <Image
              src={g.images[3]}
              alt="Timber wall niche"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="400px"
            />
          </div>
        </div>

        {/* Far Right Tall Column Panel */}
        <div className="md:col-span-4 relative h-full min-h-[360px] sm:min-h-[430px] rounded-2xl overflow-hidden shadow-md bg-gray-100 group">
          <Image
            src={g.images[4]}
            alt="Cloud paper art cafe"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="400px"
          />
        </div>
      </div>
    </div>
  );
};

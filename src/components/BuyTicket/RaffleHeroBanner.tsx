'use client';

import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface RaffleHeroBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export const RaffleHeroBanner: React.FC<RaffleHeroBannerProps> = () => {
  return (
    <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden mb-6 sm:mb-8">
      <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FCD34D;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23F59E0B;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad1)' width='1200' height='300'/%3E%3Cpath d='M 0 0 L 300 0 L 400 300 L 0 300 Z' fill='%2355B578' opacity='0.7'/%3E%3Cpath d='M 800 0 L 1000 0 L 1200 300 L 900 300 Z' fill='%23DC2626' opacity='0.7'/%3E%3Ccircle cx='80' cy='80' r='30' fill='white' opacity='0.9'/%3E%3Cpolygon points='80,60 85,75 100,77 90,87 92,102 80,95 68,102 70,87 60,77 75,75' fill='%23FCD34D'/%3E%3Ccircle cx='120' cy='120' r='20' fill='white' opacity='0.8'/%3E%3Cpolygon points='120,105 123,115 133,116 126,123 128,133 120,128 112,133 114,123 107,116 117,115' fill='%23FCD34D'/%3E%3Ctext x='500' y='120' font-family='Arial, sans-serif' font-size='72' font-weight='bold' fill='%23000' text-anchor='middle'%3EWIN THE%3C/text%3E%3Ctext x='500' y='200' font-family='Arial, sans-serif' font-size='96' font-weight='bold' fill='%23000' text-anchor='middle'%3EGRAND PRIZE%3C/text%3E%3C/svg%3E"
        alt="Win the Grand Prize"
        fill
        className="object-cover"
      />

      <div className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-amber-400 rounded-full flex items-center justify-center">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 text-white fill-white" />
          </div>
          <span className="text-xs sm:text-sm md:text-base text-gray-600">making giving easier</span>
        </div>
      </div>
    </div>
  );
};
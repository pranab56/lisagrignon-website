'use client';

import React from 'react';
import { Ticket } from 'lucide-react';

export default function OngoingBanner() {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Raffles Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg mb-8">
          <span className="font-semibold text-lg">Raffles</span>
          <div className="relative">
            <Ticket className="w-5 h-5 text-red-500 fill-red-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ongoing Raffles
        </h1>

        {/* Description */}
        <div className="space-y-4 text-white text-lg md:text-xl leading-relaxed">
          <p>
            Take a look at all the exciting raffles happening right now and make a difference while having fun.{' '}
            <span className="text-amber-400 font-semibold">
              Every ticket you buy not only gives you a chance to win amazing prizes, but also support causes that truly matter!
            </span>{' '}
            Pick your favourite cause, join the raffle, and good luck!
          </p>

          {/* Learn More Link */}
          <div className="pt-2">
            <a
              href="#"
              className="text-amber-400 font-semibold hover:text-amber-300 transition-colors inline-flex items-center gap-1 underline decoration-2 underline-offset-4"
            >
              Learn more about raffles on RaffleRise
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
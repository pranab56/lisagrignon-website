"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SectionOne() {
  const router = useRouter();
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-5xl text-center space-y-6 sm:space-y-8">
        {/* Clubs Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-2.5 rounded-lg">
            <span className="font-semibold text-sm sm:text-base">Clubs</span>
            <span className="text-xl">💪</span>
          </div>
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-2 sm:px-4">
          Why Choose iDonate for Your Sports Club Fundraising?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
          With RaffleRise, you're partnering with one of the most trusted and effective fundraising platforms in UK. We support over 5,000 clubs and causes nationwide, helping sports clubs like yours raise funds for essential needs like:
        </p>

        {/* Bullet Points */}
        <div className="space-y-2 sm:space-y-3 text-teal-700 font-semibold text-base sm:text-lg">
          <p>•Club maintenance and upgrades</p>
          <p>•Training equipment and gear</p>
          <p>•Facility development and improvement</p>
        </div>

        {/* Bottom Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
          Our platform offers multiple fundraising options, including fundraising pages, online raffles, and custom event pages – each designed to maximise your fundraising efforts while keeping costs low.
        </p>

        {/* CTA Button */}
        <div className="pt-4 sm:pt-6">
          <Button
            onClick={() => router.push("/register-cause")}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium  h-10 sm:h-12 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  w-3/12"
          >
            Register your Club
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function SectionFour() {
  const router = useRouter();
  return (
    <div className="bg-white flex items-center justify-center p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-16">
      {/* Custom Events Section */}
      <div className="px-2 sm:px-4 lg:px-6 w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Image Section - Diamond shape with purple circle */}
            <div className="relative order-1 flex justify-center lg:justify-start">




              {/* Diamond-shaped image container */}
              <div className="">
                <div className="">
                  <Image
                    height={1000}
                    width={1000}
                    src="/images/club/image2.png"
                    alt="Large custom sports club event with community gathering"


                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Larger Custom Events for Sports Clubs.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Need to raise even more? RaffleRise allows sports clubs to run large-scale custom fundraising events. Whether you're hosting a Strictly Come Dancing, Golf Tournament, or Charity Run, RaffleRise provides the tools to:
                </p>

                <div className="space-y-2 text-base sm:text-lg">
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    •Set up individual fundraising pages for participants
                  </p>
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    •Track total contributions across all participants in real-time
                  </p>
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    •Create a unified event page showing the overall fundraising progress
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed">
                  Larger events can bring communities together, offering multiple ways to donate while creating a fun and competitive environment.
                </p>
              </div>

              <Button
                onClick={() => router.push("/register-cause")}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium  h-10 sm:h-12 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  w-5/12"
              >
                Register your Club
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
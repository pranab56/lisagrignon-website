// ./src/app/fundraising/page.tsx
"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SectionTwo() {
  const router = useRouter();
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content - Image with circular overlay */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative teal circle behind image */}


            {/* Main image with rounded corners */}
            <div className="w-full flex justify-center ">
              <Image
                height={600}
                width={900}
                src="/images/club/image1.png"
                alt="Sports club fundraising"
                className=""
                priority
              />
            </div>
          </div>

          {/* Right Content - Text and CTA */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Fundraising Pages for Sports Clubs.
            </h2>

            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              Create a personalised fundraising page for your sports club with ease. Similar to GoFundMe, but with lower fees, RaffleRise allows your club to:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold text-lg mt-0.5">•</span>
                <span className="text-teal-700 font-semibold text-base sm:text-lg">
                  Set fundraising goals and deadlines
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold text-lg mt-0.5">•</span>
                <span className="text-teal-700 font-semibold text-base sm:text-lg">
                  Display donor names, contributions, and messages
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-700 font-bold text-lg mt-0.5">•</span>
                <span className="text-teal-700 font-semibold text-base sm:text-lg">
                  Engage supporters in a secure and trusted platform
                </span>
              </li>
            </ul>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Whether it's for a new pitch, jerseys, or a local tournament, a fundraising page is a quick and effective way to rally your community and drive donations.
            </p>

            <Button
              onClick={() => router.push("/register-cause")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium  h-10 sm:h-12 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300  w-6/12"
            >
              Register your Club
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
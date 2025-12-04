"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

export default function SectionThree() {
  const router = useRouter();
  return (
    <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 py-8 sm:py-12 lg:py-16">
      {/* Online Raffles Section */}
      <div className="px-2 sm:px-4 lg:px-6 w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Online Raffles for Sports Clubs.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600">
                <p className="text-base sm:text-lg leading-relaxed">
                  Online raffles are an increasingly popular way to raise money for sports clubs, and RaffleRise makes it easier than ever. In just minutes, you can:
                </p>

                <div className="space-y-2 text-base sm:text-lg">
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    Describe your raffle and its purpose.
                  </p>
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    Set ticket prices and fundraising targets.
                  </p>
                  <p className="text-teal-700 font-semibold leading-relaxed">
                    Showcase the prizes up for grabs.
                  </p>
                </div>

                <p className="text-base sm:text-lg leading-relaxed">
                  Our system automatically generates an easy-to-manage spreadsheet for conducting the draw. Raffles are a proven way to boost engagement and attract new supporters.
                </p>

                <p className="text-teal-700 font-semibold text-base sm:text-lg">
                  Learn more about our online raffle creator.
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

            {/* Right Image - Circular with decorative ring */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">


              {/* Circular image */}
              <div className="">
                <Image
                  height={1000}
                  width={1000}

                  src="/images/club/image3.png"
                  alt="Sports club members excited about raffle with soccer ball"
                  className="object-cover"

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
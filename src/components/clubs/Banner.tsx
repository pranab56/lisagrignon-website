"use client"

import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Banner() {
  const router = useRouter();
  return (
    <div className="bg-[#00715D] flex items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto w-full text-center space-y-6 sm:space-y-8 py-8 sm:py-12 lg:py-16">
        {/* Discover Button */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <Button
            variant="secondary"
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base"
          >
            Discover <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
          </Button>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
          Sports Club Fundraising with RaffleRise
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 px-2 sm:px-4">
          Raffle Raise: The Leading Sports Club Fundraising Platform
        </h2>

        {/* Content Paragraphs */}
        <div className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto space-y-3 sm:space-y-4 px-2 sm:px-4">
          <p>
            Are you looking for a simple, cost-effective way to raise funds for your sports club? At RaffleRise, we specialise in supporting <span className="font-semibold text-yellow-400">GAA clubs, soccer clubs, rugby teams</span>, and a wide range of other sports organisations across Ireland.
          </p>

          <p>
            From <span className="font-semibold text-yellow-400">football</span> and <span className="font-semibold text-yellow-400">hurling</span> to <span className="font-semibold text-yellow-400">rowing, tennis, golf</span>, and more, RaffleRise offers tailored fundraising solutions for clubs of all sizes and sports.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => router.push("/register-cause")}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 sm:px-6 md:px-8 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl rounded-lg flex items-center justify-center gap-2 mx-auto transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Register your Club <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      </div>
    </div>
  );
}
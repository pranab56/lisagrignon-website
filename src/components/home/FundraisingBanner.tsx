"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export function FundraisingBanner() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12">
      {/* Main Card Container with rounded corners and the specific green background */}
      <Card
        className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 border-none"
        style={{ backgroundColor: "#00715D", borderRadius: "1rem" }} // Adjusted border radius for mobile
      >
        <CardContent className="flex flex-col items-center justify-center p-0 text-center space-y-3 sm:space-y-4 md:space-y-6">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight sm:leading-tight md:leading-tight">
            Over €165,000,000 Raised
          </h2>

          {/* Subtext/Call to Action */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl leading-relaxed">
            Launch your campaign today and embark on an exciting fundraising journey with iDonate.
          </p>

          {/* Start Now Button (Customized color to match the yellow from the image) */}
          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm sm:text-base md:text-lg py-3 sm:py-4 md:py-5 lg:py-6 px-4 sm:px-6 md:px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={() => router.push('/fundraising')}
          >
            <span className="flex items-center space-x-1 sm:space-x-2">
              <span>Start Now</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-0.5 sm:ml-1" />
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
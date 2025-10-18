// ./src/app/fundraising/page.tsx
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function FundraisingSection() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content - Image with circular overlay */}
          <div className="relative order-2 lg:order-1">
            {/* Main rectangular image with rounded corners */}
            <div className="w-full flex justify-center overflow-hidden">
              <Image
                height={600}
                width={900}
                src="/images/schools/Union.png"
                alt="Happy celebration with confetti"
                className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-contain rounded-xl sm:rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Right Content - Text and CTA */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight">
              Why Choose RaffleRise for Your School Fundraising?
            </h2>

            <div className="text-gray-600 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 space-y-3 sm:space-y-4">
              <p>
                At RaffleRise, we understand the unique needs of schools and their communities. We provide flexible fundraising options that are simple to set up, ensuring maximum success with minimum effort. Our platform offers multiple options tailored for school fundraising, including:
              </p>

              <p className="font-semibold text-gray-700">
                All of this comes with low fees, ensuring that more of the funds raised go directly to your school.
              </p>
            </div>

            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              View Live Raffles
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
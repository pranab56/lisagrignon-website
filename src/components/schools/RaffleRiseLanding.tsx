import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function RaffleRiseLanding() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Online Raffles Section */}
      <div className="px-2 sm:px-4 lg:px-6 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-left lg:text-right order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Online Raffles for Schools.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600">
                <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
                  Online raffles are a popular and simple way to raise funds for schools.
                  Eliminate the hassle of paper tickets and cash collection by moving your
                  raffle online. With RaffleRise online raffle creator, you can:
                </p>

                <div className="space-y-2 sm:space-y-3 text-base sm:text-lg lg:text-xl">
                  <p className="leading-7">• Describe the raffle purpose and set a fundraising target</p>
                  <p className="text-teal-600 font-semibold leading-7">
                    • Set ticket prices and display prizes
                  </p>
                  <p className="leading-7">• Easily manage your raffle with a downloadable spreadsheet for the draw</p>
                </div>

                <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
                  Raffles are a proven method to generate excitement and engage both parents
                  and the wider community in supporting your school.
                </p>

                <p className="text-teal-600 font-semibold text-base sm:text-lg lg:text-xl">
                  Learn more about our online raffle creator.
                </p>
              </div>

              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
              >
                Register your School
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="w-full flex justify-center overflow-hidden">
                <Image
                  height={600}
                  width={800}
                  src="/images/schools/OnlineRaffles.png"
                  alt="Online raffles interface showing ticket options and prizes"
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-contain rounded-xl sm:rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

export default function OnlineRaffles() {
  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Online Raffles Section */}
      <div className="px-2 sm:px-4 lg:px-6 w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Image Section - Comes first on mobile */}
            <div className="relative order-1">
              <div className="w-full flex justify-center overflow-hidden">
                <Image
                  height={600}
                  width={800}
                  src="/images/schools/OnlineRaffles2.png"
                  alt="Large custom events like fun runs and dance competitions"
                  className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] object-contain rounded-xl sm:rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Larger Custom Events for Schools.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600">
                <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8">
                  Looking to raise even more? RaffleRise supports large custom events like fun runs, Strictly Come Dancing, sports tournaments, and more. With RaffleRise, participants can create individual fundraising pages, and the total amounts raised are aggregated to display the overall event total on a centralised Event Page. These events are perfect for building community spirit while reaching fundraising goals faster.
                </p>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-base sm:text-lg lg:text-xl leading-7">
                    Describe the raffle purpose and set a fundraising target
                  </p>
                  <p className="text-teal-600 font-semibold text-base sm:text-lg lg:text-xl leading-7">
                    Example: In a Strictly Come Dancing event, each couple can have their own page where supporters donate directly, contributing to the overall event total shown on the main event page.
                  </p>
                </div>
              </div>

              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                Register your School
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
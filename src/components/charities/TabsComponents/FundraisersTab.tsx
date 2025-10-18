import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../../ui/button';

const FundraisersTab = () => {
  return (
    <div>
      {/* Online Raffle Creator Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="relative order-2 md:order-1">
                <div className="absolute -left-2 -top-2 sm:-left-4 sm:-top-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500 rounded-full opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80"
                  alt="Happy raffle winners"
                  width={500}
                  height={500}
                  className="rounded-xl sm:rounded-2xl w-full h-48 sm:h-56 lg:h-64 object-cover relative z-10 transform -rotate-2 sm:-rotate-3"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Online Raffle Creator.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  RaffleBox&apos;s online raffle creator enables supporters to purchase digital tickets, eliminating the need for physical ones. You can list raffle prizes and set ticket prices securely on the platform.
                </p>
                <p className="text-teal-600 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  This is one of RaffleBox&apos;s most successful fundraising features!
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event and Campaign Fundraising Section */}
      <section className="py-6 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Event and Campaign Fundraising.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  These features allow you to reach more people and create an engaging, branded campaign page, serving as a hub for all team pages connected to your event.
                </p>
                <p className="text-gray-700 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  Enhance your event by adding a fitness or fundraising leaderboard.
                </p>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                  Register your Cause
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 rounded-full opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&q=80"
                  alt="Event fundraising"
                  width={500}
                  height={500}
                  className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto border-4 sm:border-8 border-white shadow-lg sm:shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundraisersTab;
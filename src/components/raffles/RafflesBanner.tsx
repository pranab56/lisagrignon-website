import Image from 'next/image';
import { Button } from '../ui/button';

export default function RafflesBanner() {
  return (
    <div className="bg-[#00715D] flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16 xl:py-20">
      <div className="container mx-auto w-full max-w-7xl">
        <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* Button Section */}
          <div className="flex justify-center items-center">
            <Button
              variant="secondary"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-md flex items-center gap-2 
                         h-9 px-4 text-sm
                         sm:h-10 sm:px-5 sm:text-base
                         md:h-11 md:px-6
                         transition-all duration-200"
            >
              <span>Our Fees</span>
              <Image
                src="/icons/setting.png"
                width={20}
                height={20}
                alt="Settings Icon"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Button>
          </div>

          {/* Main Heading */}
          <h1 className="text-white font-bold leading-tight
                         text-2xl
                         sm:text-3xl
                         md:text-4xl
                         lg:text-5xl
                         xl:text-6xl
                         2xl:text-7xl
                         px-2 sm:px-4">
            Turn Your Cause into Impactful Online Raffles
          </h1>
          {/* Description Text */}
          <div className="text-white leading-relaxed space-y-4 sm:space-y-5 md:space-y-6
                          text-sm sm:text-base md:text-lg lg:text-xl
                          max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl
                          mx-auto px-2 sm:px-4 md:px-6">
            <p>
              RafleRise offers a straightforward online raffle creator, making it easy to set up and manage ticket sales as donations for non-profits. With our toolkit, you can organise and administer your raffle in minutes.
            </p>

            <p>
              If you&apos;re already a registered cause, click here to log in and launch your raffle. If you&apos;re a new organiser aiming to fundraise for a cause, simply fill out the form below to submit your raffle for review.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import Image from 'next/image';
import { Button } from '../ui/button';

export default function Banner() {
  return (
    <div className="bg-[#00715D] flex items-center justify-center p-3 xs:p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto w-full text-center space-y-4 xs:space-y-6 sm:space-y-8 py-6 xs:py-8 sm:py-12 lg:py-16 xl:py-20">
        {/* Button Section */}
        <div className="flex justify-center items-center gap-2 xs:gap-3 mb-4 xs:mb-6 sm:mb-8">
          <Button
            variant="secondary"
            className="bg-gray-900 hover:bg-gray-800 h-8 xs:h-9 sm:h-10 text-white px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 rounded-md flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base"
          >
            Our Fees
            <Image
              src={"/icons/setting.png"}
              width={16}
              height={16}
              alt='Settings Icon'
              className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
            />
          </Button>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight xs:leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
          Platform Fees
        </h1>

        {/* Description Text */}
        <div className="text-white text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed xs:leading-relaxed max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto space-y-2 xs:space-y-3 sm:space-y-4 px-2 xs:px-3 sm:px-4">
          <p className="text-center">
            With RaffleRise cutting-edge technology and advanced features at your disposal, you will always be at the forefront of the fastest, most secure, and most innovative fundraising methods for your cause.
          </p>
        </div>
      </div>
    </div>
  );
}
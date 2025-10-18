import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function RaffleRiseLanding() {
  return (
    <div className="bg-[#00715D] flex items-center justify-center p-4 sm:p-6">
      <div className="container mx-auto w-full text-center space-y-6 sm:space-y-8 py-8 sm:py-12 lg:py-16">
        {/* Discover Button */}
        <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
          <Button
            variant="secondary"
            className="bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base"
          >
            Discover <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
          School Fundraising with RaffleRise
        </h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 px-2 sm:px-4">
          Raise Funds for Your School Easily with Raffle Raise
        </h2>

        {/* Content Paragraphs */}
        <div className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto space-y-3 sm:space-y-4 px-2 sm:px-4">
          <p>
            Are you looking for an effective and hassle-free way to raise funds for your school? RaffleRise is Ireland&apos;s leading online fundraising platform, supporting schools at all levels—Primary, Secondary, and Third Level institutions. Whether you&apos;re a school principal, staff member, or part of the parents&apos; council, RaffleRise offers the perfect solution to help you raise funds for your school projects.
          </p>

          <p>
            From improving <span className="font-semibold">sports facilities</span> and enhancing <span className="font-semibold">playgrounds</span> to supporting <span className="font-semibold">special needs classes</span> and general <span className="font-semibold">school maintenance</span>, RaffleRise makes it easy to achieve your fundraising goals. With over <span className="font-semibold">5,000 causes</span> already supported across the country, our platform provides all the tools you need for successful school fundraising.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          className="bg-primary text-[#101A24] font-semibold px-4 sm:px-6 md:px-8 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl rounded-lg flex items-center justify-center gap-2 mx-auto transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Register your School <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </Button>
      </div>
    </div>
  );
}
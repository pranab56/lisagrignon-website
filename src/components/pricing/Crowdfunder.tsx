import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Crowdfunder() {
  return (
    <div className="flex items-center justify-center p-4 xs:p-6 sm:p-8 lg:p-10">
      <div className="container mx-auto w-full max-w-4xl">
        {/* Badge */}
        <div className="flex justify-center mb-4 xs:mb-6 sm:mb-8">
          <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm font-medium">
            144 Aug • 30 Aug
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 mb-4 xs:mb-6 sm:mb-8 leading-tight xs:leading-snug sm:leading-tight">
          0% Platform Fees
        </h1>

        {/* Content */}
        <div className="space-y-3 xs:space-y-4 sm:space-y-5 lg:space-y-6 text-center px-2 xs:px-4">
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed xs:leading-relaxed">
            There are no set-up costs to set up a{' '}
            <span className="text-teal-600 font-semibold">Crowdfunder</span> on our platform with no
            monthly or annual fees either.
          </p>

          <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed xs:leading-relaxed">
            RaffleRise proudly offer this service completely free of charge.
          </p>

          <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed xs:leading-relaxed">
            A low transaction fee of just 1.95% + €0.25 covers card and bank interchange
            fees, which is 33% lower than what our competitors offer.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6 xs:mt-8 sm:mt-10 lg:mt-12">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-sm xs:text-base sm:text-lg rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Start a Crowdfunder
            <ArrowRight className="ml-1 xs:ml-2 h-4 w-4 xs:h-5 xs:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check } from 'lucide-react';

export default function CharitiesCauses() {
  return (
    <div className="">
      {/* Comparison Cards Section */}
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 py-8 xs:py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8">
          {/* Donor Cover Fee Model Card */}
          <Card className="bg-white shadow-lg rounded-xl xs:rounded-2xl overflow-hidden">
            <CardContent className="p-4 xs:p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4 xs:mb-6">
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1">Donor Cover</h3>
                  <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900">Fee Model</h4>
                </div>
              </div>

              <Button className="w-full bg-primary text-gray-900 font-semibold py-4 xs:py-5 sm:py-6 rounded-lg xs:rounded-xl mb-4 xs:mb-6 group text-sm xs:text-base">
                Start Now
                <ArrowRight className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="space-y-3 xs:space-y-4">
                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">5% platform fee for the cause.</p>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">Donor is given the option to cover the platform and transaction fee for the cause.</p>

                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">If fees are not covered by the donor, they&apos;re deducted from the donation amount the cause receives.</p>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">Transaction fees are 1.4% + €0.03% or 1.8% + €0.38* if the donor uses PayPal.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 0% Platform Fee Model Card */}
          <Card className="bg-white shadow-lg rounded-xl xs:rounded-2xl overflow-hidden">
            <CardContent className="p-4 xs:p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4 xs:mb-6">
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1">0% Platform</h3>
                  <h4 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900">Fee Model</h4>
                </div>
                <Badge className="bg-gray-900 h-8 xs:h-10 w-auto px-2 xs:px-3 py-1 text-xs font-medium whitespace-nowrap">
                  Best Plan
                </Badge>
              </div>

              <Button className="w-full bg-primary text-gray-900 font-semibold py-4 xs:py-5 sm:py-6 rounded-lg xs:rounded-xl mb-4 xs:mb-6 group text-sm xs:text-base">
                Start Now
                <ArrowRight className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="space-y-3 xs:space-y-4">
                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">0% platform fee for the cause.</p>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">Donor has the option to make a contribution to the running of the platform.</p>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">The cause does not pay the platform.</p>
                </div>

                <div className="flex gap-2 xs:gap-3">
                  <div className="flex-shrink-0 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-gray-400 flex items-center justify-center mt-0.5">
                    <Check className="h-2 w-2 xs:h-3 xs:w-3 text-white" />
                  </div>
                  <p className="text-xs xs:text-sm text-gray-600 flex-1">Causes pay the transaction fee of 1.95% + €0.25*.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 0% Platform Fee Model Section */}
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 py-8 xs:py-12 sm:py-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 xs:mb-8">
          0% Platform Fee Model
        </h2>

        <div className="space-y-4 xs:space-y-5 sm:space-y-6 text-center mb-8 xs:mb-10 sm:mb-12">
          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            With this model, your cause will incur a 0% platform fee, making it ideal for organisations that prioritise stability. It offers a fixed,
            predictable cost that remains constant regardless of donor behaviour.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            Your cause can be confident that 100% of each donation will be received, minus a small transaction fee. This model also yields
            higher conversion rates, leaving your cause raise more.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            We provide full transparency for donors, so unlike other leading fundraising platforms, there are no hidden costs. Donors can
            choose their contribution amount freely.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            Additionally, you benefit from mobile payment options and a variety of free fundraising tools and features to enhance your
            fundraising efforts.
          </p>
        </div>

        <div className="flex justify-center">
          <Button className="bg-primary w-full xs:w-3/4 sm:w-1/2 lg:w-2/5 text-gray-900 font-semibold px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6 rounded-lg xs:rounded-xl shadow-lg group text-sm xs:text-base">
            Register your Cause
            <ArrowRight className="ml-1 xs:ml-2 h-4 w-4 xs:h-5 xs:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Donor Cover Fee Model Section */}
      <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 py-8 xs:py-12 sm:py-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 xs:mb-8">
          Donor Cover Fee Model
        </h2>

        <div className="space-y-4 xs:space-y-5 sm:space-y-6 text-center mb-8 xs:mb-10 sm:mb-12">
          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            This model allows donors to cover our 5% platform fee, along with the transaction fee, on behalf of the cause.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            If a donor chooses to cover both fees, the cause will receive 100% of the donation. If the donor does not opt to cover the fees, both
            fees will be deducted from the donation amount received by the cause.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            This model offers the option for donors to cover both fees, though it is less predictable as it depends on donor generosity.
          </p>

          <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
            The Donor Cover Fee model also supports mobile payment options and provides a range of free fundraising tools and features to
            help causes raise more.
          </p>
        </div>

        <div className="flex justify-center">
          <Button className="bg-primary w-full xs:w-3/4 sm:w-1/2 lg:w-2/5 text-gray-900 font-semibold px-4 xs:px-6 sm:px-8 py-4 xs:py-5 sm:py-6 rounded-lg xs:rounded-xl shadow-lg group text-sm xs:text-base">
            Register your Cause
            <ArrowRight className="ml-1 xs:ml-2 h-4 w-4 xs:h-5 xs:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RaffleRiseHero() {
  const router = useRouter();
  const features = [
    {
      title: "Tailored for Sports Clubs of All Sizes",
      description: "At RaffleRise, we specialise in school fundraising, offering a platform that caters to the unique needs of schools at all levels—Primary, Secondary, and Third Level. Whether you're raising funds for a new playground, special needs equipment, or general school improvements, our platform provides flexible and customisable options to meet your school's goals."
    },
    {
      title: "Cost-Effective Fundraising with Low Fees",
      description: "Unlike many other fundraising platforms, RaffleRise charges some of the lowest transaction fees, ensuring more of the funds raised go directly to your school. Whether you're organising an online raffle or a large-scale event, you can rest assured that our cost-effective solution helps maximise your fundraising impact. No hidden fees, just simple and transparent pricing to make every donation count."
    },
    {
      title: "Comprehensive Fundraising Tools All in One Place",
      description: "With RaffleRise you get everything you need in one place. Our platform offers fundraising pages, online raffles, and custom event pages—making it easy to run various types of fundraisers. From simple donation pages to more complex events like Strictly Come Dancing or fun runs, RaffleRise is designed to support schools through every step of the fundraising process, all from a single platform."
    },
    {
      title: "Trusted by Thousands of Schools and Charities",
      description: "RaffleRise is trusted by more than 5,000 causes across Ireland, including schools, charities, and sports clubs. Our platform is known for being secure, user-friendly, and highly effective at raising funds. Schools choose RaffleRise because of our reliability, comprehensive support, and our track record of helping institutions achieve their fundraising targets with ease."
    }
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-6 sm:mb-8">
            <span className="font-semibold text-sm sm:text-base lg:text-lg">RaffleRise</span>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-red-500 text-red-500" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight">
            Why Choose Us For Your Sports Club?
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-50 rounded-full flex items-center justify-center">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-teal-700" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed sm:leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={() => router.push("/register-cause")}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            size="lg"
          >
            Register your School
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
"use client";
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, DollarSign, Heart, Ticket, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FundraisingBanner } from '../../components/home/FundraisingBanner';
import FAQSection from '../../components/schools/FAQSection';

const FundraisingPlatform = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showValidation, setShowValidation] = useState(false);
  const router = useRouter();



  const fundraisingOptions = [
    {
      id: 'charity',
      badge: 'Fundraiser',
      title: 'Fundraising for a Charity or Cause',
      description: 'Create a fundraising page where all funds raised are transferred to a registered charity or cause.',
      icon: DollarSign,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 'crowdfunder',
      badge: 'Crowdfunder',
      title: 'Raise Money for Myself or Others',
      description: 'Start a crowdfunding campaign with funds transferred to an account that you specify.',
      icon: Users,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50'
    },
    {
      id: 'register',
      badge: 'Charity / Cause',
      title: 'Register your Charity or Cause on RaffleRise',
      description: 'Join the platform as a charity, school, sports club, or other cause to start fundraising.',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'raffle',
      badge: 'Raffles',
      title: 'Create a Raffle In Aid of a Cause!',
      description: 'Create a fundraising page where all funds raised are transferred to a registered charity or cause.',
      icon: Ticket,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const handleStartNow = (optionId: string) => {
    setSelectedOption(optionId);
    setShowValidation(true);
    setTimeout(() => {
      setShowValidation(false);
      router.push(`/fundraising/SelectCause`);
    }, 3000);
  };




  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-[#00715D] py-12 sm:py-16 md:py-20 px-3 sm:px-4 mb-8 sm:mb-10 md:mb-12">
        <div className="container mx-auto text-center max-w-6xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full mb-6 sm:mb-7 md:mb-8">
            <span className="font-semibold text-xs sm:text-sm md:text-base">Fundraising on RaffleRise</span>
            <span className="text-lg sm:text-xl md:text-2xl">🎯</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            Let&apos;s get started
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-teal-100 px-2 sm:px-4">
            Safe, simple, secure fundraising is just a few clicks away.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            How Would You Like To Start Fundraising?
          </h2>
        </div>

        {/* Validation Alert */}
        {showValidation && (
          <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50">
            <AlertDescription className="text-green-800 text-sm sm:text-base">
              Starting {fundraisingOptions.find(opt => opt.id === selectedOption)?.title}...
            </AlertDescription>
          </Alert>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-12 sm:mb-14 md:mb-16">
          {fundraisingOptions.map((option) => {
            return (
              <Card
                key={option.id}
                className="relative hover:shadow-lg transition-shadow duration-300 border-gray-200 bg-white p-0 h-full"
              >
                <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                  {/* Badge */}
                  <div className="mb-3 sm:mb-4">
                    <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
                      {option.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 min-h-[48px] sm:min-h-[56px] leading-tight">
                    {option.title}
                  </h3>

                  {/* Icon */}
                  <div className={`${option.bgColor} rounded-lg p-4 sm:p-5 md:p-6 mb-3 sm:mb-4 flex items-center justify-center`}>
                    {option.id === 'charity' && (
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-amber-600 rounded-full flex items-center justify-center">
                          <span className="text-xl sm:text-2xl md:text-3xl text-white font-bold">€</span>
                        </div>
                        <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-yellow-400 rounded-full"></div>
                        <div className="absolute -bottom-0.5 -right-1.5 sm:-bottom-1 sm:-right-3 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full"></div>
                      </div>
                    )}
                    {option.id === 'crowdfunder' && (
                      <div className="relative">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-1 sm:mb-2">
                          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div className="flex gap-1 sm:gap-2 mt-1 sm:mt-2">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full"></div>
                          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full"></div>
                        </div>
                      </div>
                    )}
                    {option.id === 'register' && (
                      <div className="relative">
                        <Heart className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-pink-500 fill-pink-500" />
                        <div className="absolute bottom-0 left-0 w-4 h-8 sm:w-6 sm:h-12 md:w-8 md:h-16 bg-blue-400 rounded-t-full"></div>
                      </div>
                    )}
                    {option.id === 'raffle' && (
                      <div className="relative">
                        <div className="w-16 h-14 sm:w-20 sm:h-16 md:w-24 md:h-20 bg-yellow-400 rounded-lg border-2 sm:border-3 md:border-4 border-yellow-500 flex items-center justify-center transform rotate-3">
                          <div className="text-center">
                            <Ticket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-800 mx-auto mb-0.5 sm:mb-1" />
                            <div className="text-xs font-bold text-gray-800">TICKET</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow leading-relaxed">
                    {option.description}
                  </p>

                  {/* Button */}
                  <Button
                    onClick={() => handleStartNow(option.id)}
                    className="w-full bg-primary text-gray-900 font-semibold py-3 sm:py-4 md:py-6 rounded-lg transition-colors duration-200 group text-sm sm:text-base"
                  >
                    Start Now
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information Section */}
        <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="mb-4 sm:mb-5 md:mb-6">
            <span className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">
              Additional Information
            </span>
          </div>

          {/* Causes Section */}
          <div className="mb-6 sm:mb-7 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 mb-3 sm:mb-4">Causes</h2>
            <div className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>
                If you&apos;re a charity or non-profit, the first step is to register (create an account) on the iDonate platform. This process allows us to gather the necessary background information to assist you with your campaigns. After we review your application and your cause goes live, you can choose from various fundraising options, including events, fundraising pages, donation forms, or online raffles.
              </p>
              <p>
                Moreover, cause administrators can manage their cause details using their login. They can set up events, fundraising pages, online raffles, and more.
              </p>
            </div>
          </div>

          {/* Fundraisers Section */}
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 mb-3 sm:mb-4">Fundraisers</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Fundraisers can create pages for one or more causes. When setting up a new fundraising page, simply provide the page name, target amount, profile image, description, and duration.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <div className="mt-12 sm:mt-16 md:mt-20">
        <FundraisingBanner />
      </div>
      <div className="mt-12 sm:mt-16 md:mt-20">
        <FAQSection />
      </div>
    </div>
  );
};

export default FundraisingPlatform;
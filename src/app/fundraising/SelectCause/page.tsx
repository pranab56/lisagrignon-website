"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Info } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Cause {
  id: number;
  name: string;
  description: string;
  logo: string;
}

const CauseSelector = () => {
  const [selectedCause, setSelectedCause] = useState<number | null>(null);
  const [validationError, setValidationError] = useState<string>('');
  const router = useRouter();

  const causes: Cause[] = [
    {
      id: 1,
      name: 'North West Hospice',
      description: 'North West Hospice provides specialist care with compassion for those living with life-limiting illness in our community. Our integrated service is provided through our in-Patient...',
      logo: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Children Education Fund',
      description: 'Providing education opportunities for underprivileged children in rural areas. We focus on building schools, providing scholarships, and educational materials...',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Animal Rescue Center',
      description: 'Dedicated to rescuing, rehabilitating and finding homes for abandoned and abused animals. Our center provides medical care, shelter, and love to animals in need...',
      logo: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Environmental Protection',
      description: 'Working towards a greener planet through reforestation, pollution control, and environmental education programs. Join us in protecting our natural resources...',
      logo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    }
  ];

  const handleSelectCause = (id: number) => {
    setSelectedCause(id);
    // Clear validation error when user selects a cause
    if (validationError) {
      setValidationError('');
    }
  };

  const handleContinue = () => {
    if (selectedCause === null) {
      setValidationError('Please select a cause to continue');
      return;
    }

    // If validation passes, redirect
    router.push('/fundraising/SelectCause/create');
  };

  const handleCancel = () => {
    // Add your cancel logic here
    router.back(); // Or router.push('/some-other-page');
  };

  const LogoSVG = () => (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 180 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-[140px] sm:max-w-[160px] md:max-w-[180px] mx-auto"
    >
      {/* Sun rays */}
      <g transform="translate(90, 45)">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = Math.cos(angle) * 28;
          const y1 = Math.sin(angle) * 28;
          const x2 = Math.cos(angle) * 42;
          const y2 = Math.sin(angle) * 42;
          return (
            <rect
              key={i}
              x={x1 - 3}
              y={y1 - 1}
              width={Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)}
              height="8"
              fill="#FDB71A"
              transform={`rotate(${i * 30} ${x1} ${y1})`}
              rx="3"
            />
          );
        })}
      </g>
      {/* Sun circle */}
      <circle cx="90" cy="45" r="25" fill="#EF4444" />

      {/* Text */}
      <text x="90" y="75" textAnchor="middle" fill="#0066A1" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif">
        North West
      </text>
      <text x="90" y="95" textAnchor="middle" fill="#0066A1" fontSize="20" fontWeight="700" fontFamily="Arial, sans-serif">
        Hospice
      </text>
    </svg>
  );

  return (
    <div className="">
      <div className="bg-[#00715D] py-12 sm:py-16 md:py-20 px-3 sm:px-4 mb-8 sm:mb-10 md:mb-12">
        <div className="container mx-auto text-center max-w-6xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-gray-900 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full mb-6 sm:mb-7 md:mb-8">
            <span className="font-semibold text-xs sm:text-sm md:text-base">Create Fundraiser</span>
            <Image
              src="/icons/research.png"
              width={1000}
              height={1000}
              alt="Happy celebration with confetti"
              className="w-7 h-7 object-cover"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
            Select a Cause
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-teal-100 px-2 sm:px-4">
            Who are you fundraising for?
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Info Banner */}
        <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4 mb-4 sm:mb-6 md:mb-8 flex items-start sm:items-center gap-2 sm:gap-3">
          <Info className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-gray-700 text-xs sm:text-sm">5% platform fee for the cause.</p>
        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-xs sm:text-sm font-medium text-center">
              {validationError}
            </p>
          </div>
        )}

        {/* Cause Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-7 md:mb-8">
          {causes.map((cause) => (
            <Card
              key={cause.id}
              className={`overflow-hidden transition-all hover:shadow-lg h-full flex flex-col ${selectedCause === cause.id ? 'ring-2 ring-blue-500' : ''
                } ${validationError && selectedCause === null
                  ? 'border-2 border-red-500'
                  : 'border border-gray-200'
                }`}
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* Logo Section */}
                <div className="bg-white flex justify-center  flex-shrink-0">
                  <Image
                    src="/icons/selectCause.png"
                    width={1000}
                    height={1000}
                    alt="Happy celebration with confetti"
                    className="w-full h-full "
                  />
                </div>

                {/* Cause Badge */}
                <div className="px-3 sm:px-4 md:px-5 lg:px-6 pt-3 sm:pt-4 flex-shrink-0">
                  <span className="inline-block bg-[#00715D08] text-teal-700 text-sm font-medium px-2 sm:px-3 py-2 rounded">
                    Cause
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 pt-2 sm:pt-3 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                    {cause.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-4 flex-grow">
                    {cause.description}
                  </p>

                  {/* Select Button */}
                  <Button
                    onClick={() => handleSelectCause(cause.id)}
                    className={`w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base font-semibold rounded-md transition-all flex-shrink-0 ${selectedCause === cause.id
                      ? 'bg-teal-600 hover:bg-teal-700 text-white'
                      : 'bg-primary text-gray-900 hover:bg-yellow-500'
                      }`}
                  >
                    <span className="truncate">
                      {selectedCause === cause.id ? 'Selected' : 'Select Cause'}
                    </span>
                    <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center mb-4 sm:mb-5 md:mb-6">
          <p className='text-base font-normal'>You can select up to 5 different causes - donations will be split evenly between them.</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pb-5">
          {/* Continue Button */}
          <Button
            onClick={handleContinue}
            className="px-4 sm:px-6 md:px-8 w-6/12 py-2.5 sm:py-3 bg-[#00715D] hover:bg-teal-700 text-white rounded-md font-medium text-sm sm:text-base order-2 sm:order-1"
          >
            Continue
          </Button>

          {/* Cancel Button */}
          <Button
            variant="outline"
            onClick={handleCancel}
            className="px-4 sm:px-6 md:px-8 w-6/12 py-2.5 sm:py-3 text-[#00715D] border border-[#00715D] hover:bg-teal-50 rounded-md font-medium text-sm sm:text-base order-1 sm:order-2"
          >
            Cancel and return to page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CauseSelector;
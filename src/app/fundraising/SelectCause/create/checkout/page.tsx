"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FundraisingPage() {
  const [currentCharity, setCurrentCharity] = useState(0);
  const router = useRouter();

  const charities = [
    {
      name: "LauraLynn Ireland's Children's Hospice",
      description: "LauraLynn Ireland's Children's Hospice provides specialist palliative care for children with life-limiting conditions and supports for their families across Ireland.",
      tagline: "Making the most of short & precious lives"
    },
    {
      name: "The Jack & Jill Children's Foundation",
      description: "Providing home nursing care and support for children with severe developmental delay.",
      tagline: "Supporting families nationwide"
    },
    {
      name: "Barnardos",
      description: "Working with children, young people and families to break the cycle of disadvantage.",
      tagline: "Because childhood lasts a lifetime"
    }
  ];

  const recentDonations = [
    { name: "irish meats.", amount: 73 },
    { name: "Hannover Re", amount: 100 },
    { name: "Meats Re", amount: 500 }
  ];

  const topDonors = [
    { name: "Anonymous", amount: 55135 },
    { name: "Anonymous", amount: 55135 },
    { name: "Anonymous", amount: 55135 }
  ];

  const nextCharity = () => {
    setCurrentCharity((prev) => (prev + 1) % charities.length);
  };

  const prevCharity = () => {
    setCurrentCharity((prev) => (prev - 1 + charities.length) % charities.length);
  };



  return (
    <div className="bg-[#00715D] min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Header Card with Charity Logos */}
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex-shrink-0">
                    <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.2" />
                      <path d="M35 45 L35 25 L45 25 L45 45 M55 45 L55 25 L65 25 L65 45" stroke="#10b981" strokeWidth="4" fill="none" />
                      <ellipse cx="40" cy="55" rx="8" ry="12" fill="#10b981" />
                      <ellipse cx="60" cy="55" rx="8" ry="12" fill="#10b981" />
                      <path d="M30 48 L35 42 M70 48 L65 42" stroke="#f59e0b" strokeWidth="2" fill="none" />
                      <circle cx="25" cy="50" r="2" fill="#f59e0b" />
                      <circle cx="75" cy="50" r="2" fill="#f59e0b" />
                      <circle cx="32" cy="35" r="2" fill="#8b5cf6" />
                      <circle cx="68" cy="35" r="2" fill="#8b5cf6" />
                      <text x="50" y="85" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">RETURN</text>
                    </svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                      RETURN
                      <span className="text-lg sm:text-xl md:text-2xl mx-1 sm:mx-2">FOR</span>
                      <span className="text-teal-600">Children</span>
                    </h1>
                  </div>
                </div>

                {/* Charity Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 flex items-center justify-center h-12 sm:h-16 md:h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Charity Logo</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fundraising Info Card */}
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-6">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 mx-auto sm:mx-0" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.2" />
                    <path d="M35 45 L35 25 L45 25 L45 45 M55 45 L55 25 L65 25 L65 45" stroke="#10b981" strokeWidth="4" fill="none" />
                    <ellipse cx="40" cy="55" rx="8" ry="12" fill="#10b981" />
                    <ellipse cx="60" cy="55" rx="8" ry="12" fill="#10b981" />
                  </svg>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                      Fundraising Raffle for Juvenile Goals
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6">Return for Children</p>

                    <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                      <p>Thank you for taking the time to visit our fundraising page on RaffleRise.ie</p>

                      <p>
                        We&#39;ve chosen to fundraise for <strong>The Jack &amp; Jill Children&#39;s Foundation, LauraLynn Ireland&#39;s Children&#39;s Hospice, ISPCC Childline, Barretstown, Barnardos and Make-A-Wish Ireland</strong>. All funds raised here will go directly to these great causes.
                      </p>

                      <p>
                        We hope you can help us by donating whatever you can. Simply click the Donate button above. All donations are processed securely.
                      </p>

                      <p>
                        You can also share our page using the Share options. This is a great way to show your support.
                      </p>

                      <p className="font-semibold">Thank you!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Words of Support */}
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6">Words of Support</h3>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-gray-200 pb-4 sm:pb-5 md:pb-6 last:border-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                        <p className="font-semibold text-gray-900 text-sm sm:text-base">Ciaran Foley</p>
                        <span className="text-xs text-gray-400">8 months ago</span>
                      </div>
                      <p className="text-gray-600 text-sm sm:text-base">Re-cycling from Re-turn office.</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Featured Charity Carousel */}
            <Card>
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="relative">
                  <button
                    onClick={prevCharity}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
                  </button>

                  <button
                    onClick={nextCharity}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 sm:p-2 shadow-lg hover:bg-gray-50"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-600" />
                  </button>

                  <div className="mx-8 sm:mx-10 md:mx-12">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                      <div className="bg-gray-100 rounded-lg p-2 sm:p-3 md:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0">
                        <div className="text-xs text-gray-400 font-semibold text-center">Charity Logo</div>
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                          {charities[currentCharity].name}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 leading-relaxed">
                          {charities[currentCharity].description}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold text-teal-600 mb-3 sm:mb-4">
                          {charities[currentCharity].tagline}
                        </p>
                        <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold text-xs sm:text-sm">
                          View Cause Page
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Donation Info */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Fundraising Progress Card */}
            <Card>
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="text-center mb-4 sm:mb-5 md:mb-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">$1,720</h2>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Raised</p>

                  <div className="mb-3 sm:mb-4">
                    <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">of €50,000 target</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div className="bg-teal-600 h-1.5 sm:h-2 rounded-full" style={{ width: '3.4%' }}></div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-4 sm:mb-5 md:mb-6">
                    Donations Available<br />
                    until 05th Dec 2025
                  </p>

                  <Button
                    onClick={() => router.push("/donate")}
                    className="w-full bg-primary text-gray-900 font-bold py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base mb-3 sm:mb-4"
                  >
                    Donate Now <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>

                  <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50 py-3 sm:py-4 text-xs sm:text-sm">
                    <Share2 className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" /> Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card>
              <CardContent className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recent Donations</h3>
                <div className="space-y-3 sm:space-y-4">
                  {recentDonations.map((donation, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-600 font-semibold text-xs sm:text-sm">
                          {donation.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{donation.name}</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">${donation.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Donors */}
            <Card>
              <CardContent className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Top Donors</h3>
                <div className="space-y-3 sm:space-y-4">
                  {topDonors.map((donor, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-yellow-600 font-semibold text-xs sm:text-sm">
                          {i + 1}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">{donor.name}</p>
                        <p className="text-base sm:text-lg font-bold text-gray-900">€{donor.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Donation Summary */}
            <Card>
              <CardContent className="p-4 sm:p-5 md:p-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Donation Summary</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Total Raised:</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">$73,416</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">Online Donations:</span>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">$73,416</span>
                  </div>
                </div>
                {/* Removed problematic console.log JSX */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
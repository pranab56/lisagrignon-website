"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Share2 } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function FundraisingPage() {
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

  return (
    <div className="h-[1700px]">
      <div className='bg-[#00715D] h-[300px]'>
        <div className="container mx-auto px-4 py-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header Card with Charity Logos */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0">
                      <svg className="w-24 h-24" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.1" />
                        <path d="M35 45 L35 25 L45 25 L45 45 M55 45 L55 25 L65 25 L65 45" stroke="#10b981" strokeWidth="4" fill="none" />
                        <ellipse cx="40" cy="55" rx="8" ry="12" fill="#10b981" />
                        <ellipse cx="60" cy="55" rx="8" ry="12" fill="#10b981" />
                        <path d="M30 48 L35 42 M70 48 L65 42" stroke="#f59e0b" strokeWidth="2" fill="none" />
                        <circle cx="25" cy="50" r="2" fill="#f59e0b" />
                        <circle cx="75" cy="50" r="2" fill="#f59e0b" />
                        <circle cx="32" cy="35" r="2" fill="#8b5cf6" />
                        <circle cx="68" cy="35" r="2" fill="#8b5cf6" />
                        <circle cx="40" cy="30" r="1.5" fill="#ec4899" />
                        <circle cx="60" cy="30" r="1.5" fill="#ec4899" />
                        <circle cx="28" cy="42" r="1.5" fill="#eab308" />
                        <circle cx="72" cy="42" r="1.5" fill="#eab308" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2 leading-tight">
                        <span className="text-gray-900">RETURN</span>
                        <span className="text-gray-900 text-2xl"> FOR</span>
                        <br />
                        <span className="text-[#7EC845] text-3xl">Children</span>
                      </h1>
                    </div>
                  </div>

                  {/* Charity Logos Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Barnardos</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Barretstown</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Childline<br />by ISPCC</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Jack & Jill<br />Foundation</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">LauraLynn</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded p-3 flex items-center justify-center h-20">
                      <div className="text-xs text-gray-400 font-semibold text-center">Make-A-Wish<br />Ireland</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fundraising Info Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <svg className="w-20 h-20 flex-shrink-0" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#10b981" opacity="0.1" />
                      <path d="M35 45 L35 25 L45 25 L45 45 M55 45 L55 25 L65 25 L65 45" stroke="#10b981" strokeWidth="4" fill="none" />
                      <ellipse cx="40" cy="55" rx="8" ry="12" fill="#10b981" />
                      <ellipse cx="60" cy="55" rx="8" ry="12" fill="#10b981" />
                      <path d="M30 48 L35 42 M70 48 L65 42" stroke="#f59e0b" strokeWidth="2" fill="none" />
                      <circle cx="25" cy="50" r="2" fill="#f59e0b" />
                      <circle cx="75" cy="50" r="2" fill="#f59e0b" />
                      <circle cx="32" cy="35" r="2" fill="#8b5cf6" />
                      <circle cx="68" cy="35" r="2" fill="#8b5cf6" />
                    </svg>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        Fundraising Raffle for Juvenile Goals
                      </h2>
                      <p className="text-sm text-gray-600 mb-6">Return for Children</p>

                      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                        <p>Thank you for taking the time to visit our fundraising page on RaffleRise.ie</p>

                        <p>
                          We've chosen to fundraise for <strong>The Jack & Jill Children's Foundation, LauraLynn Ireland's Children's Hospice, ISPCC Childline, Barretstown, Barnardos and Make-A-Wish Ireland</strong>. All funds raised here will go directly to these great causes.
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Words of Support</h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b border-gray-200 pb-6 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold text-gray-900">Ciaran Foley</p>
                          <span className="text-xs text-gray-400">8 months ago</span>
                        </div>
                        <p className="text-gray-600 text-sm">Re-cycling from Re-turn office.</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Charity Carousel with shadcn */}
              <Card>
                <CardContent className="p-6">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {charities.map((charity, index) => (
                        <CarouselItem key={index}>
                          <div className="flex items-start gap-6">
                            <div className="bg-gray-100 rounded-lg p-4 w-24 h-24 flex items-center justify-center flex-shrink-0">
                              <div className="text-xs text-gray-400 font-semibold text-center">Charity Logo</div>
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {charity.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                {charity.description}
                              </p>
                              <p className="text-sm font-semibold text-teal-600 mb-4">
                                {charity.tagline}
                              </p>
                              <Button variant="link" className="text-teal-600 p-0 h-auto font-semibold text-sm">
                                View Cause Page
                              </Button>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Donation Info */}
            <div className="space-y-6">
              {/* Fundraising Progress Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">$1,720</h2>
                    <p className="text-sm text-gray-600 mb-4">Raised</p>

                    <div className="mb-4">

                      <Progress value={3.4} className="w-full h-2" />
                    </div>
                    <div className="text-lg font-medium text-gray-600 mb-2">of €50,000 target</div>
                    <p className="text-base text-gray-500 mb-6">
                      Donations Available<br />
                      until 05th Dec 2025
                    </p>

                    <Button
                      onClick={() => router.push("/donate")}
                      className="w-full py-4 text-base mb-4 text-black"
                    >
                      Donate Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>

                    <Button variant="outline" className="w-full border-teal-600  text-teal-600 hover:bg-teal-50 py-3 text-sm">
                      <Share2 className="mr-2 w-4 h-4" /> Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Donations */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold  mb-4 text-[#00715D]">Recent Donations</h3>
                  <div className="space-y-4">
                    {recentDonations.map((donation, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-teal-600 font-semibold text-sm">
                            {donation.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{donation.name}</p>
                          <p className="text-lg font-bold text-gray-900">${donation.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Donors */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold  mb-4 text-[#00715D]">Top Donors</h3>
                  <div className="space-y-4">
                    {topDonors.map((donor, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-yellow-600 font-semibold text-sm">
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{donor.name}</p>
                          <p className="text-lg font-bold text-gray-900">€{donor.amount.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Donation Summary */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-3xl font-bold  mb-4 text-[#00715D]">Donation Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-600">Total Raised:</span>
                      <span className="font-semibold text-gray-900">$73,416</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base text-gray-600">Online Donations:</span>
                      <span className="font-semibold text-gray-900">$73,416</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
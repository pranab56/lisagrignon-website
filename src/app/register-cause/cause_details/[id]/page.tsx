"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Flag, Lock, Share2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Fundraiser {
  name: string;
  raised: number;
}

export default function NorthWestHospice() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const fundraisers: Fundraiser[] = [
    { name: 'Jane Cooper', raised: 655 },
    { name: 'Jane Cooper', raised: 655 },
    { name: 'Jane Cooper', raised: 655 },
    { name: 'Jane Cooper', raised: 655 },
    { name: 'Jane Cooper', raised: 655 }
  ];

  const donationAmounts = [10, 20, 30, 60, 100, 200, 300, 500];

  const router = useRouter();

  return (
    <div className="bg-[#00715D] h-[300px]">
      <div className="container mx-auto relative pt-32">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <Card className="p-8 bg-white rounded-3xl shadow-lg">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Sun rays */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        const x1 = 100 + Math.cos(angle) * 60;
                        const y1 = 100 + Math.sin(angle) * 60;
                        const x2 = 100 + Math.cos(angle) * 85;
                        const y2 = 100 + Math.sin(angle) * 85;
                        return (
                          <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#FDB913"
                            strokeWidth="12"
                            strokeLinecap="round"
                          />
                        );
                      })}
                      {/* Sun circle */}
                      <circle cx="100" cy="100" r="55" fill="#E63946" />
                    </svg>
                  </div>
                  <div className="text-[#0077B6] font-bold">
                    <div className="text-3xl">North West</div>
                    <div className="text-3xl">Hospice</div>
                  </div>
                </div>
              </div>

              {/* Share Button */}
              <Button
                variant="outline"
                className="w-full mb-8 text-teal-700 border-teal-200 hover:bg-teal-50 rounded-xl"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>

              {/* Contact Details */}
              <div>
                <h3 className="font-bold text-lg mb-4 text-teal-700">Contact Details</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>The Mall, Sligo, County Sligo</p>
                  <p>CHY: 7983</p>
                  <p>CRA: 20018863</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="p-8 bg-white rounded-3xl shadow-lg">
              <h1 className="text-3xl font-bold mb-6">About North West Hospice</h1>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button className="bg-teal-700 hover:bg-teal-800 text-white rounded-xl h-12">
                  Start Fundraising
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button onClick={() => router.push('/donate')} className="bg-[#FDB913] hover:bg-yellow-500 text-gray-900 rounded-xl h-12">
                  Donate Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* About Section */}
            <Card className="p-8 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">About North West Hospice</h2>
              <p className="text-gray-700 leading-relaxed">
                North West Hospice provides specialist care with compassion for those living with life-limiting illness in our community. Our integrated service is provided through our In-Patient Unit, our Community Care Team and our Hospital Palliative Care Team to people in Sligo, Leitrim, South Donegal and West Cavan.
              </p>
            </Card>

            {/* Donation Card */}
            <Card className="p-8 bg-white rounded-3xl shadow-lg">
              <div className="flex items-center justify-end mb-6">
                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg">
                  <Lock className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-700">Secure Donation</span>
                </div>
              </div>

              {/* Donation Type Toggle */}
              <div className="flex gap-2 mb-6">
                <Button
                  onClick={() => setDonationType('one-time')}
                  className={`flex-1 rounded-xl h-12 ${donationType === 'one-time'
                    ? 'bg-teal-700 text-white hover:bg-teal-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  One Time
                </Button>
                <Button
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 rounded-xl h-12 ${donationType === 'monthly'
                    ? 'bg-teal-700 text-white hover:bg-teal-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  Give Monthly
                </Button>
              </div>

              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <Button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    variant="outline"
                    className={`h-12 rounded-xl ${selectedAmount === amount
                      ? 'border-teal-700 bg-teal-50 text-teal-700'
                      : 'border-gray-200 hover:border-teal-300'
                      }`}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <Button className="w-full bg-primary text-gray-900 rounded-xl h-14 text-lg font-semibold">
                Donate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>

            {/* Fundraisers Section */}
            <Card className="p-8 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Fundraisers</h2>

              <div className="grid grid-cols-5 gap-4">
                {fundraisers.map((fundraiser, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full aspect-square bg-gradient-to-br from-teal-100 to-green-100 rounded-2xl mb-3 overflow-hidden">
                      <Image
                        height={100}
                        width={100}
                        src={`/images/cause-details.jpg`}
                        alt={fundraiser.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-sm mb-1">{fundraiser.name}</p>
                    <p className="text-xs text-teal-600 mb-2">${fundraiser.raised} raised</p>
                    <Button
                      variant="link"
                      className="text-xs text-teal-700 hover:text-teal-800 p-0 h-auto"
                    >
                      View Page
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Report Account */}
            <div className="text-center pb-10">
              <Button variant="link" className="text-red-500 hover:text-red-600">
                <Flag className="w-4 h-4 mr-2" />
                Report Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
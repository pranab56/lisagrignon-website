"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RafflesSection() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center p-6 mt-64">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image with circular overlay */}
          <div className="relative">
            {/* Main rectangular image with rounded corners */}
            <div className="w-full rounded-3xl">
              <Image
                src="/images/home/raffles.png"
                width={1000}
                height={700}
                alt="Happy celebration with confetti"
                className="w-full h-full object-cover"
              />

            </div>
          </div>

          {/* Right Content - Text and CTA */}
          <div className="space-y-6">
            <Badge className="bg-[#00715D] flex gap-3 hover:bg-teal-700 text-white px-4 py-2 text-sm font-medium">
              Raffles
              <Image
                src="/icons/tickit.png"
                width={1000}
                height={1000}
                alt="Happy celebration with confetti"
                className="w-8 h-8 object-cover"
              />
            </Badge>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Ongoing Raffles
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Take a look at all the exciting raffles happening right now and make a difference while having fun. Every ticket you buy not only{' '}
              <span className="text-teal-600 font-semibold">
                gives you a chance to win amazing prizes
              </span>
              , but{' '}
              <span className="text-teal-600 font-semibold">
                also support causes that truly matter!
              </span>{' '}
              Pick your favourite cause, join the raffle, and good luck!
            </p>

            <Button
              onClick={() => router.push("/raffles/ongoing")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all"
            >
              View Live Raffles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Badge } from '@/components/ui/badge';
import { Handshake } from 'lucide-react';
import Image from 'next/image';

export default function PartnersSection() {
  const partnerLogos = [
    { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Accenture', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Dell', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png' },
    { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'IBM', src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Intel', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    { name: 'Coca Cola', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
    { name: 'Nike', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg' },
    { name: 'McDonald\'s', src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
    { name: 'Samsung', src: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
    { name: 'Oracle', src: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'HP', src: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'Cisco', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Adobe', src: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
  ];

  return (
    <div className="flex items-center justify-center p-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 text-base font-medium rounded-lg">
              Partners
              <Handshake className="ml-2 w-4 h-4" />
            </Badge>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            Making the impossible... Possible!
          </h2>

          {/* Description */}
          <div className="space-y-4 max-w-4xl mx-auto px-4">
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              RaffleRise stands out as a trusted platform backing over 5,000 causes throughout Ireland. Our innovative online fundraising, raffles, event registration, and ticketing solutions have earned the trust of millions.
            </p>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              With a 0% Platform Fee, we ensure that your chosen cause receives maximum benefits. At iDonate, our best-in-class local support is available to guarantee the success of your campaign.
            </p>
          </div>

          {/* Animated Logo Bands */}
          <div className="pt-8 space-y-8">
            {/* First Row - Scroll Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={logo.src}
                      width={192}
                      height={96}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scroll Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={192}
                      height={96}
                      className="max-w-full max-h-full object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import OngoingBanner from '../../../components/raffles/ongoing/OngoingBanner';
import Image from 'next/image';

// Define types for our raffle data
interface Raffle {
  id: number;
  title: string;
  description: string;
  raised: number;
  target: number;
  status: string;
  category: string[];
}

interface RaffleCardProps {
  raffle: Raffle;
}

const raffleData: Raffle[] = [
  {
    id: 1,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'closing-soon', 'popular']
  },
  {
    id: 2,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'closing-soon']
  },
  {
    id: 3,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'featured']
  },
  {
    id: 4,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'popular']
  },
  {
    id: 5,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'closing-soon']
  },
  {
    id: 6,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'featured']
  },
  {
    id: 7,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'popular']
  },
  {
    id: 8,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'closing-soon']
  },
  {
    id: 9,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'popular', 'featured']
  },
  {
    id: 10,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'closing-soon']
  },
  {
    id: 11,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'featured']
  },
  {
    id: 12,
    title: 'Fundraising Raffle for Juvenile Goals',
    description: 'Lorem ipsum dolor sit amet consectetur. Nulla perturbent ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Integer tincidunt porta tellus nam.',
    raised: 1230,
    target: 5000,
    status: 'all',
    category: ['all', 'popular']
  }
];

const RaffleCard: React.FC<RaffleCardProps> = ({ raffle }) => {
  const progressPercentage = (raffle.raised / raffle.target) * 100;


  const router = useRouter();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FCD34D;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23F59E0B;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23grad1)' width='400' height='300'/%3E%3Crect x='60' y='40' width='180' height='220' rx='8' fill='%23059669'/%3E%3Ctext x='150' y='80' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='white' text-anchor='middle'%3EJOIN IN ON THE%3C/text%3E%3Ctext x='150' y='130' font-family='Arial, sans-serif' font-size='42' font-weight='bold' fill='white' text-anchor='middle'%3ERAFFLE%3C/text%3E%3Ctext x='150' y='165' font-family='Arial, sans-serif' font-size='42' font-weight='bold' fill='white' text-anchor='middle'%3ECONTEST%3C/text%3E%3Ctext x='150' y='195' font-family='Arial, sans-serif' font-size='14' fill='white' text-anchor='middle'%3EWIN THE%3C/text%3E%3Ctext x='150' y='215' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='white' text-anchor='middle'%3EGRAND PRIZE%3C/text%3E%3Ctext x='100' y='250' font-family='Arial, sans-serif' font-size='14' fill='%23DC2626' text-anchor='start'%3EAPRIL 20,%3C/text%3E%3Ctext x='100' y='268' font-family='Arial, sans-serif' font-size='28' font-weight='bold' fill='%23DC2626' text-anchor='start'%3E2026%3C/text%3E%3Ctext x='180' y='268' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%23DC2626' text-anchor='start'%3E6:00 PM%3C/text%3E%3Ccircle cx='90' cy='60' r='15' fill='%23FCD34D' opacity='0.8'/%3E%3Cpolygon points='90,50 93,57 100,58 95,63 96,70 90,66 84,70 85,63 80,58 87,57' fill='white'/%3E%3Ccircle cx='210' cy='80' r='12' fill='%23FCD34D' opacity='0.8'/%3E%3Cpolygon points='210,72 212,78 218,79 214,83 215,89 210,86 205,89 206,83 202,79 208,78' fill='white'/%3E%3Cpath d='M 240 100 Q 280 140 240 180 L 260 200 L 280 160 L 300 200 L 320 140 L 340 180 L 360 140 L 380 160' stroke='%23DC2626' stroke-width='6' fill='none' opacity='0.9'/%3E%3Cpath d='M 20 200 Q 40 180 60 200 L 50 220 L 70 240 L 40 230 L 30 260 L 20 230' stroke='%23DC2626' stroke-width='6' fill='none' opacity='0.9'/%3E%3Crect x='70' y='280' width='50' height='15' rx='4' fill='white'/%3E%3Ctext x='95' y='291' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%23059669' text-anchor='middle'%3EGRAND%3C/text%3E%3C/svg%3E"
          alt="Raffle Contest"
          width={400}
          height={300}
          unoptimized
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{raffle.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{raffle.description}</p>

        <div className="mb-3">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-teal-700 font-semibold">${raffle.raised.toLocaleString()} raised</span>
            <span className="text-gray-500">${raffle.target.toLocaleString()} target</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button onClick={() => router.push(`/raffles/${raffle.id}`)} className="w-full bg-primary text-gray-900 font-semibold">
            Buy Tickets <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium">
            View Raffle <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

type FilterType = 'all' | 'closing-soon' | 'popular' | 'featured';

export default function RaffleListingPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filterCounts: Record<FilterType, number> = {
    all: 516,
    'closing-soon': 6,
    popular: 2,
    featured: 4
  };

  const filteredRaffles = raffleData.filter(raffle => {
    const matchesSearch = raffle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      raffle.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || raffle.category.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const displayedRaffles = filteredRaffles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRaffles.length;

  const handleSeeAll = (): void => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Teal Border */}
      <OngoingBanner />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="5% platform fee for the cause."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-base bg-white border-gray-200 rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {(Object.keys(filterCounts) as FilterType[]).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-medium cursor-pointer transition-colors ${activeFilter === filter
                ? 'bg-amber-400 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
              {filter === 'all' ? 'All' :
                filter === 'closing-soon' ? 'Closing Soon' :
                  filter.charAt(0).toUpperCase() + filter.slice(1)}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-sm ${activeFilter === filter ? 'bg-amber-300' : 'bg-gray-200'
                }`}>
                {filterCounts[filter]}
              </span>
            </button>
          ))}
        </div>

        {/* Raffle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedRaffles.map((raffle) => (
            <RaffleCard key={raffle.id} raffle={raffle} />
          ))}
        </div>

        {/* See All Button */}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              onClick={handleSeeAll}
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium px-8 py-2"
            >
              See All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* No Results */}
        {displayedRaffles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No raffles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
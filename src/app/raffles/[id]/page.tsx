'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Gift, Images, Share2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define types for our raffle data
interface TicketPricing {
  quantity: number;
  price: number;
}

interface RaffleData {
  title: string;
  organizer: string;
  organizationType: string;
  raised: number;
  closingDate: string;
  description: string;
  prizes: string[];
  ticketPricing: TicketPricing[];
  photos: string[];
}

export default function RaffleDetailPage() {
  const [selectedTickets, setSelectedTickets] = useState<number | null>(null);
  const router = useRouter();

  const raffleData: RaffleData = {
    title: 'Fundraising Raffle for Juvenile Goals',
    organizer: 'Na Gaeil',
    organizationType: 'in aid of Na Gaeil GAA',
    raised: 1720,
    closingDate: '10:00, Saturday, 28th September 2025',
    description: `As we look to improve our facilities for our juvenile teams we are fundraising to purchase new juvenile goals at both Dunhill and Fenor Clubs. These will be used by teams from Na Gaeli, St. Annes, Clanna Gael, Dunhill and Fenor. Anything that you can contribute is greatly appreciated.

3 raffle entries for €10.

Draw takes place at 1pm, Saturday 27th September 2025 at the Mick White Tournament.`,
    prizes: [
      '1st prize is a Smart TV',
      'other prizes include €50 Smyths Voucher, Peter Flanagan Voucher (hurley grip + sliotar) and a Sweet Treat Hamper.'
    ],
    ticketPricing: [
      { quantity: 3, price: 10 }
    ],
    photos: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop'
    ]
  };

  const handleBuyTickets = (): void => {
    router.push('/buy_ticket'); 
  };

  const handleShare = (): void => {
    if (navigator.share) {
      navigator.share({
        title: raffleData.title,
        text: `Check out this raffle: ${raffleData.title}`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Teal Header */}
      <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 h-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image Card */}
            <Card className="overflow-hidden shadow-lg p-0">
              <div className="relative">
                <Image
                  src="/images/details.png"
                  alt="Raffle Contest"
                  width={1000}
                  height={64}
                  className="w-full h-64 object-cover"
                />
              </div>
            </Card>

            {/* Title and Info */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {raffleData.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  By <span className="font-medium text-gray-900">{raffleData.organizer}</span>, {raffleData.organizationType}
                </p>

                <div className="flex items-center gap-2 text-teal-700 font-medium">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Closing Date</p>
                    <p className="text-gray-900">{raffleData.closingDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Raffle Description
                </h2>
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {raffleData.description}
                </div>
              </CardContent>
            </Card>

            {/* Prizes */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Prizes
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {raffleData.prizes.map((prize, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>{prize}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                  <Images className="w-5 h-5" />
                  Photos
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {raffleData.photos.map((photo, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <Image
                      width={1000}
                      height={1000}
                        src={photo}
                        alt={`Raffle photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              {/* Amount Raised Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    ${raffleData.raised.toLocaleString()}
                  </div>
                  <p className="text-gray-600 text-sm">Raised</p>

                  <div className="mt-6 space-y-3">
                    <Button
                      onClick={handleBuyTickets}
                      className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-6 text-lg"
                    >
                      Buy Tickets <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium py-6"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ticket Pricing Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-teal-700 mb-4 flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Ticket Pricing
                  </h3>

                  <div className="space-y-3">
                    {raffleData.ticketPricing.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedTickets(option.quantity)}
                        className={`w-full p-4 rounded-lg border-2 transition-all ${selectedTickets === option.quantity
                          ? 'border-teal-600 bg-teal-50'
                          : 'border-gray-200 hover:border-teal-300'
                          }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <p className="font-semibold text-gray-700 text-sm">Number of Tickets</p>
                            <p className="text-gray-900 font-bold">{option.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-700 text-sm">Price</p>
                            <p className="text-gray-900 font-bold">${option.price}</p>
                          </div>
                        </div>
                      </button>
                    ))}
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
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Gift, Share2, Users } from 'lucide-react'; // Added Users for supporter count
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define types for our raffle data
interface TicketPricing {
  quantity: number;
  price: number;
  // Using an ID for the entry options in the image
  id: number;
  // Custom field to handle the structure of the entry cards in the image
  entryLabel?: string;
  claimed?: number;
  totalAvailable?: number;
}

interface RaffleData {
  title: string;
  organizer: string;
  organizationType: string;
  raised: number;
  target: number; // Added target for percentage calculation
  supporters: number; // Added supporters count
  daysLeft: number; // Added days left
  closingDate: string;
  description: string;
  prizes: string[];
  // Replaced with a more detailed structure to match the entry cards
  entryOptions: TicketPricing[];
}

// Function to create the circular progress bar content
const CircularProgress = ({ value }: { value: number }) => {
  const radius = 40; // The radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-[100px] h-[100px] mx-auto mb-4">
      {/* Background Circle */}
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e5e7eb" // Light gray background
          strokeWidth="10"
        />
      </svg>
      {/* Progress Circle */}
      <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#2dd4bf" // Teal color for progress
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        />
      </svg>
      {/* Text in the center */}
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">{value}%</p>
      </div>
    </div>
  );
};

export default function RaffleDetailPage() {
  // Using null as the initial state, the image doesn't show a pre-selected option.
  const [selectedEntryId, setSelectedEntryId] = useState<number | null>(null);
  const router = useRouter();

  // --- Data to match the image and requested functionality ---
  const raffleData: RaffleData = {
    title: 'Fundraising Raffle for Juvenile Goals',
    organizer: 'Na Gaeil',
    organizationType: 'in aid of Na Gaeil GAA',
    raised: 1720,
    target: 50000,
    supporters: 10,
    daysLeft: 6,
    closingDate: '10:00, Saturday, 28th September 2025',
    description: `As we look to improve our facilities for our juvenile teams we are fundraising to purchase new juvenile goals at both Dunhill and Fenor Clubs. These will be used by teams from Na Gaeli, St. Annes, Clanna Gael, Dunhill and Fenor. Anything that you can contribute is greatly appreciated.

3 raffle entries for €10.

Draw takes place at 1pm, Saturday 27th September 2025 at the Mick White Tournament.`,
    prizes: [
      '1st prize is a Smart TV',
      'other prizes include €50 Smyths Voucher, Peter Flanagan Voucher (hurley, grip + sliotar) and a Sweet Treat Hamper.'
    ],
    // These options mirror the "Entry options" section in the image
    entryOptions: [
      { id: 1, quantity: 2, price: 20, entryLabel: '2 entries', claimed: 49, totalAvailable: 50 },
      { id: 2, quantity: 1, price: 10, entryLabel: '1 entries', claimed: 49, totalAvailable: 50 },
      { id: 3, quantity: 5, price: 50, entryLabel: '5 entries', claimed: 49, totalAvailable: 50 },
      { id: 4, quantity: 10, price: 100, entryLabel: '10 entries', claimed: 49, totalAvailable: 50 },
      // This is the "Free entry" option from the image, but still structured for data
      { id: 5, quantity: 2, price: 0, entryLabel: 'Free entry', claimed: 0, totalAvailable: 0 },
    ],
  };

  const percentageRaised = Math.min(100, Math.round((raffleData.raised / raffleData.target) * 100));

  const handleBuyTickets = (): void => {
    // In a real application, you'd pass the selectedEntryId or redirect to a dynamic buy page.
    console.log(`Buying tickets for entry option ID: ${selectedEntryId}`);
    router.push('/buy_ticket');
  };

  const handleShare = (): void => {
    // Sharing logic remains the same
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

  // Custom component for the "Entry options" cards
  const EntryOptionCard = ({ option }: { option: TicketPricing }) => {
    const isFreeEntry = option.price === 0;
    const isSelected = option.id === selectedEntryId;
    const claimedText = option.claimed !== undefined && option.totalAvailable !== undefined ?
      `${option.claimed} claimed` :
      null;

    const handleSelect = () => {

      if (isFreeEntry) {
        alert('Showing more details for free entry...');
        return;
      }
      setSelectedEntryId(option.id);
    };

    return (
      <Card
        className={`shadow-md p-0 cursor-pointer transition-all ${isSelected && !isFreeEntry ? 'border-4 border-amber-500' : 'border-2 border-gray-100'}`}
        onClick={isFreeEntry ? undefined : handleSelect} // Only select if not free entry
      >
        <div
          className={`text-center  rounded-t-lg font-bold text-lg h-32 flex items-center justify-center
            ${isFreeEntry ? 'bg-gray-100 text-gray-800' : 'bg-teal-700 text-white'}
          `}
        >
          {option.entryLabel || `${option.quantity} ENTRIES`}
        </div>


        <CardContent className="p-4 flex flex-col justify-between h-full ">
          <h1 className='font-medium text-2xl'>{option.entryLabel || `${option.quantity} ENTRIES`}</h1>
          <div className='mb-3'>
            {/* This is the primary entry/price text */}
            <p className="text-xl font-bold text-gray-900 mb-1">
              {isFreeEntry ? `${option.quantity} entries` : `€${option.price}`}
            </p>
            {/* Secondary entry/price text */}
            <p className="text-sm text-gray-500 mb-3">
              {isFreeEntry ? `for ${option.quantity} entries` : `${option.quantity} entries for ${'€' + option.price}`}
            </p>
            {claimedText && <p className="text-xs text-orange-600 font-medium">{claimedText}</p>}
          </div>

          {/* Button area - dynamic based on entry type */}
          {isFreeEntry ? (
            <Button
              onClick={handleSelect} // Use handleSelect to show alert/details
              variant="outline"
              className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              More details
            </Button>
          ) : (
            <Button
              onClick={handleSelect} // Select the card, or proceed to buy if already selected
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold"
            >
              Enter <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Teal Header - Matched to the background in the image */}
      <div className="bg-[#246358] h-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">

            {/* Hero Image and Banner */}
            {/* Using a regular div/image for the banner to replicate the image structure */}
            <div className="overflow-hidden">
              <Image
                src="/icons/raffle.png" // Assuming you use the original banner image here
                alt="Join in on the Raffle Contest"
                width={1000}
                height={200} // Adjusted height for better visual matching
                className="w-full h-auto rounded-t-lg"
              />
            </div>

            {/* Title and Info */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-3">
                  {raffleData.title}
                </h1>
                <p className="text-gray-600 mb-4">
                  By <span className="font-medium text-gray-900">{raffleData.organizer}</span>, {raffleData.organizationType}
                </p>

                <div className="flex items-center gap-2 text-[#246358] font-medium">
                  <Calendar className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Closing Date</p>
                    <p className="text-gray-900 font-medium">{raffleData.closingDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#246358] mb-4 flex items-center gap-2">
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
                <h2 className="text-xl font-bold text-[#246358] mb-4 flex items-center gap-2">
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

            {/* Entry Options - Main Content Area */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Entry options
                <span className='text-gray-500 font-normal text-sm ml-2'>
                  This project has {raffleData.entryOptions.length} options available
                </span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {raffleData.entryOptions.map((option) => (
                  <EntryOptionCard key={option.id} option={option} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-4">

              {/* Amount Raised Card - The primary progress block */}
              <Card className="shadow-lg p-0">
                <CardContent className="p-6 text-center">
                  {/* Progress Circle Component */}
                  <div className='flex justify-center'>

                    <div className="flex justify-around w-full items-baseline mt-4 mb-4">
                      <div className='text-left'>
                        <p className="text-3xl font-bold text-gray-900 mb-1">
                          ${raffleData.raised.toLocaleString()}
                        </p>
                        <p className="text-gray-600 text-sm">Target: ${raffleData.target.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className='w-full'>
                      <CircularProgress value={percentageRaised} />
                    </div>


                  </div>

                  {/* Supporters and Days Left */}
                  <div className="flex justify-between text-sm text-gray-700 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <Users className='w-4 h-4 text-[#246358]' />
                      <span><span className='font-bold'>{raffleData.supporters}</span> supporters</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className='w-4 h-4 text-[#246358]' />
                      <span><span className='font-bold'>{raffleData.daysLeft}</span> days left</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {/* Buy Tickets Button - Matched Amber color */}
                    <Button
                      onClick={handleBuyTickets}
                      className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-6 text-lg"
                    >
                      Buy Tickets <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>

                    {/* Share Button - Matched light outline style */}
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-100 font-medium py-6"
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Ticket Pricing Table - Replicating the small table */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#246358] mb-4">
                    Ticket Pricing
                  </h3>

                  <div className="grid grid-cols-2 text-sm font-semibold border-b pb-2 mb-2">
                    <span>Number of Tickets</span>
                    <span className="text-right">Price</span>
                  </div>

                  {/* Dynamic Pricing Row - Using the first entry option as the main price point */}
                  {raffleData.entryOptions.slice(0, 1).map((option, index) => (
                    <div key={index} className="grid grid-cols-2 text-base">
                      <span className="text-gray-900 font-bold">{option.quantity}</span>
                      <span className="text-gray-900 font-bold text-right">€{option.price}</span>
                    </div>
                  ))}

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
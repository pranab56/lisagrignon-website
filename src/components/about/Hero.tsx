import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <div className="min-h-[50vh] bg-[#00715D] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <Badge className="bg-gray-900 text-white hover:bg-gray-800 mb-8 px-6 py-2 text-base rounded-full">
          Who We Are 🎯 RaffleRise
        </Badge>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          About Us
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-teal-50 font-medium">
          Making Giving Easier
        </p>

      </div>
    </div>
  );
}
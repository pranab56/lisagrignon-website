'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function Exclusive() {
  const features = [
    {
      title: "Proudly British",
      description: "Located, owned, and operated within British.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Support That Matters",
      description: "With dedicated, friendly email and telephone support, we are here to help.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "No Hidden Costs",
      description: "Start fundraising with zero signup costs or monthly fees.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Transparent and Fair",
      description: "Clear and straightforward fees.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Secure Donations",
      description: "Your donations are processed with the highest level of security.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Seamless",
      description: "Easily accept donations through RaffleRise or your own website.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Integrations",
      description: "Thousands of integrations available.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
    {
      title: "Insightful Reporting",
      description: "Access comprehensive reports to track and analyse your donations.",
      icon: <Settings className="w-6 h-6 text-emerald-700" />,
    },
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Badge */}
      <div className="flex justify-center mb-8">
        <Badge
          variant="secondary"
          className="bg-emerald-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2"
        >
          Exclusive ✨
        </Badge>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Why Choose Us Instead of Them
      </h1>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col items-start space-y-4">
              {/* Icon Circle */}
              <div className="bg-emerald-50 rounded-full p-3">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function HighlightsSections() {
  const highlights = [
    {
      title: "Support Local",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam."
    },
    {
      title: "Zero % Platform Fees",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam."
    },
    {
      title: "No Registration Fee",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam."
    },
    {
      title: "Secure Payments",
      description: "Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam."
    }
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-xl mb-8">
            <span className="font-semibold text-lg">The Highlights</span>
            <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Us RaffleRise?
          </h1>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 px-6 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      type: 'campaign',
      title: 'How LiannAlynn raised €425,000 using Social Fundraising',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 2,
      type: 'venue',
      title: 'RaffleRise Tip Adds to the Magic at the Flutter Mall',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 3,
      type: 'campaign',
      title: 'How LiannAlynn raised €425,000 using Social Fundraising',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 4,
      type: 'venue',
      title: 'RaffleRise Tip Adds to the Magic at the Flutter Mall',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 5,
      type: 'venue',
      title: 'RaffleRise Tip Adds to the Magic at the Flutter Mall',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 6,
      type: 'campaign',
      title: 'How LiannAlynn raised €425,000 using Social Fundraising',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 7,
      type: 'venue',
      title: 'RaffleRise Tip Adds to the Magic at the Flutter Mall',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    },
    {
      id: 8,
      type: 'campaign',
      title: 'How LiannAlynn raised €425,000 using Social Fundraising',
      time: '10 min read',
      description: 'LiannAlynn used the RaffleRise social raffle seamlessly took on one of Ireland&#39;s toughest open water challenges, a 33km swim across the North Channel, to raise €425,000 for CMRF. The event fundraiser 15% more compared to 2024, with the percentage of fundraising pages administered via...',
      link: 'Read More'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-[#00715D] text-white py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="bg-gray-900 text-white hover:bg-gray-800 mb-6">
            Case Studies 🎯
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover How RaffleRise Transforms Fundraising
          </h1>

          <p className="text-lg text-teal-50 leading-relaxed max-w-3xl mx-auto">
            At RaffleRise, we empower charities and individuals to raise funds efficiently and effectively through our innovative fundraising platform. Our mission is to make giving easier, faster, and more impactful. But don&#39;t just take our word for it—explore how our platform has helped organizations achieve remarkable results.
          </p>

          <p className="text-base text-teal-100 mt-6 leading-relaxed max-w-3xl mx-auto">
            Each case study showcases the power of donate to simplify fundraising, enhance donor engagement, and maximize impact. Whether you&#39;re running a major event or managing multiple campaigns, you&#39;ll find the tools and insights you need to succeed.
          </p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white p-0">
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                {study.type === 'campaign' ? (
                  <div className="w-full h-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center relative">
                    <div className="absolute top-4 left-4 text-white text-sm font-medium">
                      <div>LiannAlynn used</div>
                      <div>the fundraising with to</div>
                    </div>
                    <div className="text-white">
                      <div className="text-5xl font-bold">raise over</div>
                      <div className="text-6xl font-bold mt-2">€425,000</div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <svg className="w-24 h-24 text-pink-400 opacity-40" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="45" />
                        <path d="M30,50 Q40,30 50,50 T70,50" stroke="white" strokeWidth="3" fill="none" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
                    alt="Flutter Mall"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{study.time}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {study.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {study.description}
                </p>

                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-700 font-medium text-sm inline-flex items-center"
                >
                  {study.link}
                  <span className="ml-1">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            Ready to revolutionise your fundraising? Get started with RaffleRise today and see the difference we can make for your cause.
          </p>
        </div>
      </div>
    </div>
  );
}
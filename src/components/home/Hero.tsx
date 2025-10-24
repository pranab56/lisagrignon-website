"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/fundraising');
  };

  const features = [
    {
      icon: '⚙️',
      title: 'Quick & Easy Setup',
      description: 'Launch your prize draw in minutes.'
    },
    {
      icon: '💬',
      title: 'More Engagement',
      description: 'Create excitement, reward supporters, and reach new donors.'
    },
    {
      icon: '🎯',
      title: 'Flexible Fundraising',
      description: 'Perfect for charities, CICs, schools, events & community projects.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span>Making Giving Easier</span>
                <Heart className="w-4 h-4 fill-white" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Raise Money for Your Cause with an Online Prize Draw
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    onClick={handleSubmit}
                    className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold h-12 px-6 sm:px-8 lg:px-10 w-full sm:w-auto whitespace-nowrap text-sm sm:text-base"
                  >
                    Start Now - It&apos;s Free! <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Image Grid */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center mt-8 lg:mt-0">
              {/* Mobile & Tablet Single Image */}
              <div className="block lg:hidden w-full max-w-md mx-auto">
                <div className="w-full h-80 rounded-t-full rounded-b-full overflow-hidden animate-float">
                  <Image
                    src="/images/home/hero/image1.jpg"
                    alt="Community support"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Desktop Image Grid */}
              <div className="hidden lg:flex items-center justify-center w-full">
                <div className="absolute top-40 left-[275px] -translate-x-32 w-52 h-96 rounded-t-full rounded-b-full overflow-hidden animate-float">
                  <Image
                    src="/images/home/hero/image1.jpg"
                    alt="Community support"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-0 left-1/2 translate-x-4 w-52 h-80 rounded-t-full rounded-b-full overflow-hidden animate-float-delayed">
                  <Image
                    src="/images/home/hero/image2.jpg"
                    alt="Volunteers"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-40 right-5 translate-x-28 w-52 h-96 rounded-t-full rounded-b-full overflow-hidden animate-float">
                  <Image
                    src="/images/home/hero/image4.jpg"
                    alt="Donation drive"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="absolute top-6/12 left-1/2 translate-x-4 w-52 h-80 rounded-t-full rounded-b-full overflow-hidden animate-float-delayed">
                  <Image
                    src="/images/home/hero/image3.jpg"
                    alt="Happy volunteers"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                }
                @keyframes float-delayed {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                .animate-float {
                  animation: float 6s ease-in-out infinite;
                }
                .animate-float-delayed {
                  animation: float-delayed 6s ease-in-out infinite 1s;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Responsive */}
      <div className="py-12 md:py-16 lg:py-20 relative lg:absolute lg:-bottom-[300px] w-full">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-slate-900 text-lg sm:text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
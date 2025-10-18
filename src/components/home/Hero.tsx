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
      title: 'Support Local',
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.'
    },
    {
      title: 'Zero % Platform Fees',
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.'
    },
    {
      title: 'No Registration Fee',
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.'
    },
    {
      title: 'Secure Payments',
      description: 'Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <span>Making Giving Easier</span>
                <Heart className="w-4 h-4 fill-white" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                The World&apos;s Number One Fundraising Platform
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Nulla parturient ut viverra facilisis sagittis sed. Bibendum imperdiet curabitur platea facilisis venenatis. Interdum porta tellus nam.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">

                  <Button
                    onClick={handleSubmit}
                    className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold h-12 px-10 w-4/12 whitespace-nowrap"
                  >
                    Start Now - It&apos;s Free! <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>


            {/* Right Content - Image Grid */}
            <div className="relative h-[700px] hidden lg:flex items-center justify-center">
              <div className="absolute top-40 left-[275px] -translate-x-32 w-52 h-96  rounded-t-full rounded-b-full overflow-hidden animate-float">
                <Image
                  src="/images/home/hero/image1.jpg"
                  alt="Community support"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute top-0 left-1/2 translate-x-4 w-52 h-80  rounded-t-full rounded-b-full overflow-hidden animate-float-delayed">
                <Image
                  src="/images/home/hero/image2.jpg"
                  alt="Volunteers"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute top-40 right-5 translate-x-28 w-52 h-96 rounded-t-full  rounded-b-full overflow-hidden animate-float">
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

      {/* Features Section */}
      <div className=" py-20 absolute -bottom-[300px] w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
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
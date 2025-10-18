"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function FundraiseSecurelyCTA() {
  const router = useRouter();


  return (
    <div className="flex items-center justify-center px-6 py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 text-base font-medium rounded-lg">
              Fundraise Securely
              <Lock className="ml-2 w-4 h-4 fill-yellow-400 text-yellow-400" />
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight px-4">
            Raise more. Spend less. iDonate, the trusted fundraising platform
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4">
            Choose Ireland&apos;s leading fundraising platform and you can amplify your social impact, save money, and offer more to those in need. Join us today and turn every contribution into a powerful act of change.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              onClick={() => router.push('/register-cause')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all rounded-lg"
            >
              Register Your Cause – It&apos;s Free!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
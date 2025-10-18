'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Check, CreditCard, Heart, Ticket } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface FormData {
  totalPrice?: number;
  cardName?: string;
  expirationDate?: string;
  cvc?: string;
  email?: string;
}

interface PaymentStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [contributionAmount, setContributionAmount] = useState(20);

  const donationAmount = formData.totalPrice || 0;
  const totalPayment = donationAmount + contributionAmount;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.cardName?.trim()) newErrors.cardName = 'Cardholder name is required';
    if (!formData.expirationDate?.trim()) newErrors.expirationDate = 'Expiration date is required';
    if (!formData.cvc?.trim()) newErrors.cvc = 'CVC is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <Card className="bg-gray-50">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-2 text-teal-700 font-bold text-base sm:text-lg mb-3 sm:mb-4">
            <Ticket className="w-4 h-4 sm:w-5 sm:h-5" />
            Ticket Pricing
          </div>

          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Donation Amount:</span>
              <span className="font-semibold">${donationAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Contribution:</span>
              <span className="font-semibold">${contributionAmount.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-300 pt-2 sm:pt-3 flex justify-between font-bold text-sm sm:text-base">
              <span>Total Payment:</span>
              <span>${totalPayment.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg">
            <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm mb-1">Help Us to Help Them!</h4>
                <p className="text-xs text-gray-600">
                  RaffleRise doesn&apos;t charge a platform fee to Banteer&apos;s National School. Adding an optional amount to your donation means we can continue to provide our service.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:gap-2 mb-2">
              {[10, 20, 30, 40].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setContributionAmount(amount)}
                  className={`py-2 px-1 sm:flex-1 rounded-md text-xs sm:text-sm font-medium transition-colors ${contributionAmount === amount
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(parseInt(e.target.value))}
                className="w-full accent-teal-600"
              />
              <div className="text-center text-xs sm:text-sm font-semibold text-teal-700 mt-1">
                ${contributionAmount.toFixed(2)}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-100 rounded-lg">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 sm:h-6" width={32} height={16} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-4 sm:h-6" width={32} height={16} />
          <CreditCard className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
          <Check className="w-4 h-4 sm:w-6 sm:h-6 text-teal-600 ml-auto" />
        </div>

        <Input
          type="email"
          placeholder="neelparmarreal@gmail.com"
          value={formData.email || ''}
          disabled
          className="bg-gray-100 text-sm sm:text-base"
        />

        <div>
          <Label htmlFor="cardName" className="text-xs sm:text-sm">
            Cardholder Name <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center gap-2 mt-1 sm:mt-2">
            <Input
              id="cardName"
              value={formData.cardName || ''}
              placeholder='John Doe'
              onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
              className={errors.cardName ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
            />
            <div className="flex gap-1">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 sm:h-6" width={24} height={12} />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-4 sm:h-6" width={24} height={12} />
            </div>
          </div>
          {errors.cardName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cardName}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <Label htmlFor="expirationDate" className="text-xs sm:text-sm">Expiration Date</Label>
            <Input
              id="expirationDate"
              placeholder="MM/YY"
              value={formData.expirationDate || ''}
              onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
              className={errors.expirationDate ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
            />
            {errors.expirationDate && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.expirationDate}</p>}
          </div>

          <div>
            <Label htmlFor="cvc" className="text-xs sm:text-sm">CVC</Label>
            <Input
              id="cvc"
              placeholder="123"
              value={formData.cvc || ''}
              onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
              className={errors.cvc ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
            />
            {errors.cvc && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cvc}</p>}
          </div>
        </div>
      </div>

      <Button onClick={handleConfirm} className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 sm:py-6 text-sm sm:text-base">
        Confirm Donation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
      </Button>
    </div>
  );
};
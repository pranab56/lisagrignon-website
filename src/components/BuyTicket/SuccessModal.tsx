'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4">
        <div className="text-center py-4 sm:py-6">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center">
              <Check className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Payment Successful!</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Your payment was processed successfully. Tap the button below to view, share, or download your transaction receipt.
          </p>

          <Button
            onClick={() => router.push('/raffles/sdfw2342')}
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium px-6 sm:px-8 text-sm sm:text-base"
          >
            Back to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
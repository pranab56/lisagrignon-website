'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Info } from 'lucide-react';
import { useState } from 'react';
import { AmountSelection } from '../../components/BuyTicket/AmountSelection';
import { DetailsStep } from '../../components/BuyTicket/DetailsStep';
import { PaymentStep } from '../../components/BuyTicket/PaymentStep';
import { ProgressSteps } from '../../components/BuyTicket/ProgressSteps';
import { RaffleHeroBanner } from '../../components/BuyTicket/RaffleHeroBanner';
import { SuccessModal } from '../../components/BuyTicket/SuccessModal';

// ✅ Define the form data type
interface FormData {
  selectedTickets: number;
  totalPrice: number;
  hideAmount: boolean;
  firstName: string;
  surname: string;
  email: string;
  message: string;
  cardName: string;
  expirationDate: string;
  cvc: string;
}

export default function TicketPurchasePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    selectedTickets: 0,
    totalPrice: 0,
    hideAmount: false,
    firstName: '',
    surname: '',
    email: '',
    message: '',
    cardName: '',
    expirationDate: '',
    cvc: ''
  });

  const steps = [
    { id: 1, label: 'Amount', active: currentStep === 1, completed: currentStep > 1 },
    { id: 2, label: 'Details', active: currentStep === 2, completed: currentStep > 2 },
    { id: 3, label: 'Payment', active: currentStep === 3, completed: currentStep > 3 },
    { id: 4, label: 'Success', active: currentStep === 4, completed: false }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSuccess(true);
    }
  };

  // ✅ Typed update function
  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <RaffleHeroBanner />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Eoin&apos;s Lucky Laces Raffle for PPP3CA
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">Your donation will go to:</p>
          <p className="text-sm sm:text-base text-gray-700 font-medium">
            Walk for Eoin and help those impacted by Rare PPP3CA disease
          </p>
        </div>

        <ProgressSteps steps={steps} onStepClick={(id) => id < currentStep && setCurrentStep(id)} />

        <Card className="shadow-lg">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            {currentStep === 1 && (
              <>
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-teal-50 rounded-lg flex items-center gap-2 text-teal-700 font-medium text-sm sm:text-base">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Amount</span>
                </div>
                <AmountSelection onNext={handleNext} formData={formData} setFormData={updateFormData} />
              </>
            )}

            {currentStep === 2 && (
              <>
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-teal-50 rounded-lg flex items-center gap-2 text-teal-700 font-medium text-sm sm:text-base">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Amount</span>
                </div>
                <DetailsStep onNext={handleNext} formData={formData} setFormData={updateFormData} />
              </>
            )}

            {currentStep === 3 && (
              <>
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-teal-50 rounded-lg flex items-center gap-2 text-teal-700 font-medium text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Amount</span>
                  </div>
                  <div className="p-3 sm:p-4 bg-teal-50 rounded-lg flex items-center gap-2 text-teal-700 font-medium text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Details</span>
                  </div>
                </div>
                <PaymentStep onNext={handleNext} formData={formData} setFormData={updateFormData} />
              </>
            )}
          </CardContent>
        </Card>

        <div className="mt-4 sm:mt-6">
          <Button
            variant="outline"
            className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 text-sm sm:text-base py-3 sm:py-4"
            onClick={() => window.history.back()}
          >
            Cancel and return to page
          </Button>
        </div>
      </div>

      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}
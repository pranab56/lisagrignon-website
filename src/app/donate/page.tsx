// app/donate/page.tsx
"use client";

import { useState } from 'react';
import AmountStep from '../../components/donate/AmountStep';
import DetailsStep from '../../components/donate/DetailsStep';
import PaymentStep from '../../components/donate/PaymentStep';
import ProgressItem from '../../components/donate/ProgressItem';
import SuccessModal from '../../components/donate/SuccessModal';

export interface ValidationErrors {
  amount?: string;
  firstName?: string;
  surname?: string;
  email?: string;
  cardName?: string;
  expirationDate?: string;
  cvc?: string;
}

export interface DonationStepProps {
  donationType: 'one-time' | 'monthly';
  setDonationType: (type: 'one-time' | 'monthly') => void;
  amount: number;
  setAmount: (amount: number) => void;
  customAmount: string;
  setCustomAmount: (amount: string) => void;
  firstName: string;
  setFirstName: (name: string) => void;
  surname: string;
  setSurname: (name: string) => void;
  message: string;
  setMessage: (message: string) => void;
  email: string;
  setEmail: (email: string) => void;
  cardName: string;
  setCardName: (name: string) => void;
  expirationDate: string;
  setExpirationDate: (date: string) => void;
  cvc: string;
  setCvc: (cvc: string) => void;
  errors: ValidationErrors;
  onNext: () => void;
  onConfirm: () => void;
}

// Main App Component
const DonationApp = () => {
  const [step, setStep] = useState<number>(1);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('30');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const presetAmounts = [10, 50, 45, 100];
  const contribution = 20.00;
  const totalPayment = amount + contribution;

  const validateAmountStep = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (amount <= 0) {
      newErrors.amount = 'Please select a valid donation amount';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateDetailsStep = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!surname.trim()) {
      newErrors.surname = 'Surname is required';
    } else if (surname.trim().length < 2) {
      newErrors.surname = 'Surname must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentStep = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!cardName.trim()) {
      newErrors.cardName = 'Cardholder name is required';
    } else if (cardName.trim().length < 2) {
      newErrors.cardName = 'Cardholder name must be at least 2 characters';
    }

    if (!expirationDate.trim()) {
      newErrors.expirationDate = 'Expiration date is required';
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)) {
      newErrors.expirationDate = 'Please use MM/YY format';
    }

    if (!cvc.trim()) {
      newErrors.cvc = 'CVC is required';
    } else if (!/^\d{3,4}$/.test(cvc)) {
      newErrors.cvc = 'CVC must be 3 or 4 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextFromAmount = () => {
    if (validateAmountStep()) {
      setStep(2);
    }
  };

  const handleNextFromDetails = () => {
    if (validateDetailsStep()) {
      setStep(3);
    }
  };

  const handleConfirmDonation = () => {
    if (validatePaymentStep()) {
      setShowSuccess(true);
    }
  };

  const handleBackToHome = () => {
    setStep(1);
    setAmount(50);
    setFirstName('');
    setSurname('');
    setMessage('');
    setEmail('');
    setCardName('');
    setExpirationDate('');
    setCvc('');
    setErrors({});
    setShowSuccess(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AmountStep
            donationType={donationType}
            setDonationType={setDonationType}
            amount={amount}
            setAmount={setAmount}
            presetAmounts={presetAmounts}
            customAmount={customAmount}
            setCustomAmount={setCustomAmount}
            errors={errors}
            onNext={handleNextFromAmount}
          />
        );
      case 2:
        return (
          <DetailsStep
            firstName={firstName}
            setFirstName={setFirstName}
            surname={surname}
            setSurname={setSurname}
            message={message}
            setMessage={setMessage}
            errors={errors}
            onNext={handleNextFromDetails}
            amount={amount}
          />
        );
      case 3:
        return (
          <PaymentStep
            amount={amount}
            contribution={contribution}
            totalPayment={totalPayment}
            email={email}
            setEmail={setEmail}
            cardName={cardName}
            setCardName={setCardName}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            cvc={cvc}
            setCvc={setCvc}
            errors={errors}
            onConfirm={handleConfirmDonation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[300px] bg-[#00715D]">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-3 sm:p-4 md:p-6">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          {/* Success Modal */}
          {showSuccess && (
            <SuccessModal onBackToHome={handleBackToHome} />
          )}

          {/* Main Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-br from-yellow-400 via-green-400 to-purple-500 p-4 sm:p-5 md:p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M0,80 Q100,50 200,80 T400,80 L400,0 L0,0 Z" fill="rgba(255,255,255,0.3)" />
                  <path d="M0,120 Q100,90 200,120 T400,120 L400,0 L0,0 Z" fill="rgba(255,255,255,0.2)" />
                </svg>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 relative">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="35" r="25" fill="#FFB800" />
                      <path d="M50,35 L45,25 L50,15 L55,25 Z" fill="#FFB800" />
                      <path d="M50,35 L60,28 L70,23 L62,30 Z" fill="#FFB800" />
                      <path d="M50,35 L60,42 L70,47 L62,40 Z" fill="#FFB800" />
                      <path d="M50,35 L40,42 L30,47 L38,40 Z" fill="#FFB800" />
                      <path d="M50,35 L40,28 L30,23 L38,30 Z" fill="#FFB800" />
                      <text x="50" y="75" textAnchor="middle" fill="#0066B3" fontSize="14" fontWeight="bold">North West</text>
                      <text x="50" y="90" textAnchor="middle" fill="#0066B3" fontSize="14" fontWeight="bold">Hospice</text>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate">North West Hospice</h1>
                    <p className="text-xs sm:text-sm text-gray-600">Your donation will go to:</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">North West Hospice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6">
              {renderStep()}

              {/* Progress Indicators */}
              <div className="mt-4 sm:mt-5 md:mt-6 space-y-1 sm:space-y-2">
                <ProgressItem label="Details" active={step >= 2} current={step === 2} />
                <ProgressItem label="Payment" active={step >= 3} current={step === 3} />
                <ProgressItem label="Success" active={false} current={false} />
              </div>

              {/* Cancel Button */}
              <button
                onClick={handleBackToHome}
                className="w-full mt-3 sm:mt-4 border-2 border-teal-600 text-teal-600 py-2 sm:py-3 rounded-lg font-medium hover:bg-teal-50 transition text-sm sm:text-base"
              >
                Cancel and return to page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationApp;
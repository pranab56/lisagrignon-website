// app/donate/page.tsx
"use client";

import { useRouter } from 'next/navigation';
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
  cardNumber?: string;
  cardName?: string;
  expirationDate?: string;
  cvc?: string;
}

// Main App Component
const DonationApp = () => {
  const [step, setStep] = useState<number>(1);
  const [amount, setAmount] = useState<number>(30);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const router = useRouter();

  const contribution = 5.00;
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

    const cardDigits = cardNumber.replace(/\s/g, '');
    if (!cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (cardDigits.length < 13 || cardDigits.length > 16) {
      newErrors.cardNumber = 'Please enter a valid card number';
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
    router.push("/fundraising");
    setAmount(30);
    setCustomAmount('');
    setFirstName('');
    setSurname('');
    setMessage('');
    setEmail('');
    setCardNumber('');
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
            amount={amount}
            setAmount={setAmount}
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
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
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
    <div className="h-[1300px]">
      {showSuccess && <SuccessModal onBackToHome={handleBackToHome} />}
      <div className='bg-[#00715D] h-[299px]'>
        <div className="max-w-2xl mx-auto pt-32">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-white p-6 border-b">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 flex-shrink-0">
                  <svg viewBox="0 0 100 120" className="w-full h-full">
                    {/* Happy figure */}
                    <circle cx="50" cy="30" r="15" fill="#4ADE80" />
                    <path d="M35,50 Q35,35 50,30 Q65,35 65,50 L65,70 Q65,80 50,85 Q35,80 35,70 Z" fill="#4ADE80" />

                    {/* Happy face */}
                    <circle cx="42" cy="28" r="2" fill="white" />
                    <circle cx="58" cy="28" r="2" fill="white" />
                    <path d="M45,33 Q50,38 55,33" stroke="white" strokeWidth="2" fill="none" />

                    {/* Stars around */}
                    <circle cx="30" cy="20" r="2" fill="#FCD34D" />
                    <circle cx="70" cy="20" r="2" fill="#FCD34D" />
                    <circle cx="35" cy="65" r="2" fill="#FCD34D" />
                    <circle cx="65" cy="65" r="2" fill="#FCD34D" />

                    {/* Text */}
                    <text x="50" y="95" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">RETURN</text>
                    <text x="50" y="103" textAnchor="middle" fill="#059669" fontSize="6">for</text>
                    <text x="50" y="113" textAnchor="middle" fill="#10B981" fontSize="11" fontWeight="bold">Children</text>
                  </svg>
                </div>
                <div className="flex-1">
                  <h1 className="text-lg font-bold text-gray-900 mb-1">
                    Return for Children<br />Fundraising Page
                  </h1>
                  <p className="text-xs text-gray-600 mb-2">Your donation will go to:</p>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    The Jack & Jill Children's Foundation, LauraLynn Ireland's Children's Hospice,
                    ISPCC Childline, Barretstown, Barnardos and Make-A-Wish Ireland
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {renderStep()}

              {/* Progress Indicators */}
              <div className="mt-6 space-y-2">
                <ProgressItem label="Details" active={step >= 2} current={step === 2} />
                <ProgressItem label="Payment" active={step >= 3} current={step === 3} />
                <ProgressItem label="Success" active={false} current={false} />
              </div>

              {/* Cancel Button */}
              <button
                onClick={handleBackToHome}
                className="w-full mt-4 border-2 border-teal-600 text-teal-600 py-3 rounded-lg font-medium hover:bg-teal-50 transition"
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
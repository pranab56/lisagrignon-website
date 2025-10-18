// components/donate/PaymentStep.tsx
import { ArrowRight, Check, CreditCard } from 'lucide-react';
import Image from 'next/image';
import { ValidationErrors } from '../../app/donate/page';

interface PaymentStepProps {
  amount: number;
  contribution: number;
  totalPayment: number;
  email: string;
  setEmail: (email: string) => void;
  cardName: string;
  setCardName: (name: string) => void;
  expirationDate: string;
  setExpirationDate: (date: string) => void;
  cvc: string;
  setCvc: (cvc: string) => void;
  errors: ValidationErrors;
  onConfirm: () => void;
}

// Payment Step
const PaymentStep = ({
  amount,
  contribution,
  totalPayment,
  email,
  setEmail,
  cardName,
  setCardName,
  expirationDate,
  setExpirationDate,
  cvc,
  setCvc,
  errors,
  onConfirm
}: PaymentStepProps) => {
  const formatExpirationDate = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');

    // Format as MM/YY
    if (digits.length <= 2) {
      return digits;
    } else {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
    }
  };

  const handleExpirationDateChange = (value: string) => {
    const formatted = formatExpirationDate(value);
    setExpirationDate(formatted);
  };

  const handleCvcChange = (value: string) => {
    // Only allow digits, max 4 characters
    const digits = value.replace(/\D/g, '').slice(0, 4);
    setCvc(digits);
  };

  const isFormValid =
    email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    cardName.trim().length >= 2 &&
    expirationDate &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate) &&
    cvc &&
    /^\d{3,4}$/.test(cvc);

  return (
    <div>
      {/* Progress Badges */}
      <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
        <div className="bg-teal-50 text-teal-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg flex items-center justify-between">
          <span className="font-medium text-xs sm:text-sm">Amount</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-600 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>
        <div className="bg-teal-50 text-teal-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg flex items-center justify-between">
          <span className="font-medium text-xs sm:text-sm">Details</span>
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-600 rounded-full flex items-center justify-center">
            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Donation Summary */}
      <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 md:mb-6">
        <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
          <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 sm:mt-1" />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 sm:mb-3">Donation Summary</h3>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Donation Amount:</span>
                <span className="font-medium">${amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contribution:</span>
                <span className="font-medium">${contribution.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 my-1 sm:my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total Payment:</span>
                <span>${totalPayment.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Help Banner */}
        <div className="bg-white rounded-lg p-2 sm:p-3 flex items-start gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs sm:text-sm">?</span>
          </div>
          <div className="text-xs text-gray-600 min-w-0">
            <strong className="text-gray-900">Help Us to Help Them!</strong>
            <p className="mt-0.5 sm:mt-1">
              A further modest charge is added here to Ballybofey National School. Adding an optional amount to your donation makes us can continue to provide our services.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <div className="mb-3 sm:mb-4">
          <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3">
            <div className="flex items-center gap-1 sm:gap-2">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <div className="flex gap-1 sm:gap-2">
              <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32' rx='4'/%3E%3Ccircle fill='%23EB001B' cx='18' cy='16' r='9'/%3E%3Ccircle fill='%23FF5F00' cx='24' cy='16' r='9'/%3E%3Ccircle fill='%23F79E1B' cx='30' cy='16' r='9'/%3E%3C/svg%3E" alt="Mastercard" width={32} height={20} className="h-4 sm:h-5" />
              <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231A1F71' width='48' height='32' rx='4'/%3E%3Ctext x='24' y='20' fill='white' font-size='14' font-weight='bold' text-anchor='middle'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-4 sm:h-5" width={32} height={20} />
            </div>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example.example@gmail.com"
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-3 sm:mb-4">
          <div className={`flex items-center justify-between border rounded-lg px-3 sm:px-4 py-2 sm:py-3 ${errors.cardName ? 'border-red-500' : 'border-gray-300'
            }`}>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Cardholder Name"
              className="flex-1 outline-none text-sm sm:text-base min-w-0"
            />
            <div className="flex gap-1 sm:gap-2 ml-2">
              <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231434CB' width='48' height='32' rx='4'/%3E%3Ccircle fill='%23EB001B' cx='18' cy='16' r='9'/%3E%3Ccircle fill='%23FF5F00' cx='24' cy='16' r='9'/%3E%3Ccircle fill='%23F79E1B' cx='30' cy='16' r='9'/%3E%3C/svg%3E" alt="Mastercard" className="h-4 sm:h-5" width={32} height={20} />
              <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 32'%3E%3Crect fill='%231A1F71' width='48' height='32' rx='4'/%3E%3Ctext x='24' y='20' fill='white' font-size='14' font-weight='bold' text-anchor='middle'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-4 sm:h-5" width={32} height={20} />
            </div>
          </div>
          {errors.cardName && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cardName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => handleExpirationDateChange(e.target.value)}
              placeholder="MM/YY"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.expirationDate ? 'border-red-500' : 'border-gray-300'
                }`}
              maxLength={5}
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.expirationDate}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={cvc}
              onChange={(e) => handleCvcChange(e.target.value)}
              placeholder="CVC"
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.cvc ? 'border-red-500' : 'border-gray-300'
                }`}
              maxLength={4}
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={onConfirm}
        disabled={!isFormValid}
        className={`w-full py-2 sm:py-3 rounded-lg font-medium transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${!isFormValid
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
          }`}
      >
        Confirm Donation
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default PaymentStep;
// components/donate/PaymentStep.tsx
import { ArrowRight, Check, CreditCard } from 'lucide-react';
import { ValidationErrors } from '../../app/donate/page';

interface PaymentStepProps {
  amount: number;
  contribution: number;
  totalPayment: number;
  email: string;
  setEmail: (email: string) => void;
  cardNumber: string;
  setCardNumber: (number: string) => void;
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
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  expirationDate,
  setExpirationDate,
  cvc,
  setCvc,
  errors,
  onConfirm
}: PaymentStepProps) => {
  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as XXXX XXXX XXXX XXXX (max 16 digits)
    const formatted = digits.slice(0, 16).match(/.{1,4}/g)?.join(' ') || digits.slice(0, 16);
    return formatted;
  };

  const handleCardNumberChange = (value: string) => {
    const formatted = formatCardNumber(value);
    setCardNumber(formatted);
  };

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
    cardNumber.replace(/\s/g, '').length >= 13 &&
    cardName.trim().length >= 2 &&
    expirationDate &&
    /^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate) &&
    cvc &&
    /^\d{3,4}$/.test(cvc);

  return (
    <div>
      {/* Progress Badges */}
      <div className="space-y-2 mb-4">
        <div className="bg-teal-50 text-teal-700 py-2 px-4 rounded-lg flex items-center justify-between">
          <span className="font-medium text-sm">Amount</span>
          <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="bg-teal-50 text-teal-700 py-2 px-4 rounded-lg flex items-center justify-between">
          <span className="font-medium text-sm">Details</span>
          <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Donation Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-start gap-3 mb-4">
          <CreditCard className="w-5 h-5 text-teal-600 mt-1" />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-3">Donation Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Donation Amount:</span>
                <span className="font-medium">${amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Contribution:</span>
                <span className="font-medium">${contribution.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              <div className="flex justify-between font-bold">
                <span>Total Payment:</span>
                <span>${totalPayment.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Help Banner */}
        <div className="bg-white rounded-lg p-3 flex items-start gap-3">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-bold">?</span>
          </div>
          <div className="text-xs text-gray-600">
            <strong className="text-gray-900">Help Us to Help Them!</strong>
            <p className="mt-1">
              An additional modest charge is added here to Ballybofey National School. Adding an optional amount to your donation means we can continue to provide our services.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="mb-4">
        {/* Payment Method Icons */}
        <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3 mb-3">
          <CreditCard className="w-5 h-5 text-gray-400" />
          <div className="flex gap-2">
            {/* Visa Icon */}
            <div className="w-10 h-6 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">VISA</span>
            </div>
            {/* Mastercard Icon */}
            <div className="w-10 h-6 rounded flex items-center justify-center overflow-hidden">
              <div className="flex">
                <div className="w-4 h-6 bg-red-600 rounded-full"></div>
                <div className="w-4 h-6 bg-orange-500 rounded-full -ml-2"></div>
              </div>
            </div>
            {/* Generic Card Icon */}
            <div className="w-10 h-6 bg-gray-800 rounded"></div>
          </div>
        </div>

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nextlevelxrecipes@gmail.com"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 mb-3 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-3">{errors.email}</p>
        )}

        {/* Card Number Input */}
        <div className={`flex items-center justify-between border rounded-lg px-4 py-3 mb-3 ${
          errors.cardNumber ? 'border-red-500' : 'border-gray-300'
        }`}>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => handleCardNumberChange(e.target.value)}
            placeholder="Card Number"
            className="flex-1 outline-none"
            maxLength={19}
          />
          <CreditCard className="w-5 h-5 text-gray-400 ml-2" />
        </div>
        {errors.cardNumber && (
          <p className="text-red-500 text-xs mb-3">{errors.cardNumber}</p>
        )}

        {/* Cardholder Name Input */}
        <div className={`flex items-center justify-between border rounded-lg px-4 py-3 mb-3 ${
          errors.cardName ? 'border-red-500' : 'border-gray-300'
        }`}>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Cardholder Name"
            className="flex-1 outline-none"
          />
          <div className="flex gap-2 ml-2">
            {/* Visa Icon */}
            <div className="w-8 h-5 bg-blue-700 rounded flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">VISA</span>
            </div>
            {/* Mastercard Icon */}
            <div className="w-8 h-5 rounded flex items-center justify-center overflow-hidden">
              <div className="flex">
                <div className="w-3 h-5 bg-red-600 rounded-full"></div>
                <div className="w-3 h-5 bg-orange-500 rounded-full -ml-1.5"></div>
              </div>
            </div>
          </div>
        </div>
        {errors.cardName && (
          <p className="text-red-500 text-xs mb-3">{errors.cardName}</p>
        )}

        {/* Expiration Date and CVC */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              value={expirationDate}
              onChange={(e) => handleExpirationDateChange(e.target.value)}
              placeholder="MM/YY"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                errors.expirationDate ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength={5}
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-xs mt-1">{errors.expirationDate}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              value={cvc}
              onChange={(e) => handleCvcChange(e.target.value)}
              placeholder="CVC"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                errors.cvc ? 'border-red-500' : 'border-gray-300'
              }`}
              maxLength={4}
            />
            {errors.cvc && (
              <p className="text-red-500 text-xs mt-1">{errors.cvc}</p>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={onConfirm}
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
          !isFormValid
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
        }`}
      >
        Confirm Donation
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PaymentStep;
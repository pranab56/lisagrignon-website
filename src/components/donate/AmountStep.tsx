// components/donate/AmountStep.tsx
import { ArrowRight } from 'lucide-react';
import { ValidationErrors } from '../../app/donate/page';

interface AmountStepProps {
  donationType: 'one-time' | 'monthly';
  setDonationType: (type: 'one-time' | 'monthly') => void;
  amount: number;
  setAmount: (amount: number) => void;
  presetAmounts: number[];
  customAmount: string;
  setCustomAmount: (amount: string) => void;
  errors: ValidationErrors;
  onNext: () => void;
}

// Amount Selection Step
const AmountStep = ({
  donationType,
  setDonationType,
  amount,
  setAmount,
  presetAmounts,
  customAmount,
  setCustomAmount,
  errors,
  onNext
}: AmountStepProps) => {
  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setAmount(numValue);
    } else {
      setAmount(0);
    }
  };

  return (
    <div>
      {/* Donation Type Toggle */}
      <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-5 md:mb-6">
        <button
          onClick={() => setDonationType('one-time')}
          className={`flex-1 py-2 sm:py-3 rounded-lg font-medium transition text-xs sm:text-sm ${donationType === 'one-time'
            ? 'bg-teal-700 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          One Time
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          className={`flex-1 py-2 sm:py-3 rounded-lg font-medium transition text-xs sm:text-sm ${donationType === 'monthly'
            ? 'bg-teal-700 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          Give Monthly
        </button>
      </div>

      {/* Amount Selection */}
      <div className="mb-3 sm:mb-4">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Select Amount</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mb-3 sm:mb-4">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              onClick={() => {
                setAmount(preset);
                setCustomAmount('');
              }}
              className={`py-2 sm:py-3 rounded-lg font-medium transition text-xs sm:text-sm ${amount === preset
                ? 'bg-teal-700 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              ${preset}
            </button>
          ))}
        </div>
        {errors.amount && (
          <p className="text-red-500 text-xs sm:text-sm mb-1 sm:mb-2">{errors.amount}</p>
        )}
        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
          You have selected <strong>1 tickets</strong> for <strong>€{amount.toFixed(0)}</strong>
        </p>
      </div>

      {/* Custom Amount */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">or Custom Amount</label>
        <div className="relative">
          <span className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm sm:text-base">$</span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            min="1"
            step="0.01"
            className={`w-full pl-6 sm:pl-8 pr-3 sm:pr-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.amount ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="30"
          />
        </div>
        {errors.amount && customAmount && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.amount}</p>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={amount <= 0}
        className={`w-full py-2 sm:py-3 rounded-lg font-medium transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${amount <= 0
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-primary text-gray-900 hover:bg-yellow-500'
          }`}
      >
        Next Step
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default AmountStep;
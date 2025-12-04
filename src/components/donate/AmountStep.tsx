// components/donate/AmountStep.tsx
import { ArrowRight } from 'lucide-react';
import { ValidationErrors } from '../../app/donate/page';

interface AmountStepProps {
  amount: number;
  setAmount: (amount: number) => void;
  customAmount: string;
  setCustomAmount: (amount: string) => void;
  errors: ValidationErrors;
  onNext: () => void;
}

// Amount Selection Step
const AmountStep = ({
  amount,
  setAmount,
  customAmount,
  setCustomAmount,
  errors,
  onNext
}: AmountStepProps) => {
  const presetAmounts = [10, 30, 45, 100];

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
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Select Amount</h3>

      {/* Preset Amount Buttons */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => {
              setAmount(preset);
              setCustomAmount('');
            }}
            className={`py-2 rounded-lg font-medium transition text-sm ${amount === preset && !customAmount
                ? 'bg-teal-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            ${preset}
          </button>
        ))}
      </div>

      {errors.amount && (
        <p className="text-red-500 text-xs mb-2">{errors.amount}</p>
      )}

      {/* Custom Amount Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          or Custom Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            min="1"
            step="0.01"
            className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.amount ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="30"
          />
        </div>
      </div>

      {/* Hide Amount Checkbox */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="hide-amount"
          className="mr-2 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="hide-amount" className="text-sm text-gray-700">
          Hide donation amount from public view
        </label>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={amount <= 0}
        className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${amount <= 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
          }`}
      >
        Next Step
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AmountStep;
// components/donate/DetailsStep.tsx
import { ArrowRight, Check } from 'lucide-react';
import { ValidationErrors } from '../../app/donate/page';

interface DetailsStepProps {
  firstName: string;
  setFirstName: (name: string) => void;
  surname: string;
  setSurname: (name: string) => void;
  message: string;
  setMessage: (message: string) => void;
  errors: ValidationErrors;
  onNext: () => void;
  amount: number;
}

// Details Step
const DetailsStep = ({
  firstName,
  setFirstName,
  surname,
  setSurname,
  message,
  setMessage,
  errors,
  onNext,
}: DetailsStepProps) => {
  const isFormValid = firstName.trim().length >= 2 && surname.trim().length >= 2;

  return (
    <div>
      {/* Amount Badge */}
      <div className="bg-teal-50 text-teal-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg mb-4 sm:mb-5 md:mb-6 flex items-center justify-between">
        <span className="font-medium text-xs sm:text-sm">Amount</span>
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-teal-600 rounded-full flex items-center justify-center">
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>

      {/* Details Form */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">Your Details:</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
          Please enter your details below so that this raffle can contact you and send you a prize if you are one of the lucky winners. Thank you and best of luck!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
              Surname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className={`w-full px-3 sm:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm sm:text-base ${errors.surname ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Enter your surname"
            />
            {errors.surname && (
              <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
            Add a message to your donation (optional)
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Enter your message here..."
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none text-sm sm:text-base"
            maxLength={500}
          />
          <p className="text-xs text-gray-500 mt-1 text-right">
            {message.length}/500 characters
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!isFormValid}
        className={`w-full py-2 sm:py-3 rounded-lg font-medium transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${!isFormValid
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
          }`}
      >
        Next Step
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default DetailsStep;
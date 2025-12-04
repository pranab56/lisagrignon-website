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
      {/* Amount Completed Badge */}
      <div className="bg-teal-50 text-teal-700 py-2 px-4 rounded-lg mb-4 flex items-center justify-between">
        <span className="font-medium text-sm">Amount</span>
        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
          <Check className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Name Input Fields */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Surname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 ${errors.surname ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Surname"
          />
          {errors.surname && (
            <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Add a message to your donation (optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Message..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none text-sm"
          maxLength={500}
        />
        <p className="text-xs text-gray-500 mt-1 text-right">
          {message.length}/500 characters
        </p>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!isFormValid}
        className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${!isFormValid
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

export default DetailsStep;
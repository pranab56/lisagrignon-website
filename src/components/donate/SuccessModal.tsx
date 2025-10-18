// components/donate/SuccessModal.tsx
import { Check } from 'lucide-react';

interface SuccessModalProps {
  onBackToHome: () => void;
}

const SuccessModal = ({ onBackToHome }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm w-full text-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Check className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={3} />
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">Payment Successful!</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 md:mb-6">
          Your payment was processed successfully. Hit the button below to view, share or download your transaction record.
        </p>
        <button
          onClick={onBackToHome}
          className="w-full cursor-pointer border-2 border-teal-600 text-teal-600 py-2 sm:py-3 rounded-lg font-medium hover:bg-teal-50 transition text-sm sm:text-base"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
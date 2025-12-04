// components/donate/SuccessModal.tsx
import { Check } from 'lucide-react';

interface SuccessModalProps {
  onBackToHome: () => void;
}

const SuccessModal = ({ onBackToHome }: SuccessModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-2xl">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-10 h-10 text-white" strokeWidth={3} />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Your payment was processed successfully. Hit the button below to view, share or download your transaction record.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="w-full border-2 cursor-pointer border-teal-600 text-teal-600 py-3 rounded-lg font-medium hover:bg-teal-50 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
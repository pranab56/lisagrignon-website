// components/donate/ProgressItem.tsx
interface ProgressItemProps {
  label: string;
  active: boolean;
  current: boolean;
}

// Progress Item Component
const ProgressItem = ({ label, active, current }: ProgressItemProps) => {
  return (
    <div
      className={`py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm ${active
        ? 'bg-teal-50 text-teal-700'
        : current
          ? 'bg-gray-100 text-gray-700'
          : 'bg-gray-50 text-gray-400'
        }`}
    >
      <span className="font-medium">{label}</span>
    </div>
  );
};

export default ProgressItem;
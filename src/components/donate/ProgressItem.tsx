// components/donate/ProgressItem.tsx

interface ProgressItemProps {
  label: string;
  active: boolean;
  current: boolean;
}

const ProgressItem = ({ label, active, current }: ProgressItemProps) => {
  return (
    <div
      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${active
          ? 'bg-teal-50 text-teal-700'
          : 'bg-gray-100 text-gray-500'
        } ${current ? 'ring-2 ring-teal-600 ring-offset-2' : ''
        }`}
    >
      {label}
    </div>
  );
};

export default ProgressItem;
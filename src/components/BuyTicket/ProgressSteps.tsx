'use client';

import { Check } from 'lucide-react';
import React from 'react';

interface Step {
  id: number;
  label: string;
  active: boolean;
  completed: boolean;
}

interface ProgressStepsProps {
  steps: Step[];
  onStepClick?: (stepId: number) => void;
}

export const ProgressSteps: React.FC<ProgressStepsProps> = ({ steps, onStepClick }) => {
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center flex-1">
              <button
                onClick={() => step.completed && onStepClick?.(step.id)}
                disabled={!step.completed && !step.active}
                className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center font-bold transition-colors mb-1 sm:mb-2 text-xs sm:text-sm ${step.active
                    ? 'bg-teal-600 text-white'
                    : step.completed
                      ? 'bg-teal-100 text-teal-700 cursor-pointer hover:bg-teal-200'
                      : 'bg-gray-200 text-gray-500'
                  }`}
              >
                {step.completed ? <Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6" /> : step.id}
              </button>
              <span className="text-xs text-gray-600 font-medium text-center px-1">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-1 sm:mx-2 ${step.completed ? 'bg-teal-600' : 'bg-gray-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
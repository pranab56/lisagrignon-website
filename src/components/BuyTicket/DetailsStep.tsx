'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

// Define the shape of the form data
interface FormData {
  firstName: string;
  surname: string;
  email: string;
  message?: string; // optional
}

interface DetailsStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const DetailsStep: React.FC<DetailsStepProps> = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData.surname?.trim()) newErrors.surname = 'Surname is required';
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Your Details:</h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          Please enter your details below so that the cause can contact you and send you a prize if you are one of the lucky winners. Thank you and best of luck!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <Label className='mb-1 sm:mb-2 text-xs sm:text-sm' htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName || ''}
              placeholder='Enter your first name'
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={errors.firstName ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
            />
            {errors.firstName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <Label className='mb-1 sm:mb-2 text-xs sm:text-sm' htmlFor="surname">
              Surname <span className="text-red-500">*</span>
            </Label>
            <Input
              id="surname"
              value={formData.surname || ''}
              placeholder='Enter your surname'
              onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
              className={errors.surname ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
            />
            {errors.surname && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.surname}</p>}
          </div>
        </div>

        <div className="mb-4">
          <Label className='mb-1 sm:mb-2 text-xs sm:text-sm' htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder='Enter your email address'
            value={formData.email || ''}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
          />
          {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label className='mb-1 sm:mb-2 text-xs sm:text-sm' htmlFor="message">Add a message to your donation (optional)</Label>
          <Textarea
            id="message"
            value={formData.message || ''}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Message..."
            rows={4}
            className="resize-none text-sm sm:text-base"
          />
        </div>
      </div>

      <Button onClick={handleNext} className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-4 sm:py-6 text-sm sm:text-base">
        Next Step <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
      </Button>
    </div>
  );
};
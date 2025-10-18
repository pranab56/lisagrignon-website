'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ArrowRight, Ticket } from 'lucide-react';
import React, { useState } from 'react';

interface FormData {
  selectedTickets?: number;
  totalPrice?: number;
  hideAmount?: boolean;
}

interface AmountSelectionProps {
  onNext: () => void;
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export const AmountSelection: React.FC<AmountSelectionProps> = ({ onNext, formData, setFormData }) => {
  const [errors, setErrors] = useState<{ tickets?: string }>({});
  const [customQuantity, setCustomQuantity] = useState<string>('');

  const ticketOptions = [
    { id: 1, quantity: 1, price: 10 },
    { id: 3, quantity: 3, price: 10 },
    { id: 7, quantity: 7, price: 10 },
    { id: 12, quantity: 12, price: 10 }
  ];

  const handleTicketSelect = (option: typeof ticketOptions[0]) => {
    setFormData({
      ...formData,
      selectedTickets: option.quantity,
      totalPrice: option.price
    });
    setErrors({});
  };

  const handleNext = () => {
    if (!formData.selectedTickets && !customQuantity) {
      setErrors({ tickets: 'Please select number of tickets' });
      return;
    }
    onNext();
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Select number of Tickets</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {ticketOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleTicketSelect(option)}
              className={`p-3 sm:p-4 rounded-lg border-2 transition-all min-h-[80px] sm:min-h-0 ${formData.selectedTickets === option.quantity
                  ? 'border-teal-600 bg-teal-600 text-white'
                  : 'border-gray-300 hover:border-teal-400'
                }`}
            >
              <Ticket className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />
              <div className="font-bold text-sm sm:text-base">{option.quantity}</div>
            </button>
          ))}
        </div>
        {errors.tickets && <p className="text-red-500 text-xs sm:text-sm mt-2">{errors.tickets}</p>}
      </div>

      <div className="text-center py-2 sm:py-3 bg-gray-100 rounded-lg">
        <p className="text-xs sm:text-sm text-gray-700">
          You have selected <span className="font-bold">{formData.selectedTickets || 0}</span> tickets for{' '}
          <span className="font-bold">€{formData.totalPrice || 0}</span>
        </p>
      </div>

      <div>
        <Label htmlFor="customQuantity" className="text-xs sm:text-sm text-gray-700 mb-2 block">
          or select a custom quantity:
        </Label>
        <select
          id="customQuantity"
          value={customQuantity}
          onChange={(e) => {
            const value = e.target.value;
            setCustomQuantity(value);
            if (value) {
              setFormData({
                ...formData,
                selectedTickets: parseInt(value, 10),
                totalPrice: 10 // assuming fixed price per ticket
              });
            }
          }}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg text-sm sm:text-base"
        >
          <option value="">1 Ticket - €10</option>
          <option value="2">2 Tickets - €20</option>
          <option value="5">5 Tickets - €50</option>
        </select>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="hideAmount"
          checked={!!formData.hideAmount}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, hideAmount: checked === true })
          }
          className="mt-1"
        />
        <label htmlFor="hideAmount" className="text-xs sm:text-sm text-gray-700 leading-tight">
          Hide donation amount from public view
        </label>
      </div>

      <Button onClick={handleNext} className="w-full bg-primary text-gray-900 font-semibold py-4 sm:py-6 text-sm sm:text-base">
        Next Step <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
      </Button>
    </div>
  );
};
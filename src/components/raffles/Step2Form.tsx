'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Pencil, Sparkles, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { TicketOption } from '../../app/raffles/page';


interface Step2FormProps {
  onBack: () => void;
  onCreate: () => void;
  onTicketOptionsUpdate: (tickets: TicketOption[]) => void;
  ticketOptions: TicketOption[];
}

export default function Step2Form({ onBack, onCreate, onTicketOptionsUpdate, ticketOptions }: Step2FormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<TicketOption | null>(null);
  const [useRecommendedPricing, setUseRecommendedPricing] = useState(false);

  const [formData, setFormData] = useState({
    numberOfTickets: '',
    costOfTickets: ''
  });

  const [errors, setErrors] = useState({
    numberOfTickets: '',
    costOfTickets: ''
  });

  // Notify parent when ticket options change
  useEffect(() => {
    onTicketOptionsUpdate(ticketOptions);
  }, [ticketOptions, onTicketOptionsUpdate]);

  const validateForm = () => {
    const newErrors = {
      numberOfTickets: '',
      costOfTickets: ''
    };

    let isValid = true;

    if (!formData.numberOfTickets || formData.numberOfTickets.trim() === '') {
      newErrors.numberOfTickets = 'Number of tickets is required';
      isValid = false;
    } else if (isNaN(Number(formData.numberOfTickets)) || parseInt(formData.numberOfTickets) <= 0) {
      newErrors.numberOfTickets = 'Please enter a valid number';
      isValid = false;
    }

    if (!formData.costOfTickets || formData.costOfTickets.trim() === '') {
      newErrors.costOfTickets = 'Cost of tickets is required';
      isValid = false;
    } else if (isNaN(Number(formData.costOfTickets)) || parseFloat(formData.costOfTickets) <= 0) {
      newErrors.costOfTickets = 'Please enter a valid amount';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddTicket = () => {
    setEditingTicket(null);
    setFormData({ numberOfTickets: '', costOfTickets: '' });
    setErrors({ numberOfTickets: '', costOfTickets: '' });
    setIsModalOpen(true);
  };

  const handleEditTicket = (ticket: TicketOption) => {
    setEditingTicket(ticket);
    setFormData({
      numberOfTickets: ticket.numberOfTickets,
      costOfTickets: ticket.costOfTickets
    });
    setErrors({ numberOfTickets: '', costOfTickets: '' });
    setIsModalOpen(true);
  };

  const handleDeleteTicket = (id: number) => {
    const updatedTickets = ticketOptions.filter(ticket => ticket.id !== id);
    onTicketOptionsUpdate(updatedTickets);
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    if (editingTicket) {
      const updatedTickets = ticketOptions.map(ticket =>
        ticket.id === editingTicket.id
          ? { ...ticket, ...formData }
          : ticket
      );
      onTicketOptionsUpdate(updatedTickets);
    } else {
      const newTicket: TicketOption = {
        id: Date.now(),
        numberOfTickets: formData.numberOfTickets,
        costOfTickets: formData.costOfTickets
      };
      onTicketOptionsUpdate([...ticketOptions, newTicket]);
    }

    setIsModalOpen(false);
    setFormData({ numberOfTickets: '', costOfTickets: '' });
    setEditingTicket(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCreateRaffle = () => {
    if (ticketOptions.length === 0) {
      alert('Please add at least one ticket option before creating the raffle.');
      return;
    }

    console.log('Final Ticket Options:', ticketOptions);
    onCreate();
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <button className="bg-teal-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mb-4 hover:bg-teal-800 transition-colors">
            Ticket Options <Sparkles className="w-5 h-5" />
          </button>

          <button
            onClick={() => setUseRecommendedPricing(!useRecommendedPricing)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${useRecommendedPricing
              ? 'bg-teal-100 text-teal-700'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            Use Recommended Pricing
          </button>
        </div>

        <div className="bg-amber-50 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-3 text-center gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Tickets <span className="text-orange-500">*</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cost for Tickets <span className="text-orange-500">*</span>
              </label>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={handleAddTicket}
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium "
              >
                {ticketOptions.length > 0 ? 'Add Ticket' : 'Add Ticket'}
              </Button>
            </div>
          </div>
        </div>

        {ticketOptions.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-3 text-center gap-4 mb-4 text-sm font-medium text-gray-700">
              <div>Number of Tickets</div>
              <div>Cost of Tickets</div>
              <div>Actions</div>
            </div>

            {ticketOptions.map((ticket) => (
              <div
                key={ticket.id}
                className="grid grid-cols-3 gap-4 text-center items-center py-4 border-b border-gray-200"
              >
                <div className="text-gray-900">
                  {ticket.numberOfTickets} Tickets
                </div>
                <div className="text-gray-900">
                  ${ticket.costOfTickets}
                </div>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => handleEditTicket(ticket)}
                    className="text-teal-600 cursor-pointer hover:text-teal-700"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteTicket(ticket.id)}
                    className="text-red-500 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={onBack}
            variant="outline"
            className="px-8 py-2 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <Button
            onClick={handleCreateRaffle}
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium px-8 py-2 flex items-center gap-2"
          >
            Create Raffle <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingTicket ? 'Edit Ticket' : 'Add New Ticket'}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-5 py-4">
              <div>
                <Label htmlFor="numberOfTickets" className="text-sm font-medium">
                  Number of Tickets <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="numberOfTickets"
                  type="text"
                  value={formData.numberOfTickets}
                  onChange={(e) => handleInputChange('numberOfTickets', e.target.value)}
                  placeholder="Enter number of tickets"
                  className={`mt-2 ${errors.numberOfTickets ? 'border-red-500' : ''}`}
                />
                {errors.numberOfTickets && (
                  <p className="text-red-500 text-sm mt-1">{errors.numberOfTickets}</p>
                )}
              </div>

              <div>
                <Label htmlFor="costOfTickets" className="text-sm font-medium">
                  Cost of Tickets <span className="text-orange-500">*</span>
                </Label>
                <Input
                  id="costOfTickets"
                  type="text"
                  value={formData.costOfTickets}
                  onChange={(e) => handleInputChange('costOfTickets', e.target.value)}
                  placeholder="Enter cost"
                  className={`mt-2 ${errors.costOfTickets ? 'border-red-500' : ''}`}
                />
                {errors.costOfTickets && (
                  <p className="text-red-500 text-sm mt-1">{errors.costOfTickets}</p>
                )}
              </div>
            </div>

            <DialogFooter className="gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setIsModalOpen(false);
                  setFormData({ numberOfTickets: '', costOfTickets: '' });
                  setErrors({ numberOfTickets: '', costOfTickets: '' });
                  setEditingTicket(null);
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className="bg-teal-700 hover:bg-teal-800 text-white"
              >
                {editingTicket ? 'Update Ticket' : 'Add Ticket'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
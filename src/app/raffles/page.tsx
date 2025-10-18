'use client';

import { useState } from 'react';
import RafflesBanner from '../../components/raffles/RafflesBanner';
import Step1Form from '../../components/raffles/Step1Form';
import Step2Form from '../../components/raffles/Step2Form';

export type Step1FormData = {
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;
  raffleName: string;
  targetAmount: string;
  cause: string;
  ticketSaleEndDate: string;
  ticketSaleEndTime: string;
  drawDate: string;
  raffleImage: File | null;
  raffleDescription: string;
  prizeListDescription: string;
};

export type TicketOption = {
  id: number;
  numberOfTickets: string;
  costOfTickets: string;
};

export default function PronabPage() {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1FormData | null>(null);
  const [ticketOptions, setTicketOptions] = useState<TicketOption[]>([]);

  const handleStep1Next = (data: Step1FormData) => {
    setStep1Data(data);
    setStep(2);
    console.log('Step 1 Data:', data);
  };

  const handleStep2Back = () => {
    setStep(1);
  };

  const handleTicketOptionsUpdate = (tickets: TicketOption[]) => {
    setTicketOptions(tickets);
  };

  const handleCreateRaffle = () => {
    const allData = {
      step1Data,
      ticketOptions
    };

    console.log('Complete Raffle Data:', allData);
    alert('🎉 Raffle created successfully!');

    // You can send this data to your API here
    // Example: 
    // fetch('/api/raffles', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(allData)
    // })
  };

  return (
    <>
      <RafflesBanner />
      <div className="flex flex-col items-center justify-center p-4">
        <div className="container bg-white rounded-lg shadow-md p-6">
          {step === 1 && <Step1Form onNext={handleStep1Next} />}
          {step === 2 && (
            <Step2Form
              onBack={handleStep2Back}
              onCreate={handleCreateRaffle}
              onTicketOptionsUpdate={handleTicketOptionsUpdate}
              ticketOptions={ticketOptions}
            />
          )}
        </div>
      </div>
    </>
  );
}
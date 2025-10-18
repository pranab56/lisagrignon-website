"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Purchase {
  id: number;
  raffle: string;
  date: string;
  tickets: string;
  amount: string;
  status: 'Active' | 'Closed';
}

const purchasesData: Purchase[] = [
  { id: 1, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 2, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Closed' },
  { id: 3, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 4, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 5, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 6, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 7, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 8, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 9, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 10, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
  { id: 11, raffle: 'School Fund', date: '12 Sep 2025', tickets: '3', amount: '$30', status: 'Active' },
];

type TimeFilter = 'last-weeks' | 'last-month' | 'last-year';
type StatusFilter = 'status' | 'active' | 'closed';

export default function MyPurchases() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('last-weeks');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('status');

  const getStatusBadge = (status: Purchase['status']) => {
    if (status === 'Active') {
      return <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50 border-0 font-normal">{status}</Badge>;
    }
    return <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-0 font-normal">{status}</Badge>;
  };

  return (
    <div className="w-full p-6 bg-gray-50 ">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Purchases</h1>
        <div className="flex gap-3">
          <Select value={timeFilter} onValueChange={(value: TimeFilter) => setTimeFilter(value)}>
            <SelectTrigger className="w-40 bg-white">
              <SelectValue placeholder="Last weeks" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-weeks">Last weeks</SelectItem>
              <SelectItem value="last-month">Last month</SelectItem>
              <SelectItem value="last-year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={(value: StatusFilter) => setStatusFilter(value)}>
            <SelectTrigger className="w-32 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="status">Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Raffle Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Tickets</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {purchasesData.map((purchase) => (
              <tr key={purchase.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-900">{purchase.raffle}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{purchase.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{purchase.tickets}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{purchase.amount}</td>
                <td className="px-6 py-4 text-sm">{getStatusBadge(purchase.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">Showing 11 of 25 Results</p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600 hover:bg-transparent px-3"
            disabled
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="min-w-[32px] h-8 bg-teal-600 text-white hover:bg-teal-700 hover:text-white rounded px-3"
          >
            1
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="min-w-[32px] h-8 text-gray-600 hover:bg-gray-100 rounded px-3"
          >
            2
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="min-w-[32px] h-8 text-gray-600 hover:bg-gray-100 rounded px-3"
          >
            3
          </Button>
          <span className="px-2 text-gray-400">...</span>
          <Button
            variant="ghost"
            size="sm"
            className="min-w-[32px] h-8 text-gray-600 hover:bg-gray-100 rounded px-3"
          >
            10
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900 hover:bg-transparent px-3"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
"use client"

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

// Define types for our data
interface Donation {
  id: number;
  campaign: string;
  date: string;
  amount: string;
  status: 'Active' | 'Closed';
}

const donationsData: Donation[] = [
  { id: 1, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 2, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Closed' },
  { id: 3, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 4, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 5, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 6, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 7, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 8, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 9, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 10, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
  { id: 11, campaign: 'School Fund', date: '12 Sep 2025', amount: '$30', status: 'Active' },
];

type StatusFilter = 'all' | 'active' | 'closed';

export default function MyDonations() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const getStatusBadge = (status: Donation['status']) => {
    if (status === 'Active') {
      return <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50 border-0 font-normal">{status}</Badge>;
    }
    return <Badge className="bg-red-50 text-red-600 hover:bg-red-50 border-0 font-normal">{status}</Badge>;
  };

  // Filter donations based on status filter
  const filteredDonations = donationsData.filter(donation => {
    if (statusFilter === 'all') return true;
    if (statusFilter === 'active') return donation.status === 'Active';
    if (statusFilter === 'closed') return donation.status === 'Closed';
    return true;
  });

  return (
    <div className="w-full p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">My Donations</h1>
        <Select value={statusFilter} onValueChange={(value: StatusFilter) => setStatusFilter(value)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Campaign Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDonations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{donation.campaign}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{donation.date}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{donation.amount}</td>
                <td className="px-6 py-4 text-sm">{getStatusBadge(donation.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500">Showing {filteredDonations.length} of {donationsData.length} Results</p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-gray-600 hover:bg-transparent"
            disabled
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Prev
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 bg-teal-600 text-white hover:bg-teal-700 hover:text-white rounded"
          >
            1
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded"
          >
            2
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-8 h-8 text-gray-600 hover:bg-gray-100 rounded"
          >
            3
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 hover:text-gray-900 hover:bg-transparent"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
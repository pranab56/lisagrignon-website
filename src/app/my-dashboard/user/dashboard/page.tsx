"use client";


import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function RaffleDashboard() {
  const [timeFilter, setTimeFilter] = useState('last-weeks');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = [
    { label: 'Tickets Purchased', value: '15' },
    { label: 'Total Donated', value: '$780' },
    { label: 'Campaigns Supported', value: '5' },
    { label: 'My Wins', value: '2' }
  ];

  const purchases = [
    { name: 'School Fund', date: '12 Sep 2025', tickets: 3, amount: '$30', status: 'Active' },
    { name: 'School Fund', date: '12 Sep 2025', tickets: 3, amount: '$30', status: 'Closed' },
    { name: 'School Fund', date: '12 Sep 2025', tickets: 3, amount: '$30', status: 'Active' },
    { name: 'School Fund', date: '12 Sep 2025', tickets: 3, amount: '$30', status: 'Active' },
    { name: 'School Fund', date: '12 Sep 2025', tickets: 3, amount: '$30', status: 'Active' }
  ];

  const notifications = [
    { message: "Your donation to 'Support for Children's was Successful.", date: '05/05/2025' },
    { message: "Your donation to 'Support for Children's was Successful.", date: '05/05/2025' },
    { message: "Your donation to 'Support for Children's was Successful.", date: '05/05/2025' },
    { message: "Your donation to 'Support for Children's was Successful.", date: '05/05/2025' }
  ];

  const wins = [
    {
      title: 'Congratulations! You won a prize!',
      description: "You won a gift card worth $50 in the recent raffle for the 'Support for children's Education' Campaign.",
      image: '🎁'
    },
    {
      title: 'Congratulations! You won a prize!',
      description: "You won a gift card worth $50 in the recent raffle for the 'Support for children's Education' Campaign.",
      image: '🎀'
    }
  ];

  return (
    <div className=" p-6">
      <div className="w-full space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className={`text-3xl font-semibold ${index === 1 ? 'text-teal-600' : 'text-gray-900'}`}>
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Purchases Section */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">My Purchases</h2>
              <div className="flex gap-3">
                <Select value={timeFilter} onValueChange={setTimeFilter}>
                  <SelectTrigger className="w-32 bg-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last-weeks">Last weeks</SelectItem>
                    <SelectItem value="last-month">Last month</SelectItem>
                    <SelectItem value="all-time">All time</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32 bg-white">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Raffle Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Tickets</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {purchases.map((purchase, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-4 px-4 text-sm">{purchase.name}</td>
                      <td className="py-4 px-4 text-sm text-gray-600">{purchase.date}</td>
                      <td className="py-4 px-4 text-sm">{purchase.tickets}</td>
                      <td className="py-4 px-4 text-sm">{purchase.amount}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${purchase.status === 'Active'
                            ? 'bg-teal-50 text-teal-700'
                            : 'bg-red-50 text-red-700'
                          }`}>
                          {purchase.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section - Notifications and Raffle Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Notifications */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8 text-red-400 hover:text-red-500 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Raffle Results */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Raffle Results</h2>
              <div className="space-y-3">
                {wins.map((win, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-100">
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-teal-700 mb-1">{win.title}</h3>
                      <p className="text-xs text-gray-600">{win.description}</p>
                    </div>
                    <div className="flex-shrink-0 text-4xl">
                      {win.image}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
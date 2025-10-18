"use client";

import { Plus, X } from 'lucide-react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

interface Raffle {
  id: number;
  name: string;
  date: string;
  sold: number;
  amount: string;
}

interface FormData {
  raffleName: string;
  date: string;
  ticketPrice: string;
  totalTickets: string;
  description: string;
}

const MyRafflesTable = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    raffleName: '',
    date: '',
    ticketPrice: '',
    totalTickets: '',
    description: ''
  });

  const raffles: Raffle[] = Array(25).fill(null).map((_, i) => ({
    id: i + 1,
    name: 'Charity Gala Raffle',
    date: '12 Sep 2025',
    sold: 18,
    amount: '$380'
  }));

  const itemsPerPage = 11;
  const totalPages = Math.ceil(raffles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRaffles = raffles.slice(startIndex, endIndex);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    closeModal();
    setFormData({
      raffleName: '',
      date: '',
      ticketPrice: '',
      totalTickets: '',
      description: ''
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pages;
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">My Raffles</h1>
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <Plus size={20} />
            Create a New Raffle
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#F0F7F6] border-b border-gray-200">
                <th className="text-left font-medium text-gray-500 text-sm py-4 px-6">
                  Raffle Name
                </th>
                <th className="text-left font-medium text-gray-500 text-sm py-4 px-6">
                  Date
                </th>
                <th className="text-left font-medium text-gray-500 text-sm py-4 px-6">
                  Sold
                </th>
                <th className="text-left font-medium text-gray-500 text-sm py-4 px-6">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRaffles.map((raffle, index) => (
                <tr
                  key={raffle.id}
                  className={`hover:bg-gray-50 ${index !== currentRaffles.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                >
                  <td className="font-normal text-gray-900 py-5 px-6">
                    {raffle.name}
                  </td>
                  <td className="font-normal text-gray-900 py-5 px-6">
                    {raffle.date}
                  </td>
                  <td className="font-normal text-gray-900 py-5 px-6">
                    {raffle.sold}
                  </td>
                  <td className="font-normal text-gray-900 py-5 px-6">
                    {raffle.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {startIndex + 1} of {raffles.length} Results
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-sm cursor-pointer text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            {getPageNumbers().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                disabled={page === '...'}
                className={`w-8 h-8 rounded-md text-sm cursor-pointer font-medium ${page === currentPage
                  ? 'bg-teal-600 text-white'
                  : page === '...'
                    ? 'text-gray-600 cursor-default'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-sm text-sm cursor-pointer text-gray-600 hover:text-gray-900 disabled:text-gray-300 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900">Create a New Raffle</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-5">
                {/* Raffle Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Raffle Name *
                  </label>
                  <input
                    type="text"
                    name="raffleName"
                    value={formData.raffleName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter raffle name"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Ticket Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ticket Price *
                  </label>
                  <input
                    type="number"
                    name="ticketPrice"
                    value={formData.ticketPrice}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="$0.00"
                  />
                </div>

                {/* Total Tickets */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Tickets *
                  </label>
                  <input
                    type="number"
                    name="totalTickets"
                    value={formData.totalTickets}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter total number of tickets"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Enter raffle description"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Create Raffle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRafflesTable;
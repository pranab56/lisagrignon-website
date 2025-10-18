"use client";

import { Button } from '@/components/ui/button';
import { CheckCircle2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface Notification {
  id: number;
  message: string;
  date: string;
}

const NotificationList = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 2, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 3, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 4, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 5, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 6, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 7, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 8, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
    { id: 9, message: "Your donation to 'Support for Children's was Successful.", date: "05/05/2025" },
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [notificationToDelete, setNotificationToDelete] = useState<Notification | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(notifications.length / itemsPerPage);

  const handleDeleteClick = (notification: Notification) => {
    setNotificationToDelete(notification);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (notificationToDelete) {
      setNotifications(notifications.filter(notif => notif.id !== notificationToDelete.id));

      // Adjust current page if needed
      const newTotalPages = Math.ceil((notifications.length - 1) / itemsPerPage);
      if (currentPage > newTotalPages) {
        setCurrentPage(Math.max(1, newTotalPages));
      }
    }
    setIsDeleteModalOpen(false);
    setNotificationToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setNotificationToDelete(null);
  };

  const getCurrentPageItems = (): Notification[] => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return notifications.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentPageItems();
  const totalItems = notifications.length;
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="w-full">
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this notification? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={handleCancelDelete}
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleConfirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h1 className="text-xl font-semibold text-gray-900">List Notification</h1>
        </div>

        <div className="divide-y">
          {currentItems.map((notification) => (
            <div key={notification.id} className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-sm mb-1">
                  {notification.message}
                </p>
                <p className="text-gray-500 text-sm">
                  {notification.date}
                </p>
              </div>

              <button
                onClick={() => handleDeleteClick(notification)}
                className="flex-shrink-0 cursor-pointer text-red-400 hover:text-red-600 transition-colors p-2"
                aria-label="Delete notification"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 border-t flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {startItem} to {endItem} of {totalItems} Results
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="text-gray-600 hover:text-gray-900"
            >
              Prev
            </Button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className={
                    currentPage === pageNum
                      ? "bg-teal-600 hover:bg-teal-700 text-white w-8 h-8 p-0"
                      : "text-gray-600 hover:text-gray-900 w-8 h-8 p-0"
                  }
                >
                  {pageNum}
                </Button>
              );
            })}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="text-gray-600 hover:text-gray-900"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
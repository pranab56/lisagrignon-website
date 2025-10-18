"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Textarea } from '../../ui/textarea';

export interface ProfileField {
  id: string;
  label: string;
  type: "text" | "email" | "textarea" | "select" | "file" | "password";
  value: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
}

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Record<string, string>) => void;
  title: string;
  fields: ProfileField[];
  showAvatar?: boolean;
  avatarSrc?: string;
  avatarFallback?: string;
  singleColumn?: boolean;
}

function ProfileEditModal({
  isOpen,
  onClose,
  onSave,
  title,
  fields,
  showAvatar = false,
  avatarSrc,
  avatarFallback = "U",
  singleColumn = false,
}: ProfileEditModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Update form data when fields change
  useEffect(() => {
    const initialData: Record<string, string> = {};
    fields.forEach((field) => {
      initialData[field.id] = field.value;
    });
    setFormData(initialData);
    setAvatarPreview(null);
    setErrors({});
  }, [fields, isOpen]);

  const handleInputChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[fieldId]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          avatar: "File size must be less than 5MB",
        }));
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors((prev) => ({
          ...prev,
          avatar: "Please upload an image file",
        }));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.avatar;
          return newErrors;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    fields.forEach((field) => {
      if (field.required && !formData[field.id]?.trim()) {
        newErrors[field.id] = `${field.label} is required`;
      }

      // Email validation
      if (field.type === "email" && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = "Please enter a valid email address";
        }
      }

      // Phone validation
      if (field.id === "phone" && formData[field.id]) {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!phoneRegex.test(formData[field.id].replace(/\s/g, ''))) {
          newErrors[field.id] = "Please enter a valid phone number";
        }
      }

      // Password validation for change password
      if (title === "Change Password") {
        if (field.id === "newPassword" && formData[field.id] && formData[field.id].length < 8) {
          newErrors[field.id] = "Password must be at least 8 characters";
        }
        if (field.id === "confirmPassword" && formData.newPassword !== formData.confirmPassword) {
          newErrors[field.id] = "Passwords do not match";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) {
      return;
    }

    // If avatar was changed, include it in the save data
    const dataToSave = { ...formData };
    if (avatarPreview) {
      dataToSave.avatar = avatarPreview;
    }

    onSave(dataToSave);
    onClose();
  };

  const handleCancel = () => {
    // Reset form data to initial values
    const resetData: Record<string, string> = {};
    fields.forEach((field) => {
      resetData[field.id] = field.value;
    });
    setFormData(resetData);
    setAvatarPreview(null);
    setErrors({});
    onClose();
  };

  const renderField = (field: ProfileField) => {
    const hasError = !!errors[field.id];

    switch (field.type) {
      case "textarea":
        return (
          <>
            <Textarea
              id={field.id}
              placeholder={field.placeholder}
              value={formData[field.id] || ""}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className={`bg-white border-gray-300 ${hasError ? 'border-red-500' : ''}`}
              rows={4}
            />
            {hasError && (
              <p className="text-xs text-red-500 mt-1">{errors[field.id]}</p>
            )}
          </>
        );
      case "select":
        return (
          <>
            <Select
              value={formData[field.id] || ""}
              onValueChange={(value) => handleInputChange(field.id, value)}
            >
              <SelectTrigger className={`bg-white border-gray-300 w-full ${hasError ? 'border-red-500' : ''}`}>
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {hasError && (
              <p className="text-xs text-red-500 mt-1">{errors[field.id]}</p>
            )}
          </>
        );
      case "file":
        return (
          <div className="space-y-2">
            <Input
              id={field.id}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={`bg-white border-gray-300 ${errors.avatar ? 'border-red-500' : ''}`}
            />
            {errors.avatar && (
              <p className="text-xs text-red-500">{errors.avatar}</p>
            )}
            {avatarPreview && (
              <div className="mt-2">
                <Avatar className="size-20">
                  <AvatarImage src={avatarPreview} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              </div>
            )}
          </div>
        );
      default:
        return (
          <>
            <Input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id] || ""}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
              className={`bg-white border-gray-300 ${hasError ? 'border-red-500' : ''}`}
            />
            {hasError && (
              <p className="text-xs text-red-500 mt-1">{errors[field.id]}</p>
            )}
          </>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between border-b pb-4">
          <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Avatar Section */}
          {showAvatar && (
            <div className="flex items-center gap-6 p-5 border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white">
              <Avatar className="size-24 ring-4 ring-gray-100">
                <AvatarImage src={avatarPreview || avatarSrc} />
                <AvatarFallback className="text-xl font-semibold">{avatarFallback}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">Profile Photo</h3>
                <p className="text-sm text-gray-500 mb-3">Upload a new photo (max 5MB, JPG or PNG)</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={`w-full max-w-xs ${errors.avatar ? 'border-red-500' : ''}`}
                />
                {errors.avatar && (
                  <p className="text-xs text-red-500 mt-2">{errors.avatar}</p>
                )}
              </div>
            </div>
          )}

          {/* Form Fields */}
          <div
            className={`grid gap-5 ${singleColumn ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
              }`}
          >
            {fields.map((field) => (
              <div
                key={field.id}
                className={`space-y-2 ${field.type === "textarea" ? "md:col-span-2" : ""
                  }`}
              >
                <Label htmlFor={field.id} className="text-sm font-semibold text-gray-700">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </Label>
                {renderField(field)}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t">
            <Button
              type="button"
              onClick={handleCancel}
              className="border-2 border-red-500 text-red-600 bg-white hover:bg-red-50 font-medium transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold transition-colors shadow-sm"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProfileEditModal;
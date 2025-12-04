"use client";

import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar, Upload } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function FundraisingForm() {
  const [activeTab, setActiveTab] = useState('sample');
  const [pageTitle, setPageTitle] = useState('');
  const [memoryOf, setMemoryOf] = useState('');
  const [celebrationDate, setCelebrationDate] = useState<Date>();
  const [mailingList, setMailingList] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const tabs = [
    { id: 'sample', label: 'Sample' },
    { id: 'memorial', label: 'Memorial' },
    { id: 'celebration', label: 'Celebration' }
  ];

  const getDefaultTarget = () => {
    if (activeTab === 'sample') return '30';
    return '500';
  };

  const displayTarget = getDefaultTarget();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate based on active tab
    if (activeTab === 'sample' && !pageTitle.trim()) {
      newErrors.pageTitle = 'Page title is required';
    }

    if ((activeTab === 'memorial' || activeTab === 'celebration') && !memoryOf.trim()) {
      newErrors.memoryOf = 'This field is required';
    }

    if (activeTab === 'celebration' && !celebrationDate) {
      newErrors.celebrationDate = 'Celebration date is required';
    }

    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with submission
      console.log('Form submitted successfully!');
      router.push('/fundraising/SelectCause/create/checkout');
      // Add your form submission logic here
    } else {
      setErrors(validationErrors);
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Clear errors when changing tabs
    if (isSubmitted) {
      setErrors({});
      setIsSubmitted(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }

    if (field === 'pageTitle') setPageTitle(value);
    if (field === 'memoryOf') setMemoryOf(value);
  };

  const handleDateChange = (date: Date | undefined) => {
    setCelebrationDate(date);
    if (errors.celebrationDate) {
      setErrors(prev => ({ ...prev, celebrationDate: '' }));
    }
  };

  const handleTermsChange = (checked: boolean) => {
    setAgreedToTerms(checked);
    if (errors.terms) {
      setErrors(prev => ({ ...prev, terms: '' }));
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <div className="bg-[#00715D] h-[300px] flex justify-center items-center text-white py-8 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Button
            variant="secondary"
            className="mb-4 bg-black text-white hover:bg-gray-800"
          >
            Start Now <span className="ml-1">
              <Image src="/icons/research.png" alt="arrow-right" width={25} height={25} className='w-full h-full' />
            </span>
          </Button>
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">Create a fundraising page</h1>
          <p className="text-sm sm:text-lg opacity-80">How should your fundraising page be configured?</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-3 sm:p-4 md:p-6 flex-grow">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl bg-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          {/* Tabs */}
          <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="border px-2 sm:px-3 py-1 sm:py-2 rounded-md flex flex-wrap justify-center gap-1 sm:gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-md font-medium cursor-pointer transition-colors text-xs sm:text-sm md:text-base ${activeTab === tab.id
                    ? 'bg-teal-700 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* Sample Tab - Page Title */}
            {activeTab === 'sample' && (
              <div>
                <label className="block text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                  Enter your fundraising Page Title
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={pageTitle}
                  placeholder="Enter your fundraising Page Title"
                  onChange={(e) => handleInputChange('pageTitle', e.target.value)}
                  className={cn(
                    "w-full text-sm sm:text-base",
                    errors.pageTitle && "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                />
                {errors.pageTitle && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.pageTitle}</p>
                )}
              </div>
            )}

            {/* Memorial Tab - Memory Of */}
            {activeTab === 'memorial' && (
              <div>
                <label className="block text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                  Who is this Fundraising Page in Memory of
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  value={memoryOf}
                  placeholder="Who is this Fundraising Page in Memory of"
                  onChange={(e) => handleInputChange('memoryOf', e.target.value)}
                  className={cn(
                    "w-full text-sm sm:text-base",
                    errors.memoryOf && "border-red-500 focus:border-red-500 focus:ring-red-500"
                  )}
                />
                {errors.memoryOf && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.memoryOf}</p>
                )}
              </div>
            )}

            {/* Celebration Tab - Memory Of + Date */}
            {activeTab === 'celebration' && (
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label className="block text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                    Who is this Fundraising Page in Memory of
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    value={memoryOf}
                    placeholder="Who is this Fundraising Page"
                    onChange={(e) => handleInputChange('memoryOf', e.target.value)}
                    className={cn(
                      "w-full text-sm sm:text-base",
                      errors.memoryOf && "border-red-500 focus:border-red-500 focus:ring-red-500"
                    )}
                  />
                  {errors.memoryOf && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.memoryOf}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2">
                    What Date are you Celebrating
                    <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal text-sm sm:text-base h-10 sm:h-11 md:h-12",
                          !celebrationDate && "text-muted-foreground",
                          errors.celebrationDate && "border-red-500 text-red-500"
                        )}
                      >
                        <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        {celebrationDate ? (
                          format(celebrationDate, "PPP")
                        ) : (
                          <span className="truncate">What Date are you Celebrating</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={celebrationDate}
                        onSelect={handleDateChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.celebrationDate && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.celebrationDate}</p>
                  )}
                </div>
              </div>
            )}

            {/* Fundraising Target */}
            <div>
              <label className="block text-gray-700 text-xs sm:text-sm mb-1 sm:mb-2">
                What is your fundraising target?
                <span className="text-red-500">*</span>
              </label>
              <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-3 rounded-md">
                <span className="text-gray-700 text-sm sm:text-base">$ {displayTarget}</span>
              </div>
            </div>

            {/* Image Upload Section */}
            <div
              className="border-2 border-dashed border-teal-300 rounded-lg p-6 sm:p-8 cursor-pointer hover:border-teal-500 transition-colors"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <Upload className="h-8 w-8 text-teal-600" />
                <div className="text-center">
                  <p className="text-gray-700 text-sm sm:text-base font-medium">Import your profile photo:</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">Drag or Click to Upload</p>
                </div>
              </div>

              {/* Display selected image */}
              {selectedImage && (
                <div className="mt-4 flex justify-center">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-teal-300">
                    <Image
                      src={selectedImage}
                      alt="Profile"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Email Updates Text */}
            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              I would like to receive email updates from North West Hospice, The Gavin Glynn Foundation. You can withdraw your consent at any time by contacting us at info@northwesthospice.ie, info@thegavinglynnfoundation.ie.
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <Checkbox
                  id="mailing"
                  checked={mailingList}
                  onCheckedChange={(checked) => setMailingList(checked === true)}
                  className="mt-0.5 flex-shrink-0"
                />
                <label
                  htmlFor="mailing"
                  className="text-gray-700 text-xs sm:text-sm cursor-pointer leading-relaxed"
                >
                  Yes, include me in the mailing list.
                </label>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => handleTermsChange(checked === true)}
                  className={cn(
                    "mt-0.5 flex-shrink-0",
                    errors.terms && "border-red-500 text-red-500"
                  )}
                />
                <div className="flex-1 min-w-0">
                  <label
                    htmlFor="terms"
                    className={cn(
                      "text-gray-700 text-xs sm:text-sm cursor-pointer leading-relaxed",
                      errors.terms && "text-red-500"
                    )}
                  >
                    I have read and agree to the&nbsp;
                    <a href="#" className="text-yellow-500 hover:underline">
                      Privacy Policy
                    </a>
                    &nbsp;and&nbsp;
                    <a href="#" className="text-yellow-500 hover:underline">
                      Terms &amp; Conditions
                    </a>
                    &nbsp;of RaffleRise.
                  </label>
                  {errors.terms && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.terms}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6">
              <Button
                variant="outline"
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 text-teal-700 border-teal-700 text-sm sm:text-base order-2 sm:order-1"
              >
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium text-sm sm:text-base order-1 sm:order-2"
              >
                <span className="flex items-center">
                  Create my Fundraising Page
                  <svg
                    className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
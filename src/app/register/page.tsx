"use client";

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  ChevronDown,
  Italic,
  List,
  ListOrdered,
  Redo,
  Underline as UnderlineIcon,
  Undo,
  Upload,
  User,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

// Define types for form data
interface FormData {
  firstName: string;
  lastName: string;
  pageTitle: string;
  email: string;
  password: string;
  confirmPassword: string;
  targetAmount: string;
  crowdfunderType: string;
  beneficiary: string;
  aboutRaffleRise: string;
  eircode: string;
  phoneNumber: string;
  coverImage: File | null;
  description: string;
  agreePromotion: boolean;
  agreeTerms: boolean;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  pageTitle?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  targetAmount?: string;
  crowdfunderType?: string;
  beneficiary?: string;
  aboutRaffleRise?: string;
  eircode?: string;
  phoneNumber?: string;
  coverImage?: string;
  description?: string;
  agreeTerms?: string;
}

type ErrorField = keyof Errors;

const CrowdfundingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    pageTitle: '',
    email: '',
    password: '',
    confirmPassword: '',
    targetAmount: '',
    crowdfunderType: '',
    beneficiary: '',
    aboutRaffleRise: '',
    eircode: '',
    phoneNumber: '',
    coverImage: null,
    description: '',
    agreePromotion: false,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Errors>({});
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();

  // Ensure component is mounted (client-side) before initializing editor
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize Tiptap editor only on client side
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: formData.description,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData((prev) => ({ ...prev, description: html }));
      // Clear error when user types
      if (errors.description) {
        setErrors((prev) => ({ ...prev, description: '' }));
      }
    },
    editorProps: {
      attributes: {
        class: 'min-h-32 p-4 focus:outline-none bg-yellow-50 prose prose-sm max-w-none',
      },
    },
    immediatelyRender: false,
  });

  // Sync editor content with formData on mount or reset
  useEffect(() => {
    if (editor && formData.description !== editor.getHTML()) {
      editor.commands.setContent(formData.description);
    }
  }, [editor, formData.description]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name as ErrorField]: '' }));
    }
  };

  const handleSelectChange = (name: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name as ErrorField]: '' }));
    }
  };

  const handleCheckboxChange = (name: keyof FormData, checked: boolean): void => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name as ErrorField]: '' }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5000000) {
        setErrors((prev) => ({ ...prev, coverImage: 'File size should be less than 5MB' }));
        return;
      }
      setFormData((prev) => ({ ...prev, coverImage: file }));
      setCoverImagePreview(URL.createObjectURL(file));
      if (errors.coverImage) {
        setErrors((prev) => ({ ...prev, coverImage: '' }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.pageTitle.trim()) newErrors.pageTitle = 'Page title is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.targetAmount) {
      newErrors.targetAmount = 'Target amount is required';
    } else if (isNaN(Number(formData.targetAmount)) || Number(formData.targetAmount) <= 0) {
      newErrors.targetAmount = 'Please enter a valid amount';
    }
    if (!formData.crowdfunderType) newErrors.crowdfunderType = 'Please select crowdfunder type';
    if (!formData.beneficiary) newErrors.beneficiary = 'Please select beneficiary';
    if (!formData.aboutRaffleRise) newErrors.aboutRaffleRise = 'Please tell us how you heard about RaffleRise';
    if (!formData.eircode.trim()) newErrors.eircode = 'Eircode is required';
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }
    if (!formData.coverImage) newErrors.coverImage = 'Cover image is required';
    if (!formData.description.trim() || formData.description === '<p></p>') newErrors.description = 'Description is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      // Console log all form values
      console.log('=== Form Submission Data ===');
      console.log('First Name:', formData.firstName);
      console.log('Last Name:', formData.lastName);
      console.log('Page Title:', formData.pageTitle);
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
      console.log('Confirm Password:', formData.confirmPassword);
      console.log('Target Amount:', formData.targetAmount);
      console.log('Crowdfunder Type:', formData.crowdfunderType);
      console.log('Beneficiary:', formData.beneficiary);
      console.log('About RaffleRise:', formData.aboutRaffleRise);
      console.log('Eircode:', formData.eircode);
      console.log('Phone Number:', formData.phoneNumber);
      console.log('Cover Image:', formData.coverImage?.name || 'No file');
      console.log('Description (HTML):', formData.description);
      console.log('Agree to Promotion:', formData.agreePromotion);
      console.log('Agree to Terms:', formData.agreeTerms);
      console.log('============================');

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push("/register-cause")
      }, 1000);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const focusInput = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.focus();
    }
  };

  // Editor toolbar handlers
  const setBold = useCallback(() => editor?.chain().focus().toggleBold().run(), [editor]);
  const setItalic = useCallback(() => editor?.chain().focus().toggleItalic().run(), [editor]);
  const setUnderline = useCallback(() => editor?.chain().focus().toggleUnderline().run(), [editor]);
  const setBulletList = useCallback(() => editor?.chain().focus().toggleBulletList().run(), [editor]);
  const setOrderedList = useCallback(() => editor?.chain().focus().toggleOrderedList().run(), [editor]);
  const setAlignLeft = useCallback(() => editor?.chain().focus().setTextAlign('left').run(), [editor]);
  const setAlignCenter = useCallback(() => editor?.chain().focus().setTextAlign('center').run(), [editor]);
  const setAlignRight = useCallback(() => editor?.chain().focus().setTextAlign('right').run(), [editor]);
  const setAlignJustify = useCallback(() => editor?.chain().focus().setTextAlign('justify').run(), [editor]);
  const undo = useCallback(() => editor?.chain().focus().undo().run(), [editor]);
  const redo = useCallback(() => editor?.chain().focus().redo().run(), [editor]);

  // Don't render editor until mounted to avoid SSR issues
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold">Your Details</span>
              <User className="w-5 h-5" />
            </div>
          </div>
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center items-center h-32">
                <p className="text-gray-600">Loading form...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#00715D] flex items-center justify-center px-8 py-32">
        <div className="w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white  leading-tight">
            Register your Crowdfunder
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Your platform of choice with minimal fees, exceptional support, and top class features. Start your crowdfunding project today.
          </p>
        </div>
      </div>


      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md">
              <span className="font-semibold">Your Details</span>
              <User className="w-5 h-5" />
            </div>
          </div>

          {showSuccess && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">
                Registration successful! Your crowdfunding page is being created.
              </AlertDescription>
            </Alert>
          )}

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 mb-2 block">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`bg-yellow-50 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter first name"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 mb-2 block">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`bg-yellow-50 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter last name"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Page Title */}
                <div>
                  <Label htmlFor="pageTitle" className="text-gray-700 mb-2 block">
                    Crowdfunding Page Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="pageTitle"
                    name="pageTitle"
                    value={formData.pageTitle}
                    onChange={handleInputChange}
                    className={`bg-yellow-50 border ${errors.pageTitle ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter page title"
                  />
                  {errors.pageTitle && <p className="text-red-500 text-sm mt-1">{errors.pageTitle}</p>}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-yellow-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password" className="text-gray-700 mb-2 block">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.password ? 'set' : ''} onValueChange={(val) => val === 'set' && focusInput('password')}>
                      <SelectTrigger className={`bg-yellow-50 w-full ${errors.password ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Set Password" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="set">Set Password</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className={`mt-2 bg-yellow-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter password"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword" className="text-gray-700 mb-2 block">
                      Confirm Password <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.confirmPassword ? 'set' : ''} onValueChange={(val) => val === 'set' && focusInput('confirmPassword')}>
                      <SelectTrigger className={`bg-yellow-50 w-full ${errors.confirmPassword ? 'border-red-500' : ''}`}>
                        <SelectValue placeholder="Confirm Password" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="set">Confirm Password</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`mt-2 bg-yellow-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Target Amount */}
                <div>
                  <Label htmlFor="targetAmount" className="text-gray-700 mb-2 block">
                    How much are you hoping to raise? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.targetAmount ? 'set' : ''} onValueChange={(val) => val === 'set' && focusInput('targetAmount')}>
                    <SelectTrigger className={`bg-yellow-50 w-full ${errors.targetAmount ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="How much are you hoping to raise?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="set">How much are you hoping to raise?</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="targetAmount"
                    name="targetAmount"
                    type="number"
                    value={formData.targetAmount}
                    onChange={handleInputChange}
                    className={`mt-2 bg-yellow-50 border ${errors.targetAmount ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter amount"
                  />
                  {errors.targetAmount && <p className="text-red-500 text-sm mt-1">{errors.targetAmount}</p>}
                </div>

                {/* Crowdfunder Type */}
                <div className="w-full">
                  <Label htmlFor="crowdfunderType" className="text-gray-700 mb-2">
                    Crowdfunder / Personal Fundraiser <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.crowdfunderType} onValueChange={(val) => handleSelectChange('crowdfunderType', val)}>
                    <SelectTrigger className={`bg-yellow-50 w-full ${errors.crowdfunderType ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Crowdfunder / Personal Fundraiser" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal Fundraiser</SelectItem>
                      <SelectItem value="crowdfunder">Crowdfunder</SelectItem>
                      <SelectItem value="charity">Charity Event</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.crowdfunderType && <p className="text-red-500 text-sm mt-1">{errors.crowdfunderType}</p>}
                </div>

                {/* Beneficiary */}
                <div>
                  <Label htmlFor="beneficiary" className="text-gray-700 mb-2 block">
                    Who is this Crowdfunder for? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.beneficiary} onValueChange={(val) => handleSelectChange('beneficiary', val)}>
                    <SelectTrigger className={`bg-yellow-50 w-full ${errors.beneficiary ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Who is this Crowdfunder for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="myself">Myself</SelectItem>
                      <SelectItem value="family">Family Member</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="organization">Organization</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.beneficiary && <p className="text-red-500 text-sm mt-1">{errors.beneficiary}</p>}
                </div>

                {/* Cover Image Upload */}
                <div>
                  <Label className="text-gray-700 mb-2 block">
                    Upload Cover Image: <span className="text-red-500">*</span>
                  </Label>
                  <div
                    className={`border-2 border-dashed ${errors.coverImage ? 'border-red-500' : 'border-gray-300'} rounded-lg p-8 text-center bg-yellow-50 cursor-pointer hover:bg-yellow-100 transition-colors`}
                  >
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" id="coverImage" />
                    <label htmlFor="coverImage" className="cursor-pointer">
                      {coverImagePreview ? (
                        <div>
                          <Image width={200} height={200} src={coverImagePreview} alt="Preview" className="max-h-48 mx-auto mb-4 rounded" />
                          <p className="text-sm text-gray-600">Click to change image</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-12 h-12 mx-auto mb-4 text-teal-600" />
                          <p className="font-semibold text-gray-700 mb-2">Upload Cover Image:</p>
                          <p className="text-sm text-gray-500 mb-1">Drag or Click to Upload</p>
                          <p className="text-xs text-gray-400 mt-4">This will appear at the top of your page.</p>
                          <p className="text-xs text-gray-400">We suggest choosing a photo that positively shows your reason for crowdfunding.</p>
                        </>
                      )}
                    </label>
                  </div>
                  {errors.coverImage && <p className="text-red-500 text-sm mt-1">{errors.coverImage}</p>}
                </div>

                {/* Description with Tiptap */}
                <div>
                  <Label htmlFor="description" className="text-gray-700 mb-2 block">
                    Write a brief description...
                  </Label>
                  <style>{`
                  .ProseMirror ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin: 0.5rem 0;
                  }
                  .ProseMirror ol {
                    list-style-type: decimal;
                    padding-left: 1.5rem;
                    margin: 0.5rem 0;
                  }
                  .ProseMirror li {
                    margin: 0.25rem 0;
                  }
                  .ProseMirror p {
                    margin: 0.5rem 0;
                  }
                `}</style>
                  <div className="border border-gray-300 rounded-lg overflow-hidden bg-yellow-50">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-white flex-wrap">
                      <button type="button" onClick={undo} className="p-2 hover:bg-gray-100 rounded" title="Undo">
                        <Undo className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={redo} className="p-2 hover:bg-gray-100 rounded" title="Redo">
                        <Redo className="w-4 h-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button type="button" onClick={setBold} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive('bold') ? 'bg-gray-200' : ''}`} title="Bold">
                        <Bold className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setItalic} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive('italic') ? 'bg-gray-200' : ''}`} title="Italic">
                        <Italic className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setUnderline} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive('underline') ? 'bg-gray-200' : ''}`} title="Underline">
                        <UnderlineIcon className="w-4 h-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button type="button" onClick={setBulletList} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive('bulletList') ? 'bg-gray-200' : ''}`} title="Bullet List">
                        <List className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setOrderedList} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive('orderedList') ? 'bg-gray-200' : ''}`} title="Numbered List">
                        <ListOrdered className="w-4 h-4" />
                      </button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <button type="button" onClick={setAlignLeft} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`} title="Align Left">
                        <AlignLeft className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setAlignCenter} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`} title="Align Center">
                        <AlignCenter className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setAlignRight} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`} title="Align Right">
                        <AlignRight className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={setAlignJustify} className={`p-2 hover:bg-gray-100 rounded ${editor?.isActive({ textAlign: 'justify' }) ? 'bg-gray-200' : ''}`} title="Justify">
                        <AlignJustify className="w-4 h-4" />
                      </button>
                    </div>
                    {/* Tiptap Editor */}
                    <EditorContent editor={editor} className="min-h-32" />
                  </div>
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                  <p className="text-sm text-gray-600 mt-2">
                    We will show this as your story on your page, and also use your information to decide on approving your Crowdfunder.
                    Please be as descriptive as you can: a clear, personalized description will encourage people to contribute generously.
                  </p>
                </div>

                {/* About RaffleRise */}
                <div>
                  <Label htmlFor="aboutRaffleRise" className="text-gray-700 mb-2 block">
                    Where did you hear about RaffleRise? <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.aboutRaffleRise} onValueChange={(val) => handleSelectChange('aboutRaffleRise', val)}>
                    <SelectTrigger className={`bg-yellow-50 w-full ${errors.aboutRaffleRise ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Where did you hear about RaffleRise?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.aboutRaffleRise && <p className="text-red-500 text-sm mt-1">{errors.aboutRaffleRise}</p>}
                </div>

                {/* Eircode and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eircode" className="text-gray-700 mb-2 block">
                      Eircode <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="eircode"
                      name="eircode"
                      value={formData.eircode}
                      onChange={handleInputChange}
                      className={`bg-yellow-50 border ${errors.eircode ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter eircode"
                    />
                    {errors.eircode && <p className="text-red-500 text-sm mt-1">{errors.eircode}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber" className="text-gray-700 mb-2 block">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex items-center gap-2">
                      <Select value="IE" onValueChange={() => { }}>
                        <SelectTrigger className={`bg-yellow-50 w-24 ${errors.phoneNumber ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder="+353" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="IE">Ireland (+353)</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`flex-1 bg-yellow-50 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter phone number"
                      />
                    </div>
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    <p className="text-sm text-gray-600 mt-1">We need your number and Eircode to help you in case you&apos;re in British. Resident</p>
                  </div>
                </div>

                {/* Promotion Checkbox */}
                <div>
                  <p className="text-sm text-gray-700 mb-4">
                    Occasionally iDonate may be in a position to offer Crowdfunders support with the promotion of their Crowdfunder.
                    If you would be interested in receiving extra promotion for your Crowdfunder, please tick &apos;yes&apos; below:
                  </p>
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agreePromotion"
                      checked={formData.agreePromotion}
                      onCheckedChange={(checked) => handleCheckboxChange('agreePromotion', checked as boolean)}
                    />
                    <Label htmlFor="agreePromotion" className="text-sm text-gray-700 cursor-pointer">
                      Yes
                    </Label>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div>
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange('agreeTerms', checked as boolean)}
                      className={errors.agreeTerms ? 'border-red-500' : ''}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                      I have read and agree to the{' '}
                      <a href="#" className="text-yellow-600 hover:underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-yellow-600 hover:underline">
                        Terms & Conditions
                      </a>
                      {' '}of RaffleRise.
                    </Label>
                  </div>
                  {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 text-lg rounded-lg transition-colors duration-200 shadow-md"
                  >
                    Register your Cause
                    <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default CrowdfundingForm;
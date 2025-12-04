"use client";

import { Button } from '@/components/ui/button';
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
  ChevronRight,
  Italic,
  List,
  ListOrdered,
  Redo,
  Sparkles,
  Underline as UnderlineIcon,
  Undo,
  Upload,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FormData {
  causeName: string;
  charityNumber: string;
  category: string;
  newDetails: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  country: string;
  employee: string;
  cityGuestEmail: string;
  guestPhoneNumber: string;
  coverImage: File | null;
  description: string;
}

interface StepProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: string | File | null) => void;
  setStep: (step: number) => void;
}

interface Step1FormProps extends StepProps {
  canProceed: boolean;
}

export default function Step1Form({ formData, updateField, setStep, canProceed }: Step1FormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Client-side mount check for Tiptap
  useEffect(() => {
    setIsMounted(true);
    if (formData.coverImage) {
      const url = URL.createObjectURL(formData.coverImage);
      setImagePreview(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [formData.coverImage]);

  // Initialize Tiptap editor
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
      updateField('description', html);
    },
    editorProps: {
      attributes: {
        class: 'min-h-[120px] p-3 bg-yellow-50/50 focus:outline-none resize-y',
      },
    },
    immediatelyRender: false,
  });

  // Sync external description changes into editor
  useEffect(() => {
    if (editor && formData.description !== editor.getHTML()) {
      editor.commands.setContent(formData.description);
    }
  }, [editor, formData.description]);

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      updateField('coverImage', file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleImageUpload(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleImageUpload(file);
  };

  const removeImage = () => {
    updateField('coverImage', null);
    setImagePreview(null);
  };

  // Tiptap toolbar handlers
  const setBold = () => editor?.chain().focus().toggleBold().run();
  const setItalic = () => editor?.chain().focus().toggleItalic().run();
  const setUnderline = () => editor?.chain().focus().toggleUnderline().run();
  const setBulletList = () => editor?.chain().focus().toggleBulletList().run();
  const setOrderedList = () => editor?.chain().focus().toggleOrderedList().run();
  const setAlignLeft = () => editor?.chain().focus().setTextAlign('left').run();
  const setAlignCenter = () => editor?.chain().focus().setTextAlign('center').run();
  const setAlignRight = () => editor?.chain().focus().setTextAlign('right').run();
  const setAlignJustify = () => editor?.chain().focus().setTextAlign('justify').run();
  const undo = () => editor?.chain().focus().undo().run();
  const redo = () => editor?.chain().focus().redo().run();

  if (!isMounted) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="bg-teal-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
            <span className="font-medium">Start</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2">Register Your Cause</h1>
        <p className="text-center text-gray-600 mb-8">Loading form...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-8 container w-full mx-auto">
      <div className="flex justify-center mb-6">
        <div className="bg-teal-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <span className="font-medium">Start</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-2">Register Your Cause</h1>
      <p className="text-center text-gray-600 mb-1">
        Please give cause/charity details below and click next step.
      </p>
      <p className="text-center text-gray-500 text-sm mb-8">
        You can add more details later.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="causeName">
              Cause Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="causeName"
              value={formData.causeName}
              onChange={(e) => updateField('causeName', e.target.value)}
              className="bg-yellow-50/50 mt-1"
            />
          </div>
          <div>
            <Label htmlFor="charityNumber">
              Charity Registration Number (if applicable)
            </Label>
            <Input
              id="charityNumber"
              value={formData.charityNumber}
              onChange={(e) => updateField('charityNumber', e.target.value)}
              className="bg-yellow-50/50 mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="category">
            Category <span className="text-red-500">*</span>
          </Label>
          <Select value={formData.category} onValueChange={(value) => updateField('category', value)}>
            <SelectTrigger className="bg-yellow-50/50 mt-1 py-5 w-full ">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="environment">Environment</SelectItem>
              <SelectItem value="animals">Animals</SelectItem>
              <SelectItem value="humanitarian">Humanitarian</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="newDetails">
            New Details <span className="text-red-500">*</span>
          </Label>
          <Input
            id="newDetails"
            value={formData.newDetails}
            onChange={(e) => updateField('newDetails', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div>
          <Label htmlFor="addressLine1">
            Address Line 1 <span className="text-red-500">*</span>
          </Label>
          <Input
            id="addressLine1"
            value={formData.addressLine1}
            onChange={(e) => updateField('addressLine1', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div>
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
            id="addressLine2"
            value={formData.addressLine2}
            onChange={(e) => updateField('addressLine2', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="town">
              Town <span className="text-red-500">*</span>
            </Label>
            <Input
              id="town"
              value={formData.town}
              onChange={(e) => updateField('town', e.target.value)}
              className="bg-yellow-50/50 mt-1 w-full"
            />
          </div>
          <div className=''>
            <Label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.country} onValueChange={(value) => updateField('country', value)}>
              <SelectTrigger className="bg-yellow-50/50 mt-1 w-full h-12 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className=''>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="employee">
              Employee <span className="text-red-500">*</span>
            </Label>
            <Select value={formData.employee} onValueChange={(value) => updateField('employee', value)}>
              <SelectTrigger className="bg-yellow-50/50 mt-1 w-full py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10</SelectItem>
                <SelectItem value="11-50">11-50</SelectItem>
                <SelectItem value="51-100">51-100</SelectItem>
                <SelectItem value="100+">100+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="cityGuestEmail">
              Charity/Guest/Place Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="cityGuestEmail"
              type="email"
              value={formData.cityGuestEmail}
              onChange={(e) => updateField('cityGuestEmail', e.target.value)}
              className="bg-yellow-50/50 mt-1"
            />
          </div>
          <div>
            <Label htmlFor="guestPhoneNumber">
              Charity/Guest/Place Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="guestPhoneNumber"
              type="tel"
              value={formData.guestPhoneNumber}
              onChange={(e) => updateField('guestPhoneNumber', e.target.value)}
              className="bg-yellow-50/50 mt-1"
            />
          </div>
        </div>

        {/* Cover Image Upload - Updated UI */}
        <div>
          <Label>Upload Cover Image:</Label>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center bg-yellow-50/30 mt-1 transition-colors ${isDragging ? 'border-yellow-500 bg-yellow-100/50' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {imagePreview ? (
              <div className="relative inline-block">
                <Image
                  width={150}
                  height={150}
                  src={imagePreview}
                  alt="Preview"
                  className="max-h-48 mx-auto rounded object-contain"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2"
                  onClick={removeImage}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <>
                <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                <h3 className="font-medium text-gray-700 mb-1">Upload Cover Image</h3>
                <p className="text-sm text-gray-500 mb-1">Drag & Drop to Upload</p>
                <p className="text-xs text-gray-400 mb-3">This will appear at the top of your page.</p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="coverImageInput"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById('coverImageInput')?.click()}
                >
                  Choose File
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  We Suggest: choosing actions that promote raising your mission for fundraising
                </p>
              </>
            )}
          </div>
        </div>

        {/* Description with Tiptap Editor */}
        <div>
          <Label htmlFor="description">Write a brief description...</Label>
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
          <div className="border border-gray-200 rounded-md overflow-hidden bg-yellow-50/50 mt-1">
            <div className="flex gap-1 border-b bg-gray-50 p-2 flex-wrap">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={undo}
                title="Undo"
              >
                <Undo className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={redo}
                title="Redo"
              >
                <Redo className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setBold}
                title="Bold"
              >
                <Bold className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setItalic}
                title="Italic"
              >
                <Italic className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setUnderline}
                title="Underline"
              >
                <UnderlineIcon className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setBulletList}
                title="Bullet List"
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setOrderedList}
                title="Numbered List"
              >
                <ListOrdered className="w-4 h-4" />
              </Button>
              <div className="w-px h-6 bg-gray-300 mx-1"></div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setAlignLeft}
                title="Align Left"
              >
                <AlignLeft className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setAlignCenter}
                title="Align Center"
              >
                <AlignCenter className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setAlignRight}
                title="Align Right"
              >
                <AlignRight className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-yellow-100"
                onClick={setAlignJustify}
                title="Justify"
              >
                <AlignJustify className="w-4 h-4" />
              </Button>
            </div>
            <EditorContent editor={editor} />
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={() => setStep(2)}
            disabled={!canProceed}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8"
          >
            Next Step <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
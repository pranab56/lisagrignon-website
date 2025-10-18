"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import TextAlign from '@tiptap/extension-text-align';
import UnderlineExt from '@tiptap/extension-underline';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ArrowRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo,
  Sparkles,
  Underline,
  Undo,
  Upload
} from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Step1FormData } from '../../app/raffles/page';

type Errors = {
  organizerName?: string;
  organizerEmail?: string;
  organizerPhone?: string;
  raffleName?: string;
  cause?: string;
  ticketSaleEndDate?: string;
  ticketSaleEndTime?: string;
  raffleImage?: string;
  raffleDescription?: string;
  prizeListDescription?: string;
};

interface Step1FormProps {
  onNext: (data: Step1FormData) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<Step1FormData>({
    organizerName: '',
    organizerEmail: '',
    organizerPhone: '',
    raffleName: '',
    targetAmount: '',
    cause: '',
    ticketSaleEndDate: '',
    ticketSaleEndTime: '',
    drawDate: '',
    raffleImage: null,
    raffleDescription: '',
    prizeListDescription: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const raffleEditor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, UnderlineExt, TextAlign.configure({ types: ['heading', 'paragraph'] })],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm focus:outline-none min-h-[100px] p-3',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(prev => ({ ...prev, raffleDescription: html }));
      if (errors.raffleDescription) {
        setErrors(prev => ({ ...prev, raffleDescription: '' }));
      }
    },
  });

  const prizeEditor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, UnderlineExt, TextAlign.configure({ types: ['heading', 'paragraph'] })],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm focus:outline-none min-h-[100px] p-3',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(prev => ({ ...prev, prizeListDescription: html }));
      if (errors.prizeListDescription) {
        setErrors(prev => ({ ...prev, prizeListDescription: '' }));
      }
    },
  });

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.organizerName.trim()) newErrors.organizerName = 'Organizer name is required';
    if (!formData.organizerEmail.trim()) {
      newErrors.organizerEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.organizerEmail)) {
      newErrors.organizerEmail = 'Please enter a valid email address';
    }
    if (!formData.organizerPhone.trim()) newErrors.organizerPhone = 'Phone number is required';
    if (!formData.raffleName.trim()) newErrors.raffleName = 'Raffle name is required';
    if (!formData.cause.trim()) newErrors.cause = 'Cause is required';
    if (!formData.ticketSaleEndDate.trim()) newErrors.ticketSaleEndDate = 'Ticket sale end date is required';
    if (!formData.ticketSaleEndTime.trim()) newErrors.ticketSaleEndTime = 'Ticket sale end time is required';
    if (!formData.raffleImage) newErrors.raffleImage = 'Raffle image is required';

    const raffleText = raffleEditor?.getText() || '';
    if (!raffleText.trim()) newErrors.raffleDescription = 'Raffle description is required';

    const prizeText = prizeEditor?.getText() || '';
    if (!prizeText.trim()) newErrors.prizeListDescription = 'Prize list description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (): void => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  const handleChange = (field: keyof Step1FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const errorField = field as keyof Errors;
    if (errors[errorField]) {
      setErrors((prev) => ({ ...prev, [errorField]: '' }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, raffleImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      if (errors.raffleImage) {
        setErrors(prev => ({ ...prev, raffleImage: '' }));
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, raffleImage: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      if (errors.raffleImage) {
        setErrors(prev => ({ ...prev, raffleImage: '' }));
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) return null;

    return (
      <div className="flex flex-wrap gap-1 p-2 bg-gray-50 rounded-t-lg border border-b-0">
        <button type="button" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${!editor.can().undo() ? 'opacity-30 cursor-not-allowed' : ''}`}>
          <Undo className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${!editor.can().redo() ? 'opacity-30 cursor-not-allowed' : ''}`}>
          <Redo className="w-4 h-4 text-gray-600" />
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button type="button" className="px-2 py-1.5 hover:bg-gray-200 rounded text-sm text-gray-600 transition-colors">
          Formats
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('bold') ? 'bg-gray-300' : ''}`}>
          <Bold className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('italic') ? 'bg-gray-300' : ''}`}>
          <Italic className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('underline') ? 'bg-gray-300' : ''}`}>
          <Underline className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('bulletList') ? 'bg-gray-300' : ''}`}>
          <List className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('orderedList') ? 'bg-gray-300' : ''}`}>
          <ListOrdered className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-300' : ''}`}>
          <AlignLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : ''}`}>
          <AlignCenter className="w-4 h-4 text-gray-600" />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-300' : ''}`}>
          <AlignRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    );
  };

  if (!raffleEditor || !prizeEditor) return null;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg inline-flex items-center gap-2 mb-6">
            Create Raffle <Sparkles className="w-4 h-4" />
          </Button>
        </div>

        <div className="bg-white rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 font-medium block mb-2">
                Name of Organizer <span className="text-red-500">*</span>
              </Label>
              <Input type="text" value={formData.organizerName}
                onChange={(e) => handleChange('organizerName', e.target.value)}
                className={errors.organizerName ? 'border-red-500' : ''} />
              {errors.organizerName && <p className="text-red-500 text-sm mt-1">{errors.organizerName}</p>}
            </div>
            <div>
              <Label className="text-gray-700 font-medium block mb-2">
                Email of Organizer <span className="text-red-500">*</span>
              </Label>
              <Input type="email" value={formData.organizerEmail}
                onChange={(e) => handleChange('organizerEmail', e.target.value)}
                className={errors.organizerEmail ? 'border-red-500' : ''} />
              {errors.organizerEmail && <p className="text-red-500 text-sm mt-1">{errors.organizerEmail}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 font-medium block mb-2">
                Phone Number of Organizer <span className="text-red-500">*</span>
              </Label>
              <Input type="tel" value={formData.organizerPhone}
                onChange={(e) => handleChange('organizerPhone', e.target.value)}
                className={errors.organizerPhone ? 'border-red-500' : ''} />
              {errors.organizerPhone && <p className="text-red-500 text-sm mt-1">{errors.organizerPhone}</p>}
            </div>
            <div>
              <Label className="text-gray-700 font-medium block mb-2">
                Name of Raffle <span className="text-red-500">*</span>
              </Label>
              <Input type="text" value={formData.raffleName}
                onChange={(e) => handleChange('raffleName', e.target.value)}
                className={errors.raffleName ? 'border-red-500' : ''} />
              {errors.raffleName && <p className="text-red-500 text-sm mt-1">{errors.raffleName}</p>}
            </div>
          </div>

          <div>
            <Label className="text-gray-700 font-medium block mb-2">Target Amount</Label>
            <Input type="text" value={formData.targetAmount}
              onChange={(e) => handleChange('targetAmount', e.target.value)} />
          </div>

          <div>
            <Label className="text-gray-700 font-medium block mb-2">
              Cause <span className="text-red-500">*</span>
            </Label>
            <Input type="text" value={formData.cause}
              onChange={(e) => handleChange('cause', e.target.value)}
              className={errors.cause ? 'border-red-500' : ''} />
            {errors.cause && <p className="text-red-500 text-sm mt-1">{errors.cause}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-gray-700 font-medium block mb-2">
                Ticket Sale End Date & Time <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input type="date" value={formData.ticketSaleEndDate}
                  onChange={(e) => handleChange('ticketSaleEndDate', e.target.value)}
                  className={`flex-1 ${errors.ticketSaleEndDate ? 'border-red-500' : ''}`} />
                <Input type="time" value={formData.ticketSaleEndTime}
                  onChange={(e) => handleChange('ticketSaleEndTime', e.target.value)}
                  className={`flex-1 ${errors.ticketSaleEndTime ? 'border-red-500' : ''}`} />
              </div>
              {(errors.ticketSaleEndDate || errors.ticketSaleEndTime) && (
                <p className="text-red-500 text-sm mt-1">{errors.ticketSaleEndDate || errors.ticketSaleEndTime}</p>
              )}
            </div>
            <div>
              <Label className="text-gray-700 font-medium block mb-2">Draw Date (If Known)</Label>
              <Input type="date" value={formData.drawDate}
                onChange={(e) => handleChange('drawDate', e.target.value)} />
            </div>
          </div>

          <div>
            <div onDrop={handleDrop} onDragOver={handleDragOver}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:border-teal-500 transition-colors ${errors.raffleImage ? 'border-red-500' : 'border-gray-300'}`}>
              {imagePreview ? (
                <Image src={imagePreview} alt="Preview" width={200} height={200} className="max-h-48 mx-auto rounded" />
              ) : (
                <>
                  <Upload className="w-12 h-12 mx-auto text-teal-600 mb-3" />
                  <p className="text-gray-700 font-medium mb-1">Upload Raffle Image:</p>
                  <p className="text-gray-500 text-sm">Drag or Click to Upload</p>
                </>
              )}
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>
            {errors.raffleImage && <p className="text-red-500 text-sm mt-1">{errors.raffleImage}</p>}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg mb-3">
              <span className="font-medium text-sm">Raffle Description</span>
            </div>
            <Label className="text-gray-700 font-medium block mb-2">Write a brief description...</Label>
            <EditorToolbar editor={raffleEditor} />
            <div className={`border rounded-b-lg ${errors.raffleDescription ? 'border-red-500' : 'border-gray-300'}`}>
              <EditorContent editor={raffleEditor} />
            </div>
            {errors.raffleDescription && <p className="text-red-500 text-sm mt-1">{errors.raffleDescription}</p>}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-3 py-1.5 rounded-lg mb-3">
              <span className="font-medium text-sm">List of Prizes</span>
            </div>
            <Label className="text-gray-700 font-medium block mb-2">Write a brief description...</Label>
            <EditorToolbar editor={prizeEditor} />
            <div className={`border rounded-b-lg ${errors.prizeListDescription ? 'border-red-500' : 'border-gray-300'}`}>
              <EditorContent editor={prizeEditor} />
            </div>
            {errors.prizeListDescription && <p className="text-red-500 text-sm mt-1">{errors.prizeListDescription}</p>}
          </div>

          <div className="flex justify-center pt-4">
            <Button onClick={handleNext}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-6 rounded-lg transition-all duration-200 flex items-center gap-2">
              Next Step <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ProseMirror { min-height: 100px; outline: none; }
        .ProseMirror p { margin: 0.5rem 0; }
        .ProseMirror ul { list-style-type: disc; padding-left: 1.5rem; margin: 0.5rem 0; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
        .ProseMirror li { margin: 0.25rem 0; display: list-item; }
        .ProseMirror li p { margin: 0; }
        .ProseMirror strong { font-weight: bold; }
        .ProseMirror em { font-style: italic; }
        .ProseMirror u { text-decoration: underline; }
        .ProseMirror [style*="text-align: center"] { text-align: center; }
        .ProseMirror [style*="text-align: right"] { text-align: right; }
        .ProseMirror [style*="text-align: left"] { text-align: left; }
        .ProseMirror:focus { outline: none; }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: "Write a brief description...";
          color: #9ca3af;
          pointer-events: none;
          height: 0;
          float: left;
        }
      `}</style>
    </div>
  );
};

export default Step1Form;
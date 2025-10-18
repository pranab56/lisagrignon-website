"use client";

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import TextAlign from '@tiptap/extension-text-align';
import TiptapUnderline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
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
  Underline as UnderlineIcon,
  Undo
} from 'lucide-react';
import React, { useState } from 'react';

// Define types
type FormData = {
  name: string;
  email: string;
  queryType: string;
  subject: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  queryType?: string;
  subject?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    queryType: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Initialize Tiptap editor
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      TiptapUnderline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none min-h-[100px] sm:min-h-[120px] md:min-h-[150px] p-2 sm:p-3 md:p-4',
      },
    },
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setFormData(prev => ({ ...prev, message: html }));
      if (errors.message) {
        setErrors(prev => ({ ...prev, message: '' }));
      }
    },
  });

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.queryType) {
      newErrors.queryType = 'Please select a query type';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    const textContent = editor?.getText() || '';
    if (!textContent.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (): void => {
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          queryType: '',
          subject: '',
          message: ''
        });
        editor?.commands.clearContent();
        setSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (field: keyof FormData, value: string): void => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="text-center text-white bg-[#00715D] flex justify-center items-center flex-col px-3 sm:px-4 md:px-6 w-full h-48 sm:h-56 md:h-64 lg:h-80">
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-3 md:mb-4">
          <span className="text-xs sm:text-sm md:text-base font-medium">Quick Support</span>
          <span className="text-sm sm:text-base md:text-lg">😊</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-2 sm:px-4 leading-tight">
          Need Assistance? We&#39;re Just a Click Away!
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div className="text-center mb-4 sm:mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 bg-teal-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-2 sm:mb-3 md:mb-4">
                <span className="font-medium text-xs sm:text-sm md:text-base">Contact Us</span>
                <span className="text-sm">✨</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                Let&#39;s Start the Conversation
              </h2>
            </div>

            {submitted && (
              <Alert className="mb-3 sm:mb-4 md:mb-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800 text-sm sm:text-base">
                  Thank you! Your message has been submitted successfully.
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium block mb-1 sm:mb-1.5 text-sm sm:text-base">
                  Your Name? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full text-sm sm:text-base ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium block mb-1 sm:mb-1.5 text-sm sm:text-base">
                  Your Email Address? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full text-sm sm:text-base ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Query Type Field */}
              <div>
                <Label htmlFor="queryType" className="text-gray-700 font-medium block mb-1 sm:mb-1.5 text-sm sm:text-base">
                  Type of Query? <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.queryType}
                  onValueChange={(value) => handleChange('queryType', value)}
                >
                  <SelectTrigger className={`w-full text-sm sm:text-base ${errors.queryType ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select query type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general" className="text-sm sm:text-base">General Inquiry</SelectItem>
                    <SelectItem value="support" className="text-sm sm:text-base">Technical Support</SelectItem>
                    <SelectItem value="billing" className="text-sm sm:text-base">Billing Question</SelectItem>
                    <SelectItem value="feedback" className="text-sm sm:text-base">Feedback</SelectItem>
                    <SelectItem value="other" className="text-sm sm:text-base">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.queryType && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.queryType}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium block mb-1 sm:mb-1.5 text-sm sm:text-base">
                  Subject? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  className={`w-full text-sm sm:text-base ${errors.subject ? 'border-red-500' : ''}`}
                  placeholder="Enter subject"
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <Label className="text-gray-700 font-medium block mb-1 sm:mb-1.5 text-sm sm:text-base">
                  Write a Message? <span className="text-red-500">*</span>
                </Label>

                {/* Tiptap Editor Toolbar */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 p-2 sm:p-2.5 md:p-3 bg-gray-50 rounded-t-lg border border-b-0">
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${!editor.can().undo() ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                    aria-label="Undo"
                  >
                    <Undo className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${!editor.can().redo() ? 'opacity-30 cursor-not-allowed' : ''
                      }`}
                    aria-label="Redo"
                  >
                    <Redo className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <div className="w-px bg-gray-300 mx-0.5 sm:mx-1" />
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('bold') ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Bold"
                  >
                    <Bold className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('italic') ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Italic"
                  >
                    <Italic className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('underline') ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Underline"
                  >
                    <UnderlineIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('bulletList') ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Bullet list"
                  >
                    <List className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive('orderedList') ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Numbered list"
                  >
                    <ListOrdered className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Align left"
                  >
                    <AlignLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Align center"
                  >
                    <AlignCenter className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`p-1 sm:p-1.5 hover:bg-gray-200 rounded transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-300' : ''
                      }`}
                    aria-label="Align right"
                  >
                    <AlignRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-600" />
                  </button>
                </div>

                {/* Tiptap Editor Content */}
                <div className={`border rounded-b-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}>
                  <EditorContent editor={editor} />
                </div>

                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 bg-primary text-gray-900 font-semibold px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg mx-auto"
              >
                Submit
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .ProseMirror {
          min-height: 100px;
          outline: none;
        }
        
        @media (min-width: 640px) {
          .ProseMirror {
            min-height: 120px;
          }
        }
        
        @media (min-width: 768px) {
          .ProseMirror {
            min-height: 150px;
          }
        }
        
        .ProseMirror p {
          margin: 0.5rem 0;
        }
        
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
          display: list-item;
        }
        
        .ProseMirror li p {
          margin: 0;
        }
        
        .ProseMirror strong {
          font-weight: bold;
        }
        
        .ProseMirror em {
          font-style: italic;
        }
        
        .ProseMirror u {
          text-decoration: underline;
        }
        
        .ProseMirror [style*="text-align: center"] {
          text-align: center;
        }
        
        .ProseMirror [style*="text-align: right"] {
          text-align: right;
        }
        
        .ProseMirror [style*="text-align: left"] {
          text-align: left;
        }
        
        .ProseMirror:focus {
          outline: none;
        }
        
        .ProseMirror p.is-editor-empty:first-child::before {
          content: "Type your message here...";
          color: #9ca3af;
          pointer-events: none;
          height: 0;
          float: left;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
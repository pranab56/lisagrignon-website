"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  label: string;
}

interface FAQsByCategory {
  [key: string]: FAQItem[];
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const categories: Category[] = [
    { id: 'general', label: 'General' },
    { id: 'product', label: 'Product Features' },
    { id: 'support', label: 'Support' },
    { id: 'security', label: 'Security' },
  ];

  const faqsByCategory: FAQsByCategory = {
    general: [
      {
        question: "How do I set up a fundraising page for my school?",
        answer: "Setting up a fundraising page is easy. Simply register your school here, and once approved, you'll be able to create a customised page for your campaign in minutes."
      },
      {
        question: "What types of schools can use RaffleRise?",
        answer: "RaffleRise is suitable for Primary, Secondary, and Third Level educational institutions across Ireland."
      },
      {
        question: "How long does approval take?",
        answer: "School approval typically takes 24-48 hours. Our team reviews each application to ensure security and compliance."
      },
      {
        question: "Is there a minimum fundraising amount?",
        answer: "No, there is no minimum fundraising amount. Whether you're raising €100 or €10,000, RaffleRise supports your goals."
      },
      {
        question: "Can we run multiple campaigns at once?",
        answer: "Yes, schools can run multiple fundraising campaigns simultaneously on the platform."
      }
    ],
    product: [
      {
        question: "What fundraising tools are available?",
        answer: "RaffleRise offers online raffles, donation pages, event pages, and custom fundraising campaigns tailored to your school's needs."
      },
      {
        question: "Can we customize our fundraising page?",
        answer: "Yes, you can fully customize your page with your school logo, colors, images, and campaign story to match your branding."
      },
      {
        question: "Does the platform support mobile donations?",
        answer: "Absolutely! Our platform is fully responsive and optimized for mobile devices, making it easy for supporters to donate on the go."
      },
      {
        question: "Can we track donations in real-time?",
        answer: "Yes, you'll have access to a dashboard showing real-time donation tracking, supporter information, and campaign analytics."
      },
      {
        question: "Are there templates for different fundraising events?",
        answer: "Yes, we provide templates for various events including fun runs, Strictly Come Dancing, raffles, and general donation campaigns."
      }
    ],
    support: [
      {
        question: "What support do you provide to schools?",
        answer: "We offer comprehensive support including setup assistance, campaign guidance, technical support, and best practice advice to maximize your fundraising success."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our support team via email, phone, or live chat. We typically respond within 2 hours during business hours."
      },
      {
        question: "Do you provide training for school staff?",
        answer: "Yes, we offer free training sessions and video tutorials to help your staff effectively use the platform and manage campaigns."
      },
      {
        question: "What happens if we encounter technical issues?",
        answer: "Our technical support team is available to resolve any issues quickly. We also provide detailed documentation and troubleshooting guides."
      },
      {
        question: "Can you help us promote our fundraiser?",
        answer: "Yes, we provide marketing resources, social media templates, and promotional tips to help you reach more supporters."
      }
    ],
    security: [
      {
        question: "Is my school's data secure?",
        answer: "Yes, we use bank-level encryption and comply with GDPR regulations to ensure all school and donor data is completely secure."
      },
      {
        question: "How are payments processed?",
        answer: "All payments are processed through secure, PCI-compliant payment gateways. We never store credit card information on our servers."
      },
      {
        question: "What fraud prevention measures are in place?",
        answer: "We implement advanced fraud detection systems, secure authentication, and regular security audits to protect against fraudulent activities."
      },
      {
        question: "Who has access to donation information?",
        answer: "Only authorized school administrators have access to donation data. We maintain strict access controls and audit logs."
      },
      {
        question: "Are funds held securely before transfer?",
        answer: "Yes, all funds are held in secure, segregated accounts and transferred directly to your school's bank account on the agreed schedule."
      }
    ]
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-teal-700 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg mb-4 sm:mb-6 md:mb-8">
            <span className="font-semibold text-sm sm:text-base md:text-lg">Discover</span>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full"></div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Sidebar Categories - Mobile Horizontal Scroll */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col gap-1 sm:gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex-shrink-0 lg:w-full text-left px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-lg font-medium transition-all text-xs sm:text-sm md:text-base ${activeCategory === category.id
                    ? 'bg-teal-50 text-gray-900 border border-teal-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-9">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-2 sm:space-y-3 md:space-y-4"
              key={activeCategory}
            >
              {faqsByCategory[activeCategory].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-xs sm:shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hover:no-underline text-left font-medium text-gray-900 text-sm sm:text-base md:text-lg hover:bg-gray-50 rounded-lg transition-colors">
                    <span className="text-left pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Mobile Category Indicator */}
        <div className="lg:hidden mt-4 text-center">
          <p className="text-xs text-gray-500">
            Showing {categories.find(cat => cat.id === activeCategory)?.label} questions
          </p>
        </div>
      </div>
    </div>
  );
}
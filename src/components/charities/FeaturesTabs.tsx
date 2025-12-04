"use client";

import { useState } from 'react';
import CharitiesTab from './TabsComponents/CharitiesTab';
import CorporatesTab from './TabsComponents/CorporatesTab';
import CrowdfundersTab from './TabsComponents/CrowdfundersTab';
import FundraisersTab from './TabsComponents/FundraisersTab';
import PoliticiansTab from './TabsComponents/PoliticiansTab';

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState('charities');

  const tabs = [
    { id: 'charities', label: 'Charities/Causes', component: CharitiesTab },
    { id: 'fundraisers', label: 'Fundraisers', component: FundraisersTab },
    { id: 'crowdfunders', label: "Crowdfunder's", component: CrowdfundersTab },
    { id: 'politicians', label: 'Politicians', component: PoliticiansTab },
    { id: 'corporates', label: 'Corporates', component: CorporatesTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="py-6 xs:py-8 sm:py-12 lg:py-16 xl:py-20 px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 xs:-top-15 xs:-right-15 sm:-top-20 sm:-right-20 md:-top-30 md:-right-30 lg:-top-40 lg:-right-40 w-20 h-20 xs:w-30 xs:h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl xs:blur-2xl sm:blur-3xl opacity-20 xs:opacity-25 sm:opacity-30 animate-blob"></div>
        <div className="absolute -bottom-10 -left-10 xs:-bottom-15 xs:-left-15 sm:-bottom-20 sm:-left-20 md:-bottom-30 md:-left-30 lg:-bottom-40 lg:-left-40 w-20 h-20 xs:w-30 xs:h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl xs:blur-2xl sm:blur-3xl opacity-20 xs:opacity-25 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 xs:w-30 xs:h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl xs:blur-2xl sm:blur-3xl opacity-20 xs:opacity-25 sm:opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 sm:mb-8 animate-fade-in leading-tight xs:leading-snug sm:leading-tight">
            Show me features for...
          </h1>

          {/* Tab Navigation with Glass Effect */}
          <div className="inline-flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 p-1.5 xs:p-2 sm:p-3 md:p-4 bg-white/40 backdrop-blur-lg rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/60 shadow-md sm:shadow-lg lg:shadow-xl max-w-full w-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 sm:py-3 rounded-md xs:rounded-lg sm:rounded-xl cursor-pointer font-medium text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 animate-slide-up flex-1 min-w-[80px] xs:min-w-[100px] sm:min-w-[120px] md:min-w-[140px] ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg shadow-teal-700/30 hover:from-teal-700 hover:to-teal-800'
                  : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:shadow-md border border-gray-200/50'
                  }`}
              >
                <span className="truncate block">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area with Glass Card */}
        <div className="px-1 xs:px-2 sm:px-0">
          <div className="bg-white/50 backdrop-blur-lg rounded-xl xs:rounded-2xl sm:rounded-3xl border border-white/60 p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transform transition-all duration-500 animate-fade-in-up shadow-sm sm:shadow-md lg:shadow-lg">
            {ActiveComponent && <ActiveComponent />}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out backwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 480px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }

        @media (max-width: 360px) {
          .container {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
        }

        /* Improved touch targets for mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px; /* Minimum touch target size */
          }
        }

        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-fade-in,
          .animate-slide-up,
          .animate-fade-in-up {
            animation: none;
          }
          
          .transform {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
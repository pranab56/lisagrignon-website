"use client";

import { useState } from 'react';
import Crowdfunder from './Crowdfunder';
import CharitiesCauses from './CharitiesCauses';


export default function PricingTabs() {
  const [activeTab, setActiveTab] = useState("Crowdfunder's");

  const tabs = [
    { id: "Crowdfunder's", label: "Crowdfunder's", component: Crowdfunder },
    { id: 'Charities/Causes', label: 'Charities/Causes' , component: CharitiesCauses },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-3 xs:px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-2xl font-medium text-gray-900 mb-6 sm:mb-8 animate-fade-in">
            Select a Tab Below Which Best Describes You.
          </h1>

          {/* Tab Navigation with Glass Effect */}
          <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/40 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-white/60 shadow-lg sm:shadow-xl max-w-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{ animationDelay: `${index * 100}ms` }}
                className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg sm:rounded-xl cursor-pointer font-medium text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 animate-slide-up whitespace-nowrap flex-1 min-w-[120px] sm:min-w-0 ${activeTab === tab.id
                    ? 'bg-teal-700 text-white shadow-lg shadow-teal-700/30'
                    : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:shadow-md'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area with Glass Card */}
        <div className="px-2 sm:px-0">
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/60 p-4 sm:p-6 md:p-8 lg:p-12 transform transition-all duration-500 animate-fade-in-up">
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
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 360px) {
          .container {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
"use client";

import { ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../../components/ui/badge';

interface StepSection {
  subtitle: string;
  items: string[];
}

interface Step {
  number: string;
  title: string;
  description: string;
  items?: string[];
  sections?: StepSection[];
  footer?: string;
  button?: string;
}

interface TabContent {
  subtitle: string;
  title: string;
  description: string;
  steps: Step[];
}

interface ContentType {
  [key: string]: TabContent;
}

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<string>('crowdfunder');

  const tabs = [
    { id: 'crowdfunder', label: 'Crowdfunder' },
    { id: 'fundraiser', label: 'Fundraiser' },
    { id: 'charity', label: 'Charity/Cause' }
  ];

  const content: ContentType = {
    crowdfunder: {
      subtitle: '"I want to raise funds for myself, my family, or a friend."',
      title: "How It Works for Crowdfunder's",
      description: 'Individuals collectively support other individuals, helping family, friends, or communities achieve big goals with each contribution.',
      steps: [
        {
          number: '1',
          title: 'Create a Crowdfunder Page',
          description: 'Start your fundraising campaign with ease by following our user-defined process.',
          items: [
            'Create your crowdfunding page',
            'Follow the simple steps to create your crowdfunding page',
            'Verify your email to move on to step 2'
          ],
          button: 'Create Crowdfunder Page'
        },
        {
          number: '2',
          title: 'Verification',
          description: 'We need to verify some details before approving your page.',
          items: [
            'Upload an Irish photo ID (e.g. passport/driver\'s license).',
            'Take a selfie in order to verify against your ID.',
            'Upload a profile photo and cover photo.',
            'Ensure a clear Crowdfunder description.'
          ],
          footer: 'You can choose a password and custom URL for your page.'
        },
        {
          number: '3',
          title: 'Personalise',
          description: 'Here you can get creative and make the page your own.',
          items: [
            'We have a library of themes you can choose from to make your page unique.',
            'Remember, the more detail and images the better your crowdfunding page will perform!'
          ]
        },
        {
          number: '4',
          title: 'Approval',
          description: 'Once all three steps above are completed we will send you an approval email.',
          items: [
            'Click the link and you are ready to start fundraising!'
          ],
          footer: 'Don\'t forget to click the share button to share your crowdfunding page on social media channels!'
        }
      ]
    },
    fundraiser: {
      subtitle: '"I want to raise money for a cause or charity that is already registered on RaffleRise."',
      title: 'How It Works for Fundraisers',
      description: 'You can take part in an event, celebrate an occasion, setup an In Memory page, or start your own fundraise',
      steps: [
        {
          number: '1',
          title: 'Create a Fundraising Page',
          description: 'Start a page for a registered cause or charity on RaffleRise, sharing your story and goal to rally support.',
          items: [
            'Create your fundraising Page',
            'Choose the charity/cause you want to fundraise for',
            'You can choose between a simple fundraiser, event, memorial or a celebration',
            'Enter your fundraising page title. This will be viewed by the public',
            'Enter your fundraising target. Don\'t worry, this amount can be changed later on.',
            'Once approved, move on to step 2.'
          ],
          footer: 'We need to verify some details before approving your page.',
          button: 'Create Crowdfunder Page'
        },
        {
          number: '2',
          title: 'Personalize',
          description: 'Now enhance your fundraising page: add a profile picture, banner, or theme to make it shine.'
        },
        {
          number: '3',
          title: 'Email',
          description: 'Set up your email address so you can get alerts and we can contact you when the need arises.'
        },
        {
          number: '4',
          title: 'Finalise Your Details',
          description: 'Set up a name, password, and customize your fundraiser\'s URL for your page.'
        }
      ]
    },
    charity: {
      subtitle: '"I want to register my charity/school/sports club, etc. and start accepting donations."',
      title: 'How It Works for Charities/Causes',
      description: 'Charities/Causes, when registered on iDonate, can create their own Fundraising Pages, Events, Raffles, etc. You can also have members of the public create fundraisers on their behalf.',
      steps: [
        {
          number: '1',
          title: 'Register Your Charity',
          description: 'Start a page for a registered cause or charity on RaffleRise, sharing your story and goal to rally support.',
          items: [
            'Register your charity'
          ],
          footer: 'All charities and causes must register with RaffleRise.\n\nOnce verified, you can start accepting donations.',
          button: 'Register Charity'
        },
        {
          number: '1',
          title: 'Registration Options',
          description: 'You must choose between \'Once-Off Fundraising\' or \'Ongoing Fundraising\'.',
          sections: [
            {
              subtitle: 'Once-Off Fundraising',
              items: [
                'I need a one-time fundraising page',
                'I am raising funds for a personal cause/local cause',
                'This page acts as a typical fundraising page (Total amount donated, donor names, money donated, messages from donors, etc.)'
              ]
            },
            {
              subtitle: 'Ongoing Fundraising',
              items: [
                'I am a charity, sports club, school or group',
                'This is a cause profile page, this will not show total amount raised, messages from donors, etc.',
                'This will act as a benefactor page where people can create fundraising pages from'
              ]
            }
          ]
        },
        {
          number: '3',
          title: 'Activate Your Account',
          description: 'You will have access to your Control Panel, when you have fully registered.',
          footer: 'Control Panel: This is a dashboard personal to you which allows you to edit cause details, images, website links, social media.'
        }
      ]
    }
  };

  const currentContent = content[activeTab];

  return (
    <>
      <div className="min-h-[50vh] bg-[#00715D] flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <Badge className="bg-gray-900 text-white hover:bg-gray-800 mb-8 px-6 py-2 text-base rounded-full">
            Who We Are 🎯 RaffleRise
          </Badge>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            About Us
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-teal-50 font-medium">
            Making Giving Easier
          </p>

        </div>
      </div>
      <div className="container mx-auto pt-10">
        {/* Header */}
        <div className="text-center mb-12">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-md mb-6 transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2">
            Choose Your Impact 🌟
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            How It Works - Making a Difference
          </h1>

          <p className="text-teal-700 mb-6 font-medium">Who are you...?</p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md font-medium cursor-pointer transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-teal-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-600 italic">{currentContent.subtitle}</p>
        </div>

        {/* Content Section */}
        <div className="mb-12 animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            {currentContent.title}
          </h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6 ">
          {currentContent.steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-teal-700 text-3xl font-bold mb-4">{step.number}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>

              <p className="text-gray-600 text-sm mb-6">{step.description}</p>

              {step.items && (
                <ul className="space-y-3 mb-6">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-gray-400" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {step.sections && (
                <div className="space-y-6 mb-6">
                  {step.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-900 mb-3">{section.subtitle}</h4>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 text-gray-400" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {step.button && (
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 group">
                  {step.button}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              {step.footer && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 whitespace-pre-line">{step.footer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default HowItWorks;
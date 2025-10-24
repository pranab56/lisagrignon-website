"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const quickLinks2 = [
    {
      id: 1,
      name: 'Start Fundraising',
      href: '/fundraising'
    },
    {
      id: 2,
      name: 'Register Cause',
      href: '/register-cause'
    },
    {
      id: 3,
      name: 'Raffles',
      href: '/raffles/ongoing'
    },
    {
      id: 4,
      name: 'Success Stories',
      href: '/success-story'
    }
  ]

  const aboutLinks = [
    {
      id: 1,
      name: 'Who We Are',
      href: '/who-are-you'
    },
    {
      id: 2,
      name: 'How It Works',
      href: '/how-its-works'
    },
    {
      id: 3,
      name: 'Blog',
      href: '/blogs'
    },
    {
      id: 4,
      name: 'Contact Us',
      href: '/contact'
    }
  ]

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', heref: 'https://www.facebook.com/' },
    { icon: Linkedin, label: 'LinkedIn', heref: 'https://www.linkedin.com/' },
    { icon: Instagram, label: 'Instagram', heref: 'https://www.instagram.com/' },
    { icon: Twitter, label: 'Twitter', heref: 'https://www.twitter.com/' },
  ];

  // const policyLinks = ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'];
  const policyLinks = [
    {
      id: 1,
      name: 'Terms & Conditions',
      href: '/terms-conditions'
    },
    {
      id: 2,
      name: 'Win and Give',
      href: '/win-give'
    },
    {
      id: 3,
      name: 'Why Choose US',
      href: '/whychoose'
    },
    {
      id: 4,
      name: 'Privacy Policy',
      href: '/privacy-policy'
    }
  ]


  return (
    <footer className="bg-slate-900 text-white rounded-t-4xl">
      {/* Contact Form Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 lg:mb-8">Get In Touch</h2>

          {submitStatus === 'success' && (
            <Alert className="mb-6 bg-green-900 border-green-700">
              <AlertDescription className="text-green-100">
                Thank you! Your message has been sent successfully.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 ${errors.name ? 'border-red-500' : ''
                  }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 ${errors.email ? 'border-red-500' : ''
                  }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">Message</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-3 py-2 bg-slate-800 border rounded-md text-white placeholder:text-slate-400 ${errors.message ? 'border-red-500' : 'border-slate-700'
                  } focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold py-3"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-900 rounded-full border-4 border-yellow-500"></div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4 lg:mb-6 leading-relaxed">
                Safety and security don&apos;t just happen; they are the result of collective consensus and public investment.
              </p>
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">(406) 555-0120</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">jessica.hanson@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-yellow-500 transition-colors cursor-pointer">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">8502 Preston Rd. Inglewood...</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">Quick Links</h3>
              <ul className="space-y-2 lg:space-y-3">
                {quickLinks2.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-slate-300 hover:text-yellow-500 transition-colors text-sm sm:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">About Us</h3>
              <ul className="space-y-2 lg:space-y-3">
                {aboutLinks.map((link) => (
                  <li key={link.id}>
                    <Link href={link.href} className="text-slate-300 hover:text-yellow-500 transition-colors text-sm sm:text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe & Secure */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 lg:mb-6">Safe & Secure</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Safety and security don&apos;t just happen; they are the result of collective consensus and public investment. We owe our children the most vulnerable citizens in our society, a life free of violence and fear. Precaution is better than cure. The way to be safe is never to be secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 lg:gap-6">
            {/* Copyright */}
            <p className="text-slate-400 text-sm text-center md:text-left order-2 md:order-1">
              © 2025 RaffleRise - All rights reserved
            </p>

            {/* Social Links */}
            <div className="flex gap-3 lg:gap-4 order-1 md:order-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.heref}
                  className="text-teal-500 hover:text-teal-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              ))}
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm order-3">
              {policyLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-yellow-500 hover:text-yellow-400 transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
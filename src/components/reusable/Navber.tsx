'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  ArrowRight,
  Briefcase,
  Club,
  DollarSign,
  HeartHandshake,
  Menu,
  School,
  Search,
  Trophy,
  X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const AboutDropdownContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      <div>
        <h3 className="text-sm font-medium text-purple-600 mb-2 border-b pb-1.5">iDonate For</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/charities"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HeartHandshake className="h-4 w-4 text-gray-500" />
              <span>Charities & Causes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/fundraising"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HeartHandshake className="h-4 w-4 text-gray-500" />
              <span>Fundraising</span>
            </Link>
          </li>
          <li>
            <Link
              href="/schools"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <School className="h-4 w-4 text-gray-500" />
              <span>Schools</span>
            </Link>
          </li>
          <li>
            <Link
              href="/clubs"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Club className="h-4 w-4 text-gray-500" />
              <span>Clubs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/corporates"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Briefcase className="h-4 w-4 text-gray-500" />
              <span>Corporates</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium text-purple-600 mb-2 border-b pb-1.5">Tools</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/stories"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Trophy className="h-4 w-4 text-gray-500" />
              <span>Success Stories</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const FeaturesDropdownContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
      <div>
        <h3 className="text-sm font-medium text-purple-600 mb-2 border-b pb-1.5">iDonate For</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/charities"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HeartHandshake className="h-4 w-4 text-gray-500" />
              <span>Charities & Causes</span>
            </Link>
          </li>
          <li>
            <Link
              href="/fundraising"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HeartHandshake className="h-4 w-4 text-gray-500" />
              <span>Fundraising</span>
            </Link>
          </li>
          <li>
            <Link
              href="/schools"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <School className="h-4 w-4 text-gray-500" />
              <span>Schools</span>
            </Link>
          </li>
          <li>
            <Link
              href="/clubs"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Club className="h-4 w-4 text-gray-500" />
              <span>Clubs</span>
            </Link>
          </li>
          <li>
            <Link
              href="/corporates"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Briefcase className="h-4 w-4 text-gray-500" />
              <span>Corporates</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium text-purple-600 mb-2 border-b pb-1.5">Tools</h3>
        <ul className="space-y-2">
          <li>
            <Link
              href="/pricing"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link
              href="/stories"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Trophy className="h-4 w-4 text-gray-500" />
              <span>Success Stories</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <nav className="bg-white border-b select-none border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/logo.png"
              alt="website logo"
              height={60}
              width={60}
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center outline-0 space-x-1 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors">
                <span className="select-none">About</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-full p-4 bg-white shadow-lg border border-gray-200 rounded-md mt-2 min-w-[400px]"
              align="start"
              sideOffset={10}
            >
              <AboutDropdownContent />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Features Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-1 cursor-pointer outline-0 select-auto text-gray-700 hover:text-gray-900 transition-colors">
                <span className="select-none">Features</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-full p-4 bg-white shadow-lg border border-gray-200 rounded-md mt-2 min-w-[400px]"
              align="start"
              sideOffset={10}
            >
              <FeaturesDropdownContent />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Static Links */}
          <Link href="/raffles/ongoing" className="text-gray-700 select-none hover:text-gray-900 transition-colors">
            Raffles
          </Link>
          <Link href="/contact" className="text-gray-700 select-none hover:text-gray-900 transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Desktop Right Side Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Search className="h-5 w-5 text-gray-600" />
          </Button>
          <Button
            className="bg-primary text-white font-medium px-6 py-2 rounded-md h-10 w-32 flex items-center space-x-2"
            asChild
          >
            <Link href="/fundraising">
              <span className="text-black">Star Now</span>
              <ArrowRight className="h-4 w-4 text-black" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:text-teal-500 hover:bg-teal-50 font-medium px-6 h-10 w-28 py-2 rounded-md flex items-center space-x-2"
            asChild
          >
            <Link href="/auth/signin">
              <span>Login</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Search Button */}
        <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10">
          <Search className="h-5 w-5 text-gray-600" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-4 px-4 sm:px-6">
          <div className="space-y-4">
            {/* About Section */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
              <AboutDropdownContent />
            </div>

            {/* Features Section */}
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
              <FeaturesDropdownContent />
            </div>

            {/* Static Links */}
            <div className="border-b border-gray-200 pb-4">
              <Link
                href="/raffles/ongoing"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Raffles
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <Button
                className="bg-primary text-white font-medium py-3 rounded-md flex items-center justify-center space-x-2"
                asChild
              >
                <Link href="/star-now" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-black">Star Now</span>
                  <ArrowRight className="h-4 w-4 text-black" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:text-teal-500 hover:bg-teal-50 font-medium py-3 rounded-md flex items-center justify-center space-x-2"
                asChild
              >
                <Link href="/auth/signin" onClick={() => setIsMobileMenuOpen(false)}>
                  <span>Login</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}




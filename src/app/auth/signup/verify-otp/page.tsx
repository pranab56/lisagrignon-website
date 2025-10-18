"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ClipboardEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

export default function EmailVerification() {
  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState<string>('');
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  useEffect(() => {
    inputRefs[0].current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    setError('');

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
    if (e.key === 'ArrowRight' && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 4);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length; i++) {
      newCode[i] = pastedData[i];
    }

    setCode(newCode);
    setError('');

    const nextEmptyIndex = newCode.findIndex(val => !val);
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
    inputRefs[focusIndex].current?.focus();
  };

  const handleVerify = () => {
    const fullCode = code.join('');

    if (fullCode.length !== 4) {
      setError('Please enter all 4 digits');
      return;
    }

    if (!/^\d{4}$/.test(fullCode)) {
      setError('Code must contain only numbers');
      return;
    }

    console.log('Verification code:', fullCode);
    alert('Code verified successfully!');
  };

  const handleResend = () => {
    setCode(['', '', '', '']);
    setError('');
    inputRefs[0].current?.focus();
    alert('A new verification code has been sent to your phone!');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Verification Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-lg shadow-sm border border-gray-100 sm:p-10 p-4 rounded-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex justify-center mb-8">
              <Image src={"/icons/logo.png"} alt='website logo' height={0} width={1000} className='w-[60px] h-[60px]' />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Email Verification Code
          </h1>

          <p className="text-center text-gray-600 text-sm mb-8 leading-relaxed">
            To help keep your account safe, House Finder wants to make sure it&apos;s really you trying to sign in.
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-900">
              Get a Verification Code
            </h2>

            <p className="text-center text-gray-600 text-xs leading-relaxed">
              To get a verification code, first confirm the phone number you added to your account{' '}
              <span className="font-medium">l••••••@coredevs.ltd</span>. Standard rates apply.
            </p>
          </div>

          {/* OTP Input Fields */}
          <div className="flex justify-center gap-4 mb-6">
            {code.map((digit, index) => (
              <Input
                key={index}
                ref={inputRefs[index]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className={`w-16 h-16 text-center text-2xl font-semibold ${error ? 'border-red-500' : ''
                  }`}
              />
            ))}
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            className="w-full bg-primary text-gray-900 font-semibold py-6 rounded-lg transition-colors mb-6"
          >
            Verified <ArrowRight className="ml-2" size={20} />
          </Button>

          {/* Resend Link */}
          <p className="text-center text-sm text-gray-600">
            Didn&apos;t receive the code?{' '}
            <button
              onClick={handleResend}
              className="text-[#00715D] hover:underline font-medium"
            >
              Resend
            </button>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/auth/auth.jpg"
          alt="Mountain climbers"
          fill
          className="object-fill"
          placeholder="blur"
          blurDataURL="/images/blur-placeholder.jpg" // small low-res image
        />
      </div>
    </div>
  );
}
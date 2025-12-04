"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';

export default function AccountRecovery() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState<string>('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow single digit
    if (value.length > 1) return;

    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Handle Enter key
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('').concat(['', '', '', '']).slice(0, 4);
    setOtp(newOtp);
    setError('');

    // Focus last filled input or next empty
    const lastIndex = Math.min(pastedData.length, 3);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join('');

    if (otpValue.length < 4) {
      setError('Please enter the complete 4-digit code');
      return;
    }

    console.log('Verifying OTP:', otpValue);
    // alert(`Verification code ${otpValue} submitted!`);

    router.push('/auth/create-new-password');
  };

  const handleResend = () => {
    console.log('Resending verification code...');
    alert('Verification code has been resent to your phone');
    setOtp(['', '', '', '']);
    setError('');
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-lg shadow-sm border border-gray-100 sm:p-10 p-4 rounded-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center">
              <Image src={"/icons/Logo.png"} alt='website logo' height={60} width={60} className='rounded-xl' />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Account Recovery
          </h1>

          <p className="text-center text-gray-600 text-sm mb-8 px-4">
            To help keep your account safe, House Finder wants to make sure it's really you trying to sign in.
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-900">
              Get a Verification Code
            </h2>
            <p className="text-center text-gray-500 text-sm px-4">
              To get a verification code, first confirm the phone number you added to your account r•••••••@coredevs.ltd. Standard rates apply.
            </p>
          </div>

          <div className="space-y-6">
            {/* OTP Input */}
            <div>
              <div className="flex justify-center gap-4 mb-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-16 h-16 text-center text-2xl font-semibold"
                  />
                ))}
              </div>
              {error && (
                <p className="text-red-500 text-xs text-center mt-2">{error}</p>
              )}
            </div>

            {/* Verified Button */}
            <Button
              onClick={handleVerify}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-6 rounded-lg transition-colors"
            >
              Verified <ArrowRight className="ml-2" size={20} />
            </Button>

            {/* Resend Link */}
            <p className="text-center text-sm text-gray-600">
              Didn't receive the code?{' '}
              <span
                onClick={handleResend}
                className="text-[#00715D] hover:underline font-medium cursor-pointer"
              >
                Resend
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <Image
          src="/images/auth/auth.jpg"
          alt="Charity donation jar"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="/images/blur-placeholder.jpg"
        />
      </div>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, Eye, EyeOff, KeyRound, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { PasswordValidation, StepProps, ValidationMessageProps } from './CharityRegistrationForm';

interface Step3FormProps extends StepProps {
  canProceed: boolean;
  passwordValidation: PasswordValidation;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (show: boolean) => void;
}

const ValidationMessage: React.FC<ValidationMessageProps> = ({ isValid, message }) => (
  <div className="flex items-center gap-2 text-sm">
    <X className={`w-4 h-4 ${isValid ? 'text-green-500' : 'text-red-500'}`} />
    <span className={isValid ? 'text-green-600' : 'text-red-600'}>{message}</span>
  </div>
);

export default function Step3Form({
  formData,
  updateField,
  setStep,
  canProceed,
  passwordValidation,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}: Step3FormProps) {


  const router = useRouter();

  return (
    <div className="bg-white rounded-lg p-8">


      <div className="flex justify-center mb-6">
        <div className="bg-teal-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <span className="font-medium">Access</span>
          <KeyRound className="w-4 h-4" />
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-2">Login Details</h1>
      <p className="text-center text-gray-600 mb-8">
        Used to log in to your account, once activated.
      </p>

      <div className="space-y-6 w-full mx-auto">
        <div>
          <Label htmlFor="username">
            User Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="username"
            placeholder='johndoe'
            value={formData.username}
            onChange={(e) => updateField('username', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                placeholder='Password'
                onChange={(e) => updateField('password', e.target.value)}
                className="bg-yellow-50/50 mt-1 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 text-gray-400"
              >
                {showPassword ? <EyeOff className="w-4 h-4 cursor-pointer" /> : <Eye className="w-4 h-4 cursor-pointer" />}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) => updateField('confirmPassword', e.target.value)}
                className="bg-yellow-50/50 mt-1 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4 cursor-pointer" /> : <Eye className="w-4 h-4 cursor-pointer" />}
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-2 bg-red-50 p-4 rounded-md">
          <ValidationMessage
            isValid={passwordValidation.hasUppercase}
            message="MUST contain at least one uppercase letter"
          />
          <ValidationMessage
            isValid={passwordValidation.hasLowercase}
            message="MUST contain at least one lowercase letter"
          />
          <ValidationMessage
            isValid={passwordValidation.hasNumber}
            message="MUST contain at least one number"
          />
          <ValidationMessage
            isValid={passwordValidation.hasSpecialChar}
            message="MUST contain at least 8 characters (a-z, 0-9, @, $, !, %, *, ?, &)"
          />
          <ValidationMessage
            isValid={passwordValidation.passwordsMatch}
            message="Both password and confirm password fields must match"
          />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => updateField('agreedToTerms', checked as boolean)}
            className="mt-1"
          />
          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
            I have read and agree to the{' '}
            <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="text-yellow-600 hover:underline">Terms & Conditions</a>
            {' '}of RaffleRise.
          </Label>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            onClick={() => setStep(2)}
            variant="outline"
            className="px-8"
          >
            Back
          </Button>
          <Button
            disabled={!canProceed}
            onClick={() => router.push('/register-cause/cause_details/2334')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8"
          >
            Create <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
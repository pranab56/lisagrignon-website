"use client";

import { useState } from 'react';
import Banner from './Banner';
import Exclusive from './Exclusive';
import Step1Form from './Step1Form';
import Step2Form from './Step2Form';
import Step3Form from './Step3Form';

export interface FormData {
  causeName: string;
  charityNumber: string;
  category: string;
  newDetails: string;
  addressLine1: string;
  addressLine2: string;
  town: string;
  country: string;
  employee: string;
  cityGuestEmail: string;
  guestPhoneNumber: string;
  coverImage: File | null;
  description: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  username: string;
  password: string;
  confirmPassword: string;
  agreedToTerms: boolean;
}

export interface PasswordValidation {
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  passwordsMatch: boolean;
}

export interface ValidationMessageProps {
  isValid: boolean;
  message: string;
}

export interface StepProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: string | boolean | File | null) => void;
  passwordValidation?: PasswordValidation;
  setStep: (step: number) => void;
}

export default function CharityRegistrationForm() {
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    causeName: '',
    charityNumber: '',
    category: '',
    newDetails: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    country: '',
    employee: '',
    cityGuestEmail: '',
    guestPhoneNumber: '',
    coverImage: null,
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    username: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    passwordsMatch: false
  });

  const updateField = (field: keyof FormData, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (field === 'password' || field === 'confirmPassword') {
      validatePassword(
        field === 'password' ? value as string : formData.password,
        field === 'confirmPassword' ? value as string : formData.confirmPassword
      );
    }
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    setPasswordValidation({
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      passwordsMatch: password === confirmPassword && password !== ''
    });
  };

  const canProceedStep1 = Boolean(
    formData.causeName &&
    formData.category &&
    formData.newDetails &&
    formData.addressLine1 &&
    formData.town &&
    formData.country &&
    formData.employee &&
    formData.cityGuestEmail &&
    formData.guestPhoneNumber
  );

  const canProceedStep2 = Boolean(
    formData.contactName &&
    formData.contactPhone &&
    formData.contactEmail
  );

  const canProceedStep3 = Boolean(
    formData.username &&
    formData.password &&
    formData.confirmPassword &&
    passwordValidation.hasUppercase &&
    passwordValidation.hasLowercase &&
    passwordValidation.hasNumber &&
    passwordValidation.hasSpecialChar &&
    passwordValidation.passwordsMatch &&
    formData.agreedToTerms
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1Form
            formData={formData}
            updateField={updateField}
            setStep={setStep}
            canProceed={canProceedStep1}
          />
        );
      case 2:
        return (
          <Step2Form
            formData={formData}
            updateField={updateField}
            setStep={setStep}
            canProceed={canProceedStep2}
          />
        );
      case 3:
        return (
          <Step3Form
            formData={formData}
            updateField={updateField}
            setStep={setStep}
            canProceed={canProceedStep3}
            passwordValidation={passwordValidation}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <Banner />
      <Exclusive />
      <div className="max-w-5xl mx-auto">
        {renderStep()}
      </div>
    </div>
  );
}
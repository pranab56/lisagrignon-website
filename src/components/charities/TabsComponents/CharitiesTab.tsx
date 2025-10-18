import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  causeName: string;
}

interface Errors {
  name?: string;
  email?: string;
  causeName?: string;
}

interface RegistrationDialogProps {
  feature: string;
  trigger: React.ReactNode;
}

const CharitiesTab = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    causeName: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.causeName.trim()) {
      newErrors.causeName = 'Cause name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpenDialog(null);
        setFormData({ name: '', email: '', causeName: '' });
      }, 2000);
    }
  };

  const RegistrationDialog: React.FC<RegistrationDialogProps> = ({ feature, trigger }) => (
    <Dialog open={openDialog === feature} onOpenChange={(open: boolean) => setOpenDialog(open ? feature : null)}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-md mx-2 sm:mx-4">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Register Your Cause</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Fill in your details to get started with {feature}
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 text-sm sm:text-base">
              Registration successful! We&apos;ll be in touch soon.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${feature}`} className="text-sm sm:text-base">Full Name</Label>
              <Input
                id={`name-${feature}`}
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className={errors.name ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
              />
              {errors.name && <p className="text-xs sm:text-sm text-red-500">{errors.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`email-${feature}`} className="text-sm sm:text-base">Email</Label>
              <Input
                id={`email-${feature}`}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className={errors.email ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
              />
              {errors.email && <p className="text-xs sm:text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`causeName-${feature}`} className="text-sm sm:text-base">Cause Name</Label>
              <Input
                id={`causeName-${feature}`}
                name="causeName"
                value={formData.causeName}
                onChange={handleInputChange}
                placeholder="Enter your cause name"
                className={errors.causeName ? 'border-red-500 text-sm sm:text-base' : 'text-sm sm:text-base'}
              />
              {errors.causeName && <p className="text-xs sm:text-sm text-red-500">{errors.causeName}</p>}
            </div>
            <Button
              onClick={handleSubmit}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm sm:text-base py-2 sm:py-3"
            >
              Submit Registration
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="">
      {/* Peer-to-Peer Fundraising */}
      <section className="py-2 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/images/charities/image1.png"
                  height={700}
                  width={1000}
                  alt="People fundraising together"
                  className="w-full h-[700px] object-contain rounded-2xl "
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Peer-to-Peer Fundraising.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Supporters can create a fundraising page in seconds and start raising funds for your cause.
                </p>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  They can either join your event or set up their own fundraiser in support of your cause. This is one of our most popular features, and our donor-centric platform makes it easy!
                </p>
                <RegistrationDialog
                  feature="Peer-to-Peer Fundraising"
                  trigger={
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                      Register your Cause
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event and Campaign Fundraising */}
      <section className="py-5 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Event and Campaign Fundraising.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  These features allows you to reach more people and create an engaging, branded campaign page, serving as a hub for all team pages connected to your event.
                </p>
                <p className="text-gray-700 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  Enhance your event by adding a fitness or fundraising leaderboard.
                </p>
                <RegistrationDialog
                  feature="Event and Campaign Fundraising"
                  trigger={
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                      Register your Cause
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  }
                />
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 rounded-full opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500&q=80"
                  alt="Event fundraising"
                  width={256}
                  height={256}
                  className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover mx-auto border-4 sm:border-8 border-white shadow-lg sm:shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Raffle Creator */}
      <section className="py-5 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="relative order-2 md:order-1">
                <div className="absolute -left-2 -top-2 sm:-left-4 sm:-top-4 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500 rounded-full opacity-20"></div>
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80"
                  alt="Happy raffle winners"
                  width={500}
                  height={256}
                  className="rounded-xl sm:rounded-2xl w-full h-48 sm:h-56 lg:h-64 object-cover relative z-10 transform -rotate-2 sm:-rotate-3"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Online Raffle Creator.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  RaffleBox&apos;s online raffle creator enables supporters to purchase digital tickets, eliminating the need for physical ones. You can list raffle prizes and set ticket prices securely on the platform.
                </p>
                <p className="text-teal-600 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  This is one of RaffleBox most successful fundraising features!
                </p>
                <RegistrationDialog
                  feature="Online Raffle Creator"
                  trigger={
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stewardship */}
      <section className="py-6 sm:py-8 lg:py-10 px-0 xs:px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="rounded-xl sm:rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center p-0 sm:p-6 lg:p-8 xl:p-12">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Stewardship.
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Build lasting relationships with your donors by expressing your appreciation.
                </p>
                <p className="text-gray-700 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  RaffleBox provides custom communication journeys to nurture connections with your supporters for years to come!
                </p>
                <RegistrationDialog
                  feature="Stewardship"
                  trigger={
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full sm:w-auto">
                      Register now, It&apos;s free!
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  }
                />
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=80"
                  alt="Team collaboration"
                  width={500}
                  height={256}
                  className="rounded-xl sm:rounded-2xl w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharitiesTab;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronRight, Info } from 'lucide-react';
import { StepProps } from './CharityRegistrationForm';

interface Step2FormProps extends StepProps {
  canProceed: boolean;
}

export default function Step2Form({ formData, updateField, setStep, canProceed }: Step2FormProps) {
  return (
    <div className="bg-white rounded-lg p-8">
      <div className="flex justify-center mb-6">
        <div className="bg-teal-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
          <span className="font-medium">Info</span>
          <Info className="w-4 h-4" />
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-2">Contact Details</h1>
      <p className="text-center text-gray-600 mb-8">
        Please provide a contact for your organization who we<br />
        can contact should we have any questions
      </p>

      <div className="space-y-6 w-full mx-auto">
        <div>
          <Label htmlFor="contactName">
            Contact Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="contactName"
            value={formData.contactName}
            placeholder='John Doe'
            onChange={(e) => updateField('contactName', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contactPhone">
            Contact Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="contactPhone"
            type="tel"
            value={formData.contactPhone}
            placeholder='(123) 456-7890'
            onChange={(e) => updateField('contactPhone', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div>
          <Label htmlFor="contactEmail">
            Contact Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="contactEmail"
            type="email"
            value={formData.contactEmail}
            placeholder='d8Kt2@example.com'
            onChange={(e) => updateField('contactEmail', e.target.value)}
            className="bg-yellow-50/50 mt-1"
          />
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            onClick={() => setStep(1)}
            variant="outline"
            className="px-8 text-[#00715D] border border-[#00715D]"

          >
            Back
          </Button>
          <Button
            onClick={() => setStep(3)}
            disabled={!canProceed}
            className="bg-primary px-8"
          >
            Next Step <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
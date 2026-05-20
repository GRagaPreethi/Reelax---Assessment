import React from "react";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BillingFormData } from "@/hooks/useBillingForm";

interface BillingFormProps {
  formData: BillingFormData;
  onChange: (field: keyof BillingFormData, value: string) => void;
  onSave: () => void;
}

const INDIAN_STATES = [
  { value: "andhra-pradesh", label: "Andhra Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "delhi", label: "Delhi" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal-pradesh", label: "Himachal Pradesh" },
  { value: "jammu-kashmir", label: "Jammu & Kashmir" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya-pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "tamil-nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "uttar-pradesh", label: "Uttar Pradesh" },
  { value: "west-bengal", label: "West Bengal" },
];

const CITIES: Record<string, { value: string; label: string }[]> = {
  default: [
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "new-delhi", label: "New Delhi" },
    { value: "hyderabad", label: "Hyderabad" },
    { value: "chennai", label: "Chennai" },
    { value: "kolkata", label: "Kolkata" },
    { value: "pune", label: "Pune" },
    { value: "ahmedabad", label: "Ahmedabad" },
  ],
};

export default function BillingForm({ formData, onChange, onSave }: BillingFormProps) {
  const cities = CITIES.default;

  return (
    <Card className="p-6 md:p-8 bg-card border shadow-sm rounded-xl">
      <div className="mb-8">
        <h2
          className="text-2xl font-bold tracking-tight text-foreground"
          data-testid="heading-review-details"
        >
          Review your details
        </h2>
        <h3
          className="text-base font-medium text-muted-foreground mt-1"
          data-testid="subheading-billing-info"
        >
          Billing Information
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Company Name"
          placeholder="abhigyan"
          value={formData.companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
          id="company-name"
        />
        <InputField
          label="Email"
          type="email"
          placeholder="abhigyan.pandey@getreelax.com"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          id="email"
        />

        <InputField
          label="GST Number"
          optional
          placeholder="GST Number"
          value={formData.gst}
          onChange={(e) => onChange("gst", e.target.value)}
          id="gst-number"
        />
        <InputField
          label="PAN Number"
          optional
          placeholder="PAN Number"
          value={formData.pan}
          onChange={(e) => onChange("pan", e.target.value)}
          id="pan-number"
        />

        <InputField
          label="Premise/House No"
          placeholder="Premise/House no."
          value={formData.houseNo}
          onChange={(e) => onChange("houseNo", e.target.value)}
          id="house-no"
        />
        <InputField
          label="Street"
          placeholder="Street"
          value={formData.street}
          onChange={(e) => onChange("street", e.target.value)}
          id="street"
        />

        <SelectField
          label="State"
          placeholder="Select state"
          options={INDIAN_STATES}
          value={formData.state}
          onChange={(v) => onChange("state", v)}
          id="state"
        />
        <SelectField
          label="City"
          placeholder="Select city"
          options={cities}
          value={formData.city}
          onChange={(v) => onChange("city", v)}
          id="city"
        />

        <InputField
          label="Country"
          placeholder="India"
          value={formData.country}
          onChange={(e) => onChange("country", e.target.value)}
          id="country"
          readOnly
        />
        <InputField
          label="Pin Code"
          placeholder="Pincode"
          value={formData.pinCode}
          onChange={(e) => onChange("pinCode", e.target.value)}
          id="pin-code"
        />
      </div>

      <div className="mt-10 flex items-center justify-end gap-4">
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          data-testid="button-cancel"
        >
          Cancel
        </Button>
        <Button
          className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={onSave}
          data-testid="button-save-details"
        >
          Save Details
        </Button>
      </div>
    </Card>
  );
}

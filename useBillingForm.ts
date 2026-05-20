import { useState } from "react";

export interface BillingFormData {
  companyName: string;
  email: string;
  gst: string;
  pan: string;
  houseNo: string;
  street: string;
  state: string;
  city: string;
  country: string;
  pinCode: string;
}

const initialFormData: BillingFormData = {
  companyName: "",
  email: "",
  gst: "",
  pan: "",
  houseNo: "",
  street: "",
  state: "",
  city: "",
  country: "India",
  pinCode: "",
};

export function useBillingForm() {
  const [formData, setFormData] = useState<BillingFormData>(initialFormData);

  const handleChange = (field: keyof BillingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return { formData, handleChange, handleReset };
}

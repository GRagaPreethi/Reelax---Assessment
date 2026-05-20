import React from "react";
import Navbar from "@/components/layout/Navbar";
import BillingForm from "@/components/billing/BillingForm";
import OrderSummary from "@/components/billing/OrderSummary";
import { useBillingForm } from "@/hooks/useBillingForm";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BillingPage() {
  const { formData, handleChange } = useBillingForm();

  const [selectedCoupon, setSelectedCoupon] = React.useState("WELCOME20");
  const [walletApplied, setWalletApplied] = React.useState(false);

  const handleSaveDetails = () => {
    // Submission handler — wire to API in production
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" data-testid="link-back-to-plans">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to plans
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 lg:max-w-[65%]">
            <BillingForm 
              formData={formData} 
              onChange={handleChange} 
              onSave={handleSaveDetails} 
            />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[35%] lg:min-w-[350px]">
            <OrderSummary 
              selectedCoupon={selectedCoupon}
              onSelectCoupon={setSelectedCoupon}
              walletApplied={walletApplied}
              onToggleWallet={() => setWalletApplied(!walletApplied)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
import React from "react";
import PricingCard from "./PricingCard";
import WalletCard from "./WalletCard";
import CouponCard from "./CouponCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  selectedCoupon: string;
  onSelectCoupon: (coupon: string) => void;
  walletApplied: boolean;
  onToggleWallet: () => void;
}

export default function OrderSummary({
  selectedCoupon,
  onSelectCoupon,
  walletApplied,
  onToggleWallet
}: OrderSummaryProps) {
  return (
    <Card className="flex flex-col bg-card border shadow-sm rounded-xl overflow-hidden">
      <PricingCard />
      
      <div className="p-6 space-y-6">
        <WalletCard 
          balance={500} 
          applied={walletApplied} 
          onToggle={onToggleWallet} 
        />
        
        <CouponCard 
          selectedCoupon={selectedCoupon} 
          onSelectCoupon={onSelectCoupon} 
        />

        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between text-sm text-foreground">
            <span className="font-medium" data-testid="text-subtotal-label">Subtotal</span>
            <span className="font-medium" data-testid="text-subtotal-value">₹14,999.00</span>
          </div>
          <div className="flex items-center justify-between text-sm text-foreground">
            <span className="font-medium text-muted-foreground" data-testid="text-tax-label">Tax (18% GST)</span>
            <span className="font-medium text-muted-foreground" data-testid="text-tax-value">₹1,079.64</span>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-foreground" data-testid="text-total-label">Total due today</span>
            <span className="text-xl font-bold text-primary tracking-tight" data-testid="text-total-value">16,078.64</span>
          </div>
        </div>

        <Button 
          className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg mt-2"
          data-testid="button-proceed-payment"
        >
          Proceed to Payment
        </Button>
      </div>
    </Card>
  );
}
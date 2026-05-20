import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function PricingCard() {
  return (
    <div className="p-6 border-b bg-muted/20">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight text-foreground" data-testid="text-price-amount">₹4,999</span>
            <span className="text-sm font-medium text-muted-foreground" data-testid="text-price-period">/month</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1" data-testid="text-price-includes">Includes 5,000 credits/mo.</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] font-bold tracking-wider text-primary uppercase bg-primary/10 px-2 py-0.5 rounded-sm" data-testid="badge-selected-plan">
            SELECTED PLAN
          </span>
          <span className="text-sm font-bold text-foreground" data-testid="text-plan-name">Startup</span>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full justify-center gap-2 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary transition-colors"
        data-testid="button-upgrade-growth"
      >
        Upgrade to Growth Plan
        <ArrowUpRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
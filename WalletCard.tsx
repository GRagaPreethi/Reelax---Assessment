import React from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WalletCardProps {
  balance: number;
  applied: boolean;
  onToggle: () => void;
}

export default function WalletCard({ balance, applied, onToggle }: WalletCardProps) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          <Wallet className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground leading-none mb-1.5" data-testid="heading-wallet-balance">Wallet Balance</h4>
          <p className="text-xs font-medium text-muted-foreground" data-testid="text-wallet-available">₹{balance.toFixed(2)} available</p>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-primary font-semibold hover:bg-primary/10 hover:text-primary transition-colors"
        onClick={onToggle}
        data-testid="button-apply-wallet"
      >
        {applied ? "Remove" : "Apply"}
      </Button>
    </div>
  );
}
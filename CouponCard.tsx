import React, { useState } from "react";
import { Tag, ChevronUp, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface CouponCardProps {
  selectedCoupon: string;
  onSelectCoupon: (coupon: string) => void;
}

const COUPONS = [
  { id: "WELCOME20", title: "WELCOME20", desc: "20% off on your first month" },
  { id: "ANNUAL50", title: "ANNUAL50", desc: "50% off on annual plans" },
];

export default function CouponCard({ selectedCoupon, onSelectCoupon }: CouponCardProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [couponCode, setCouponCode] = useState("");

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="p-0 hover:bg-transparent flex items-center gap-2 h-auto text-foreground font-semibold" data-testid="button-toggle-coupons">
            <Tag className="h-4 w-4 text-primary" />
            Apply Coupon
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground ml-1" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground ml-1" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Enter coupon code" 
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 bg-background"
            data-testid="input-coupon-code"
          />
          <Button 
            variant="outline" 
            className="text-primary border-primary/20 hover:bg-primary/5 font-semibold"
            data-testid="button-apply-coupon"
          >
            Apply
          </Button>
        </div>

        <RadioGroup value={selectedCoupon} onValueChange={onSelectCoupon} className="space-y-3">
          {COUPONS.map((coupon) => (
            <div 
              key={coupon.id} 
              className={cn(
                "flex items-start space-x-3 border rounded-lg p-3 cursor-pointer transition-colors",
                selectedCoupon === coupon.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              )}
              onClick={() => onSelectCoupon(coupon.id)}
              data-testid={`coupon-card-${coupon.id}`}
            >
              <RadioGroupItem 
                value={coupon.id} 
                id={coupon.id} 
                className="mt-1" 
                data-testid={`radio-coupon-${coupon.id}`}
              />
              <div className="grid gap-1.5 flex-1">
                <Label htmlFor={coupon.id} className="font-bold text-sm cursor-pointer" data-testid={`label-coupon-${coupon.id}`}>
                  {coupon.title}
                </Label>
                <p className="text-xs text-muted-foreground font-medium" data-testid={`desc-coupon-${coupon.id}`}>
                  {coupon.desc}
                </p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </CollapsibleContent>
    </Collapsible>
  );
}
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  optional?: boolean;
}

export default function InputField({ label, optional, className, id, ...props }: InputFieldProps) {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-sm font-semibold text-foreground">
          {label}
        </Label>
        {optional && (
          <span className="text-xs font-medium text-muted-foreground">(Optional)</span>
        )}
      </div>
      <Input 
        id={id}
        className={cn(
          "h-11 bg-background border-input focus-visible:ring-1 focus-visible:ring-primary/30",
          props.readOnly && "bg-muted/30 text-muted-foreground focus-visible:ring-0 cursor-not-allowed",
          className
        )}
        data-testid={`input-${id || label.toLowerCase().replace(/\s+/g, '-')}`}
        {...props}
      />
    </div>
  );
}
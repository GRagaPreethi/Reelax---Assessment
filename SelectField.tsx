import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

export default function SelectField({ label, placeholder, options, value, onChange, id }: SelectFieldProps) {
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger 
          id={id} 
          className="h-11 bg-background border-input focus:ring-1 focus:ring-primary/30"
          data-testid={`select-${id || label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem 
              key={opt.value} 
              value={opt.value}
              data-testid={`select-option-${opt.value}`}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
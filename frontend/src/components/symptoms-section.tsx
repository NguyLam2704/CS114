"use client";

import type { UseFormReturn } from "react-hook-form";
import { FormFieldWrapper } from "./form-field-wrapper";
import { FormSection } from "./form-section";
import { AlertCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KidneyFormValues } from "@/types/form-types";

interface SymptomsSectionProps {
  form: UseFormReturn<KidneyFormValues>;
}

export function SymptomsSection({ form }: SymptomsSectionProps) {
  return (
    <FormSection
      infoTitle="Current Symptoms"
      infoDescription="Clinical symptoms provide important context for kidney disease assessment."
      infoIcon={AlertCircle}
      colorClass="bg-rose-50 dark:bg-slate-800/50 border-rose-100 dark:border-slate-700"
      iconColorClass="text-rose-600 dark:text-rose-400"
      buttonColorClass="bg-rose-600 hover:bg-rose-700 text-white"
      showNextButton={false}
    >
      <FormFieldWrapper
        form={form}
        name="appetite"
        label="Appetite"
        description="Patient's current appetite level"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-rose-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="poor">Poor</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="pedalEdema"
        label="Pedal Edema"
        description="Swelling in feet and ankles"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-rose-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="anemia"
        label="Anemia"
        description="Low red blood cell count"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-rose-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>
    </FormSection>
  );
}

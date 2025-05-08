"use client";

import type { UseFormReturn } from "react-hook-form";
import { FormFieldWrapper } from "./form-field-wrapper";
import { FormSection } from "./form-section";
import { FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KidneyFormValues } from "@/types/form-types";

interface MedicalHistorySectionProps {
  form: UseFormReturn<KidneyFormValues>;
  onNext: () => void;
}

export function MedicalHistorySection({
  form,
  onNext,
}: MedicalHistorySectionProps) {
  return (
    <FormSection
      infoTitle="Medical History"
      infoDescription="Pre-existing conditions significantly impact kidney disease risk assessment."
      infoIcon={FileText}
      colorClass="bg-purple-50 dark:bg-slate-800/50 border-purple-100 dark:border-slate-700"
      iconColorClass="text-purple-600 dark:text-purple-400"
      buttonColorClass="bg-purple-600 hover:bg-purple-700 text-white"
      onNext={onNext}
    >
      <FormFieldWrapper
        form={form}
        name="hypertension"
        label="Hypertension"
        description="History of high blood pressure"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-purple-500">
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
        name="diabetesMellitus"
        label="Diabetes Mellitus"
        description="History of diabetes"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-purple-500">
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
        name="coronaryArteryDisease"
        label="Coronary Artery Disease"
        description="History of heart disease"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-purple-500">
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

"use client";

import type { UseFormReturn } from "react-hook-form";
import { FormFieldWrapper } from "./form-field-wrapper";
import { Input } from "@/components/ui/input";
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

interface UrineAnalysisSectionProps {
  form: UseFormReturn<KidneyFormValues>;
  onNext: () => void;
}

export function UrineAnalysisSection({
  form,
  onNext,
}: UrineAnalysisSectionProps) {
  return (
    <FormSection
      infoTitle="Urine Analysis"
      infoDescription="Urinalysis results provide critical indicators of kidney function."
      infoIcon={FileText}
      colorClass="bg-cyan-50 dark:bg-slate-800/50 border-cyan-100 dark:border-slate-700"
      iconColorClass="text-cyan-600 dark:text-cyan-400"
      buttonColorClass="bg-cyan-600 hover:bg-cyan-700 text-white"
      onNext={onNext}
    >
      <FormFieldWrapper
        form={form}
        name="specificGravity"
        label="Specific Gravity"
        description="Normal range: 1.005-1.030"
      >
        {(field) => (
          <Input
            placeholder="Enter specific gravity"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="albumin"
        label="Albumin"
        description="Scale: 0-5"
      >
        {(field) => (
          <Input
            placeholder="Enter albumin value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="sugar"
        label="Sugar"
        description="Scale: 0-5"
      >
        {(field) => (
          <Input
            placeholder="Enter sugar value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-cyan-500 focus:ring-cyan-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="redBloodCells"
        label="Red Blood Cells"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-cyan-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="abnormal">Abnormal</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>

      <FormFieldWrapper form={form} name="pusCell" label="Pus Cell">
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-cyan-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="abnormal">Abnormal</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="pusCellClumps"
        label="Pus Cell Clumps"
      >
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-cyan-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="present">Present</SelectItem>
              <SelectItem value="notPresent">Not Present</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>

      <FormFieldWrapper form={form} name="bacteria" label="Bacteria">
        {(field) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="border-slate-300 dark:border-slate-700 focus:ring-cyan-500">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="present">Present</SelectItem>
              <SelectItem value="notPresent">Not Present</SelectItem>
            </SelectContent>
          </Select>
        )}
      </FormFieldWrapper>
    </FormSection>
  );
}

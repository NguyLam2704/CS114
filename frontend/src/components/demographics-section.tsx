import type { UseFormReturn } from "react-hook-form";
import { FormFieldWrapper } from "./form-field-wrapper";
import { Input } from "@/components/ui/input";
import { FormSection } from "./form-section";
import { AlertCircle } from "lucide-react";
import { KidneyFormValues } from "@/types/form-types";

interface DemographicsSectionProps {
  form: UseFormReturn<KidneyFormValues>;
  onNext: () => void;
}

export function DemographicsSection({
  form,
  onNext,
}: DemographicsSectionProps) {
  return (
    <FormSection
      infoTitle="Patient Information"
      infoDescription="Basic demographic information helps establish baseline risk factors."
      infoIcon={AlertCircle}
      colorClass="bg-teal-50 dark:bg-slate-800/50 border-teal-100 dark:border-slate-700"
      iconColorClass="text-teal-600 dark:text-teal-400"
      buttonColorClass="bg-teal-600 hover:bg-teal-700 text-white"
      onNext={onNext}
    >
      <FormFieldWrapper
        form={form}
        name="age"
        label="Age"
        description="Patient's age in years"
      >
        {(field) => (
          <Input
            placeholder="Enter age"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="bloodPressure"
        label="Blood Pressure"
        description="Format: systolic/diastolic (mmHg)"
      >
        {(field) => (
          <Input
            placeholder="e.g. 120/80"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-teal-500 focus:ring-teal-500"
          />
        )}
      </FormFieldWrapper>
    </FormSection>
  );
}

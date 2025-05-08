import type { UseFormReturn } from "react-hook-form";
import { FormFieldWrapper } from "./form-field-wrapper";
import { Input } from "@/components/ui/input";
import { FormSection } from "./form-section";
import { Activity } from "lucide-react";
import { KidneyFormValues } from "@/types/form-types";

interface BloodTestsSectionProps {
  form: UseFormReturn<KidneyFormValues>;
  onNext: () => void;
}

export function BloodTestsSection({ form, onNext }: BloodTestsSectionProps) {
  return (
    <FormSection
      infoTitle="Blood Test Results"
      infoDescription="Blood chemistry values are essential for assessing kidney function and overall health."
      infoIcon={Activity}
      colorClass="bg-blue-50 dark:bg-slate-800/50 border-blue-100 dark:border-slate-700"
      iconColorClass="text-blue-600 dark:text-blue-400"
      buttonColorClass="bg-blue-600 hover:bg-blue-700 text-white"
      onNext={onNext}
    >
      <FormFieldWrapper
        form={form}
        name="bloodGlucoseRandom"
        label="Blood Glucose Random"
        description="In mg/dL (Normal: 70-140)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="bloodUrea"
        label="Blood Urea"
        description="In mg/dL (Normal: 7-20)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="serumCreatinine"
        label="Serum Creatinine"
        description="In mg/dL (Normal: 0.7-1.3)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="sodium"
        label="Sodium"
        description="In mEq/L (Normal: 135-145)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="potassium"
        label="Potassium"
        description="In mEq/L (Normal: 3.5-5.0)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="hemoglobin"
        label="Hemoglobin"
        description="In g/dL (Normal: 12-17)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="packedCellVolume"
        label="Packed Cell Volume"
        description="In % (Normal: 36-50)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="whiteBloodCellCount"
        label="White Blood Cell Count"
        description="In cells/cmm (Normal: 4,500-11,000)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>

      <FormFieldWrapper
        form={form}
        name="redBloodCellCount"
        label="Red Blood Cell Count"
        description="In millions/cmm (Normal: 4.5-5.9)"
      >
        {(field) => (
          <Input
            placeholder="Enter value"
            {...field}
            className="border-slate-300 dark:border-slate-700 focus:border-blue-500 focus:ring-blue-500"
          />
        )}
      </FormFieldWrapper>
    </FormSection>
  );
}

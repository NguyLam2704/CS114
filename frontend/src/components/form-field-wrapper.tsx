import type { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type {
  UseFormReturn,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

interface FormFieldWrapperProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: FieldPath<T>;
  label: string;
  description?: string;
  children: (field: ControllerRenderProps<T, FieldPath<T>>) => ReactNode;
  className?: string;
}

export function FormFieldWrapper<T extends FieldValues>({
  form,
  name,
  label,
  description,
  children,
  className,
}: FormFieldWrapperProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`space-y-3 ${className}`}>
          <FormLabel className="text-base">{label}</FormLabel>
          <FormControl>{children(field)}</FormControl>
          {description && (
            <FormDescription className="text-xs">{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

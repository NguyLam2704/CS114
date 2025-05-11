"use client";

import { CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "@/types/form-types";

interface SymptomsSectionProps {
  form: UseFormReturn<FormValues>;
}

export function SymptomsSection({ form }: SymptomsSectionProps) {
  return (
    <CardContent className="space-y-4 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="appetite"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Appetite</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Appetite refers to the desire to eat food. <br />
                <strong>Good</strong>: Normal desire to eat. <br />
                <strong>Poor</strong>: Decreased desire to eat.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pedalEdema"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pedal Edema</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Pedal edema refers to swelling in the feet and ankles. <br />
                <strong>Yes</strong>: Swelling present. <br />
                <strong>No</strong>: No swelling.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="anemia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anemia</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Anemia refers to a deficiency of red blood cells or hemoglobin.{" "}
                <br />
                <strong>Yes</strong>: Anemia present. <br />
                <strong>No</strong>: No anemia.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </CardContent>
  );
}

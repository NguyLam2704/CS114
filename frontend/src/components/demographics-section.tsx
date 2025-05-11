"use client";

import { CardContent } from "@/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "@/types/form-types";

interface DemographicsSectionProps {
  form: UseFormReturn<FormValues>;
  onNext: () => void;
}

export function DemographicsSection({
  form,
  onNext,
}: DemographicsSectionProps) {
  return (
    <div>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="Enter age" {...field} />
                </FormControl>
                <FormDescription>Patient&#39;s age in years</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bloodPressure"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Pressure</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 120/80" {...field} />
                </FormControl>
                <FormDescription>
                  Format: systolic/diastolic (mmHg)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
      <div className="flex justify-end p-6 border-t">
        <Button
          type="button"
          onClick={onNext}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

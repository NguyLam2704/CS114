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

interface BloodTestsSectionProps {
  form: UseFormReturn<FormValues>;
  onNext: () => void;
}

export function BloodTestsSection({ form, onNext }: BloodTestsSectionProps) {
  return (
    <div>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="randomBloodGlucose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Glucose Random</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>
                  Blood glucose level measured at any random time in mg/dL.{" "}
                  <br />
                  Normal Range: <strong>70–500 mg/dL</strong>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serumCreatinine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Serum Creatinine</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>In mg/dL</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sodium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sodium</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>In mEq/L</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="packedCellVolume"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Packed Cell Volume</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>
                  A measure of the proportion of blood volume occupied by red
                  blood cells. <br />
                  Range: <strong>0-100%</strong>.
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

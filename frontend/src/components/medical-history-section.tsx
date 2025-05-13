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
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "@/types/form-types";

interface MedicalHistorySectionProps {
  form: UseFormReturn<FormValues>;
  onNext: () => void;
}

export function MedicalHistorySection({
  form,
  onNext,
}: MedicalHistorySectionProps) {
  return (
    <div>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="hypertension"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hypertension</FormLabel>
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
                  Select "Yes" if you have been diagnosed with hypertension, or
                  "No" if not.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Required */}
          <FormField
            control={form.control}
            name="diabetesMellitus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Diabetes Mellitus</FormLabel>
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
                  Select "Yes" if you have been diagnosed with diabetes, or "No"
                  if not.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Required */}
          <FormField
            control={form.control}
            name="coronaryArteryDisease"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coronary Artery Disease</FormLabel>
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
                  Select "Yes" if you have a history of coronary artery disease,
                  or "No" if not.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Required */}
          <FormField
            control={form.control}
            name="familyHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Family History of Kidney Disease</FormLabel>
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
                  Select "Yes" if any of your family members have had kidney
                  disease, or "No" if none have.
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

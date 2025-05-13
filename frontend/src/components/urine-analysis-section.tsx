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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { FormValues } from "@/types/form-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UrineAnalysisSectionProps {
  form: UseFormReturn<FormValues>;
  onNext: () => void;
}

export function UrineAnalysisSection({
  form,
  onNext,
}: UrineAnalysisSectionProps) {
  return (
    <div>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="specificGravity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Gravity</FormLabel>
                <FormControl>
                  <Input placeholder="Enter specific gravity" {...field} />
                </FormControl>
                <FormDescription>
                  Measures the concentration of urine, reflecting the kidney’s
                  ability to concentrate or dilute urine. <br />
                  Range: <strong>1 – 1.02</strong>
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sediment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Urinary sediment microscopy results</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="abnormal">Abnormal</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Microscopic examination of urine sediment can reveal the
                  presence of red blood cells, white blood cells, casts, and
                  crystals. <br />
                  Range: <strong>Normal / Abnormal</strong>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sugar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sugar</FormLabel>
                <FormControl>
                  <Input placeholder="Enter sugar value" {...field} />
                </FormControl>
                <FormDescription>
                  Measures glucose in urine. <br />
                  Range: <strong>0 – 5 mg/dL</strong>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bacteria"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bacteria</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="not present">Not Present</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  Indicates the presence of bacteria in urine, which may suggest
                  a urinary tract infection. <br />
                  Range: <strong>Present / Not Present</strong>
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

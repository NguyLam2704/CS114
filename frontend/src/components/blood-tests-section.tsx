"use client"

import { CardContent } from "@/components/ui/card"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { UseFormReturn } from "react-hook-form"
import type { FormValues } from "@/types/form-types"

interface BloodTestsSectionProps {
  form: UseFormReturn<FormValues>
  onNext: () => void
}

export function BloodTestsSection({ form, onNext }: BloodTestsSectionProps) {
  return (
    <div>
      <CardContent className="space-y-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="bloodGlucoseRandom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Glucose Random</FormLabel>
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
            name="bloodUrea"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Urea</FormLabel>
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
            name="potassium"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potassium</FormLabel>
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
            name="hemoglobin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hemoglobin</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>In g/dL</FormDescription>
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
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whiteBloodCellCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>White Blood Cell Count</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>In cells/cmm</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="redBloodCellCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Red Blood Cell Count</FormLabel>
                <FormControl>
                  <Input placeholder="Enter value" {...field} />
                </FormControl>
                <FormDescription>In millions/cmm</FormDescription>
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
  )
}

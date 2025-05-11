import { Progress } from "@/components/ui/progress"

interface FormProgressProps {
  value: number
  className?: string
}

export function FormProgress({ value, className }: FormProgressProps) {
  return <Progress value={value} className={`h-2 mt-4 ${className || ""}`} aria-label="Form completion progress" />
}

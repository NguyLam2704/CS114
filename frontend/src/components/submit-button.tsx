import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface SubmitButtonProps {
  isSubmitting: boolean
  text: string
  loadingText: string
  className?: string
}

export function SubmitButton({ isSubmitting, text, loadingText, className }: SubmitButtonProps) {
  return (
    <Button type="submit" disabled={isSubmitting} className={`min-w-[180px] ${className}`}>
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        text
      )}
    </Button>
  )
}

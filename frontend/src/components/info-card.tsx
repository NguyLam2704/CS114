import type { LucideIcon } from "lucide-react"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  description: string
  colorClass: string
}

export function InfoCard({ icon: Icon, title, description, colorClass }: InfoCardProps) {
  return (
    <div className={`${colorClass} p-4 rounded-lg border mb-4`}>
      <div className="flex gap-3 items-start">
        <Icon className="h-5 w-5 mt-0.5" />
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

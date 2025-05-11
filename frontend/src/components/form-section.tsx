"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { InfoCard } from "./info-card";
import type { LucideIcon } from "lucide-react";

interface FormSectionProps {
  children: ReactNode;
  infoTitle: string;
  infoDescription: string;
  infoIcon: LucideIcon;
  colorClass: string;
  iconColorClass: string;
  buttonColorClass: string;
  onNext?: () => void;
  showNextButton?: boolean;
}

export function FormSection({
  children,
  infoTitle,
  infoDescription,
  infoIcon,
  colorClass,
  buttonColorClass,
  onNext,
  showNextButton = true,
}: FormSectionProps) {
  return (
    <CardContent className="space-y-6 pt-6">
      <InfoCard
        icon={infoIcon}
        title={infoTitle}
        description={infoDescription}
        colorClass={colorClass}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
      {showNextButton && onNext && (
        <div className="flex justify-end mt-6 mb-4">
          <Button type="button" onClick={onNext} className={buttonColorClass}>
            Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </CardContent>
  );
}

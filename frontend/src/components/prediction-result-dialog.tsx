"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, AlertCircle, Info } from "lucide-react";

type RiskLevel = "No_Disease" | "Low_Risk" | "Moderate_Risk" | "High_Risk";

interface PredictionResultDialogProps {
  isOpen: boolean;
  onClose: () => void;
  prediction: RiskLevel | null;
  patientName?: string;
}

export function PredictionResultDialog({
  isOpen,
  onClose,
  prediction,
  patientName = "Patient",
}: PredictionResultDialogProps) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  if (!prediction) return null;

  const getRiskConfig = (risk: RiskLevel) => {
    switch (risk) {
      case "No_Disease":
        return {
          icon: <CheckCircle className="h-12 w-12 text-green-500" />,
          title: "No Kidney Disease Detected",
          description:
            "Based on the provided information, no kidney disease was detected.",
          bgColor: "bg-green-50 dark:bg-green-900/20",
          borderColor: "border-green-200 dark:border-green-800",
          textColor: "text-green-800 dark:text-green-200",
          actionColor: "bg-green-600 hover:bg-green-700 text-white",
        };
      case "Low_Risk":
        return {
          icon: <Info className="h-12 w-12 text-blue-500" />,
          title: "Low Risk of Kidney Disease",
          description:
            "The patient shows low risk factors for kidney disease. Regular check-ups are recommended.",
          bgColor: "bg-blue-50 dark:bg-blue-900/20",
          borderColor: "border-blue-200 dark:border-blue-800",
          textColor: "text-blue-800 dark:text-blue-200",
          actionColor: "bg-blue-600 hover:bg-blue-700 text-white",
        };
      case "Moderate_Risk":
        return {
          icon: <AlertCircle className="h-12 w-12 text-amber-500" />,
          title: "Moderate Risk of Kidney Disease",
          description:
            "The patient shows moderate risk factors for kidney disease. Further evaluation and lifestyle changes are recommended.",
          bgColor: "bg-amber-50 dark:bg-amber-900/20",
          borderColor: "border-amber-200 dark:border-amber-800",
          textColor: "text-amber-800 dark:text-amber-200",
          actionColor: "bg-amber-600 hover:bg-amber-700 text-white",
        };
      case "High_Risk":
        return {
          icon: <AlertTriangle className="h-12 w-12 text-red-500" />,
          title: "High Risk of Kidney Disease",
          description:
            "The patient shows high risk factors for kidney disease. Immediate medical consultation and intervention are recommended.",
          bgColor: "bg-red-50 dark:bg-red-900/20",
          borderColor: "border-red-200 dark:border-red-800",
          textColor: "text-red-800 dark:text-red-200",
          actionColor: "bg-red-600 hover:bg-red-700 text-white",
        };
      default:
        return {
          icon: <Info className="h-12 w-12 text-gray-500" />,
          title: "Assessment Complete",
          description: "The kidney disease assessment has been completed.",
          bgColor: "bg-gray-50 dark:bg-gray-900/20",
          borderColor: "border-gray-200 dark:border-gray-800",
          textColor: "text-gray-800 dark:text-gray-200",
          actionColor: "bg-gray-600 hover:bg-gray-700 text-white",
        };
    }
  };

  const config = getRiskConfig(prediction);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={`sm:max-w-md ${config.bgColor} border-2 ${config.borderColor} p-0 overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex flex-col items-center text-center mb-6">
            {config.icon}
            <DialogHeader className="mt-4">
              <DialogTitle className={`text-xl font-bold ${config.textColor}`}>
                {config.title}
              </DialogTitle>
              <DialogDescription
                className={`mt-2 ${config.textColor} opacity-90`}
              >
                {config.description}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div
            className={`rounded-lg p-4 mb-6 bg-white/80 dark:bg-gray-800/80 ${config.borderColor} border`}
          >
            <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
              Assessment Details
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500 dark:text-gray-400">Patient:</div>
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {patientName}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Risk Level:
              </div>
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {prediction.replace("_", " ")}
              </div>
              <div className="text-gray-500 dark:text-gray-400">Date:</div>
              {/* date format: dd/mm/yyyy */}
              <div className="font-medium text-gray-900 dark:text-gray-100">
                {new Date().toLocaleDateString("en-GB")}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-4">
            <Button variant="outline" onClick={handleClose} className="flex-1">
              Close
            </Button>
            <Button
              onClick={handleClose}
              className={`flex-1 ${config.actionColor}`}
            >
              View Full Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

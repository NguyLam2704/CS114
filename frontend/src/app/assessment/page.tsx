"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster } from "sonner";
import { Heart } from "lucide-react";
import { FormProgress } from "@/components/form-progress";
import { DemographicsSection } from "@/components/demographics-section";
import { UrineAnalysisSection } from "@/components/urine-analysis-section";
import { BloodTestsSection } from "@/components/blood-tests-section";
import { MedicalHistorySection } from "@/components/medical-history-section";
import { SymptomsSection } from "@/components/symptoms-section";
import { SubmitButton } from "@/components/submit-button";
import { formSchema, type FormValues } from "@/types/form-types";

export default function AssessmentPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("demographics");
  const [progress, setProgress] = useState(0);

  const tabs = [
    "demographics",
    "urineAnalysis",
    "bloodTests",
    "medicalHistory",
    "symptoms",
  ];

  // Calculate progress based on active tab
  const updateProgress = (tab: string) => {
    const index = tabs.indexOf(tab);
    setProgress(((index + 1) / tabs.length) * 100);
  };

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      bloodPressure: "",
      specificGravity: "",
      sugar: "",
      // redBloodCells: "",
      // pusCell: "",
      // pusCellClumps: "",
      // bacteria: "",
      bloodGlucoseRandom: "",
      // bloodUrea: "",
      // serumCreatinine: "",
      // sodium: "",
      // potassium: "",
      hemoglobin: "",
      packedCellVolume: "",
      // whiteBloodCellCount: "",
      // redBloodCellCount: "",
      // hypertension: "",
      diabetesMellitus: "",
      coronaryArteryDisease: "",
      appetite: "",
      pedalEdema: "",
      anemia: "",
      physicalActivity: "",
      familyHistory: "",
    },
  });

  function onSubmit() {
    setIsSubmitting(true);

    // Simulate API call
    // setTimeout(() => {
    //   console.log("Form Data Submitted:", values);
    //   // Add logic to send data to the backend for prediction

    //   toast.success("Analysis completed successfully!", {
    //     description: "Patient data has been processed and prediction is ready.",
    //     action: {
    //       label: "View Results",
    //       onClick: () => console.log("View results clicked"),
    //     },
    //   });

    //   setIsSubmitting(false);
    // }, 2000);
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    updateProgress(value);
  };

  const goToNextTab = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      const nextTab = tabs[currentIndex + 1];
      setActiveTab(nextTab);
      updateProgress(nextTab);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
            Kidney Disease Risk Assessment
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Complete the patient information across all sections for an accurate
            prediction of kidney disease risk factors.
          </p>
        </div>

        <Card className="w-full max-w-5xl mx-auto shadow-lg border-slate-200 dark:border-slate-800 p-0">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-t-lg">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6" />
              <div>
                <CardTitle className="text-2xl font-bold mt-4">
                  Patient Assessment Form
                </CardTitle>
                <CardDescription className="text-teal-100">
                  Enter clinical parameters for kidney disease prediction
                </CardDescription>
              </div>
            </div>
            <FormProgress value={progress} className="bg-teal-700" />
          </CardHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid grid-cols-5 w-full rounded-none bg-slate-100 dark:bg-slate-800 p-0">
                  <TabsTrigger
                    value="demographics"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-none border-b-2 data-[state=active]:border-teal-500 data-[state=inactive]:border-transparent py-3"
                  >
                    Demographics
                  </TabsTrigger>
                  <TabsTrigger
                    value="urineAnalysis"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-none border-b-2 data-[state=active]:border-teal-500 data-[state=inactive]:border-transparent py-3"
                  >
                    Urine Analysis
                  </TabsTrigger>
                  <TabsTrigger
                    value="bloodTests"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-none border-b-2 data-[state=active]:border-teal-500 data-[state=inactive]:border-transparent py-3"
                  >
                    Blood Tests
                  </TabsTrigger>
                  <TabsTrigger
                    value="medicalHistory"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-none border-b-2 data-[state=active]:border-teal-500 data-[state=inactive]:border-transparent py-3"
                  >
                    Medical History
                  </TabsTrigger>
                  <TabsTrigger
                    value="symptoms"
                    className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-700 rounded-none border-b-2 data-[state=active]:border-teal-500 data-[state=inactive]:border-transparent py-3"
                  >
                    Symptoms
                  </TabsTrigger>
                </TabsList>

                {/* Demographics Tab */}
                <TabsContent value="demographics">
                  <DemographicsSection form={form} onNext={goToNextTab} />
                </TabsContent>

                {/* Urine Analysis Tab */}
                <TabsContent value="urineAnalysis">
                  <UrineAnalysisSection form={form} onNext={goToNextTab} />
                </TabsContent>

                {/* Blood Tests Tab */}
                <TabsContent value="bloodTests">
                  <BloodTestsSection form={form} onNext={goToNextTab} />
                </TabsContent>

                {/* Medical History Tab */}
                <TabsContent value="medicalHistory">
                  <MedicalHistorySection form={form} onNext={goToNextTab} />
                </TabsContent>

                {/* Symptoms Tab */}
                <TabsContent value="symptoms">
                  <SymptomsSection form={form} />
                  <CardFooter className="flex justify-between border-t p-6">
                    <Button
                      variant="outline"
                      type="button"
                      onClick={() => form.reset()}
                      className="border-slate-300 dark:border-slate-700"
                    >
                      Reset Form
                    </Button>
                    <SubmitButton
                      isSubmitting={isSubmitting}
                      text="Generate Prediction"
                      loadingText="Processing..."
                      className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
                    />
                  </CardFooter>
                </TabsContent>
              </Tabs>
            </form>
          </Form>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}

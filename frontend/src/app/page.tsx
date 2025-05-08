"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Uncomment this to automatically redirect to the assessment page
  useEffect(() => {
    router.push("/assessment");
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-md text-center px-4">
        <h1 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
          Kidney Disease Risk Assessment
        </h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">
          Welcome to the kidney disease risk assessment tool. This application
          helps medical professionals evaluate patient risk factors.
        </p>
        <Button
          onClick={() => router.push("/assessment")}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
        >
          Start Assessment
        </Button>
      </div>
    </div>
  );
}

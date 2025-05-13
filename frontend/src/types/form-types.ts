import { z } from "zod";

// Form validation schema
export const formSchema = z.object({
  // Demographics
  age: z.string().min(1, { message: "Age is required" }),

  // Vital Signs
  bloodPressure: z.string().min(1, { message: "Blood pressure is required" }),

  // Urine Analysis
  specificGravity: z
    .string()
    .min(1, { message: "Specific gravity is required" }),
  // albumin: z.string().min(1, { message: "Albumin is required" }),
  sugar: z.string().min(1, { message: "Sugar is required" }),
  // redBloodCells: z.string().min(1, { message: "Red blood cells is required" }),
  // pusCell: z.string().min(1, { message: "Pus cell is required" }),
  // pusCellClumps: z.string().min(1, { message: "Pus cell clumps is required" }),
  // bacteria: z.string().min(1, { message: "Bacteria is required" }),

  // Blood Tests
  bloodGlucoseRandom: z
    .string()
    .min(1, { message: "Blood glucose random is required" }),
  // bloodUrea: z.string().min(1, { message: "Blood urea is required" }),
  // serumCreatinine: z
  //   .string()
  //   .min(1, { message: "Serum creatinine is required" }),
  // sodium: z.string().min(1, { message: "Sodium is required" }),
  // potassium: z.string().min(1, { message: "Potassium is required" }),
  hemoglobin: z.string().min(1, { message: "Hemoglobin is required" }),
  packedCellVolume: z
    .string()
    .min(1, { message: "Packed cell volume is required" }),
  // whiteBloodCellCount: z
  //   .string()
  //   .min(1, { message: "White blood cell count is required" }),
  // redBloodCellCount: z
  //   .string()
  //   .min(1, { message: "Red blood cell count is required" }),

  // // Medical History
  // hypertension: z
  //   .string()
  //   .min(1, { message: "Hypertension status is required" }),
  diabetesMellitus: z
    .string()
    .min(1, { message: "Diabetes mellitus status is required" }),
  coronaryArteryDisease: z
    .string()
    .min(1, { message: "Coronary artery disease status is required" }),

  // Symptoms
  appetite: z.string().min(1, { message: "Appetite status is required" }),
  pedalEdema: z.string().min(1, { message: "Pedal edema status is required" }),
  anemia: z.string().min(1, { message: "Anemia status is required" }),
  physicalActivity: z
    .string()
    .min(1, { message: "Physical activity status is required" }),
  familyHistory: z
    .string()
    .min(1, { message: "Family history status is required" }),
});

export type FormValues = z.infer<typeof formSchema>;

export interface KidneyFormValues {
  age: string;
  bloodPressure: string;
  specificGravity: string;
  // albumin: string;
  sugar: string;
  // redBloodCells: string;
  // pusCell: string;
  // pusCellClumps: string;
  // bacteria: string;
  bloodGlucoseRandom: string;
  // bloodUrea: string;
  // serumCreatinine: string;
  // sodium: string;
  // potassium: string;
  hemoglobin: string;
  packedCellVolume: string; // get yes/no
  // whiteBloodCellCount: string;
  // redBloodCellCount: string;
  // hypertension: string;
  diabetesMellitus: string; // get yes/no
  coronaryArteryDisease: string; // get yes/no
  appetite: string;
  pedalEdema: string;
  anemia: string;
  physicalActivity: string; //get  morderate/low/high
  familyHistory: string; // get yes/no
}

export interface DemographicsFormValues {
  age: string;
  bloodPressure: string;
}

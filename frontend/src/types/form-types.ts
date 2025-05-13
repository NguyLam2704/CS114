import { z } from "zod";

// Form validation schema
export const formSchema = z.object({
  // Demographics
  age: z.string().min(1, { message: "Age is required" }),
  bodyMassIndex: z.string().min(1, { message: "Body mass index is required" }),
  smokingStatus: z.string().min(1, { message: "Smoking status is required" }),
  physicalActivity: z
    .string()
    .min(1, { message: "Physical activity status is required" }),

  // Urine Analysis
  sediment: z.string().min(1, { message: "Sediment is required" }),
  sugar: z.string().min(1, { message: "Sugar is required" }),
  bacteria: z.string().min(1, { message: "Bacteria is required" }),
  specificGravity: z
    .string()
    .min(1, { message: "Specific gravity is required" }),

  // Blood Tests
  randomBloodGlucose: z
    .string()
    .min(1, { message: "Random blood glucose is required" }),
  serumCreatinine: z
    .string()
    .min(1, { message: "Serum creatinine is required" }),
  sodium: z.string().min(1, { message: "Sodium is required" }),
  packedCellVolume: z
    .string()
    .min(1, { message: "Packed cell volume is required" }),

  // Medical History
  diabetesMellitus: z
    .string()
    .min(1, { message: "Diabetes mellitus status is required" }),
  coronaryArteryDisease: z
    .string()
    .min(1, { message: "Coronary artery disease status is required" }),
  familyHistory: z
    .string()
    .min(1, { message: "Family history status is required" }),
  hypertension: z
    .string()
    .min(1, { message: "Hypertension status is required" }),

  // Symptoms
  appetite: z.string().min(1, { message: "Appetite status is required" }),
  pedalEdema: z.string().min(1, { message: "Pedal edema status is required" }),
  anemia: z.string().min(1, { message: "Anemia status is required" }),
});

export type FormValues = z.infer<typeof formSchema>;

export interface KidneyFormValues {
  // demographics
  age: string; // get age
  bodyMassIndex: string; // get bmi
  smokingStatus: string; // get yes/no
  physicalActivity: string; //get  morderate/low/high

  //urine analysis
  sediment: string; // get normal/abnormal
  sugar: string; // get 0-5
  bacteria: string; // get not present/present
  specificGravity: string; // get 1-1.02

  //Blood tests
  randomBloodGlucose: string; // get number
  serumCreatinine: string; // get number 0 - 15
  sodium: string; // get number 120 -150
  packedCellVolume: string; // get  number %

  //medical history
  diabetesMellitus: string; // get yes/no
  coronaryArteryDisease: string; // get yes/no
  familyHistory: string; // get yes/no
  hypertension: string; // yes/no

  // symptoms
  appetite: string; // get gôod/poor
  pedalEdema: string; // get yes/no
  anemia: string; // get yes/no
}

import { ReactNode } from "react";

export type StatType = {
  icon: ReactNode; // Accept any React component (including icons)
  label: string;
  value: string | number; // Can be a string or number
};

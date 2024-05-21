import { NextFont } from "next/dist/compiled/@next/font";

export type Font = {
  label: string;
  font: NextFont;
  value: string;
};

export type Size = {
  label: "12" | "14" | "16" | "18" | "20";
  value: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl";
};

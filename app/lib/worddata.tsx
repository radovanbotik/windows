import { Roboto, Fira_Sans } from "next/font/google";
import localFont from "next/font/local";

const msSansSerif = localFont({ src: "../../public/fonts/MS_Sans_Serif.ttf" });
const roboto = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"], style: ["normal", "italic"] });
const firaSans = Fira_Sans({ weight: ["400", "700", "800", "900"], subsets: ["latin"], style: ["normal", "italic"] });

export const sizeLookup = [
  {
    size: 12,
    value: "text-xs",
  },
  {
    size: 14,
    value: "text-sm",
  },
  {
    size: 16,
    value: "text-base",
  },
  {
    size: 18,
    value: "text-lg",
  },
  {
    size: 20,
    value: "text-xl",
  },
];
export const sizes = [12, 14, 16, 18, 20] as const;

export const fontLookup = [
  {
    font: "MS Sans Serif",
    value: msSansSerif,
  },
  {
    font: "Roboto",
    value: roboto,
  },
  {
    font: "Fira Sans",
    value: firaSans,
  },
];
export const fonts = ["MS Sans Serif", "Roboto", "Fira Sans"] as const;

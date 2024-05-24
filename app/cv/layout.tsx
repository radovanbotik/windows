"use client";

import { ReactNode } from "react";
import { Context } from "./context";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Context>{children}</Context>
    </>
  );
}

"use client";
import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

const variantStyles = {
  windows:
    "grid place-content-center text-black text-xs p-1  bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]",
  system:
    "text-black text-md px-1  bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]",
  systemPushed:
    "text-black text-md px-1  bg-[#cdcdcd] border-2 border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] shadow-[1px_1px_0px_0px_#0000007f]",
};

type Props = {
  variant?: keyof typeof variantStyles;
  tooltip?: string;
} & ((ComponentPropsWithoutRef<"button"> & { href?: undefined }) | ComponentPropsWithoutRef<typeof Link>);

export default function Button({ variant, children, className, tooltip, ...props }: Props) {
  let styles = clsx("", className, variant && variantStyles[variant]);

  return typeof props.href === "undefined" ? (
    <div className="group/button relative">
      <button className={styles} {...props}>
        {children}
        {tooltip && (
          <span className="absolute -top-10 text-nowrap left-0 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover/button:scale-100 z-50">
            {tooltip}
          </span>
        )}
      </button>
    </div>
  ) : (
    // </div>
    <Link className={styles} {...props}>
      {children}
      {tooltip && (
        <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover/button:scale-100">
          ✨ {tooltip}
        </span>
      )}
    </Link>
  );
}

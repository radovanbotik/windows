import clsx from "clsx";
import { ReactNode } from "react";

export default function Divider({
  children,
  className,
  orientation = "horizontal",
}: {
  children?: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  if (orientation === "horizontal")
    return (
      <div className={clsx("relative", className)}>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-b-2 border-b-stone-500" />
        </div>
        {children && (
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-sm text-gray-500">{children}</span>
          </div>
        )}
      </div>
    );
  if (orientation === "vertical")
    return (
      <div className={clsx("relative h-full py-1 flex", className)}>
        <div
          className="flex-auto border-2 border-b-stone-500 border-l-2 border-l-stone-500 border-r-windows-white border-t-white"
          aria-hidden="true"
        ></div>
        {/* <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="h-full border-b-2 border-b-stone-500 border-l-2 border-l-stone-500" />
        </div> */}
      </div>
    );
}

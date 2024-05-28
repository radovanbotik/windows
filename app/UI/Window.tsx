import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
export function Window<T extends ElementType = "div">({
  as,
  className,
  children,
}: Omit<ComponentPropsWithoutRef<T>, "as" | "className"> & {
  as?: T;
  className?: string;
}) {
  let Component = as ?? "div";

  return (
    <Component
      className={clsx(
        className,
        "relative  flex flex-col bg-windows-gray-200 border-windows-gray-400 border-r-windows-gray-400 border-r-2 border-b-2"
      )}
    >
      {children}
    </Component>
  );
}

Window.Header = function WindowHeader({ children, className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx(className, "bg-windows-blue text-windows-white px-2 ")}>
      <div className="flex items-center">
        <span className="mr-auto indent-2">{children}</span>
        <Button variant="windows" className="w-4 h-4">
          ?
        </Button>
        {/* <Button variant="windows" className="w-4 h-4 ml-1" onClick={() => console.log("resize")}>
          O
        </Button> */}
        <Button variant="windows" className="ml-1 w-4 h-4" href={"/"}>
          x
        </Button>
      </div>
    </div>
  );
};
Window.Toolbar = function WindowHeader({ children, className }: ComponentPropsWithoutRef<"div">) {
  return <div className={clsx("", className)}>{children}</div>;
};

const bodyVariants = {
  grid: "grid grid-cols-4 grid-rows-4 grid-flow-col gap-4",
  window: "grid",
};
Window.Body = function WindowBody({
  children,
  className,
  variant,
}: ComponentPropsWithoutRef<"div"> & { variant?: keyof typeof bodyVariants }) {
  return (
    <div className={clsx(className, "flex-auto  overflow-y-auto ", variant && bodyVariants[variant])}>
      {children}
      {/* <div className="grid">{children}</div> */}
      {/* <div className="grid grid-cols-4 grid-rows-4 grid-flow-col gap-4">{children}</div> */}
    </div>
  );
};

Window.Footer = function WindowFooter({ children, className }: ComponentPropsWithoutRef<"div">) {
  return <div className={clsx(className, "px-2 py-1")}>{children}</div>;
};

import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";
import Button from "./Button";

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
        "relative  flex flex-col bg-windows-gray-200 border-windows-gray-400 border-r-black border-r-2 border-b-2 border-l-windows-white border-t-windows-white border-t-2 border-l-2"
      )}
    >
      {children}
    </Component>
  );
}

Window.Header = function WindowHeader({ children, className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={clsx(className, "bg-windows-blue text-windows-white flex items-center")}>
      <span className="ml-1 mr-auto">{children}</span>
      <Button variant="windows" className="w-4 h-4">
        ?
      </Button>
      <Button variant="windows" className="ml-1 w-4 h-4 mr-1" href={"/"}>
        x
      </Button>
    </div>
  );
};
Window.Toolbar = function WindowHeader({ children, className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        "border-2 border-r-0 border-t-windows-white border-l-windows-white border-b-windows-gray-400",
        className
      )}
    >
      {children}
    </div>
  );
};

const bodyVariants = {
  grid: "grid grid-cols-4 grid-rows-4 grid-flow-col gap-4",
};
Window.Body = function WindowBody({
  children,
  className,
  variant,
}: ComponentPropsWithoutRef<"div"> & { variant?: keyof typeof bodyVariants }) {
  return (
    <div
      className={clsx(className, "flex-auto overflow-y-auto  bg-windows-gray-400", variant && bodyVariants[variant])}
    >
      {children}
    </div>
  );
};

Window.Footer = function WindowFooter({ children, className }: ComponentPropsWithoutRef<"div">) {
  return <div className={clsx(className, "px-2 py-1")}>{children}</div>;
};

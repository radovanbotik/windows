import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import clsx from "clsx";

export const Container = forwardRef<
  ElementRef<typeof ContainerOutter>,
  ComponentPropsWithoutRef<typeof ContainerOutter>
>(function Container({ children, ...props }, ref) {
  return (
    <ContainerOutter ref={ref} {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOutter>
  );
});
export const ContainerOutter = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(function ContainerOuter(
  { children, className, ...props },
  ref
) {
  return (
    <div ref={ref} className={(clsx(className), "")} {...props}>
      {children}
    </div>
  );
});
export const ContainerInner = forwardRef<ElementRef<"div">, ComponentPropsWithoutRef<"div">>(function ContainerInner(
  { children, className, ...props },
  ref
) {
  return (
    <div ref={ref} className={(clsx(className), "")} {...props}>
      {children}
    </div>
  );
});

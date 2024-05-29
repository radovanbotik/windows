import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Button from "./Button";
import clsx from "clsx";

type IconSizes = "small" | "normal";

const iconSizeStyles = {
  small: "h-6 w-6",
  normal: "h-10 w-10",
};

export default function Icon({
  name,
  icon,
  href,
  className,
  iconSize = "normal",
  showText = true,
}: ComponentPropsWithoutRef<typeof Link> & {
  name: string;
  icon: StaticImageData;
  href: string;
  className?: string;
  iconSize?: IconSizes;
  showText?: boolean;
}) {
  return (
    <Button href={href} className={clsx(className, "flex flex-col  justify-center items-center text-center")}>
      <div className={clsx(iconSizeStyles[iconSize], "flex place-content-center p-1")}>
        <Image src={icon} alt={name} width={48} height={48} />
      </div>
      {showText && <span className="truncate text-xs max-w-20">{name}</span>}
    </Button>
  );
}

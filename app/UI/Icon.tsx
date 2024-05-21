import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Button from "./Button";
import clsx from "clsx";

export default function Icon({
  name,
  icon,
  href,
  className,
}: ComponentPropsWithoutRef<typeof Link> & { name: string; icon: StaticImageData; href: string; className?: string }) {
  return (
    <Button href={href} className={clsx(className, "flex flex-col  justify-center items-center text-center")}>
      <div className="flex place-content-center h-10 w-10 p-1">
        <Image src={icon} alt={name} width={48} height={48} />
      </div>
      <span className="truncate text-sm max-w-20">{name}</span>
    </Button>
  );
}

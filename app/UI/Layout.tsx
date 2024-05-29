"use client";
import { ReactNode } from "react";
import Taskbar from "./Taskbar";
import computer from "../../public/icons/computer48.png";
import mailbox from "../../public/icons/mailbox48.png";
import recyclebinfull from "../../public/icons/recyclebinfull48.png";
import directory from "../../public/icons/directory48.png";
import wm from "../../public/icons/wm48.png";
import file from "../../public/icons/file32.png";
import Image from "next/image";
import windowsxp from "../../public/background/windowsxp.jpg";
import Icon from "./Icon";
import { useGlobalContext } from "../context";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const icons = [
  {
    name: "My Computer",
    href: "/mycomputer",
    icon: computer,
  },
  {
    name: "Inbox",
    href: "/inbox",
    icon: mailbox,
  },
  {
    name: "Recycle Bin",
    href: "/recyclebin",
    icon: recyclebinfull,
  },
  {
    name: "Pictures",
    href: "/pictures",
    icon: directory,
  },
  {
    name: "CV",
    href: "/cv",
    icon: file,
  },
  {
    name: "Media Player",
    href: "/media-player",
    icon: wm,
  },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { xpTheme } = useGlobalContext();

  const pathname = usePathname();
  let isBackground = pathname === "/";
  console.log(isBackground);

  return (
    <>
      <div className="fixed inset-0 bg-windows-green-light">
        {xpTheme && <Image src={windowsxp} alt="" fill aria-hidden="true" className="object-cover w-full h-full" />}
      </div>
      <div className="relative h-full flex flex-col w-full">
        <div className="relative h-[calc(100vh-36px)]">
          <div
            className={clsx(
              isBackground && "z-10",
              "absolute inset-0  w-full h-full flex flex-col gap-2 flex-wrap content-start px-2"
            )}
          >
            {icons.map((icon, index) => {
              return <Icon key={icon.name} {...icon} className="text-windows-white" />;
            })}
          </div>
          <div className="h-full">
            {children}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 w-1/2">{children}</div> */}
          </div>
        </div>
        <Taskbar />
      </div>
    </>
  );
}

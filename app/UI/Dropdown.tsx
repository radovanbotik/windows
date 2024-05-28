"use client";
import { ElementRef, Fragment, ReactNode, forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import windows32 from "../../public/icons/windows32.png";
import directoryopen48 from "../../public/icons/directoryopen48.png";
import help48 from "../../public/icons/help48.png";
import searchfile48 from "../../public/icons/searchfile48.png";
import shutdown48 from "../../public/icons/shutdown48.png";
import settings48 from "../../public/icons/settings48.png";
import Link from "next/link";

const items = [
  {
    name: "Shut Down...",
    icon: shutdown48,
    href: "/shutdown",
  },
  {
    name: "Help",
    icon: help48,
    href: "/help",
  },
  // {
  //   name: "Find",
  //   icon: searchfile48,
  //   href: "/find",
  // },
  // {
  //   name: "Settings",
  //   icon: settings48,
  //   href: "/settings",
  // },
  // {
  //   name: "Documents",
  //   icon: directoryopen48,
  //   href: "documents",
  // },
];

function MenuItem({ name, icon, href }: { name: string; icon: StaticImageData; href: string }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href="#"
          className={clsx(
            active ? "bg-windows-blue text-windows-white" : "text-gray-700",
            "px-2 py-1 text-sm flex gap-2 items-center select-none"
          )}
        >
          <Image src={icon} alt="shutdown system" width={48} height={48} />
          <span>{name}</span>
        </Link>
      )}
    </Menu.Item>
  );
}

const StartButton = forwardRef<ElementRef<"button">, { children: ReactNode }>(function StartButton(
  { children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className="flex items-center gap-1 text-black text-md px-1  bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] "
      {...props}
    >
      {children}
    </button>
  );
});

export default function Dropdown({ className }: { className: string }) {
  return (
    <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
      <div>
        <Menu.Button as={Fragment}>
          <StartButton>
            <div className="p-1 w-6 h-6">
              <Image src={windows32} alt="logo" aria-hidden width={32} height={32} />
            </div>
            <span className="font-black leading-none text-sm">Start</span>
          </StartButton>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" border-2 border-windows-white -translate-y-full -translate-x-1 transform -top-2 absolute shadow-lg  z-10 mt-2 w-56 origin-top-right   bg-windows-gray  ring-2 ring-black ring-opacity-5 focus:outline-none flex">
          <div className="w-8 bg-stone-500 justify-self-stretch self-stretch  rotate-180">
            <p
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              className="text-windows-white font-black px-1 py-2 text-md tracking-widest"
            >
              Windows 95
            </p>
          </div>

          <div className="flex-auto">
            {[...items].reverse().map(menuItem => (
              <MenuItem key={menuItem.name} {...menuItem} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

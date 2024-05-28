"use client";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ElementRef, Fragment, ReactNode, forwardRef } from "react";
import windows32 from "../../public/icons/windows32.png";

type DropdownProps = {
  menuButton: { title: string };
  children: ReactNode[] | ReactNode;
  className?: string;
  variant?: "downward" | "start" | "upwards";
};

const variantStyles = {
  upwards: "",
  start:
    "border-2 border-windows-white -translate-y-full -translate-x-1 transform -top-2 absolute shadow-lg  z-10 mt-2 w-56 origin-top-right   bg-windows-gray  ring-2 ring-black ring-opacity-5 focus:outline-none flex",
};

const StartButton = forwardRef<ElementRef<"button">, { children: ReactNode }>(function StartButton(
  { children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className="flex items-center gap-1 text-black text-md px-1  bg-[#C0C0C0] border-2 border-t-[#FFFFFF] border-r-[#808080] border-b-[#808080] border-l-[#FFFFFF] shadow-[1px_1px_0px_1px_rgba(0,0,0,1),inset_1px_1px_0px_1px_#cdcccc]"
      {...props}
    >
      {children}
    </button>
  );
});

export default function MenuDropdown({ menuButton, children, className, variant = "downward" }: DropdownProps) {
  if (Array.isArray(children))
    return (
      <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
        {variant === "start" ? (
          <Menu.Button as={Fragment}>
            <StartButton>
              <div className="p-1 w-6 h-6">
                <Image src={windows32} alt="logo" aria-hidden width={32} height={32} />
              </div>
              <span className="font-black leading-none text-sm">Start</span>
            </StartButton>
          </Menu.Button>
        ) : (
          <Menu.Button className="leading-none text-black capitalize text-sm">{menuButton.title}</Menu.Button>
        )}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {variant === "start" ? (
            <Menu.Items className="border-2 border-windows-white -translate-y-full -translate-x-1 transform -top-2 absolute shadow-lg  z-10 mt-2 w-56 origin-top-right   bg-windows-gray  ring-2 ring-black ring-opacity-5 focus:outline-none flex">
              <div className="w-8 bg-stone-500 justify-self-stretch self-stretch  rotate-180">
                <p
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  className="text-windows-white font-black px-1 py-2 text-md tracking-widest"
                >
                  Windows 95
                </p>
              </div>

              <div className="flex-auto self-end">
                {children.map((child: ReactNode, i: number) => (
                  <Menu.Item
                    key={i}
                    as="div"
                    className={
                      "ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-windows-gray ui-not-active:text-black"
                    }
                  >
                    {child}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          ) : (
            <Menu.Items
              as="ul"
              className={
                "flex flex-col space-y-1 border-2 border-windows-white bg-windows-gray  absolute shadow-lg  z-10  w-56 origin-top-right  ring-2 ring-black ring-opacity-5 focus:outline-none"
              }
            >
              {children.map((child: ReactNode, i: number) => (
                <Menu.Item
                  key={i}
                  as="li"
                  className={
                    "ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-windows-gray ui-not-active:text-black"
                  }
                >
                  {child}
                </Menu.Item>
              ))}
            </Menu.Items>
          )}
        </Transition>
      </Menu>
    );
  else
    return (
      <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
        <Menu.Button className="leading-none text-black text-sm">{menuButton.title}</Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="ul"
            className="flex flex-col space-y-1 border-2 border-windows-white bg-windows-gray  absolute shadow-lg  z-10  w-56 origin-top-right  ring-2 ring-black ring-opacity-5 focus:outline-none"
          >
            <Menu.Item
              as="li"
              className={
                "ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-windows-gray ui-not-active:text-black"
              }
            >
              {children}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    );
}

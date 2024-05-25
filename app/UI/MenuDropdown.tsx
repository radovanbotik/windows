import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode, Fragment, ReactChildren, ReactChild } from "react";

type DropdownProps = {
  menuButton: { title: string };
  children: ReactNode[] | ReactNode;
  className?: string;
};

export default function MenuDropdown({ menuButton, children, className }: DropdownProps) {
  if (Array.isArray(children))
    return (
      <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
        <Menu.Button className="leading-none text-black font-black text-sm">{menuButton.title}</Menu.Button>
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
        </Transition>
      </Menu>
    );
  else
    return (
      <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
        <Menu.Button className="leading-none text-black font-black text-sm">{menuButton.title}</Menu.Button>
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

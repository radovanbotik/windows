"use client";
import { ElementRef, Fragment, ReactNode, forwardRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import Button from "./Button";

function MenuItem({
  name,
  value,
  handleSelect,
  ...props
}: {
  name: string;
  value?: string;
  handleSelect?: (value: string) => void;
}) {
  return (
    <Menu.Item
      as="div"
      onClick={() => {
        if (value && handleSelect) return handleSelect(value);
        return;
      }}
    >
      {({ active }) => (
        <Button
          className={clsx(
            active ? "bg-windows-blue text-windows-white" : "text-gray-700",
            "px-2 py-1 text-sm flex gap-2 items-center",
            "w-full"
          )}
          {...props}
        >
          <span>{name}</span>
        </Button>
      )}
    </Menu.Item>
  );
}

const ExpandButton = forwardRef<ElementRef<"button">, { children: ReactNode }>(function Button(
  { children, ...props },
  ref
) {
  return (
    <button ref={ref} className="leading-none text-black" {...props}>
      {children}
    </button>
  );
});

export default function ToolbarMenu({
  className,
  actions,
  children,
  handleSelect,
}: {
  className?: string;
  actions: { name: string; href?: string }[];
  children: ReactNode;
  handleSelect?: (value: string) => void;
}) {
  return (
    <Menu as="div" className={clsx(className, "relative inline-block text-left")}>
      <div>
        <Menu.Button as={Fragment}>
          <ExpandButton>
            <span className="font-black leading-none text-sm">{children}</span>
          </ExpandButton>
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
        <Menu.Items className=" border-2 border-windows-white  -translate-x-1 transform  absolute shadow-lg  z-10 mt-2 w-56 origin-top-right   bg-windows-gray  ring-2 ring-black ring-opacity-5 focus:outline-none flex">
          <div className="flex-auto">
            {actions.map(menuItem => (
              <MenuItem key={menuItem.name} {...menuItem} handleSelect={handleSelect} />
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
